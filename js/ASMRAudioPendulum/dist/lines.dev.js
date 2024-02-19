"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Line =
/*#__PURE__*/
function () {
  function Line() {
    _classCallCheck(this, Line);

    this.opacityLeft = 1;
    this.lineWidthLeft = 3;
    this.opacityRight = 1;
    this.lineWidthRight = 3;
    this.colorLeft = 'white';
    this.colorRight = 'white';
  }

  _createClass(Line, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = 'white';
      ctx.beginPath();
      ctx.arc(x, 0, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x / 2, y + y / 2);
      ctx.globalAlpha = this.opacityLeft;
      ctx.lineWidth = this.lineWidthLeft;
      ctx.strokeStyle = this.colorLeft;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + x / 2, y + y / 2);
      ctx.globalAlpha = this.opacityRight;
      ctx.lineWidth = this.lineWidthRight;
      ctx.strokeStyle = this.colorRight;
      ctx.stroke();
      ctx.globalAlpha = 0.4;
      ctx.lineWidth = 1;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.opacityLeft > 0.4) {
        this.opacityLeft -= 0.01;
      }

      if (this.lineWidthLeft > 0.4) {
        this.lineWidthLeft -= 0.1;
      }

      if (this.opacityRight > 0.4) {
        this.opacityRight -= 0.01;
      }

      if (this.lineWidthRight > 0.4) {
        this.lineWidthRight -= 0.1;
      }

      this.draw();
    }
  }]);

  return Line;
}();