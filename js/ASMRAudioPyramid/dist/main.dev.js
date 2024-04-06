"use strict";

// Set the canvas element to  variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var center = {
  x: canvas.width / 2,
  y: canvas.height / 2
};
var gradient = ctx.createRadialGradient(center.x, center.y, canvas.width / 8, center.x, center.y, canvas.height);
gradient.addColorStop(0, "rgba(0, 0, 0,0.4)");
gradient.addColorStop(1, 'rgba(0, 100, 0,0.2)');
var start = false,
    playNow = true,
    showChords = false;
var delay = 0,
    speed = 1,
    floatNoteNote = 0,
    chordToPlay = 'Am';
var chordDm = [],
    chordDmS = [],
    chordF = [],
    chordFS = [],
    chordAm = [],
    chordAmS = [],
    chordC = [],
    chordCS = [],
    chordG = [],
    chordGS = [],
    chordGsus4 = [],
    chordGsus4S = [],
    chordEm = [],
    chordEmS = [];
var color = [],
    notes = [],
    orbitPaths = [],
    stars = [],
    particles = [],
    shoots = [],
    floatNotes = [],
    edgeSplats = [],
    noteCircles = [],
    backgroundPyramids = [];
createChords();
setVolume();

for (var i = 0; i < 24; i++) {
  var hue1 = Math.random() * 260 + 100;
  var hue2 = Math.random() * 260 + 100;
  var hue3 = Math.random() * 260 + 100;
  color.push('rgb(' + hue1 + ',' + hue2 + ',' + hue3 + ')');
}

var pyramid = new Pyramid(0, 0, 10, 10);

for (var _i = 0; _i < 24; _i++) {
  notes.push(new Note(center.x, center.y + pyramid.edges.vertices[0].y - 800 * 0.2, speed, chordAm[_i], color[_i], _i));
  speed -= 0.01;
}

var chord = new Chord();

function animate() {
  //CLS.
  ctx.fillStyle = "rgb(0, 0, 0, 0.4)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = gradient;
  ctx.globalAlpha = 0.2;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "bold 50px Arial";
  ctx.fillStyle = 'white';
  ctx.globalAlpha = 0.02;
  ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", center.x - center.x / 6, center.y);
  ctx.globalAlpha = 0.2;

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
      playNow = false;
    }

    if (showChords) {
      ctx.font = "bold 20px Arial";
      ctx.fillStyle = "white";
      var thisChord;

      if (chordToPlay == 'C1' || chordToPlay == 'C2') {
        thisChord = chordToPlay.substring(0, chordToPlay.length - 1);
      } else {
        thisChord = chordToPlay;
      }

      ctx.fillText(thisChord, 0, canvas.height * 0.02);
    }

    var createbgpyramid = Math.random();

    if (createbgpyramid > 0.995) {
      backgroundPyramids.push(new BackgroundPyramid(Math.random() * canvas.width - center.x, Math.random() * canvas.height - center.y));
    }

    pyramid.update();
    chord.update();
    forNotes();
    forShoots();
    forFloatNotes();
    forEdgeSplats();
    forParticles();
    forNoteCircles();
    forBackgroundPyramids();
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