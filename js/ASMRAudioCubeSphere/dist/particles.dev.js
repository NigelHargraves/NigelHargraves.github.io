"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Particle =
/*#__PURE__*/
function () {
  function Particle(x, y) {
    _classCallCheck(this, Particle);

    this.x = x;
    this.y = y;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.aim = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height
    };
    this.angles = 0;
    this.opacity = 1;
  }

  _createClass(Particle, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = 'coral';
      ctx.beginPath();
      ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
      ctx.globalAlpha = this.opacity;
      ctx.stroke();
      ctx.globalAlpha = 0.4;
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.angles = Math.atan2(this.aim.y - this.y, this.aim.x - this.x);
      this.velocity.x = Math.cos(this.angles) * 2;
      this.velocity.y = Math.sin(this.angles) * 2;
      this.opacity -= 0.01;
      this.draw();
    }
  }]);

  return Particle;
}();

function forParticles() {
  particles.forEach(function (particle, index) {
    if (particle.opacity < 0.01) {
      particles.splice(index, 1);
    }

    particle.update();
  });
}