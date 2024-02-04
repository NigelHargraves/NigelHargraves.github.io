"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Circle =
/*#__PURE__*/
function () {
  function Circle(x, y) {
    _classCallCheck(this, Circle);

    this.x = x;
    this.y = y;
    this.opacity = 1;
    this.r = canvas.height / 4;
    this.lineWidth = 5;
  }

  _createClass(Circle, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2);
      ctx.fillStyle = "aqua";
      ctx.fill();
      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.strokeStyle = "aqua";
      ctx.lineWidth = this.lineWidth;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(this.x, 0);
      ctx.lineTo(this.x, canvas.height);
      ctx.moveTo(0, this.y - this.r);
      ctx.lineTo(canvas.width, this.y - this.r);
      ctx.stroke();
      ctx.lineWidth = 0.1;
      ctx.globalAlpha = 0.2;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.opacity > 0.2) {
        this.opacity -= 0.01;
      }

      if (this.lineWidth > 0.1) {
        this.lineWidth -= 0.01;
      }

      this.draw();
    }
  }]);

  return Circle;
}();