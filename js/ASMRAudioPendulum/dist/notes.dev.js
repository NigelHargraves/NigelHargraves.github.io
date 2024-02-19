"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Note =
/*#__PURE__*/
function () {
  function Note(x, y, radius, note, number) {
    _classCallCheck(this, Note);

    this.x = x;
    this.y = y;
    this.r = radius;
    this.note = note;
    this.number = number;
    this.swing = this.x;
    this.angle = -0.57;
    this.velocity = 0;
    this.acceleration = 0;
    this.force = 0;
    this.opacity = 1;
    this.lineWidth = 3;
  }

  _createClass(Note, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = color[this.number];
      ctx.fillStyle = color[this.number]; //draw pendulum arm.

      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(x, 0);
      ctx.globalAlpha = this.opacity;
      ctx.lineWidth = this.lineWidth;
      ctx.stroke(); //draw note.

      ctx.beginPath();
      ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 0.4;
      ctx.lineWidth = 1;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.opacity > 0.4) {
        this.opacity -= 0.01;
      }

      if (this.lineWidth > 0.4) {
        this.lineWidth -= 0.01;
      } //calculate pendulum movement.


      this.force = gravity * Math.sin(this.angle);
      this.acceleration = -1 * this.force / this.r;
      this.velocity += this.acceleration;
      this.angle += this.velocity;
      this.x = this.r * Math.sin(this.angle) + x;
      this.y = this.r * Math.cos(this.angle);

      if (this.x <= this.swing + 0.1 && this.x >= this.swing - 0.1) {
        this.note.play();
        this.lineWidth = 3;
        this.opacity = 1;
        lines.lineWidthLeft = 3;
        lines.opacityLeft = 1;
        lines.colorLeft = color[this.number];
      }

      if (this.x <= x + (x - this.swing) + 0.1 && this.x >= x + (x - this.swing) - 0.1) {
        this.note.play();
        this.lineWidth = 3;
        this.opacity = 1;
        lines.lineWidthRight = 3;
        lines.opacityRight = 1;
        lines.colorRight = color[this.number];
      }

      if (this.x <= this.swing + 0.1 && this.x >= this.swing - 0.1) {
        this.x = this.swing;
      }

      this.draw();
    }
  }]);

  return Note;
}();

function forNotes() {
  if (chordToPlay == 'Am1' || chordToPlay == 'Am2' || chordToPlay == 'Am3' || chordToPlay == 'Am4') {
    for (var i = 0; i < 24; i++) {
      notes[i].note = chordAm[i];
    }
  }

  if (chordToPlay == 'F1' || chordToPlay == 'F2' || chordToPlay == 'F3') {
    for (var _i = 0; _i < 24; _i++) {
      notes[_i].note = chordF[_i];
    }
  }

  if (chordToPlay == 'C1' || chordToPlay == 'C2' || chordToPlay == 'C3') {
    for (var _i2 = 0; _i2 < 24; _i2++) {
      notes[_i2].note = chordC[_i2];
    }
  }

  if (chordToPlay == 'G1' || chordToPlay == 'G2') {
    for (var _i3 = 0; _i3 < 24; _i3++) {
      notes[_i3].note = chordG[_i3];
    }
  }

  if (chordToPlay == 'Em') {
    for (var _i4 = 0; _i4 < 24; _i4++) {
      notes[_i4].note = chordEm[_i4];
    }
  }

  if (chordToPlay == 'Dm7') {
    for (var _i5 = 0; _i5 < 24; _i5++) {
      notes[_i5].note = chordDm7[_i5];
    }
  }

  if (chordToPlay == 'Gsus4') {
    for (var _i6 = 0; _i6 < 24; _i6++) {
      notes[_i6].note = chordGsus4[_i6];
    }
  }

  if (chordToPlay == 'E71' || chordToPlay == 'E72') {
    for (var _i7 = 0; _i7 < 24; _i7++) {
      notes[_i7].note = chordE7[_i7];
    }
  }

  notes.forEach(function (note, index) {
    note.update();
  });
}