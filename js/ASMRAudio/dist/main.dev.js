"use strict";

// Set the canvas element to  variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var notes = [],
    upperNotes = [],
    stars = [],
    chords = [];
var chordChange = 'C';
var changeChordNotes = false,
    changeChordUpperNotes = false;

function animate() {
  //CLS.
  ctx.fillStyle = "rgb(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  forNote();
  forUpperNote();
  forStar();
  forChord(); //call next frame.

  animationId = requestAnimationFrame(animate);
}

init();
animate();