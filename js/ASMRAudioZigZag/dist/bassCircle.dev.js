"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BassCircle =
/*#__PURE__*/
function () {
  function BassCircle(x, y) {
    _classCallCheck(this, BassCircle);

    this.x = x;
    this.y = y;
    this.r = 1;
    this.opacity = 1;
  }

  _createClass(BassCircle, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = 'Turquoise';
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

  return BassCircle;
}();

function forBassCircles() {
  bassCircles.forEach(function (bs, index) {
    if (bs.opacity <= 0.02) {
      bassCircles.splice(index, 1);
    }

    bs.update();
  });
}