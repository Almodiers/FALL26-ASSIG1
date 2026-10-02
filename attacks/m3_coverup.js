// =====================================================================
// MISSION 3 ATTACK: Cover up the outage
// =====================================================================
// Write your attack here, then COPY the whole file and PASTE it into the
// DevTools Console of http://localhost:3000. Then click Refresh.
//
// Start from the worked example in examples/m3_case_fetch_spy.js.
//
// Author:
// =====================================================================

(() => {
  const realFetch = window.fetch;
  let lastForgedBody = JSON.stringify({ services: [] });

  // TODO R2/R4: make a normal successful JSON response, even when the real server fails.
  function makeResponse(body) {
    return new Response(body, {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  // TODO R3: build entries that pass the portal's validator.
  function makeCleanService(service) {
    if (typeof service.name !== "string") {
      return null;
    }

    const name = service.name.trim();
    if (name.length === 0) {
      return null;
    }
    if (name.length > 64) {
      return null;
    }

    if (typeof service.status !== "string") {
      return null;
    }

    if (typeof service.online !== "boolean") {
      return null;
    }

    const latency = service.latencyMs;
    if (typeof latency !== "number") {
      return null;
    }

    if (Number.isFinite(latency) === false || latency < 0) {
      return null;
    }

    return {
      name: name,
      status: "up",
      online: true,
      latencyMs: latency
    };
  }

  // TODO R1: replace window.fetch; requests that are not /api/status must pass through untouched.
  window.fetch = async function(url, options) {
    console.log("[attack] fake fetch called", url);

    if (String(url).includes("/api/status") === false) {
      return realFetch(url, options);
    }

    try {
      console.log("[attack] before realFetch");
      const res = await realFetch(url, options);
      console.log("[attack] after realFetch");

      if (res.ok === false) {
        return makeResponse(lastForgedBody);
      }

      const realReport = await res.json();
      const forgedServices = [];

      for (const service of realReport.services) {
        if (service === null) {
          continue;
        }
        if (typeof service !== "object") {
          continue;
        }
        if (Array.isArray(service)) {
          continue;
        }

        const cleanService = makeCleanService(service);
        if (cleanService !== null) {
          forgedServices.push(cleanService);
        }
      }

      const forgedReport = {
        services: forgedServices
      };
      lastForgedBody = JSON.stringify(forgedReport);

      return makeResponse(lastForgedBody);
    } catch (err) {
      return makeResponse(lastForgedBody);
    }
  };

  // TODO R5: expose window.__restoreFetch() that puts the real fetch back.
  window.__restoreFetch = function() {
    window.fetch = realFetch;
    console.log("[attack] fetch restored");
  };

  console.log("[attack] cover-up installed");
})();
