"use strict";

function init() {
  var x = canvas.width / 2;
  var y = canvas.height / 2;
  chords.push(new Chord(x, y, 'C'));
  cross = new Cross(x, y);
}