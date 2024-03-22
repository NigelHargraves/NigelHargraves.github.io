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
    this.lineWidth = 5;
    this.opacity = 1;
    this.r = center.y * 5;
    this.angle = Math.PI + Math.PI / 2.54;
    this.point = {
      x: 0,
      y: 0
    };
    this.getPoints = true;
    this.leftPoint = {
      x: 0,
      y: 0
    };
    this.rightPoint = {
      x: 0,
      y: 0
    };
    this.centerHitTimer = 50;
    this.roc = false; //right of center.

    this.moveRight = true;
    this.startDrops = true;
    this.dropsTimer = 400;
    this.noteBell1 = ABell;
    this.noteBell2 = CBell;
    this.noteBell3 = EBell;
    this.noteBell4 = AUBell;
  }

  _createClass(Chord, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = 'white';
      ctx.fillStyle = 'white';
      ctx.globalAlpha = this.opacity;
      ctx.lineWidth = this.lineWidth; //left point dot.

      ctx.beginPath();
      ctx.arc(this.leftPoint.x, this.leftPoint.y, 4, 0, Math.PI * 2);
      ctx.fill(); //right point dot.

      ctx.beginPath();
      ctx.arc(this.rightPoint.x, this.rightPoint.y, 4, 0, Math.PI * 2);
      ctx.fill(); //chord circle.

      ctx.beginPath();
      ctx.arc(this.x + this.point.x, this.y + this.point.y, 15, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(this.x + this.point.x, this.y + this.point.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.2;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.opacity > 0.2) {
        this.opacity -= 0.01;
      }

      if (this.lineWidth > 1) {
        this.lineWidth -= 0.1;
      }

      this.point.x = this.r * Math.cos(this.angle);
      this.point.y = this.r * Math.sin(this.angle);

      if (!this.roc) {
        if (this.moveRight) {
          this.angle += Math.PI / 180 / 40;
        } else {
          this.angle -= Math.PI / 180 / 40;
        }
      } else {
        if (this.moveRight) {
          this.angle -= Math.PI / 180 / 40;
        } else {
          this.angle += Math.PI / 180 / 40;
        }
      } //chord circle hits center.


      if (this.x + this.point.x >= center.x - 1 && this.x + this.point.x <= center.x + 1 && this.centerHitTimer <= 0) {
        if (this.moveRight) {
          this.roc = true;
          this.y = -canvas.height * 2;
          this.angle = Math.PI / 2;
        } else {
          this.roc = false;
          this.y = canvas.height * 3;
          this.angle = Math.PI + Math.PI / 2;
        }

        this.centerHitTimer = 50;
      } //chord circle hits right point.


      if (this.x + this.point.x >= this.rightPoint.x - 1 && this.x + this.point.x <= this.rightPoint.x + 1 && this.centerHitTimer <= 0) {
        this.moveRight = false;
        this.centerHitTimer = 50;
        changeChord();
        this.opacity = 1;
        this.lineWidth = 5;
        this.startDrops = true;
      } //chord circle hits left point.


      if (this.x + this.point.x >= this.leftPoint.x - 1 && this.x + this.point.x <= this.leftPoint.x + 1 && this.centerHitTimer <= 0) {
        this.moveRight = true;
        this.centerHitTimer = 50;
        changeChord();
        this.opacity = 1;
        this.lineWidth = 5;
        this.startDrops = true;
      }

      if (this.startDrops) {
        this.dropsTimer -= 1;

        if (this.moveRight) {
          if (this.dropsTimer == 300) {
            drops.push(new Drop(circles[0].x, circles[0].y));
            this.noteBell1.play();
          }

          if (this.dropsTimer == 200) {
            drops.push(new Drop(circles[1].x, circles[1].y));
            this.noteBell2.play();
          }

          if (this.dropsTimer == 100) {
            drops.push(new Drop(circles[2].x, circles[2].y));
            this.noteBell3.play();
          }

          if (this.dropsTimer <= 0) {
            drops.push(new Drop(circles[3].x, circles[3].y));
            this.noteBell4.play();
            this.dropsTimer = 400;
            this.startDrops = false;
          }
        } else {
          if (this.dropsTimer == 300) {
            drops.push(new Drop(circles[3].x, circles[3].y));
            this.noteBell1.play();
          }

          if (this.dropsTimer == 200) {
            drops.push(new Drop(circles[2].x, circles[2].y));
            this.noteBell2.play();
          }

          if (this.dropsTimer == 100) {
            drops.push(new Drop(circles[1].x, circles[1].y));
            this.noteBell3.play();
          }

          if (this.dropsTimer <= 0) {
            drops.push(new Drop(circles[0].x, circles[0].y));
            this.noteBell4.play();
            this.dropsTimer = 400;
            this.startDrops = false;
          }
        }
      } //calc point pos.


      if (this.getPoints) {
        this.getPoints = false;
        this.leftPoint = {
          x: this.x + this.point.x,
          y: this.y + this.point.y
        };
        var xpoint = this.r * Math.cos(Math.PI / 2.5);
        var ypoint = this.r * Math.sin(Math.PI / 2.5);
        this.rightPoint = {
          x: this.x + xpoint,
          y: -(canvas.height * 2) + ypoint
        };
      }

      if (this.angle >= Math.PI * 2) {
        this.angle = 0;
      }

      if (this.centerHitTimer > 0) {
        this.centerHitTimer -= 1;
      }

      this.draw();
    }
  }]);

  return Chord;
}();

function changeChord() {
  if (chordToPlay == 'Am') {
    chordToPlay = 'F';
    FBass.play();
  } else if (chordToPlay == 'F') {
    chordToPlay = 'C1';
    CBass.play();
  } else if (chordToPlay == 'C1') {
    chordToPlay = 'G1';
    GBass.play();
  } else if (chordToPlay == 'G1') {
    chordToPlay = 'Em';
    EBass.play();
  } else if (chordToPlay == 'Em') {
    chordToPlay = 'C2';
    CBass.play();
  } else if (chordToPlay == 'C2') {
    chordToPlay = 'G2';
    GBass.play();
  } else if (chordToPlay == 'G2') {
    chordToPlay = 'Dm';
    DBass.play();
  } else if (chordToPlay == 'Dm') {
    chordToPlay = 'Am';
    ABass.play();
  }

  if (chordToPlay == 'Am') {
    for (var i = 0; i < 36; i++) {
      notes[i].note = chordAm[i];
    }

    chord.noteBell1 = ABell;
    chord.noteBell2 = CBell;
    chord.noteBell3 = EBell;
    chord.noteBell4 = AUBell;
  }

  if (chordToPlay == 'F') {
    for (var _i = 0; _i < 36; _i++) {
      notes[_i].note = chordF[_i];
    }

    chord.noteBell1 = FBell;
    chord.noteBell2 = ABell;
    chord.noteBell3 = CBell;
    chord.noteBell4 = FUBell;
  }

  if (chordToPlay == 'C1' || chordToPlay == 'C2') {
    for (var _i2 = 0; _i2 < 36; _i2++) {
      notes[_i2].note = chordC[_i2];
    }

    chord.noteBell1 = CBell;
    chord.noteBell2 = EBell;
    chord.noteBell3 = GBell;
    chord.noteBell4 = CUBell;
  }

  if (chordToPlay == 'G1' || chordToPlay == 'G2') {
    for (var _i3 = 0; _i3 < 36; _i3++) {
      notes[_i3].note = chordG[_i3];
    }

    chord.noteBell1 = GBell;
    chord.noteBell2 = BBell;
    chord.noteBell3 = DBell;
    chord.noteBell4 = GUBell;
  }

  if (chordToPlay == 'Em') {
    for (var _i4 = 0; _i4 < 36; _i4++) {
      notes[_i4].note = chordEm[_i4];
    }

    chord.noteBell1 = EBell;
    chord.noteBell2 = ABell;
    chord.noteBell3 = BBell;
    chord.noteBell4 = BUBell;
  }

  if (chordToPlay == 'Dm') {
    for (var _i5 = 0; _i5 < 36; _i5++) {
      notes[_i5].note = chordDm[_i5];
    }

    chord.noteBell1 = DBell;
    chord.noteBell2 = FBell;
    chord.noteBell3 = AUBell;
    chord.noteBell4 = DUBell;
  }
}