"use strict";

// Set the canvas element to  variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var delay = 0,
    rangeRed = 30,
    rangeYellow = 20,
    rangeBlue = 10,
    rangeFuchsia = 10,
    repelRedRange = 10,
    repelYellowRange = 8,
    repelBlueRange = 7,
    repelFuchsiaRange = 6,
    cellImpactSize = 3,
    simulationSpeed = 1,
    celSize = 2;
var start = false,
    playSoundOnce = true,
    showInfo = true;
var redCells = [],
    yellowCells = [],
    blueCells = [],
    fuchsiaCells = [];

for (var i = 0; i < 500; i++) {
  redCells.push(new RedCell(Math.random() * canvas.width, Math.random() * canvas.height, i));
  yellowCells.push(new YellowCell(Math.random() * canvas.width, Math.random() * canvas.height, i));
  blueCells.push(new BlueCell(Math.random() * canvas.width, Math.random() * canvas.height, i));
  fuchsiaCells.push(new FuchsiaCell(Math.random() * canvas.width, Math.random() * canvas.height, i));
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
    forFuchsiaCells();

    if (showInfo) {
      ctx.font = "bold 30px Arial";
      ctx.fillStyle = "white";
      ctx.fillText('Red            ' + repelRedRange + ' , ' + rangeRed, 0, canvas.height * 0.04);
      ctx.fillText('Yellow       ' + repelYellowRange + ' , ' + rangeYellow, 0, canvas.height * 0.08);
      ctx.fillText('Blue           ' + repelBlueRange + ' , ' + rangeBlue, 0, canvas.height * 0.12);
      ctx.fillText('Fuchsia     ' + repelFuchsiaRange + ' , ' + rangeFuchsia, 0, canvas.height * 0.16);
    }
  } //call next frame.


  animationId = requestAnimationFrame(animate);
}

animate();