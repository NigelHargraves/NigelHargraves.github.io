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
    this.aqua = 'aqua';
    this.red = 'red';
    this.purple = 'purple';
  }

  _createClass(Chord, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = this.aqua;
      ctx.fillStyle = this.aqua;
      ctx.lineWidth = this.lineWidth; //center point.

      ctx.beginPath();
      ctx.arc(center.x, center.y, 4, 0, Math.PI * 2);
      ctx.fill(); //aqua ellipse.

      ctx.beginPath();
      ctx.ellipse(this.x, this.y, this.radius.x, this.radius.y, 0, 0, Math.PI * 2);
      ctx.stroke(); //red ellipse.

      ctx.strokeStyle = this.red;
      ctx.beginPath();
      ctx.ellipse(this.x, this.y, this.radius.x - this.lineWidth, this.radius.y - this.lineWidth, 0, 0, Math.PI * 2);
      ctx.stroke(); //purple ellipse.

      ctx.strokeStyle = this.purple;
      ctx.beginPath();
      ctx.ellipse(this.x, this.y, this.radius.x + this.lineWidth, this.radius.y + this.lineWidth, 0, 0, Math.PI * 2);
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

      if (this.radius.x <= 14) {
        this.radiusShrink = false;
        this.lineWidth = 5;
        changeChord();

        for (var i = 0; i < 30; i++) {
          particles.push(new Particle(center.x, center.y, this.aqua, {
            x: (Math.random() - 0.5) / Math.random(),
            y: (Math.random() - 0.5) / Math.random()
          }));
        }

        for (var _i = 0; _i < 30; _i++) {
          particles.push(new Particle(center.x, center.y, this.red, {
            x: (Math.random() - 0.5) / Math.random(),
            y: (Math.random() - 0.5) / Math.random()
          }));
        }

        for (var _i2 = 0; _i2 < 30; _i2++) {
          particles.push(new Particle(center.x, center.y, this.purple, {
            x: (Math.random() - 0.5) / Math.random(),
            y: (Math.random() - 0.5) / Math.random()
          }));
        }
      }

      if (this.radius.x >= center.x - infinityLoop.point1.x + 200) {
        this.radiusShrink = true;
        this.lineWidth = 5;
        changeChord();

        for (var _i3 = 0; _i3 < 30; _i3++) {
          particles.push(new Particle(infinityLoop.point1.x - 200, center.y, this.aqua, {
            x: (Math.random() - 0.5) / Math.random(),
            y: (Math.random() - 0.5) / Math.random()
          }));
        }

        for (var _i4 = 0; _i4 < 30; _i4++) {
          particles.push(new Particle(infinityLoop.point1.x - 200, center.y, this.red, {
            x: (Math.random() - 0.5) / Math.random(),
            y: (Math.random() - 0.5) / Math.random()
          }));
        }

        for (var _i5 = 0; _i5 < 30; _i5++) {
          particles.push(new Particle(infinityLoop.point1.x - 200, center.y, this.purple, {
            x: (Math.random() - 0.5) / Math.random(),
            y: (Math.random() - 0.5) / Math.random()
          }));
        }

        for (var _i6 = 0; _i6 < 30; _i6++) {
          particles.push(new Particle(infinityLoop.point2.x + 200, center.y, this.aqua, {
            x: (Math.random() - 0.5) / Math.random(),
            y: (Math.random() - 0.5) / Math.random()
          }));
        }

        for (var _i7 = 0; _i7 < 30; _i7++) {
          particles.push(new Particle(infinityLoop.point2.x + 200, center.y, this.red, {
            x: (Math.random() - 0.5) / Math.random(),
            y: (Math.random() - 0.5) / Math.random()
          }));
        }

        for (var _i8 = 0; _i8 < 30; _i8++) {
          particles.push(new Particle(infinityLoop.point2.x + 200, center.y, this.purple, {
            x: (Math.random() - 0.5) / Math.random(),
            y: (Math.random() - 0.5) / Math.random()
          }));
        }
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
    for (var _i9 = 0; _i9 < 24; _i9++) {
      notes[_i9].note = chordC[_i9];
    }
  }

  if (chordToPlay == 'Bm') {
    for (var _i10 = 0; _i10 < 24; _i10++) {
      notes[_i10].note = chordBm[_i10];
    }
  }

  if (chordToPlay == 'G') {
    for (var _i11 = 0; _i11 < 24; _i11++) {
      notes[_i11].note = chordG[_i11];
    }
  }

  if (chordToPlay == 'Dm') {
    for (var _i12 = 0; _i12 < 24; _i12++) {
      notes[_i12].note = chordDm[_i12];
    }
  }

  if (chordToPlay == 'F') {
    for (var _i13 = 0; _i13 < 24; _i13++) {
      notes[_i13].note = chordF[_i13];
    }
  }

  if (chordToPlay == 'Em') {
    for (var _i14 = 0; _i14 < 24; _i14++) {
      notes[_i14].note = chordEm[_i14];
    }
  }

  if (chordToPlay == 'C7') {
    for (var _i15 = 0; _i15 < 24; _i15++) {
      notes[_i15].note = chordC7[_i15];
    }
  }
}