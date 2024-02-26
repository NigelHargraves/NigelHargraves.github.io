"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Note =
/*#__PURE__*/
function () {
  function Note(x, y, speed, angle, color, note) {
    _classCallCheck(this, Note);

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.angle = angle;
    this.color = color;
    this.note = note;
    this.smallRadius = 10;
    this.bigRadius = {
      x: canvas.height / 4,
      y: canvas.height / 8
    };
    this.point = {
      x: 0,
      y: 0
    };
    this.lineWidth = 1;
    this.opacity = 0.2;
  }

  _createClass(Note, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = this.color;
      ctx.fillStyle = this.color;
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(oval.rotation.x);
      ctx.beginPath();
      ctx.arc(0 + this.point.x, 0 + this.point.y, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(0 + this.point.x, 0 + this.point.y, this.smallRadius, 0, Math.PI * 2);
      ctx.lineWidth = this.lineWidth;
      ctx.globalAlpha = this.opacity;
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.4;
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

      this.point.x = oval.radius.x * Math.cos(this.angle);
      this.point.y = oval.radius.y * Math.sin(this.angle);
      this.angle += Math.PI / 180 / this.speed;

      if (this.angle >= Math.PI * 2) {
        this.angle = 0;
      }

      if (this.x + this.point.x <= center.x + 2 && this.x + this.point.x >= center.x - 2) {
        this.note.play();

        for (var i = 0; i < 10; i++) {
          particles.push(new Particle(this.point.x, this.point.y, this.color));
        }

        chord.color = this.color;
        this.lineWidth = 3;
        this.opacity = 1;
      }

      this.draw();
    }
  }]);

  return Note;
}();

function forNote() {
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

  if (chordToPlay == 'D') {
    for (var _i3 = 0; _i3 < 24; _i3++) {
      notes[_i3].note = chordD[_i3];
    }
  }

  if (chordToPlay == 'Cm') {
    for (var _i4 = 0; _i4 < 24; _i4++) {
      notes[_i4].note = chordCm[_i4];
    }
  }

  if (chordToPlay == 'E') {
    for (var _i5 = 0; _i5 < 24; _i5++) {
      notes[_i5].note = chordE[_i5];
    }
  }

  if (chordToPlay == 'Dm') {
    for (var _i6 = 0; _i6 < 24; _i6++) {
      notes[_i6].note = chordDm[_i6];
    }
  }

  if (chordToPlay == 'F') {
    for (var _i7 = 0; _i7 < 24; _i7++) {
      notes[_i7].note = chordF[_i7];
    }
  }

  if (chordToPlay == 'Em') {
    for (var _i8 = 0; _i8 < 24; _i8++) {
      notes[_i8].note = chordEm[_i8];
    }
  }

  if (chordToPlay == 'G') {
    for (var _i9 = 0; _i9 < 24; _i9++) {
      notes[_i9].note = chordG[_i9];
    }
  }

  if (chordToPlay == 'Fm') {
    for (var _i10 = 0; _i10 < 24; _i10++) {
      notes[_i10].note = chordFm[_i10];
    }
  }

  if (chordToPlay == 'A') {
    for (var _i11 = 0; _i11 < 24; _i11++) {
      notes[_i11].note = chordA[_i11];
    }
  }

  if (chordToPlay == 'Gm') {
    for (var _i12 = 0; _i12 < 24; _i12++) {
      notes[_i12].note = chordGm[_i12];
    }
  }

  if (chordToPlay == 'B') {
    for (var _i13 = 0; _i13 < 24; _i13++) {
      notes[_i13].note = chordB[_i13];
    }
  }

  notes.forEach(function (note, index) {
    note.update();
  });
}