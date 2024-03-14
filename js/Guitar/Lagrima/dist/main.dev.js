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
    checkNote = false;
var delay = 200;
var bridge = canvas.width / 30;
var guitar = new Guitar();
var noteToPlay = [E2_1, FS2_1, Ab2_1, Eb1_2];
var strings = [],
    frets = [],
    fretNumber = [],
    notes = [];
var fret = 0;
var fretSpace = canvas.width / 2 / 30;
var noteSpace = canvas.width / 2 / 60; //Calculate fret space and Note space.

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

var nextNote = 0,
    addNote = 50,
    barSplit = 1;
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
    delay -= 1;

    if (delay <= 0) {
      start = true;
    }
  }

  if (start) {
    guitar.update();
    forStrings();

    if (delay <= 0) {
      notes = [];

      if (barSplit == 1) {
        notes.push(E2_1, Ab3_1);
      }

      if (barSplit == 2) {
        notes.push(B2_0_5);
      }

      if (barSplit == 3) {
        notes.push(FS2_1, A3_1);
      }

      if (barSplit == 4) {
        notes.push(B2_0_5);
      }

      if (barSplit == 5) {
        notes.push(Ab2_1, B3_1);
      }

      if (barSplit == 6) {
        notes.push(B2_0_5);
      }

      if (barSplit == 7) {
        notes.push(Eb1_2, FS3_2);
      }

      for (var _i2 = 0; _i2 < notes.length; _i2++) {
        notes[_i2].play();
      }

      nextNote++;

      if (nextNote == 2) {
        nextNote = 0;
      }

      barSplit++;

      if (barSplit == 8) {
        barSplit = 1;
        delay = 100;
      } else {
        delay = 25;
      }
    }

    delay -= 1;
  } //call next frame.


  animationId = requestAnimationFrame(animate);
}

animate();