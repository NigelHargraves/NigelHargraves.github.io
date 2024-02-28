"use strict";

// Set the canvas element to  variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var delay = 0,
    rangeRed = 20,
    rangeYellow = 20,
    rangeBlue = 24,
    repelRedRange = 10,
    repelYellowRange = 10,
    repelBlueRange = 12,
    cellImpactSize = 8,
    simulationSpeed = 1,
    celSize = 1;
var start = false,
    playSoundOnce = true;
var redCells = [],
    yellowCells = [],
    blueCells = [];

for (var i = 0; i < 500; i++) {
  redCells.push(new RedCell(Math.random() * canvas.width, Math.random() * canvas.height, i));
  yellowCells.push(new YellowCell(Math.random() * canvas.width, Math.random() * canvas.height, i));
  blueCells.push(new BlueCell(Math.random() * canvas.width, Math.random() * canvas.height, i));
}

function animate() {
  //CLS.
  ctx.fillStyle = "rgb(0, 0, 0, 0.4)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  /*ctx.font = "bold 50px Arial";
  ctx.fillStyle = "white";
  ctx.globalAlpha = 0.005;
  ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", (canvas.width / 2.4), canvas.height / 2);
  ctx.globalAlpha = 0.2;*/

  if (!start) {
    delay += 1;

    if (delay >= 100) {
      start = true;
    }
  }

  if (start) {
    if (playSoundOnce) {
      playSoundOnce = false;
    }

    forRedCells();
    forYellowCells();
    forBlueCells();
  } //call next frame.


  animationId = requestAnimationFrame(animate);
}

animate();