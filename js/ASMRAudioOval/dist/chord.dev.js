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
    this.velocity = 1;
    this.up = false;
  }

  _createClass(Chord, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.translate(center.x, center.y);
      ctx.rotate(oval.rotation.x);
      ctx.beginPath();
      ctx.arc(0, -center.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(0, center.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(0, -center.y);
      ctx.lineTo(0, center.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(this.x, this.y, 20, 0, Math.PI * 2);
      ctx.strokeStyle = "White";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.up) {
        this.y += this.velocity;
      } else {
        this.y += -this.velocity;
      }

      if (this.y >= center.y) {
        for (var i = 0; i < 20; i++) {
          particles.push(new Particle(this.x, this.y, 'white'));
        }

        this.up = false;
      }

      if (this.y <= -center.y) {
        for (var _i = 0; _i < 20; _i++) {
          particles.push(new Particle(this.x, this.y, 'white'));
        }

        this.up = true;
      }

      this.draw();
    }
  }]);

  return Chord;
}();