"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pentagon =
/*#__PURE__*/
function () {
  function Pentagon(x, y) {
    _classCallCheck(this, Pentagon);

    this.x = x;
    this.y = y;
    this.r = 400;
    this.angle = 0;
    this.point = {
      x: 0,
      y: 0
    };
    this.rotateAngle = 0;
    this.changeChord = 0;
    this.timer = 100;
    this.lineWidth = 5;
    this.color = 'aqua';
    this.particle = {
      x: 0,
      y: 0
    };
  }

  _createClass(Pentagon, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = this.color;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.moveTo(0, center.y);
      ctx.lineTo(canvas.width, center.y);
      ctx.moveTo(center.x, 0);
      ctx.lineTo(center.x, canvas.height);
      ctx.lineWidth = this.lineWidth;
      ctx.stroke();
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotateAngle);
      this.point = {
        x: 0,
        y: 0
      };
      this.angle = 0;
      this.point.x = 0 + this.r * Math.cos(this.angle);
      this.point.y = 0 + this.r * Math.sin(this.angle);
      ctx.beginPath();
      ctx.moveTo(this.point.x, this.point.y);
      this.angle += Math.PI * 2 / 5;
      this.point.x = 0 + this.r * Math.cos(this.angle);
      this.point.y = 0 + this.r * Math.sin(this.angle);
      ctx.lineTo(this.point.x, this.point.y);
      this.angle += Math.PI * 2 / 5;
      this.point.x = 0 + this.r * Math.cos(this.angle);
      this.point.y = 0 + this.r * Math.sin(this.angle);
      ctx.lineTo(this.point.x, this.point.y);
      this.angle += Math.PI * 2 / 5;
      this.point.x = 0 + this.r * Math.cos(this.angle);
      this.point.y = 0 + this.r * Math.sin(this.angle);
      ctx.lineTo(this.point.x, this.point.y);
      this.angle += Math.PI * 2 / 5;
      this.point.x = 0 + this.r * Math.cos(this.angle);
      this.point.y = 0 + this.r * Math.sin(this.angle);
      ctx.lineTo(this.point.x, this.point.y);
      this.angle += Math.PI * 2 / 5;
      this.point.x = 0 + this.r * Math.cos(this.angle);
      this.point.y = 0 + this.r * Math.sin(this.angle);
      ctx.lineTo(this.point.x, this.point.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(this.point.x, this.point.y, 20, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(this.point.x, this.point.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(0, 0, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.lineWidth > 0.2) {
        this.lineWidth -= 0.01;
      }

      this.rotateAngle += Math.PI / 180 / 20;

      if (this.rotateAngle >= Math.PI * 2) {
        this.rotateAngle = 0;
      }

      this.particle.x = this.r * Math.cos(this.rotateAngle);
      this.particle.y = this.r * Math.sin(this.rotateAngle);
      this.changeChord = this.rotateAngle.toFixed(2);

      if (this.changeChord == Math.PI.toFixed(2) || this.changeChord == 0 || this.changeChord == (Math.PI / 2).toFixed(2) || this.changeChord == (Math.PI / 2 * 3).toFixed(2)) {
        this.lineWidth = 5;

        if (this.timer <= 0) {
          changeChord();
          this.timer = 100;
        }

        for (var i = 0; i < 4; i++) {
          particles.push(new Particle(this.particle.x, this.particle.y, 0.6, this.color, {
            x: this.x,
            y: this.y
          }, {
            x: (Math.random() - 0.5) / Math.random(),
            y: (Math.random() - 0.5) / Math.random()
          }));
        }
      }

      this.timer -= 1;
      this.draw();
    }
  }]);

  return Pentagon;
}();

function changeChord() {
  if (chordToPlay == 'E1') {
    chordToPlay = 'A1';
    ABass.play();
  } else if (chordToPlay == 'A1') {
    chordToPlay = 'E2';
    EBass.play();
  } else if (chordToPlay == 'E2') {
    chordToPlay = 'A2';
    ABass.play();
  } else if (chordToPlay == 'A2') {
    chordToPlay = 'E3';
    EBass.play();
  } else if (chordToPlay == 'E3') {
    chordToPlay = 'B';
    BBass.play();
  } else if (chordToPlay == 'B') {
    chordToPlay = 'A3';
    ABass.play();
  } else if (chordToPlay == 'A3') {
    chordToPlay = 'Gsus4';
    GBass.play();
  } else if (chordToPlay == 'Gsus4') {
    chordToPlay = 'C1';
    CBass.play();
  } else if (chordToPlay == 'C1') {
    chordToPlay = 'F1';
    FBass.play();
  } else if (chordToPlay == 'F1') {
    chordToPlay = 'C2';
    CBass.play();
  } else if (chordToPlay == 'C2') {
    chordToPlay = 'F2';
    FBass.play();
  } else if (chordToPlay == 'F2') {
    chordToPlay = 'C3';
    CBass.play();
  } else if (chordToPlay == 'C3') {
    chordToPlay = 'G';
    GBass.play();
  } else if (chordToPlay == 'G') {
    chordToPlay = 'F#m7';
    FSBass.play();
  } else if (chordToPlay == 'F#m7') {
    chordToPlay = 'Bsus4';
    BBass.play();
  } else if (chordToPlay == 'Bsus4') {
    chordToPlay = 'E1';
    EBass.play();
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