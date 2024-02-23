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
    playNow = true;
var delay = 0,
    velocity = 4;
var oval = new Oval(center.x, center.y);
var chord = new Chord(0, -center.y);
var notes = [],
    particles = [],
    smallOvals = [];

for (var i = 0; i < 24; i++) {
  if (i < 11) {
    notes.push(new Note(center.x, center.y, velocity, 0 - Math.PI / 2));
  } else {
    notes.push(new Note(center.x, center.y, velocity, 0 - -Math.PI / 2));
  }

  velocity += 0.01;
}

function animate() {
  //CLS.
  ctx.fillStyle = "rgb(0, 0, 0, 0.6)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "bold 50px Arial";
  ctx.fillStyle = 'white';
  ctx.globalAlpha = 0.04;
  ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", center.x - center.x / 6, center.y);
  ctx.globalAlpha = 0.6;

  if (!start) {
    delay += 1;

    if (delay >= 100) {
      start = true;
    }
  }

  if (start) {
    if (playNow) {
      playNow = false;
    }

    var createOvals = Math.random();

    if (createOvals > 0.999) {
      smallOvals.push(new Ovals(Math.random() * canvas.width, Math.random() * canvas.height));
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