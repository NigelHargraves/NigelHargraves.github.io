"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create Particle class.
var Particle =
/*#__PURE__*/
function () {
  //construct Particle data.
  function Particle(x, y, radius, velocity, color, alpha) {
    _classCallCheck(this, Particle);

    this.x = x;
    this.y = y;
    this.r = radius;
    this.velX = velocity.x;
    this.velY = velocity.y;
    this.c = color;
    this.a = alpha;
  }

  _createClass(Particle, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.shadowBlur = 20;
      ctx.shadowColor = "grey";
      ctx.globalAlpha = this.a;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.c;
      ctx.fill();
      ctx.restore();
    } //update Particle.

  }, {
    key: "update",
    value: function update() {
      this.x += this.velX + -player.velocity.x;
      this.y += this.velY;
      this.a -= 0.01;
      this.draw();
    }
  }]);

  return Particle;
}();