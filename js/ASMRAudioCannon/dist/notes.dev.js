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
    this.r = 5;
    this.velocity = velocity;
    this.note = note;
    this.angles = 0;
    this.gravity = 0.00002;
    this.acceleration = 0;
  }

  _createClass(Note, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.strokeStyle = 'white';
      ctx.stroke();
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.velocity.y += this.acceleration;
      this.acceleration += this.gravity;
      this.draw();
    }
  }]);

  return Note;
}();

function forNotes() {
  notes.forEach(function (note, index) {
    if (note.y >= canvas.height - note.r) {
      note.note.currentTime = 0;
      note.note.play();

      for (var i = 0; i < 20; i++) {
        particles.push(new Particle(note.x, note.y, {
          x: Math.random() - 0.5,
          y: Math.random() - 1
        }));
      }

      notes.splice(index, 1);
    }

    note.update();
  });
}