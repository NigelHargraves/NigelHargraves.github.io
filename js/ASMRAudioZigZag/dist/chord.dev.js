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
    this.dot = 20;
    this.opacity = 1;
    this.lineWidth = 5;
    this.speed = 1;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.detectionTimer = 100;
    this.bassDetectionTimer = 50;
    this.hatDetectionTimer = 10;
    this.bassNoteToPlay = 1;
    this.angle = 0;
    this.aim = {
      x: cRight,
      y: cbottom
    };
    this.yHat = 0;
    this.hatDown = true;
    this.hatInterval = 20;
  }

  _createClass(Chord, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = 'Turquoise';
      ctx.fillStyle = 'Turquoise';
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, 20, 0, Math.PI * 2);
      ctx.globalAlpha = this.opacity;
      ctx.lineWidth = this.lineWidth;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.dot, 0, Math.PI * 2);
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

      if (this.dot > 4) {
        this.dot -= 0.2;
      }

      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.angle = Math.atan2(this.aim.y - this.y, this.aim.x - this.x);
      this.velocity.x = Math.cos(this.angle) * this.speed;
      this.velocity.y = Math.sin(this.angle) * this.speed;

      if (this.detectionTimer > 0) {
        this.detectionTimer -= 1;
      }

      if (this.x >= cLeft - 1 && this.x <= cLeft + 1 && this.y >= cTop - 1 && this.y <= cTop + 1 && this.detectionTimer == 0) {
        changeChord();

        if (this.hatDown) {
          this.hatDown = false;
        } else {
          this.hatDown = true;
        }

        for (var i = 0; i < 20; i++) {
          particles.push(new Particle(this.x, this.y, 'Turquoise'));
        }

        zz.cBoxLineWidth = 10;
        this.lineWidth = 5;
        this.opacity = 1;
        this.aim = {
          x: cRight,
          y: cbottom
        };
        this.y = cTop;
        this.detectionTimer = 100;
        this.x = cLeft;
      }

      if (this.x >= cLeft - 1 && this.x <= cLeft + 1 && this.y >= cbottom - 1 && this.y <= cbottom + 1 && this.detectionTimer == 0) {
        changeChord();

        if (this.hatDown) {
          this.hatDown = false;
        } else {
          this.hatDown = true;
        }

        for (var _i = 0; _i < 20; _i++) {
          particles.push(new Particle(this.x, this.y, 'Turquoise'));
        }

        zz.cBoxLineWidth = 10;
        this.lineWidth = 5;
        this.opacity = 1;
        this.aim = {
          x: cLeft,
          y: cTop
        };
        this.y = cbottom;
        this.detectionTimer = 100;
        this.x = cLeft;
      }

      if (this.x >= cRight - 1 && this.x <= cRight + 1 && this.y >= cbottom - 1 && this.y <= cbottom + 1 && this.detectionTimer == 0) {
        changeChord();

        if (this.hatDown) {
          this.hatDown = false;
        } else {
          this.hatDown = true;
        }

        for (var _i2 = 0; _i2 < 20; _i2++) {
          particles.push(new Particle(this.x, this.y, 'Turquoise'));
        }

        zz.cBoxLineWidth = 10;
        this.lineWidth = 5;
        this.opacity = 1;
        this.aim = {
          x: cRight,
          y: cTop
        };
        this.y = cbottom;
        this.detectionTimer = 100;
        this.x = cRight;
      }

      if (this.x >= cRight - 1 && this.x <= cRight + 1 && this.y >= cTop - 1 && this.y <= cTop + 1 && this.detectionTimer == 0) {
        changeChord();

        if (this.hatDown) {
          this.hatDown = false;
        } else {
          this.hatDown = true;
        }

        for (var _i3 = 0; _i3 < 20; _i3++) {
          particles.push(new Particle(this.x, this.y, 'Turquoise'));
        }

        zz.cBoxLineWidth = 10;
        this.lineWidth = 5;
        this.opacity = 1;
        this.aim = {
          x: cLeft,
          y: cbottom
        };
        this.y = cTop;
        this.detectionTimer = 100;
        this.x = cRight;
      } //play bass notes.


      if ((this.y >= cbottom - 1 && this.y <= cbottom + 1 || this.y >= cTop - 1 && this.y <= cTop + 1) && this.bassDetectionTimer == 0) {
        bassNoteToPlay(this.bassNoteToPlay);
        this.bassNoteToPlay += 1;
        this.bassDetectionTimer = 50;
        this.dot = 20;
        bassCircles.push(new BassCircle(this.x, this.y));
        this.yHat = this.y;
        highHatClosed.play();
        hat.lineWidth = 4;

        for (var _i4 = 0; _i4 < 4; _i4++) {
          particles.push(new Particle(hat.x, hat.y, 'skyblue'));
        }
      }

      if (this.y >= bass1 - 1 && this.y <= bass1 + 1 && this.bassDetectionTimer == 0) {
        bassNoteToPlay(this.bassNoteToPlay);
        this.bassNoteToPlay += 1;
        this.bassDetectionTimer = 50;
        this.dot = 20;
        bassCircles.push(new BassCircle(this.x, this.y));
        this.yHat = this.y;
        highHatClosed.play();
        hat.lineWidth = 4;

        for (var _i5 = 0; _i5 < 4; _i5++) {
          particles.push(new Particle(hat.x, hat.y, 'skyblue'));
        }
      }

      if (this.y >= bass2 - 1 && this.y <= bass2 + 1 && this.bassDetectionTimer == 0) {
        bassNoteToPlay(this.bassNoteToPlay);
        this.bassNoteToPlay += 1;
        this.bassDetectionTimer = 50;
        this.dot = 20;
        bassCircles.push(new BassCircle(this.x, this.y));
        this.yHat = this.y;
        highHatClosed.play();
        hat.lineWidth = 4;

        for (var _i6 = 0; _i6 < 4; _i6++) {
          particles.push(new Particle(hat.x, hat.y, 'skyblue'));
        }
      }

      if (this.y >= bass3 - 1 && this.y <= bass3 + 1 && this.bassDetectionTimer == 0) {
        bassNoteToPlay(this.bassNoteToPlay);
        this.bassNoteToPlay += 1;
        this.bassDetectionTimer = 50;
        this.dot = 20;
        bassCircles.push(new BassCircle(this.x, this.y));
        this.yHat = this.y;
        highHatClosed.play();
        hat.lineWidth = 4;

        for (var _i7 = 0; _i7 < 4; _i7++) {
          particles.push(new Particle(hat.x, hat.y, 'skyblue'));
        }
      }

      if (this.hatDown) {
        if (this.y - this.yHat >= hatInterval - 1 && this.y - this.yHat <= hatInterval + 1 && this.hatDetectionTimer == 0) {
          highHatClosed.play();
          this.hatDetectionTimer = this.hatInterval;
          hat.lineWidth = 4;

          for (var _i8 = 0; _i8 < 4; _i8++) {
            particles.push(new Particle(hat.x, hat.y, 'skyblue'));
          }
        }

        if (this.y - this.yHat >= hatInterval * 2 - 1 && this.y - this.yHat <= hatInterval * 2 + 1 && this.hatDetectionTimer == 0) {
          highHatClosed.play();
          this.hatDetectionTimer = this.hatInterval;
          hat.lineWidth = 4;

          for (var _i9 = 0; _i9 < 4; _i9++) {
            particles.push(new Particle(hat.x, hat.y, 'skyblue'));
          }
        }

        if (this.y - this.yHat >= hatInterval * 3 - 1 && this.y - this.yHat <= hatInterval * 3 + 1 && this.hatDetectionTimer == 0) {
          highHatClosed.play();
          this.hatDetectionTimer = this.hatInterval;
          hat.lineWidth = 4;

          for (var _i10 = 0; _i10 < 4; _i10++) {
            particles.push(new Particle(hat.x, hat.y, 'skyblue'));
          }
        }

        if (this.y - this.yHat >= hatInterval * 4 - 1 && this.y - this.yHat <= hatInterval * 4 + 1 && this.hatDetectionTimer == 0) {
          highHatClosed.play();
          this.hatDetectionTimer = this.hatInterval;
          hat.lineWidth = 4;

          for (var _i11 = 0; _i11 < 4; _i11++) {
            particles.push(new Particle(hat.x, hat.y, 'skyblue'));
          }
        }

        if (this.y - this.yHat >= hatInterval * 5 - 1 && this.y - this.yHat <= hatInterval * 5 + 1 && this.hatDetectionTimer == 0) {
          highHatOpen.play();
          hat.pole.y -= cTop / 10;
          this.hatDetectionTimer = this.hatInterval;
          hat.lineWidth = 4;

          for (var _i12 = 0; _i12 < 4; _i12++) {
            particles.push(new Particle(hat.x, hat.y, 'skyblue'));
          }
        }
      } else {
        if (this.yHat - this.y >= hatInterval - 1 && this.yHat - this.y <= hatInterval + 1 && this.hatDetectionTimer == 0) {
          highHatClosed.play();
          this.hatDetectionTimer = this.hatInterval;
          hat.lineWidth = 4;

          for (var _i13 = 0; _i13 < 4; _i13++) {
            particles.push(new Particle(hat.x, hat.y, 'skyblue'));
          }
        }

        if (this.yHat - this.y >= hatInterval * 2 - 1 && this.yHat - this.y <= hatInterval * 2 + 1 && this.hatDetectionTimer == 0) {
          highHatClosed.play();
          this.hatDetectionTimer = this.hatInterval;
          hat.lineWidth = 4;

          for (var _i14 = 0; _i14 < 4; _i14++) {
            particles.push(new Particle(hat.x, hat.y, 'skyblue'));
          }
        }

        if (this.yHat - this.y >= hatInterval * 3 - 1 && this.yHat - this.y <= hatInterval * 3 + 1 && this.hatDetectionTimer == 0) {
          highHatClosed.play();
          this.hatDetectionTimer = this.hatInterval;
          hat.lineWidth = 4;

          for (var _i15 = 0; _i15 < 4; _i15++) {
            particles.push(new Particle(hat.x, hat.y, 'skyblue'));
          }
        }

        if (this.yHat - this.y >= hatInterval * 4 - 1 && this.yHat - this.y <= hatInterval * 4 + 1 && this.hatDetectionTimer == 0) {
          highHatClosed.play();
          this.hatDetectionTimer = this.hatInterval;
          hat.lineWidth = 4;

          for (var _i16 = 0; _i16 < 4; _i16++) {
            particles.push(new Particle(hat.x, hat.y, 'skyblue'));
          }
        }

        if (this.yHat - this.y >= hatInterval * 5 - 1 && this.yHat - this.y <= hatInterval * 5 + 1 && this.hatDetectionTimer == 0) {
          highHatOpen.play();
          hat.pole.y -= cTop / 10;
          this.hatDetectionTimer = this.hatInterval;
          hat.lineWidth = 4;

          for (var _i17 = 0; _i17 < 4; _i17++) {
            particles.push(new Particle(hat.x, hat.y, 'skyblue'));
          }
        }
      }

      if (this.bassNoteToPlay == 4) {
        this.bassNoteToPlay = 0;
      }

      if (this.bassDetectionTimer > 0) {
        this.bassDetectionTimer -= 1;
      }

      if (this.hatDetectionTimer > 0) {
        this.hatDetectionTimer -= 1;
      } else {
        hat.pole.y = cTop;
      }

      this.draw();
    }
  }]);

  return Chord;
}();

function bassNoteToPlay(bassToPlay) {
  if (chordToPlay == 'E1' || chordToPlay == 'E2' || chordToPlay == 'E3') {
    if (bassToPlay == 0) {
      EBass.play();
    }

    if (bassToPlay == 1) {
      AbBass.play();
    }

    if (bassToPlay == 2) {
      BBass.play();
    }

    if (bassToPlay == 3) {
      AbBass.play();
    }
  }

  if (chordToPlay == 'A1' || chordToPlay == 'A2' || chordToPlay == 'A3') {
    if (bassToPlay == 0) {
      ABass.play();
    }

    if (bassToPlay == 1) {
      CSBassTop.play();
    }

    if (bassToPlay == 2) {
      EBassTop.play();
    }

    if (bassToPlay == 3) {
      CSBassTop.play();
    }
  }

  if (chordToPlay == 'B') {
    if (bassToPlay == 0) {
      BBass.play();
    }

    if (bassToPlay == 1) {
      EbBassTop.play();
    }

    if (bassToPlay == 2) {
      FSBassTop.play();
    }

    if (bassToPlay == 3) {
      EbBassTop.play();
    }
  }

  if (chordToPlay == 'Gsus4') {
    if (bassToPlay == 0) {
      GBass.play();
    }

    if (bassToPlay == 1) {
      CBassTop.play();
    }

    if (bassToPlay == 2) {
      DBassTop.play();
    }

    if (bassToPlay == 3) {
      GBass.play();
    }
  }

  if (chordToPlay == 'C1' || chordToPlay == 'C2' || chordToPlay == 'C3') {
    if (bassToPlay == 0) {
      CBassTop.play();
    }

    if (bassToPlay == 1) {
      EBassTop.play();
    }

    if (bassToPlay == 2) {
      GBassTop.play();
    }

    if (bassToPlay == 3) {
      EBassTop.play();
    }
  }

  if (chordToPlay == 'F1' || chordToPlay == 'F2') {
    if (bassToPlay == 0) {
      FBass.play();
    }

    if (bassToPlay == 1) {
      ABass.play();
    }

    if (bassToPlay == 2) {
      CBassTop.play();
    }

    if (bassToPlay == 3) {
      ABass.play();
    }
  }

  if (chordToPlay == 'G') {
    if (bassToPlay == 0) {
      GBass.play();
    }

    if (bassToPlay == 1) {
      BBass.play();
    }

    if (bassToPlay == 2) {
      DBassTop.play();
    }

    if (bassToPlay == 3) {
      BBass.play();
    }
  }

  if (chordToPlay == 'F#m7') {
    if (bassToPlay == 0) {
      FSBassTop.play();
    }

    if (bassToPlay == 1) {
      ABassTop.play();
    }

    if (bassToPlay == 2) {
      CSBassTop.play();
    }

    if (bassToPlay == 3) {
      ABassTop.play();
    }
  }

  if (chordToPlay == 'Bsus4') {
    if (bassToPlay == 0) {
      BBass.play();
    }

    if (bassToPlay == 1) {
      EBassTop.play();
    }

    if (bassToPlay == 2) {
      FSBassTop.play();
    }

    if (bassToPlay == 3) {
      BBass.play();
    }
  }
}

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
    for (var _i18 = 0; _i18 < 36; _i18++) {
      notes[_i18].note = chordA[_i18];
    }
  }

  if (chordToPlay == 'B') {
    for (var _i19 = 0; _i19 < 36; _i19++) {
      notes[_i19].note = chordB[_i19];
    }
  }

  if (chordToPlay == 'Gsus4') {
    for (var _i20 = 0; _i20 < 36; _i20++) {
      notes[_i20].note = chordGsus4[_i20];
    }
  }

  if (chordToPlay == 'G') {
    for (var _i21 = 0; _i21 < 36; _i21++) {
      notes[_i21].note = chordG[_i21];
    }
  }

  if (chordToPlay == 'F#m7') {
    for (var _i22 = 0; _i22 < 36; _i22++) {
      notes[_i22].note = chordFSm7[_i22];
    }
  }

  if (chordToPlay == 'C1' || chordToPlay == 'C2' || chordToPlay == 'C3') {
    for (var _i23 = 0; _i23 < 36; _i23++) {
      notes[_i23].note = chordC[_i23];
    }
  }

  if (chordToPlay == 'F1' || chordToPlay == 'F2') {
    for (var _i24 = 0; _i24 < 36; _i24++) {
      notes[_i24].note = chordF[_i24];
    }
  }

  if (chordToPlay == 'Bsus4') {
    for (var _i25 = 0; _i25 < 36; _i25++) {
      notes[_i25].note = chordBsus4[_i25];
    }
  }
}