"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Note =
/*#__PURE__*/
function () {
  function Note(x, y, velocity, note, acceleration) {
    _classCallCheck(this, Note);

    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.setVelocity = this.velocity;
    this.note = note;
    this.acceleration = acceleration;
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
        if (this.y < rectangle.y + canvas.height / 4) {
          this.r += 0.03;
        } else {
          this.r -= 0.03;
        }

        if (this.y > y) {
          this.velocity += this.acceleration;
        } else {
          this.velocity -= this.acceleration;
        }

        this.y -= this.velocity;
      } else {
        if (this.y < rectangle.y + canvas.height / 4) {
          this.r += 0.07;
        } else {
          this.r -= 0.07;
        }

        if (this.y < y) {
          this.velocity += this.acceleration;
        } else {
          this.velocity -= this.acceleration;
        }

        this.y += this.velocity;
      }

      if (this.y >= rectangle.y + canvas.height / 2) {
        for (var i = 0; i < 10; i++) {
          particles.push(new Particle(this.x - this.r * 2 + Math.random() * (this.r * 4), this.y, {
            x: 0,
            y: (-this.velocity + Math.random()) / 2
          }, 40));
        }

        this.velocity = this.setVelocity;
        this.r = canvas.width / 2 / 12 / 4;
        this.note.play();
        this.y = rectangle.y + canvas.height / 2;
        bounceLines.push(new BounceLine(this.x - rectangle.space / 2, this.y, false));
        this.opacity = 1;
        this.lineWidth = 5;
        this.up = true;
      }

      if (this.y <= rectangle.y) {
        for (var _i = 0; _i < 10; _i++) {
          particles.push(new Particle(this.x - this.r * 2 + Math.random() * (this.r * 4), this.y, {
            x: 0,
            y: (this.velocity + Math.random()) / 2
          }, 40));
        }

        this.velocity = this.setVelocity;
        this.r = canvas.width / 2 / 12 / 4;
        this.note.play();
        this.y = rectangle.y;
        bounceLines.push(new BounceLine(this.x - rectangle.space / 2, this.y, true));
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
    for (var _i2 = 0; _i2 < 12; _i2++) {
      notes[_i2].note = chordG[_i2];
    }
  }

  if (chordToPlay == 'F') {
    for (var _i3 = 0; _i3 < 12; _i3++) {
      notes[_i3].note = chordAm[_i3];
    }
  }

  if (chordToPlay == 'C') {
    for (var _i4 = 0; _i4 < 12; _i4++) {
      notes[_i4].note = chordF[_i4];
    }
  }

  notes.forEach(function (note, index) {
    note.update();
  });
}