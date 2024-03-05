"use strict";

// Set the canvas element to  variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var notes = [],
    chordAm1 = [],
    chordAm2 = [],
    chordF1 = [],
    chordF2 = [],
    chordCaug = [],
    chordC1 = [],
    chordC2 = [],
    chordG = [],
    chordE7 = [],
    chordDm7 = [],
    chordGsus4 = [],
    dusts = [],
    spirals = [],
    stars = [];
var radius = 400,
    angle = Math.PI / 12,
    x = canvas.width / 2,
    y = canvas.height / 2,
    pointx = 0,
    pointy = 0,
    delay = 0,
    acceleration = 1.5;
var strokeStyle = 'white';
var start = false,
    playSoundOnce = true,
    showChords = false;
createChords();
var color = [];

for (var i = 0; i < 24; i++) {
  var hue1 = Math.random() * 340 + 20;
  var hue2 = Math.random() * 340 + 20;
  var hue3 = Math.random() * 340 + 20;
  color.push('rgb(' + hue1 + ',' + hue2 + ',' + hue3 + ')');
  pointx = radius * Math.cos(angle);
  pointy = radius * Math.sin(angle);
  notes.push(new Note(x + pointx, y + pointy, acceleration, chordAm1[i], i + 1, i));
  acceleration -= 0.001;
  angle += Math.PI / 12;
}

var chord = new Chord(x, y, 'Am1');
spirals.push(new Spiral(x, y, true, 0));
spirals.push(new Spiral(x, y, false, 0));
spirals.push(new Spiral(x, y, true, Math.PI));
spirals.push(new Spiral(x, y, false, Math.PI));
spirals.push(new Spiral(x, y, true, Math.PI / 2));
spirals.push(new Spiral(x, y, false, Math.PI / 2));
spirals.push(new Spiral(x, y, true, -Math.PI / 2));
spirals.push(new Spiral(x, y, false, -Math.PI / 2));

for (var _i = 0; _i < 200; _i++) {
  stars.push(new Star(-canvas.width + Math.random() * (canvas.width * 2), -canvas.height + Math.random() * (canvas.height * 2)));
}

setVolume();

function animate() {
  //CLS.
  ctx.fillStyle = "rgb(0, 0, 0, 0.4)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "bold 50px Arial";
  ctx.fillStyle = "white";
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
    if (playSoundOnce) {
      ABass.play();
      AO1Piano1.play();
      CO1Piano1.play();
      EO1Piano1.play();
      AO2Piano1.play();
      CO2Piano1.play();
      EO2Piano1.play();
      AO3Piano1.play();
      CO3Piano1.play();
      EO3Piano1.play();
      AO4Piano1.play();
      CO4Piano1.play();
      EO4Piano1.play();
      AO1Piano2.play();
      CO1Piano2.play();
      EO1Piano2.play();
      AO2Piano2.play();
      CO2Piano2.play();
      EO2Piano2.play();
      AO3Piano2.play();
      CO3Piano2.play();
      EO3Piano2.play();
      AO4Piano2.play();
      CO4Piano2.play();
      EO4Piano2.play();
      AmChord.play();
      playSoundOnce = false;
    }

    forDusts();
    forNotes();
    forSpirals();
    forStars();
    chord.update();

    if (showChords) {
      ctx.font = "bold 20px Arial";
      ctx.fillStyle = "white";
      var thisChord;

      if (chord.chord == 'E7' || chord.chord == 'Dm7' || chord.chord == 'Gsus4' || chord.chord == 'Caug') {
        thisChord = chord.chord;
      } else {
        thisChord = chord.chord.substring(0, chord.chord.length - 1);
      }

      ctx.fillText(thisChord, 0, canvas.height * 0.02);
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