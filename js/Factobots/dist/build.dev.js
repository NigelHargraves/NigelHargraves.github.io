"use strict";

function build() {
  if (openBuildMenu) {
    buildMenu.style.display = "block";
    buildMenu.style.left = c.width / 4 + "px";
    buildMenu.style.top = c.height / 8 + "px";
    buildMenu.style.width = c.width / 2 + "px";
    buildMenu.style.height = c.height / 1.5 + "px";

    if (!displayBuildOnce) {
      buildMenu.innerText = 'BUILD MENU \n\n';
      buildMenu.appendChild(forge);
      buildMenu.appendChild(textnode);
      displayBuildOnce = true;
    }
  } else {
    buildMenu.style.display = "none";
    displayBuildOnce = false;
  }
}