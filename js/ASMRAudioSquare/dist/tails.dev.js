"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tail =
/*#__PURE__*/
function () {
  function Tail(x, y) {
    _classCallCheck(this, Tail);

    this.x = x;
    this.y = y;
    this.opacity = 1;
    this.velocity = {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5
    };
  }

  _createClass(Tail, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.translate(square.x, square.y);
      ctx.rotate(square.rotateAngle);
      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.arc(this.x - canvas.width / 2, this.y - canvas.height / 2, 1, 0, Math.PI * 2);
      ctx.strokeStyle = "darkorchid";
      ctx.stroke();
      ctx.globalAlpha = 0.2;
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      if (this.opacity > 0) {
        this.opacity -= 0.005;
      }

      this.draw();
    }
  }]);

  return Tail;
}();

function forTails() {
  tails.forEach(function (tail, index) {
    if (tail.opacity <= 0.1) {
      tails.splice(index, 1);
    }

    tail.update();
  });
}