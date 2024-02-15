"use strict";

// Set the canvas element to  variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var start = false,
    playNow = true;
var rectangle = new Rectangle(),
    chord = new Chord(),
    bass = new Bass();
var notes = [],
    chordC = [],
    chordG = [],
    chordAm = [],
    chordF = [];
createChords();
var chordToPlay = 'G';
var speed = 1,
    noteNumber = 0,
    delay = 0;

for (var i = rectangle.x; i < canvas.width / 2 + rectangle.x; i += rectangle.space) {
  notes.push(new Note(i + rectangle.space / 2, rectangle.y, speed, chordC[noteNumber]));
  speed -= 0.01;
  noteNumber++;
}

setVolume();

function animate() {
  //CLS.
  ctx.fillStyle = "rgb(0, 0, 0, 0.4)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "bold 50px Arial";
  ctx.fillStyle = "white";
  ctx.globalAlpha = 0.005;
  ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", canvas.width / 2.4, canvas.height / 2);
  ctx.globalAlpha = 0.4;

  if (!start) {
    delay += 1;

    if (delay >= 100) {
      start = true;
    }
  }

  if (start) {
    if (playNow) {
      CChord.play();
      CBass.play();
      CO1Note.play();
      EO1Note.play();
      GO1Note.play();
      CO2Note.play();
      EO2Note.play();
      GO2Note.play();
      CO3Note.play();
      EO3Note.play();
      GO3Note.play();
      CO4Note.play();
      EO4Note.play();
      GO4Note.play();
      drumBass.play();
      playNow = false;
    }

    rectangle.update();
    chord.update();
    bass.update();
    forNotes();
  } //call next frame.


  animationId = requestAnimationFrame(animate);
}

animate();