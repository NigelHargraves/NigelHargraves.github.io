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
var start = false,
    playNow = true;
var rectangle = new Rectangle(),
    chord = new Chord(),
    bass = new Bass(),
    snareDrum = new Snare(),
    highHat = new Hat();
var notes = [],
    chordC = [],
    chordG = [],
    chordAm = [],
    chordF = [],
    particles = [],
    bounceLines = [],
    stars = [];
createChords();
var chordToPlay = 'C1';
var speed = 0.001,
    noteNumber = 0,
    delay = 0;

for (var i = rectangle.x; i < canvas.width / 2 + rectangle.x; i += rectangle.space) {
  notes.push(new Note(i + rectangle.space / 2, rectangle.y, 1, chordC[noteNumber], speed));
  speed -= 0.0001;
  noteNumber++;
}

setVolume();

function animate() {
  //CLS.
  ctx.fillStyle = gradient;
  ctx.globalAlpha = 0.2;
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

    var createStar = Math.random();

    if (createStar > 0.99) {
      ctx.save();
      ctx.translate(x, y);
      stars.push(new Star(Math.random() * canvas.width - canvas.width / 2, Math.random() * canvas.height - canvas.height / 2));
      ctx.restore();
    }

    rectangle.update();
    chord.update();
    bass.update();
    snareDrum.update();
    highHat.update();
    forStars();
    forNotes();
    forParticles();
    forBounceLines();
  } //call next frame.


  animationId = requestAnimationFrame(animate);
}

animate();