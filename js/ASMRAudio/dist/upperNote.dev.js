"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UpperNote =
/*#__PURE__*/
function () {
  function UpperNote(x, y, note) {
    _classCallCheck(this, UpperNote);

    this.x = x;
    this.y = y;
    this.note = note;
    this.r = 20;
    this.velocity = {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2
    };
    this.opacity = 0.4;
    this.noteLife = 500;
    this.lineWidth = 1;
  }

  _createClass(UpperNote, [{
    key: "draw",
    value: function draw() {
      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.strokeStyle = "green";
      ctx.lineWidth = this.lineWidth;
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.globalApha = 1;
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      if (this.x + this.r >= canvas.width || this.x - this.r <= 0) {
        this.velocity.x = -this.velocity.x;
        this.note.play();
        this.opacity = 1;
        this.lineWidth = 5;
      }

      if (this.y + this.r >= canvas.height || this.y - this.r <= 0) {
        this.velocity.y = -this.velocity.y;
        this.note.play();
        this.opacity = 1;
        this.lineWidth = 5;
      }

      if (this.opacity > 0.4) {
        stars.push(new Star(this.x, this.y, starGreen));
        this.opacity -= 0.01;
      }

      if (this.lineWidth > 1) {
        this.lineWidth -= 0.1;
      }

      this.noteLife -= 0.1;
      this.draw();
    }
  }]);

  return UpperNote;
}();

function forUpperNote() {
  upperNotes.forEach(function (upperNote, index) {
    //change chord.
    if (chordChange == 'C' && changeChordUpperNotes) {
      if (upperNote.note == D) {
        upperNote.note = C;
      }

      if (upperNote.note == G) {
        upperNote.note = E;
      }

      if (upperNote.note == B) {
        upperNote.note = G;
      }
    }

    if (chordChange == 'D' && changeChordUpperNotes) {
      if (upperNote.note == C) {
        upperNote.note = D;
      }

      if (upperNote.note == E) {
        upperNote.note = FS;
      }

      if (upperNote.note == G) {
        upperNote.note = A;
      }
    }

    if (chordChange == 'F' && changeChordUpperNotes) {
      if (upperNote.note == D) {
        upperNote.note = C;
      }

      if (upperNote.note == FS) {
        upperNote.note = F;
      }

      if (upperNote.note == A) {
        upperNote.note = A;
      }
    }

    if (chordChange == 'G' && changeChordUpperNotes) {
      if (upperNote.note == C) {
        upperNote.note = D;
      }

      if (upperNote.note == F) {
        upperNote.note = G;
      }

      if (upperNote.note == A) {
        upperNote.note = B;
      }
    }

    if (upperNote.noteLife <= 0) {
      upperNotes.splice(index, 1);
    }

    if (upperNote.x <= canvas.width / 2 + 0.4 && upperNote.x >= canvas.width / 2 - 0.4) {
      upperNote.note.play();
      upperNote.opacity = 1;
      upperNote.lineWidth = 5;
      cross.opacity = 1;
    }

    if (upperNote.y <= canvas.height / 2 + 0.4 && upperNote.y >= canvas.height / 2 - 0.4) {
      upperNote.note.play();
      upperNote.opacity = 1;
      upperNote.lineWidth = 5;
      cross.opacity = 1;
    }

    upperNote.update();
  });
  changeChordUpperNotes = false;
}