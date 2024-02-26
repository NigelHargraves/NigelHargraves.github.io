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
    this.r = 30;
    this.velocity = 0;
    this.gravity = 0.00001;
    this.acceleration = 0;
    this.lineWidth = 1;
    this.opacity = 0.001;
  }

  _createClass(Chord, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.strokeStyle = 'white';
      ctx.lineWidth = this.lineWidth;
      ctx.globalAlpha = this.opacity;
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.4;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.opacity < 1) {
        this.opacity += 0.0004;
      }

      this.lineWidth += 0.01;
      this.y += this.velocity;
      this.velocity += this.acceleration;
      this.acceleration += this.gravity;
      this.draw();
    }
  }]);

  return Chord;
}();

function forChords() {
  chords.forEach(function (chord, index) {
    if (chord.y >= canvas.height - chord.r) {
      for (var i = 0; i < 100; i++) {
        particles.push(new Particle(chord.x, chord.y + chord.r));
      }

      chords.splice(index, 1);
    }

    chord.update();
  });
}