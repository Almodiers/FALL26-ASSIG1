// =====================================================================
// MISSION 2 ATTACK: The Runaway Button
// =====================================================================
// Write your attack here, then COPY the whole file and PASTE it into the
// DevTools Console of http://localhost:3000.
//
// Everything is wrapped in (() => { ... })(); on purpose. It is an
// immediately invoked function: it lets you paste the script again after
// a page reload without "Identifier has already been declared" errors.
//
// Author:
// =====================================================================

(() => {
  const zone = document.getElementById("danger-zone");
  const original = document.getElementById("purge-btn");

  const button = original.cloneNode(true);
  original.replaceWith(button);
  button.tabIndex = -1;
  let dodges = 0;

  const counter = document.createElement("p");
  counter.textContent = "Dodges: 0";
  zone.after(counter);

  function moveButton() {
    dodges = dodges + 1;
    counter.textContent = "Dodges: " + dodges;
    button.textContent = "Too slow (" + dodges + ")";

    const oldLeft = button.offsetLeft;
    const oldTop = button.offsetTop;

    const maxLeft = zone.clientWidth - button.offsetWidth;
    const maxTop = zone.clientHeight - button.offsetHeight;

    let left = oldLeft;
    let top = oldTop;

    while (
      Math.abs(left - oldLeft) < button.offsetWidth &&
      Math.abs(top - oldTop) < button.offsetHeight
    ) {
      left = Math.floor(Math.random() * maxLeft);
      top = Math.floor(Math.random() * maxTop);
    }

    button.style.left = left + "px";
    button.style.top = top + "px";
  }

  button.addEventListener("mouseenter", moveButton);

  console.log("[attack] runaway button installed");
})();
