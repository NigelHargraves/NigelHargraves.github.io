"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Particle =
/*#__PURE__*/
function () {
  function Particle(x, y, velocity, color) {
    _classCallCheck(this, Particle);

    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.color = color;
    this.opacity = 1;
    this.gravity = 0.00001;
    this.acceleration = 0;
  }

  _createClass(Particle, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 0.4, 0, Math.PI * 2);
      ctx.strokeStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.stroke();
      ctx.globalAlpha = 0.4;
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.velocity.y += this.acceleration;
      this.acceleration += this.gravity;

      if (this.y >= canvas.height) {
        this.velocity.y = -this.velocity.y;
      }

      this.opacity -= 0.002;
      this.draw();
    }
  }]);

  return Particle;
}();

function forParticles() {
  particles.forEach(function (particle, index) {
    if (particle.opacity <= 0.01) {
      particles.splice(index, 1);
    }

    particle.update();
  });
}