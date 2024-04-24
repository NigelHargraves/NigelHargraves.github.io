"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Chord =
/*#__PURE__*/
function () {
  function Chord(x, y, radius) {
    _classCallCheck(this, Chord);

    this.x = x;
    this.y = y;
    this.r = radius;
    this.swing = this.x;
    this.angle = -1;
    this.velocity = 0;
    this.acceleration = 0;
    this.force = 0;
    this.delay = 1000;
    this.lineWidth = 10;
  }

  _createClass(Chord, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = 'aquamarine';
      ctx.fillStyle = 'aquamarine';
      ctx.lineWidth = this.lineWidth; //draw chord.

      ctx.beginPath();
      ctx.arc(this.x, this.y, 50, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.lineWidth = 1;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.lineWidth > 0.4) {
        this.lineWidth -= 0.01;
      } //calculate pendulum movement.


      this.force = gravity * Math.sin(this.angle);
      this.acceleration = -1 * this.force / this.r;
      this.velocity += this.acceleration;
      this.angle += this.velocity;
      this.x = this.r * Math.sin(this.angle) + center.x;
      this.y = this.r * Math.cos(this.angle);

      if (this.y < center.y) {
        if (this.delay == 0) {
          for (var i = 0; i < 50; i++) {
            particles.push(new Particle(this.x, this.y, 'aquamarine', {
              x: (Math.random() - 0.5) / Math.random(),
              y: (Math.random() - 0.5) / Math.random()
            }));
          }

          if (this.x < center.x) {
            road.leftRoad = 'aquamarine';
          } else {
            road.rightRoad = 'aquamarine';
          }

          chordChange();
          this.delay = 1000;
        }

        this.lineWidth = 10;
      }

      if (this.delay > 0) {
        this.delay -= 1;
      }

      this.draw();
    }
  }]);

  return Chord;
}();

function chordChange() {
  if (chordToPlay == 'Cm') {
    chordToPlay = 'B';
    BBass.play();
  } else if (chordToPlay == 'B') {
    chordToPlay = 'Am';
    ABass.play();
  } else if (chordToPlay == 'Am') {
    chordToPlay = 'G';
    GBass.play();
  } else if (chordToPlay == 'G') {
    chordToPlay = 'Fm';
    FBass.play();
  } else if (chordToPlay == 'Fm') {
    chordToPlay = 'E';
    EBass.play();
  } else if (chordToPlay == 'E') {
    chordToPlay = 'Dm';
    DBass.play();
  } else if (chordToPlay == 'Dm') {
    chordToPlay = 'C';
    CBass.play();
  } else if (chordToPlay == 'C') {
    chordToPlay = 'Bm';
    BBass.play();
  } else if (chordToPlay == 'Bm') {
    chordToPlay = 'A';
    ABass.play();
  } else if (chordToPlay == 'A') {
    chordToPlay = 'Gm';
    GBass.play();
  } else if (chordToPlay == 'Gm') {
    chordToPlay = 'F';
    FBass.play();
  } else if (chordToPlay == 'F') {
    chordToPlay = 'Em';
    EBass.play();
  } else if (chordToPlay == 'Em') {
    chordToPlay = 'D';
    DBass.play();
  } else if (chordToPlay == 'D') {
    chordToPlay = 'Cm';
    CBass.play();
  }

  if (chordToPlay == 'C') {
    for (var i = 0; i < 12; i++) {
      notesRight[i].note = chordC[i];
      notesLeft[i].note = chordC[i + 12];
    }
  }

  if (chordToPlay == 'Cm') {
    for (var _i = 0; _i < 12; _i++) {
      notesRight[_i].note = chordCm[_i];
      notesLeft[_i].note = chordCm[_i + 12];
    }
  }

  if (chordToPlay == 'D') {
    for (var _i2 = 0; _i2 < 12; _i2++) {
      notesRight[_i2].note = chordD[_i2];
      notesLeft[_i2].note = chordD[_i2 + 12];
    }
  }

  if (chordToPlay == 'Dm') {
    for (var _i3 = 0; _i3 < 12; _i3++) {
      notesRight[_i3].note = chordDm[_i3];
      notesLeft[_i3].note = chordDm[_i3 + 12];
    }
  }

  if (chordToPlay == 'E') {
    for (var _i4 = 0; _i4 < 12; _i4++) {
      notesRight[_i4].note = chordE[_i4];
      notesLeft[_i4].note = chordE[_i4 + 12];
    }
  }

  if (chordToPlay == 'Em') {
    for (var _i5 = 0; _i5 < 12; _i5++) {
      notesRight[_i5].note = chordEm[_i5];
      notesLeft[_i5].note = chordEm[_i5 + 12];
    }
  }

  if (chordToPlay == 'F') {
    for (var _i6 = 0; _i6 < 12; _i6++) {
      notesRight[_i6].note = chordF[_i6];
      notesLeft[_i6].note = chordF[_i6 + 12];
    }
  }

  if (chordToPlay == 'Fm') {
    for (var _i7 = 0; _i7 < 12; _i7++) {
      notesRight[_i7].note = chordFm[_i7];
      notesLeft[_i7].note = chordFm[_i7 + 12];
    }
  }

  if (chordToPlay == 'G') {
    for (var _i8 = 0; _i8 < 12; _i8++) {
      notesRight[_i8].note = chordG[_i8];
      notesLeft[_i8].note = chordG[_i8 + 12];
    }
  }

  if (chordToPlay == 'Gm') {
    for (var _i9 = 0; _i9 < 12; _i9++) {
      notesRight[_i9].note = chordGm[_i9];
      notesLeft[_i9].note = chordGm[_i9 + 12];
    }
  }

  if (chordToPlay == 'A') {
    for (var _i10 = 0; _i10 < 12; _i10++) {
      notesRight[_i10].note = chordA[_i10];
      notesLeft[_i10].note = chordA[_i10 + 12];
    }
  }

  if (chordToPlay == 'Am') {
    for (var _i11 = 0; _i11 < 12; _i11++) {
      notesRight[_i11].note = chordAm[_i11];
      notesLeft[_i11].note = chordAm[_i11 + 12];
    }
  }

  if (chordToPlay == 'B') {
    for (var _i12 = 0; _i12 < 12; _i12++) {
      notesRight[_i12].note = chordB[_i12];
      notesLeft[_i12].note = chordB[_i12 + 12];
    }
  }

  if (chordToPlay == 'Bm') {
    for (var _i13 = 0; _i13 < 12; _i13++) {
      notesRight[_i13].note = chordBm[_i13];
      notesLeft[_i13].note = chordBm[_i13 + 12];
    }
  }
}