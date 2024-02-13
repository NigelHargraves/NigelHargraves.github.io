"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dust =
/*#__PURE__*/
function () {
  function Dust(x, y, vx, vy, number) {
    _classCallCheck(this, Dust);

    this.x = x;
    this.y = y;
    this.velocity = {
      x: vx,
      y: vy
    };
    this.number = number;
    this.opacity = 1;
  }

  _createClass(Dust, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 0.1, 0, Math.PI * 2);
      ctx.globalAlpha = this.opacity;
      ctx.strokeStyle = color[this.number];
      ctx.stroke();
      ctx.strokeStyle = 'white';
      ctx.globalAlpha = 1;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.opacity > 0) {
        this.opacity -= 0.01;
      }

      this.x += -this.velocity.x;
      this.y += -this.velocity.y;
      this.draw();
    }
  }]);

  return Dust;
}();

function forDusts() {
  dusts.forEach(function (dust, index) {
    if (dust.opacity <= 0) {
      dusts.splice(index, 1);
    }

    dust.update();
  });
}