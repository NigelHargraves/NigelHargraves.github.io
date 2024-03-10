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
    this.opacity = 1;
    this.lineWidth = 5;
    this.speed = 1;
    this.down = true;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.detectionTimer = 100;
    this.angle = 0;
    this.aim = {
      x: cRight,
      y: canvas.height - canvas.height / 10
    };
  }

  _createClass(Chord, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = 'white';
      ctx.fillStyle = 'white';
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, 20, 0, Math.PI * 2);
      ctx.globalAlpha = this.opacity;
      ctx.lineWidth = this.lineWidth;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.lineWidth > 1) {
        this.lineWidth -= 0.1;
      }

      if (this.opacity > 0.2) {
        this.opacity -= 0.01;
      }

      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.angle = Math.atan2(this.aim.y - this.y, this.aim.x - this.x);
      this.velocity.x = Math.cos(this.angle) * this.speed;
      this.velocity.y = Math.sin(this.angle) * this.speed;

      if (this.detectionTimer > 0) {
        this.detectionTimer -= 1;
      }

      if (this.x >= cLeft - 1 && this.x <= cLeft + 1 && this.detectionTimer == 0) {
        changeChord();
        this.lineWidth = 5;
        this.opacity = 1;

        if (this.down) {
          this.aim = {
            x: cRight,
            y: canvas.height - canvas.height / 10
          };
          this.y = canvas.height / 10;
        } else {
          this.aim = {
            x: cRight,
            y: canvas.height / 10
          };
          this.y = canvas.height - canvas.height / 10;
        }

        this.detectionTimer = 100;
        this.x = cLeft;
      } else if (this.x >= cRight - 1 && this.x <= cRight + 1 && this.detectionTimer == 0) {
        changeChord();
        this.lineWidth = 5;
        this.opacity = 1;

        if (this.down) {
          this.aim = {
            x: cLeft,
            y: canvas.height - canvas.height / 10
          };
          this.y = canvas.height - canvas.height / 10;
          this.down = false;
        } else {
          this.aim = {
            x: cLeft,
            y: canvas.height / 10
          };
          this.y = canvas.height / 10;
          this.down = true;
        }

        this.detectionTimer = 100;
        this.x = cRight;
      }

      this.draw();
    }
  }]);

  return Chord;
}();

function changeChord() {
  if (chordToPlay == 'E1') {
    chordToPlay = 'A1';
  } else if (chordToPlay == 'A1') {
    chordToPlay = 'E2';
  } else if (chordToPlay == 'E2') {
    chordToPlay = 'A2';
  } else if (chordToPlay == 'A2') {
    chordToPlay = 'E3';
  } else if (chordToPlay == 'E3') {
    chordToPlay = 'B';
  } else if (chordToPlay == 'B') {
    chordToPlay = 'A3';
  } else if (chordToPlay == 'A3') {
    chordToPlay = 'Gsus4';
  } else if (chordToPlay == 'Gsus4') {
    chordToPlay = 'C1';
  } else if (chordToPlay == 'C1') {
    chordToPlay = 'F1';
  } else if (chordToPlay == 'F1') {
    chordToPlay = 'C2';
  } else if (chordToPlay == 'C2') {
    chordToPlay = 'F2';
  } else if (chordToPlay == 'F2') {
    chordToPlay = 'C3';
  } else if (chordToPlay == 'C3') {
    chordToPlay = 'G';
  } else if (chordToPlay == 'G') {
    chordToPlay = 'F#m7';
  } else if (chordToPlay == 'F#m7') {
    chordToPlay = 'Bsus4';
  } else if (chordToPlay == 'Bsus4') {
    chordToPlay = 'E1';
  }

  if (chordToPlay == 'E1' || chordToPlay == 'E2' || chordToPlay == 'E3') {
    for (var i = 0; i < 36; i++) {
      notes[i].note = chordE[i];
    }
  }

  if (chordToPlay == 'A1' || chordToPlay == 'A2' || chordToPlay == 'A3') {
    for (var _i = 0; _i < 36; _i++) {
      notes[_i].note = chordA[_i];
    }
  }

  if (chordToPlay == 'B') {
    for (var _i2 = 0; _i2 < 36; _i2++) {
      notes[_i2].note = chordB[_i2];
    }
  }

  if (chordToPlay == 'Gsus4') {
    for (var _i3 = 0; _i3 < 36; _i3++) {
      notes[_i3].note = chordGsus4[_i3];
    }
  }

  if (chordToPlay == 'G') {
    for (var _i4 = 0; _i4 < 36; _i4++) {
      notes[_i4].note = chordG[_i4];
    }
  }

  if (chordToPlay == 'F#m7') {
    for (var _i5 = 0; _i5 < 36; _i5++) {
      notes[_i5].note = chordFSm7[_i5];
    }
  }

  if (chordToPlay == 'C1' || chordToPlay == 'C2' || chordToPlay == 'C3') {
    for (var _i6 = 0; _i6 < 36; _i6++) {
      notes[_i6].note = chordC[_i6];
    }
  }

  if (chordToPlay == 'F1' || chordToPlay == 'F2') {
    for (var _i7 = 0; _i7 < 36; _i7++) {
      notes[_i7].note = chordF[_i7];
    }
  }

  if (chordToPlay == 'Bsus4') {
    for (var _i8 = 0; _i8 < 36; _i8++) {
      notes[_i8].note = chordBsus4[_i8];
    }
  }
}