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
var notePlaying = 0;
var strings = [],
    frets = [],
    fretNumber = [],
    notes = []; //(fretBoard.x / 2) / 20

var fret = 0;
var fretSpace = canvas.width / 2 / 30;
var noteSpace = canvas.width / 2 / 60;

for (var i = fretSpace; i < fretSpace * 36; i += fretSpace) {
  frets.push(i);
  fret += fretBoard.x / 2 / 80;
  i += fret;
}

fret = 0;
var number = 20;

for (var _i = noteSpace; _i < noteSpace * 40; _i += noteSpace) {
  if (fret == 0) {
    noteSpace = canvas.width / 2 / 30;
  }

  fretNumber.push({
    pos: _i,
    fn: number
  });
  number -= 1;
  fret += fretBoard.x / 2 / 86;
  _i += fret;
}

notes.push(CO1, DO1, EO1, FO1, GO1, AO1, BO1, CO2, DO2, EO2, FO2, GO2, AO2, BO2, CO3);
var nextNote = 0;
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
      delay = 200;
    }
  }

  if (start) {
    guitar.update();
    forStrings();

    if (delay <= 0) {
      notePlaying = notes[nextNote];
      notePlaying.play();
      nextNote += 1;
      if (nextNote == 15) nextNote = 0;
      delay = 100;
    }

    delay -= 1;
  } //call next frame.


  animationId = requestAnimationFrame(animate);
}

animate();