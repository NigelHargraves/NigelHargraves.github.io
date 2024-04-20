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
    speed = 14,
    sphubeSize = 2,
    chordToPlay = 'Am';
var chordC = [],
    chordG = [],
    chordBm = [],
    chordAm = [],
    chordDm = [],
    chordEm = [],
    chordF = [],
    chordC7 = [];
var colors = [],
    notes = [],
    figEights = [],
    particles = [];
createChords();
setVolume();

for (var i = 0; i < 24; i++) {
  var hue1 = Math.random() * 260 + 100;
  var hue2 = Math.random() * 260 + 100;
  var hue3 = Math.random() * 260 + 100;
  colors.push('rgb(' + hue1 + ',' + hue2 + ',' + hue3 + ')');
}

var infinityLoop = new InfinityLoop();
var chord = new Chord(center.x, center.y);

for (var _i = 0; _i < 24; _i++) {
  notes.push(new Note(center.x, center.y, speed, chordAm[_i], colors[_i]));
  speed += 0.1;
}

function animate() {
  //CLS.
  ctx.fillStyle = "rgb(0, 0, 0, 0.4)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "bold 50px Arial";
  ctx.fillStyle = 'white';
  ctx.globalAlpha = 0.02;
  ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", center.x - center.x / 6, center.y);
  ctx.globalAlpha = 0.4;

  if (!start) {
    delay += 1;

    if (delay >= 100) {
      start = true;
    }
  }

  if (start) {
    if (playNow) {
      for (var _i2 = 0; _i2 < 24; _i2++) {
        chordAm[_i2].play();
      }

      ABass.play();
      AmChord.play();
      playNow = false;
    }

    if (showChords) {
      ctx.font = "bold 20px Arial";
      ctx.fillStyle = "white";
      ctx.fillText(chordToPlay, 0, canvas.height * 0.02);
    }

    var createFigEight = Math.random();

    if (createFigEight > 0.99) {
      figEights.push(new FigEight(center.x, center.y));
    }

    infinityLoop.update();
    chord.update();
    forNotes();
    forFigEights();
    forParticles();
  } //call next frame.


  animationId = requestAnimationFrame(animate);
}

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
window.addEventListener("mousedown", function (e) {
  info = e.which;

  if (e.which == 1) {
    if (showChords) {
      showChords = false;
    } else {
      showChords = true;
    }
  }
});