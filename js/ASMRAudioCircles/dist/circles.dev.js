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
    this.horizontalLeftLineWidth = 1;
    this.verticalTopLineWidth = 1;
    this.horizontalRightLineWidth = 1;
    this.verticalBottomLineWidth = 1;
    this.colorTop = 'white';
    this.colorBottom = 'white';
    this.colorLeft = 'white';
    this.colorRight = 'white';
  }

  _createClass(Circle, [{
    key: "draw",
    value: function draw() {
      //circles.
      ctx.strokeStyle = 'white';
      ctx.beginPath();
      ctx.arc(this.x, this.y, 200, 0, Math.PI * 2);
      ctx.stroke(); //crosses.

      ctx.beginPath();
      ctx.moveTo(this.x - 240, this.y);
      ctx.lineTo(this.x, this.y);
      ctx.lineWidth = this.horizontalLeftLineWidth;
      ctx.strokeStyle = this.colorLeft;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x + 240, this.y);
      ctx.lineWidth = this.horizontalRightLineWidth;
      ctx.strokeStyle = this.colorRight;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(this.x, this.y - 240);
      ctx.lineTo(this.x, this.y);
      ctx.lineWidth = this.verticalTopLineWidth;
      ctx.strokeStyle = this.colorTop;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x, this.y + 240);
      ctx.lineWidth = this.verticalBottomLineWidth;
      ctx.strokeStyle = this.colorBottom;
      ctx.stroke();
      ctx.lineWidth = 1; //chord line.

      ctx.lineWidth = chord.lineWidth;
      ctx.globalAlpha = chord.opacity;
      ctx.beginPath();
      ctx.arc(center.x, canvas.height * 3, center.y * 5, -Math.PI / 2, -Math.PI / 1.65, true);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(center.x, -(canvas.height * 2), center.y * 5, Math.PI / 2, Math.PI / 2.5, true);
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.2;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.horizontalLeftLineWidth > 1) {
        this.horizontalLeftLineWidth -= 0.1;
      }

      if (this.horizontalRightLineWidth > 1) {
        this.horizontalRightLineWidth -= 0.1;
      }

      if (this.verticalTopLineWidth > 1) {
        this.verticalTopLineWidth -= 0.1;
      }

      if (this.verticalBottomLineWidth > 1) {
        this.verticalBottomLineWidth -= 0.1;
      }

      this.draw();
    }
  }]);

  return Circle;
}();

function forCircles() {
  circles.forEach(function (circle, index) {
    circle.update();
  });
}