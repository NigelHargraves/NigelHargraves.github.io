"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Kick =
/*#__PURE__*/
function () {
  function Kick(x, y) {
    _classCallCheck(this, Kick);

    this.x = x;
    this.y = y;
    this.r = 100;
    this.opacity = 1;
  }

  _createClass(Kick, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = 'slateblue';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.globalAlpha = this.opacity;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.globalAlpha = 0.2;
    }
  }, {
    key: "update",
    value: function update() {
      this.r += 1;

      if (this.opacity > 0.02) {
        this.opacity -= 0.01;
      }

      this.draw();
    }
  }]);

  return Kick;
}();

function forKicks() {
  kicks.forEach(function (kick, index) {
    if (kick.opacity <= 0.02) {
      kicks.splice(index, 1);
    }

    kick.update();
  });
}