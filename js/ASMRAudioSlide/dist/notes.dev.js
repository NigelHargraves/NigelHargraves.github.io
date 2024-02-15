"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Note =
/*#__PURE__*/
function () {
  function Note(x, y, velocity, note) {
    _classCallCheck(this, Note);

    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.note = note;
    this.r = canvas.width / 2 / 12 / 4;
    this.up = false;
    this.opacity = 1;
    this.lineWidth = 5;
  }

  _createClass(Note, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.globalAlpha = this.opacity;
      ctx.lineWidth = this.lineWidth;
      ctx.stroke();
      ctx.globalAlpha = 0.4;
      ctx.lineWidth = 1;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.opacity > 0.4) {
        this.opacity -= 0.01;
      }

      if (this.lineWidth > 1) {
        this.lineWidth -= 0.1;
      }

      if (this.up) {
        this.y -= this.velocity;
      } else {
        this.y += this.velocity;
      }

      if (this.y >= rectangle.y + canvas.height / 2) {
        this.note.play();
        this.y = rectangle.y + canvas.height / 2;
        this.opacity = 1;
        this.lineWidth = 5;
        this.up = true;
      }

      if (this.y <= rectangle.y) {
        this.note.play();
        this.y = rectangle.y;
        this.opacity = 1;
        this.lineWidth = 5;
        this.up = false;
      }

      this.draw();
    }
  }]);

  return Note;
}();

function forNotes() {
  if (chordToPlay == 'G') {
    for (var i = 0; i < 12; i++) {
      notes[i].note = chordC[i];
    }
  }

  if (chordToPlay == 'Am') {
    for (var _i = 0; _i < 12; _i++) {
      notes[_i].note = chordG[_i];
    }
  }

  if (chordToPlay == 'F') {
    for (var _i2 = 0; _i2 < 12; _i2++) {
      notes[_i2].note = chordAm[_i2];
    }
  }

  if (chordToPlay == 'C') {
    for (var _i3 = 0; _i3 < 12; _i3++) {
      notes[_i3].note = chordF[_i3];
    }
  }

  notes.forEach(function (note, index) {
    note.update();
  });
}