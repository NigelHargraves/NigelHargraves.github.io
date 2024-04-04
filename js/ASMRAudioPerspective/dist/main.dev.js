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
    speed = 0.1,
    chordToPlay = 'C';
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
    noteCircles = [];
createChords();
setVolume();
var cube = new Cube(0, 0, 800, 400);

for (var i = 0; i < 21; i++) {
  var red = Math.floor(Math.random() * 155 + 100);
  var green = Math.floor(Math.random() * 155 + 100);
  var blue = Math.floor(Math.random() * 155 + 100);
  color.push('rgb(' + red + ',' + green + ',' + blue + ')');
}

var xpos = -690,
    ypos = -400;

for (var _i = 0; _i < 21; _i++) {
  notes.push(new Note(xpos, ypos, 500, 300, _i, speed, chordC[_i], color[_i]));
  speed += 0.01;
  xpos += 230;

  if (_i == 6) {
    ypos += 400;
    xpos = -690;
  }

  if (_i == 13) {
    ypos += 400;
    xpos = -690;
  }
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
      for (var _i2 = 0; _i2 < 21; _i2++) {
        chordC[_i2].play();
      }

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

    cube.update();
    forNotes();
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