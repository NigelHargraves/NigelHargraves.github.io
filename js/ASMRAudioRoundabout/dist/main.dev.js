"use strict";

// Set the canvas element to  variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var center = {
  x: canvas.width / 2,
  y: canvas.height / 2
};
var start1 = false,
    start2 = false,
    playNow = true,
    showChords = false;
var delay1 = 0,
    delay2 = 0,
    speed = 2,
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
    notesRight = [],
    notesLeft = [],
    particles = [];

for (var i = 0; i < 24; i++) {
  var hue1 = Math.random() * 260 + 100;
  var hue2 = Math.random() * 260 + 100;
  var hue3 = Math.random() * 260 + 100;
  colors.push('rgb(' + hue1 + ',' + hue2 + ',' + hue3 + ')');
}

var road = new Road();

for (var _i = 0; _i < 12; _i++) {
  notesRight.push(new NoteRight(center.x, center.y, speed));
  speed += 0.01;
}

for (var _i2 = 0; _i2 < 12; _i2++) {
  notesLeft.push(new NoteLeft(center.x, center.y, speed));
  speed += 0.01;
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

  if (!start1) {
    delay1 += 1;

    if (delay1 >= 200) {
      start1 = true;
    }
  }

  if (start1) {
    if (playNow) {
      playNow = false;
    }

    if (showChords) {
      ctx.font = "bold 20px Arial";
      ctx.fillStyle = "white";
      ctx.fillText(chordToPlay, 0, canvas.height * 0.02);
    }

    road.update();

    if (!start2) {
      delay2 += 1;

      if (delay2 >= 400) {
        start2 = true;
      }
    }

    if (start2) {
      forNotesRight();
      forNotesLeft();
    }
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