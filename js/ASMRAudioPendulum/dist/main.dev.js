"use strict";

// Set the canvas element to  variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
x = canvas.width / 2;
y = canvas.height / 2;
var gradient = ctx.createRadialGradient(x, y, canvas.width / 8, x, y, canvas.height);
gradient.addColorStop(0, "rgba(0, 0, 0,0.4)");
gradient.addColorStop(1, 'rgba(25, 25, 112,0.2)');
var notes = [];
var start = false,
    playNow = true;
var lines = new Line();
var point = {
  x: 0,
  y: 0
},
    adj,
    opp,
    hyp;
var distance = 3.5,
    gravity = 0.01;

for (var i = 0; i < 24; i++) {
  point = {
    x: x - x / 2 / distance,
    y: 0 + (y + y / 2) / distance
  };
  adj = Math.pow(x - point.x, 2);
  opp = Math.pow(point.y, 2);
  hyp = Math.sqrt(opp + adj);
  notes.push(new Note(point.x, point.y, hyp));
  distance -= 0.1;
}

var delay = 0;
ctx.strokeStyle = 'white';

function animate() {
  //CLS.
  ctx.fillStyle = gradient;
  ctx.globalAlpha = 0.4;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "bold 50px Arial";
  ctx.fillStyle = 'white';
  ctx.globalAlpha = 0.01;
  ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", canvas.width / 2.4, canvas.height / 2);
  ctx.globalAlpha = 0.4;

  if (!start) {
    delay += 1;

    if (delay >= 100) {
      start = true;
    }
  }

  if (start) {
    lines.update();
    forNotes();
  } //call next frame.


  animationId = requestAnimationFrame(animate);
}

animate();