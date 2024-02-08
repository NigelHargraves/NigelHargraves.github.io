"use strict";

function init() {
  chords.push(new Chord(canvas.width / 2, canvas.height / 2, 0.01, true, 30, 0)); //drum & chord change.

  chords.push(new Chord(canvas.width / 2 + canvas.width * 0.050, canvas.height / 2, 0.0099, false, 15, 1));
  chords.push(new Chord(canvas.width / 2 - canvas.width * 0.050, canvas.height / 2, 0.0098, false, 15, 2));
  chords.push(new Chord(canvas.width / 2 + canvas.width * 0.100, canvas.height / 2, 0.0097, false, 15, 3));
  chords.push(new Chord(canvas.width / 2 - canvas.width * 0.100, canvas.height / 2, 0.0096, false, 15, 4));
  chords.push(new Chord(canvas.width / 2 + canvas.width * 0.150, canvas.height / 2, 0.0095, false, 15, 5));
  chords.push(new Chord(canvas.width / 2 - canvas.width * 0.150, canvas.height / 2, 0.0094, false, 15, 6));
  chords.push(new Chord(canvas.width / 2 + canvas.width * 0.200, canvas.height / 2, 0.0093, false, 15, 7));
  chords.push(new Chord(canvas.width / 2 - canvas.width * 0.200, canvas.height / 2, 0.0092, false, 15, 8));
  chords.push(new Chord(canvas.width / 2 + canvas.width * 0.250, canvas.height / 2, 0.0091, false, 15, 9));
  chords.push(new Chord(canvas.width / 2 - canvas.width * 0.250, canvas.height / 2, 0.0090, false, 15, 10));
  chords.push(new Chord(canvas.width / 2 + canvas.width * 0.300, canvas.height / 2, 0.0089, false, 15, 11));
  chords.push(new Chord(canvas.width / 2 - canvas.width * 0.300, canvas.height / 2, 0.0088, false, 15, 12));
}