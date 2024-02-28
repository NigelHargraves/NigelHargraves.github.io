"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Chord =
/*#__PURE__*/
function () {
  function Chord(x, y) {
    _classCallCheck(this, Chord);

    this.x = x;
    this.y = y;
    this.r = 30;
    this.velocity = 0;
    this.gravity = 0.00001;
    this.acceleration = 0;
    this.lineWidth = 1;
    this.opacity = 0.001;
  }

  _createClass(Chord, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.strokeStyle = 'cyan';
      ctx.lineWidth = this.lineWidth;
      ctx.globalAlpha = this.opacity;
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.4;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.opacity < 1) {
        this.opacity += 0.0004;
      }

      this.lineWidth += 0.01;
      this.y += this.velocity;
      this.velocity += this.acceleration;
      this.acceleration += this.gravity;
      this.draw();
    }
  }]);

  return Chord;
}();

function forChords() {
  chords.forEach(function (chord, index) {
    if (chord.y >= canvas.height - chord.r) {
      if (!dontChangeChord) {
        changeChord();
      } else {
        drumBass.play();
        DBass.play();
        DChord.play();
        dontChangeChord = false;
      }

      for (var i = 0; i < 100; i++) {
        particles.push(new Particle(chord.x, chord.y + chord.r, {
          x: Math.random() - 0.5,
          y: Math.random() - Math.random() - 1
        }, 'cyan'));
      }

      chords.splice(index, 1);
    }

    chord.update();
  });
}

function changeChord() {
  // noteNumber = 0;
  if (chordToPlay == 'D1') {
    chordToPlay = 'A1';
    drumBass.play();
    CSBass.play();
    AChord.play();
  } else if (chordToPlay == 'A1') {
    chordToPlay = 'Bm';
    drumBass.play();
    BBass.play();
    BmChord.play();
  } else if (chordToPlay == 'Bm') {
    chordToPlay = 'F#m';
    drumBass.play();
    ABass.play();
    FSmChord.play();
  } else if (chordToPlay == 'F#m') {
    chordToPlay = 'G1';
    drumBass.play();
    BBass.play();
    GChord.play();
  } else if (chordToPlay == 'G1') {
    chordToPlay = 'D2';
    drumBass.play();
    FSBass.play();
    DChord.play();
  } else if (chordToPlay == 'D2') {
    chordToPlay = 'G2';
    drumBass.play();
    BBass.play();
    GChord.play();
  } else if (chordToPlay == 'G2') {
    chordToPlay = 'A2';
    drumBass.play();
    CSBass.play();
    AChord.play();
  } else if (chordToPlay == 'A2') {
    chordToPlay = 'D1';
    drumBass.play();
    DBass.play();
    DChord.play();
  }

  if (chordToPlay == 'D1' || chordToPlay == 'D2') {
    for (var i = 0; i < notes.length; i++) {
      notes[i].note = chordD[i];
    }
  }

  if (chordToPlay == 'A1' || chordToPlay == 'A2') {
    for (var _i = 0; _i < notes.length; _i++) {
      notes[_i].note = chordA[_i];
    }
  }

  if (chordToPlay == 'Bm') {
    for (var _i2 = 0; _i2 < notes.length; _i2++) {
      notes[_i2].note = chordBm[_i2];
    }
  }

  if (chordToPlay == 'F#m') {
    for (var _i3 = 0; _i3 < notes.length; _i3++) {
      notes[_i3].note = chordFSm[_i3];
    }
  }

  if (chordToPlay == 'G1' || chordToPlay == 'G2') {
    for (var _i4 = 0; _i4 < notes.length; _i4++) {
      notes[_i4].note = chordG[_i4];
    }
  }
}