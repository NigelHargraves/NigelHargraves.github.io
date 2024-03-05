"use strict";

// Set the canvas element to  variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var notes = [],
    upperNotes = [],
    stars = [],
    chords = [],
    bubbles = [],
    whiteStars = [];
var note1;
var note2;
var note3;
var upperNote1;
var upperNote2;
var upperNote3;
var chordChange = 'C',
    delay = 0;
var cross;
var changeChordNotes = false,
    changeChordUpperNotes = false,
    start = false,
    playSoundOnce = true,
    showChords = false;

function animate() {
  //CLS.
  ctx.fillStyle = "rgb(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "bold 50px Arial";
  ctx.fillStyle = "white";
  ctx.globalAlpha = 0.01;
  ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", canvas.width / 2.4, canvas.height / 2);
  ctx.globalAlpha = 1;

  if (!start) {
    delay += 1;

    if (delay >= 100) {
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
    forWhiteStars();
    cross.update();

    if (showChords) {
      ctx.font = "bold 20px Arial";
      ctx.fillStyle = "white";
      ctx.fillText(chordChange, 0, canvas.height * 0.02);
    }
  } //call next frame.


  animationId = requestAnimationFrame(animate);
}

init();
animate();
window.addEventListener("keydown", function (e) {
  if (e.keyCode == 32) {
    if (showChords) {
      showChords = false;
    } else {
      showChords = true;
    }
  }
});