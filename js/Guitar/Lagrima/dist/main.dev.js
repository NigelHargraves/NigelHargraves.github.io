"use strict";

// Set the canvas element to  variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var fretBoard = {
  x: canvas.width / 4,
  y: canvas.height / 2 - canvas.height / 8
};
var center = {
  x: canvas.width / 2,
  y: canvas.height / 2
};
var start = false,
    Gplay = true;
var delay = 0;
var bridge = canvas.width / 30;
var guitar = new Guitar();
var strings = [],
    frets = [],
    fretNumber = []; //(fretBoard.x / 2) / 20

var fret = 0;
var fretSpace = canvas.width / 2 / 30;

for (var i = fretSpace; i < fretSpace * 36; i += fretSpace) {
  frets.push(i);
  fret += fretBoard.x / 2 / 80;
  i += fret;
}

var nut = fretBoard.x + canvas.width / 2 + fretBoard.x / 2;
fretNumber.push(0, nut - canvas.width / 46, nut - canvas.width / 15.5, nut - canvas.width / 9.25);
var stringGap = (canvas.height / 4 - canvas.height / 40) / 5;
strings.push(new String(0, 'EBottom'));
strings.push(new String(stringGap, 'A'));
strings.push(new String(stringGap * 2, 'D'));
strings.push(new String(stringGap * 3, 'G'));
strings.push(new String(stringGap * 4, 'B'));
strings.push(new String(stringGap * 5, 'ETop'));

function animate() {
  //CLS.
  ctx.fillStyle = "rgb(0, 0, 0, 0.6)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (!start) {
    delay += 1;

    if (delay >= 50) {
      start = true;
    }
  }

  if (start) {
    guitar.update();
    forStrings();
  } //call next frame.


  animationId = requestAnimationFrame(animate);
}

animate();