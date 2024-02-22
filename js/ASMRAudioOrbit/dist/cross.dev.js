"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cross =
/*#__PURE__*/
function () {
  function Cross(x, y) {
    _classCallCheck(this, Cross);

    this.x = x;
    this.y = y;
    this.opacityTop = 1;
    this.opacityBottom = 0.4;
    this.opacityLeft = 0.4;
    this.opacityRight = 0.4;
    this.opacityCenter = 1;
    this.lineWidthTop = 3;
    this.lineWidthBottom = 0.2;
    this.lineWidthLeft = 0.2;
    this.lineWidthRight = 0.2;
    this.colorTop = 'white';
    this.colorBottom = 'white';
    this.colorLeft = 'white';
    this.colorRight = 'white';
    this.topLine = true;
    this.bottomLine = false;
    this.leftLine = false;
    this.rightLine = false;
  }

  _createClass(Cross, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = 'white'; //center globe.

      ctx.beginPath();
      ctx.arc(center.x, center.y, 10, 0, Math.PI * 2);
      ctx.globalAlpha = this.opacityCenter;
      ctx.fill(); //top line.

      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x, 0);
      ctx.globalAlpha = this.opacityTop;
      ctx.lineWidth = this.lineWidthTop;
      ctx.strokeStyle = this.colorTop;
      ctx.stroke();
      ctx.globalAlpha = 0.4;
      ctx.lineWidth = 1; //bottom line.

      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x, canvas.height);
      ctx.globalAlpha = this.opacityBottom;
      ctx.lineWidth = this.lineWidthBottom;
      ctx.strokeStyle = this.colorBottom;
      ctx.stroke();
      ctx.globalAlpha = 0.4;
      ctx.lineWidth = 1; //left line.

      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(0, this.y);
      ctx.globalAlpha = this.opacityLeft;
      ctx.lineWidth = this.lineWidthLeft;
      ctx.strokeStyle = this.colorLeft;
      ctx.stroke();
      ctx.globalAlpha = 0.4;
      ctx.lineWidth = 1; //right line.

      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(canvas.width, this.y);
      ctx.globalAlpha = this.opacityRight;
      ctx.lineWidth = this.lineWidthRight;
      ctx.strokeStyle = this.colorRight;
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.4;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.opacityTop > 0.2) {
        this.opacityTop -= 0.001;
      }

      if (this.opacityBottom > 0.2) {
        this.opacityBottom -= 0.001;
      }

      if (this.opacityLeft > 0.2) {
        this.opacityLeft -= 0.001;
      }

      if (this.opacityRight > 0.2) {
        this.opacityRight -= 0.001;
      }

      if (this.opacityCenter >= 0.02) {
        this.opacityCenter -= 0.01;
      }

      if (this.lineWidthTop > 0.2) {
        this.lineWidthTop -= 0.05;
      }

      if (this.lineWidthBottom > 0.2) {
        this.lineWidthBottom -= 0.05;
      }

      if (this.lineWidthLeft > 0.2) {
        this.lineWidthLeft -= 0.05;
      }

      if (this.lineWidthRight > 0.2) {
        this.lineWidthRight -= 0.05;
      }

      this.draw();
    }
  }]);

  return Cross;
}();