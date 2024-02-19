"use strict";

// Set the canvas element to  variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
x = canvas.width / 2;
y = canvas.height / 2;
var gradient = ctx.createRadialGradient(x, y, canvas.width / 4, x, y, canvas.height / 1.7);
gradient.addColorStop(0, "rgba(0, 0, 0,0.4)");
gradient.addColorStop(1, 'rgba(0, 0, 128,0.2)');
var notes = [],
    bubbles = [],
    particles = [],
    chordDm7 = [],
    chordF = [],
    chordAm = [],
    chordC = [],
    chordG = [],
    chordGsus4 = [],
    chordE7 = [];
createChords();
var start = false,
    playNow = true;
var lines = new Line(),
    chord;
var point = {
  x: 0,
  y: 0
},
    adj,
    opp,
    hyp;
var distance = 3.5,
    gravity = 0.01;
var chordToPlay = 'Am1';
var color = [];

for (var i = 0; i < 25; i++) {
  var hue1 = Math.random() * 260 + 100;
  var hue2 = Math.random() * 260 + 100;
  var hue3 = Math.random() * 260 + 100;
  color.push('rgb(' + hue1 + ',' + hue2 + ',' + hue3 + ')');
  point = {
    x: x - x / 2 / distance,
    y: 0 + (y + y / 2) / distance
  };
  adj = Math.pow(x - point.x, 2);
  opp = Math.pow(point.y, 2);
  hyp = Math.sqrt(opp + adj);

  if (i < 24) {
    notes.push(new Note(point.x, point.y, hyp, chordAm[i], i));
  } else {
    chord = new Chord(point.x, point.y, hyp);
  }

  distance -= 0.1;
}

var delay = 0;
setVolume();

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
    chord.update();
    forNotes();
    forBubbles();
    forParticles();
  } //call next frame.


  animationId = requestAnimationFrame(animate);
}

animate();