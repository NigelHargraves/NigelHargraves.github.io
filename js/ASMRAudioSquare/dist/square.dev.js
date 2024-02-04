"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Square =
/*#__PURE__*/
function () {
  function Square(x, y) {
    _classCallCheck(this, Square);

    this.x = x;
    this.y = y;
    this.opacity = 0.2;
    this.rotateAngle = 0;
    this.lineWidth = 5;
  }

  _createClass(Square, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotateAngle);
      ctx.beginPath();
      ctx.rect(0 - canvas.height / 4, 0 - canvas.height / 4, canvas.height / 2, canvas.height / 2);
      ctx.strokeStyle = "gold";
      ctx.globalAlpha = this.opacity;
      ctx.lineWidth = this.lineWidth;
      ctx.stroke();
      ctx.restore();
      ctx.globalAlpha = 0.2;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.opacity > 0.2) {
        this.opacity -= 0.1;
      }

      if (this.lineWidth > 0.2) {
        this.lineWidth -= 0.1;
      }

      this.rotateAngle += Math.PI / 180 / 20;

      if (this.rotateAngle >= Math.PI * 2) {
        this.rotateAngle = 0;
      }
      /*
      ctx.font = "bold 30px Arial";
      ctx.fillStyle = "white";
      ctx.fillText("Angle = " + this.rotateAngle, (canvas.width / 2), canvas.height * 0.040);
      */


      this.draw();
    }
  }]);

  return Square;
}();