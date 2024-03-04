"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Particle =
/*#__PURE__*/
function () {
  function Particle(x, y, radius, color, translate, velocity) {
    _classCallCheck(this, Particle);

    this.x = x;
    this.y = y;
    this.r = radius;
    this.color = color;
    this.translate = {
      x: translate.x,
      y: translate.y
    };
    this.velocity = velocity;
    this.opacity = 1;
  }

  _createClass(Particle, [{
    key: "draw",
    value: function draw() {
      ctx.fillStyle = this.color;
      ctx.save();
      ctx.translate(this.translate.x, this.translate.y);
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.globalAlpha = this.opacity;
      ctx.fill();
      ctx.globalAlpha = 0.4;
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.opacity -= 0.001;
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