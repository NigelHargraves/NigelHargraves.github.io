"use strict";

// Set the canvas element to  variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var delay = 0,
    rangeRed = 30,
    rangeYellow = 30,
    rangeBlue = 30,
    rangeFuchsia = 30,
    repelRedRange = 10,
    repelYellowRange = 10,
    repelBlueRange = 10,
    repelFuchsiaRange = 10,
    cellImpactSize = 3,
    simulationSpeed = 1,
    celSize = 2,
    cellBirth = 0,
    cellNumber = 0;
var start = false,
    playSoundOnce = true,
    showInfo = true;
var redCells = [],
    yellowCells = [],
    blueCells = [],
    fuchsiaCells = [];

function animate() {
  //CLS.
  ctx.fillStyle = "rgb(0, 0, 0, 0.4)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "bold 50px Arial";
  ctx.fillStyle = "white";
  ctx.globalAlpha = 0.005;
  ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", canvas.width / 2.4, canvas.height / 2);
  ctx.globalAlpha = 0.2;

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

    if (cellBirth == 100) {
      redCells.push(new RedCell(Math.random() * canvas.width, Math.random() * canvas.height, cellNumber));
    }

    if (cellBirth == 200) {
      yellowCells.push(new YellowCell(Math.random() * canvas.width, Math.random() * canvas.height, cellNumber));
    }

    if (cellBirth == 300) {
      blueCells.push(new BlueCell(Math.random() * canvas.width, Math.random() * canvas.height, cellNumber));
    }

    if (cellBirth == 400) {
      fuchsiaCells.push(new FuchsiaCell(Math.random() * canvas.width, Math.random() * canvas.height, cellNumber));
    }

    if (redCells.length + blueCells.length + yellowCells.length + fuchsiaCells.length <= 2000) {
      if (cellBirth < 400) {
        cellBirth++;
      } else {
        cellBirth = 0;
        cellNumber++;
      }
    }

    forRedCells();
    forYellowCells();
    forBlueCells();
    forFuchsiaCells();

    if (showInfo) {
      ctx.font = "bold 30px Arial";
      ctx.fillStyle = "white";
      ctx.fillText('Red            ' + repelRedRange + ' , ' + rangeRed + ', ' + redCells.length, 0, canvas.height * 0.04);
      ctx.fillText('Yellow       ' + repelYellowRange + ' , ' + rangeYellow + ', ' + yellowCells.length, 0, canvas.height * 0.08);
      ctx.fillText('Blue           ' + repelBlueRange + ' , ' + rangeBlue + ', ' + blueCells.length, 0, canvas.height * 0.12);
      ctx.fillText('Fuchsia     ' + repelFuchsiaRange + ' , ' + rangeFuchsia + ', ' + fuchsiaCells.length, 0, canvas.height * 0.16);
    }
  } //call next frame.


  animationId = requestAnimationFrame(animate);
}

animate();