"use strict";

// Set the canvas element to  variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var center = {
  x: canvas.width / 2,
  y: canvas.height / 2
};
var circle1 = {
  x: center.x / 3,
  y: center.y / 2
};
var circle2 = {
  x: center.x / 3 * 2,
  y: canvas.height - center.y / 2
};
var circle3 = {
  x: center.x + center.x / 3,
  y: center.y / 2
};
var circle4 = {
  x: center.x + center.x / 3 * 2,
  y: canvas.height - center.y / 2
};
var start = false,
    playNow = true,
    showChords = false;
var delay = 0,
    speed = 6,
    chordToPlay = 'Am';
var chordDm7 = [],
    chordF = [],
    chordAm = [],
    chordC = [],
    chordG = [],
    chordEm = [];
var color = [],
    notes = [],
    circles = [],
    particles = [];
createChords();
circles.push(new Circle(circle1.x, circle1.y));
circles.push(new Circle(circle2.x, circle2.y));
circles.push(new Circle(circle3.x, circle3.y));
circles.push(new Circle(circle4.x, circle4.y));

for (var i = 0; i < 36; i++) {
  var hue1 = Math.random() * 260 + 100;
  var hue2 = Math.random() * 260 + 100;
  var hue3 = Math.random() * 260 + 100;
  color.push('rgb(' + hue1 + ',' + hue2 + ',' + hue3 + ')');
}

var chord = new Chord(center.x, canvas.height * 3);
var noteNumber = 0;

for (var _i = 0; _i < 9; _i++) {
  var circleNumber = 1;
  notes.push(new Note(circle1.x, circle1.y, speed, circleNumber, chordAm[noteNumber], color[noteNumber]));
  circleNumber++;
  speed += 0.02;
  noteNumber++;
  notes.push(new Note(circle2.x, circle2.y, speed, circleNumber, chordAm[noteNumber], color[noteNumber]));
  circleNumber++;
  speed += 0.02;
  noteNumber++;
  notes.push(new Note(circle3.x, circle3.y, speed, circleNumber, chordAm[noteNumber], color[noteNumber]));
  circleNumber++;
  speed += 0.02;
  noteNumber++;
  notes.push(new Note(circle4.x, circle4.y, speed, circleNumber, chordAm[noteNumber], color[noteNumber]));
  speed += 0.02;
  noteNumber++;
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
  ctx.globalAlpha = 0.2;

  if (!start) {
    delay += 1;

    if (delay >= 100) {
      start = true;
    }
  }

  if (start) {
    if (playNow) {
      ABass.play();
      playNow = false;
    }

    if (showChords) {
      ctx.font = "bold 20px Arial";
      ctx.fillStyle = "white";
      ctx.fillText(chordToPlay, 0, canvas.height * 0.02);
    }

    chord.update();
    forCircles();
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