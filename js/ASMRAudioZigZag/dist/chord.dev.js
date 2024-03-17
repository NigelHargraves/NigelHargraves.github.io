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
    this.speed = 1.3;
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
      y: cBottom
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

        for (var i = 0; i < 10; i++) {
          particles.push(new Particle(this.x, this.y, 'Turquoise'));
        }

        zz.cBoxLineWidth = 10;
        this.lineWidth = 5;
        this.opacity = 1;
        this.aim = {
          x: cRight,
          y: cBottom
        };
        this.y = cTop;
        this.detectionTimer = 100;
        this.x = cLeft;
      }

      if (this.x >= cLeft - 1 && this.x <= cLeft + 1 && this.y >= cBottom - 1 && this.y <= cBottom + 1 && this.detectionTimer == 0) {
        changeChord();

        if (this.hatDown) {
          this.hatDown = false;
        } else {
          this.hatDown = true;
        }

        for (var _i = 0; _i < 10; _i++) {
          particles.push(new Particle(this.x, this.y, 'Turquoise'));
        }

        zz.cBoxLineWidth = 10;
        this.lineWidth = 5;
        this.opacity = 1;
        this.aim = {
          x: 0,
          y: center.y
        };
        this.y = cBottom;
        this.detectionTimer = 100;
        this.x = cLeft;
      }

      if (this.x >= cRight - 1 && this.x <= cRight + 1 && this.y >= cBottom - 1 && this.y <= cBottom + 1 && this.detectionTimer == 0) {
        changeChord();

        if (this.hatDown) {
          this.hatDown = false;
        } else {
          this.hatDown = true;
        }

        for (var _i2 = 0; _i2 < 10; _i2++) {
          particles.push(new Particle(this.x, this.y, 'Turquoise'));
        }

        zz.cBoxLineWidth = 10;
        this.lineWidth = 5;
        this.opacity = 1;
        this.aim = {
          x: left,
          y: center.y
        };
        this.y = cBottom;
        this.detectionTimer = 100;
        this.x = cRight;
      } //midlle outer diadonal points.


      if (this.x >= left - 1 && this.x <= left + 1 && this.y >= center.y - 1 && this.y <= center.y + 1 && this.detectionTimer == 0) {
        this.aim = {
          x: cRight,
          y: cTop
        };
        this.y = center.y;
        this.detectionTimer = 100;
        this.x = left;
      }

      if (this.x >= 0 - 1 && this.x <= 0 + 1 && this.y >= center.y - 1 && this.y <= center.y + 1 && this.detectionTimer == 0) {
        this.aim = {
          x: cLeft,
          y: cTop
        };
        this.y = center.y;
        this.detectionTimer = 100;
        this.x = 0;
      }

      if (this.x >= cRight - 1 && this.x <= cRight + 1 && this.y >= cTop - 1 && this.y <= cTop + 1 && this.detectionTimer == 0) {
        changeChord();

        if (this.hatDown) {
          this.hatDown = false;
        } else {
          this.hatDown = true;
        }

        for (var _i3 = 0; _i3 < 10; _i3++) {
          particles.push(new Particle(this.x, this.y, 'Turquoise'));
        }

        zz.cBoxLineWidth = 10;
        this.lineWidth = 5;
        this.opacity = 1;
        this.aim = {
          x: cLeft,
          y: cBottom
        };
        this.y = cTop;
        this.detectionTimer = 100;
        this.x = cRight;
      } //play bass notes.


      if ((this.y >= cBottom - 1 && this.y <= cBottom + 1 || this.y >= cTop - 1 && this.y <= cTop + 1) && this.bassDetectionTimer == 0) {
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
          particles.push(new Particle(hat.x, hat.y, 'skyblue'));
        }

        if (this.y - this.yHat >= hatInterval * 2 - 1 && this.y - this.yHat <= hatInterval * 2 + 1 && this.hatDetectionTimer == 0) {
          highHatClosed.play();
          snare1.play();
          snareRects.push(new Snare());
          zz.snareLineWidth = 5;
          this.hatDetectionTimer = this.hatInterval;
          hat.lineWidth = 4;
          particles.push(new Particle(hat.x, hat.y, 'skyblue'));
        }

        if (this.y - this.yHat >= hatInterval * 3 - 1 && this.y - this.yHat <= hatInterval * 3 + 1 && this.hatDetectionTimer == 0) {
          highHatClosed.play();
          kick1.play();
          zz.kickLineWidth = 5;
          kicks.push(new Kick(right + (canvas.width - right) / 2, center.y));
          this.hatDetectionTimer = this.hatInterval;
          hat.lineWidth = 4;
          particles.push(new Particle(hat.x, hat.y, 'skyblue'));
        }

        if (this.y - this.yHat >= hatInterval * 4 - 1 && this.y - this.yHat <= hatInterval * 4 + 1 && this.hatDetectionTimer == 0) {
          highHatClosed.play();
          kick2.play();
          kicks.push(new Kick(right + (canvas.width - right) / 2, center.y));
          zz.kickLineWidth = 5;
          this.hatDetectionTimer = this.hatInterval;
          hat.lineWidth = 4;
          particles.push(new Particle(hat.x, hat.y, 'skyblue'));
        }

        if (this.y - this.yHat >= hatInterval * 5 - 1 && this.y - this.yHat <= hatInterval * 5 + 1 && this.hatDetectionTimer == 0) {
          highHatOpen.play();

          if (this.y >= cBottom - hatInterval - 1 && this.y <= cBottom - hatInterval + 1) {
            snare3.play();
            setTimeout(function () {
              snareRects.push(new Snare());
            }, 200);
          } else {
            snare2.play();
          }

          snareRects.push(new Snare());
          zz.snareLineWidth = 5;
          hat.pole.y -= cTop / 10;
          this.hatDetectionTimer = this.hatInterval;
          hat.lineWidth = 4;
          particles.push(new Particle(hat.x, hat.y, 'skyblue'));
        }
      } else {
        if (this.yHat - this.y >= hatInterval - 1 && this.yHat - this.y <= hatInterval + 1 && this.hatDetectionTimer == 0) {
          highHatClosed.play();
          this.hatDetectionTimer = this.hatInterval;
          hat.lineWidth = 4;
          particles.push(new Particle(hat.x, hat.y, 'skyblue'));
        }

        if (this.yHat - this.y >= hatInterval * 2 - 1 && this.yHat - this.y <= hatInterval * 2 + 1 && this.hatDetectionTimer == 0) {
          highHatClosed.play();
          snare1.play();
          snareRects.push(new Snare());
          zz.snareLineWidth = 5;
          this.hatDetectionTimer = this.hatInterval;
          hat.lineWidth = 4;
          particles.push(new Particle(hat.x, hat.y, 'skyblue'));
        }

        if (this.yHat - this.y >= hatInterval * 3 - 1 && this.yHat - this.y <= hatInterval * 3 + 1 && this.hatDetectionTimer == 0) {
          highHatClosed.play();
          kick1.play();
          kicks.push(new Kick(right + (canvas.width - right) / 2, center.y));
          zz.kickLineWidth = 5;
          this.hatDetectionTimer = this.hatInterval;
          hat.lineWidth = 4;
          particles.push(new Particle(hat.x, hat.y, 'skyblue'));
        }

        if (this.yHat - this.y >= hatInterval * 4 - 1 && this.yHat - this.y <= hatInterval * 4 + 1 && this.hatDetectionTimer == 0) {
          highHatClosed.play();
          kick2.play();
          kicks.push(new Kick(right + (canvas.width - right) / 2, center.y));
          zz.kickLineWidth = 5;
          this.hatDetectionTimer = this.hatInterval;
          hat.lineWidth = 4;
          particles.push(new Particle(hat.x, hat.y, 'skyblue'));
        }

        if (this.yHat - this.y >= hatInterval * 5 - 1 && this.yHat - this.y <= hatInterval * 5 + 1 && this.hatDetectionTimer == 0) {
          highHatOpen.play();

          if (this.y >= cTop + hatInterval - 1 && this.y <= cTop + hatInterval + 1) {
            snare3.play();
            setTimeout(function () {
              snareRects.push(new Snare());
            }, 200);
          } else {
            snare2.play();
          }

          snareRects.push(new Snare());
          zz.snareLineWidth = 5;
          hat.pole.y -= cTop / 10;
          this.hatDetectionTimer = this.hatInterval;
          hat.lineWidth = 4;
          particles.push(new Particle(hat.x, hat.y, 'skyblue'));
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
  //kick.currentTime = 0;
  kick1.play();
  kicks.push(new Kick(right + (canvas.width - right) / 2, center.y));
  zz.kickLineWidth = 5;

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
    AChord.play();
  } else if (chordToPlay == 'A1') {
    chordToPlay = 'E2';
    EChord.play();
  } else if (chordToPlay == 'E2') {
    chordToPlay = 'A2';
    AChord.play();
  } else if (chordToPlay == 'A2') {
    chordToPlay = 'E3';
    EChord.play();
  } else if (chordToPlay == 'E3') {
    chordToPlay = 'B';
    BChord.play();
  } else if (chordToPlay == 'B') {
    chordToPlay = 'A3';
    AChord.play();
  } else if (chordToPlay == 'A3') {
    chordToPlay = 'Gsus4';
    Gsus4Chord.play();
  } else if (chordToPlay == 'Gsus4') {
    chordToPlay = 'C1';
    CChord.play();
  } else if (chordToPlay == 'C1') {
    chordToPlay = 'F1';
    FChord.play();
  } else if (chordToPlay == 'F1') {
    chordToPlay = 'C2';
    CChord.play();
  } else if (chordToPlay == 'C2') {
    chordToPlay = 'F2';
    FChord.play();
  } else if (chordToPlay == 'F2') {
    chordToPlay = 'C3';
    CChord.play();
  } else if (chordToPlay == 'C3') {
    chordToPlay = 'G';
    GChord.play();
  } else if (chordToPlay == 'G') {
    chordToPlay = 'F#m7';
    FSm7Chord.play();
  } else if (chordToPlay == 'F#m7') {
    chordToPlay = 'Bsus4';
    Bsus4Chord.play();
  } else if (chordToPlay == 'Bsus4') {
    chordToPlay = 'E1';
    EChord.play();
  }

  if (chordToPlay == 'E1' || chordToPlay == 'E2' || chordToPlay == 'E3') {
    for (var i = 0; i < 36; i++) {
      notes[i].note = chordE[i];
    }
  }

  if (chordToPlay == 'A1' || chordToPlay == 'A2' || chordToPlay == 'A3') {
    for (var _i8 = 0; _i8 < 36; _i8++) {
      notes[_i8].note = chordA[_i8];
    }
  }

  if (chordToPlay == 'B') {
    for (var _i9 = 0; _i9 < 36; _i9++) {
      notes[_i9].note = chordB[_i9];
    }
  }

  if (chordToPlay == 'Gsus4') {
    for (var _i10 = 0; _i10 < 36; _i10++) {
      notes[_i10].note = chordGsus4[_i10];
    }
  }

  if (chordToPlay == 'G') {
    for (var _i11 = 0; _i11 < 36; _i11++) {
      notes[_i11].note = chordG[_i11];
    }
  }

  if (chordToPlay == 'F#m7') {
    for (var _i12 = 0; _i12 < 36; _i12++) {
      notes[_i12].note = chordFSm7[_i12];
    }
  }

  if (chordToPlay == 'C1' || chordToPlay == 'C2' || chordToPlay == 'C3') {
    for (var _i13 = 0; _i13 < 36; _i13++) {
      notes[_i13].note = chordC[_i13];
    }
  }

  if (chordToPlay == 'F1' || chordToPlay == 'F2') {
    for (var _i14 = 0; _i14 < 36; _i14++) {
      notes[_i14].note = chordF[_i14];
    }
  }

  if (chordToPlay == 'Bsus4') {
    for (var _i15 = 0; _i15 < 36; _i15++) {
      notes[_i15].note = chordBsus4[_i15];
    }
  }
}