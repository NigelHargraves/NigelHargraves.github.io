"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InfinityLoop =
/*#__PURE__*/
function () {
  function InfinityLoop() {
    _classCallCheck(this, InfinityLoop);

    this.point1 = {
      x: center.x / 2,
      y: center.y
    };
    this.point2 = {
      x: center.x + this.point1.x,
      y: center.y
    };
    this.point3 = {
      x: center.x / 2,
      y: 0
    };
    this.point4 = {
      x: center.x + this.point1.x,
      y: canvas.height
    };
    this.point5 = {
      x: center.x / 2,
      y: canvas.height
    };
    this.point6 = {
      x: center.x + this.point1.x,
      y: 0
    };
    this.lineWidth = 5;
    this.color = 'white';
  }

  _createClass(InfinityLoop, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = this.color;
      ctx.fillStyle = this.color;
      ctx.lineWidth = this.lineWidth;
      ctx.beginPath();
      ctx.arc(this.point1.x, this.point1.y, 200, Math.PI / 2, Math.PI / 2 * 3);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(this.point2.x, this.point2.y, 200, Math.PI / 2 * 3, Math.PI / 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(this.point3.x, this.point3.y, 663, 688, 0, Math.PI / 4, Math.PI / 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(this.point4.x, this.point4.y, 663, 688, 0, Math.PI + Math.PI / 4, Math.PI / 2 * 3);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(this.point5.x, this.point5.y, 663, 688, 0, Math.PI / 2 * 3, Math.PI / 2 * 3 + Math.PI / 4);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(this.point6.x, this.point6.y, 663, 688, 0, Math.PI / 2, Math.PI / 2 + Math.PI / 4);
      ctx.stroke(); //left point.

      ctx.beginPath();
      ctx.arc(this.point1.x - 200, this.point1.y, 2, 0, Math.PI * 2);
      ctx.fill(); //right point.

      ctx.beginPath();
      ctx.arc(center.x + this.point1.x + 200, this.point1.y, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.lineWidth = 1;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.lineWidth > 0.2) {
        this.lineWidth -= 0.1;
      }

      this.draw();
    }
  }]);

  return InfinityLoop;
}();