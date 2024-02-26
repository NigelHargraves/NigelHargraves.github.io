"use strict";

// Set the canvas element to  variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var center = {
  x: canvas.width / 2,
  y: canvas.height / 2
};
var start = false,
    playNow = true,
    showChords = false;
var delay = 0,
    velocity = 4,
    selectColor = 0,
    chordToPlay = 'Am';
var oval = new Oval(center.x, center.y);
var chord = new Chord(0, -center.y);
var chordAm = [],
    chordC = [],
    chordBm = [],
    chordD = [],
    chordCm = [],
    chordE = [],
    chordDm = [],
    chordF = [],
    chordEm = [],
    chordG = [],
    chordFm = [],
    chordA = [],
    chordGm = [],
    chordB = [];
var notes = [],
    particles = [],
    smallOvals = [],
    color = [];
createChords();

for (var i = 0; i < 24; i++) {
  var hue1 = Math.random() * 260 + 100;
  var hue2 = Math.random() * 260 + 100;
  var hue3 = Math.random() * 260 + 100;
  color.push('rgb(' + hue1 + ',' + hue2 + ',' + hue3 + ')');

  if (i < 11) {
    notes.push(new Note(center.x, center.y, velocity, 0 - Math.PI / 2, color[selectColor], chordAm[selectColor]));
  } else {
    notes.push(new Note(center.x, center.y, velocity, 0 - -Math.PI / 2, color[selectColor], chordAm[selectColor]));
  }

  selectColor += 1;
  velocity += 0.01;
}

setVolume();

function animate() {
  //CLS.
  ctx.fillStyle = "rgb(0, 0, 0, 0.6)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "bold 50px Arial";
  ctx.fillStyle = 'white';
  ctx.globalAlpha = 0.04;
  ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", center.x - center.x / 6, center.y);
  ctx.globalAlpha = 0.4;

  if (showChords) {
    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(chordToPlay, 0, canvas.height * 0.02);
  }

  if (!start) {
    delay += 1;

    if (delay >= 100) {
      start = true;
    }
  }

  if (start) {
    if (playNow) {
      ABass.play();
      AmVox.play();
      playNow = false;
    }

    var createOvals = Math.random();

    if (createOvals > 0.99) {
      smallOvals.push(new Ovals(Math.random() * canvas.width, Math.random() * canvas.height, color[Math.floor(Math.random() * 24)]));
    }

    oval.update();
    chord.update();
    forNote();
    forParticles();
    forOvals();
  } //call next frame.


  animationId = requestAnimationFrame(animate);
}

animate();