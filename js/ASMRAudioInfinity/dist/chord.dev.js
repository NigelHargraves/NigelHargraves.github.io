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
    this.radius = {
      x: center.x - infinityLoop.point1.x + 200,
      y: (center.x - infinityLoop.point1.x + 200) / 2
    };
    this.radiusShrink = true;
    this.lineWidth = 5;
    this.delay = 100;
    this.color = 'aqua';
  }

  _createClass(Chord, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = this.color;
      ctx.fillStyle = this.color;
      ctx.lineWidth = this.lineWidth; //center point.

      ctx.beginPath();
      ctx.arc(center.x, center.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(this.x, this.y, this.radius.x, this.radius.y, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.lineWidth = 1;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.lineWidth > 0.2) {
        this.lineWidth -= 0.01;
      }

      if (this.radiusShrink) {
        this.radius.y -= 0.1;
        this.radius.x -= 0.2;
      } else {
        this.radius.y += 0.1;
        this.radius.x += 0.2;
      }

      if (this.radius.x <= 2) {
        this.radiusShrink = false;
        this.lineWidth = 5;
        changeChord();
      }

      if (this.radius.x >= center.x - infinityLoop.point1.x + 200) {
        this.radiusShrink = true;
        this.lineWidth = 5;
        changeChord();
      }

      this.draw();
    }
  }]);

  return Chord;
}();

function changeChord() {
  if (chordToPlay == 'Am') {
    chordToPlay = 'C';
    CBass.play();
    CChord.play();
  } else if (chordToPlay == 'C') {
    chordToPlay = 'Bm';
    BBass.play();
    BmChord.play();
  } else if (chordToPlay == 'Bm') {
    chordToPlay = 'G';
    GBass.play();
    GChord.play();
  } else if (chordToPlay == 'G') {
    chordToPlay = 'Dm';
    DBass.play();
    DmChord.play();
  } else if (chordToPlay == 'Dm') {
    chordToPlay = 'F';
    FBass.play();
    FChord.play();
  } else if (chordToPlay == 'F') {
    chordToPlay = 'Em';
    EBass.play();
    EmChord.play();
  } else if (chordToPlay == 'Em') {
    chordToPlay = 'C7';
    CBass.play();
    C7Chord.play();
  } else if (chordToPlay == 'C7') {
    chordToPlay = 'Am';
    ABass.play();
    AmChord.play();
  }

  if (chordToPlay == 'Am') {
    for (var i = 0; i < 24; i++) {
      notes[i].note = chordAm[i];
    }
  }

  if (chordToPlay == 'C') {
    for (var _i = 0; _i < 24; _i++) {
      notes[_i].note = chordC[_i];
    }
  }

  if (chordToPlay == 'Bm') {
    for (var _i2 = 0; _i2 < 24; _i2++) {
      notes[_i2].note = chordBm[_i2];
    }
  }

  if (chordToPlay == 'G') {
    for (var _i3 = 0; _i3 < 24; _i3++) {
      notes[_i3].note = chordG[_i3];
    }
  }

  if (chordToPlay == 'Dm') {
    for (var _i4 = 0; _i4 < 24; _i4++) {
      notes[_i4].note = chordDm[_i4];
    }
  }

  if (chordToPlay == 'F') {
    for (var _i5 = 0; _i5 < 24; _i5++) {
      notes[_i5].note = chordF[_i5];
    }
  }

  if (chordToPlay == 'Em') {
    for (var _i6 = 0; _i6 < 24; _i6++) {
      notes[_i6].note = chordEm[_i6];
    }
  }

  if (chordToPlay == 'C7') {
    for (var _i7 = 0; _i7 < 24; _i7++) {
      notes[_i7].note = chordC7[_i7];
    }
  }
}