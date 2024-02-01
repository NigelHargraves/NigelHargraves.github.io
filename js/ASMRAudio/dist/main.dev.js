"use strict";

// Set the canvas element to  variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var notes = [],
    upperNotes = [],
    stars = [],
    chords = [],
    bubbles = [];
var chordChange = 'C',
    delay = 0;
var cross;
var changeChordNotes = false,
    changeChordUpperNotes = false,
    start = false,
    playSoundOnce = true;

function animate() {
  //CLS.
  ctx.fillStyle = "rgb(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (!start) {
    delay += 1;

    if (delay >= 500) {
      start = true;
    }
  }

  if (start) {
    if (playSoundOnce) {
      CBass.play();
      CVoice.play();
      playSoundOnce = false;
    }

    forNote();
    forUpperNote();
    forStar();
    forChord();
    forBubble();
    cross.update();
  } //call next frame.


  animationId = requestAnimationFrame(animate);
}

init();
animate();