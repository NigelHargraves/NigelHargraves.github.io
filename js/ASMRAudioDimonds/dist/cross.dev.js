"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cross =
/*#__PURE__*/
function () {
  function Cross() {
    _classCallCheck(this, Cross);

    this.x = center.x;
    this.y = center.y;
    this.leftLineWidth = 3;
    this.rightLineWidth = 3;
    this.bottomLineWidth = 3;
    this.topLineWidth = 3;
  }

  _createClass(Cross, [{
    key: "draw",
    value: function draw() {
      //right line.
      ctx.lineWidth = this.rightLineWidth;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x + circles[7].r, this.y);
      ctx.stroke(); //bottom line.

      ctx.lineWidth = this.bottomLineWidth;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x, this.y + circles[7].r);
      ctx.stroke(); //left line.

      ctx.lineWidth = this.leftLineWidth;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x - circles[7].r, this.y);
      ctx.stroke(); //top line.

      ctx.lineWidth = this.topLineWidth;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x, this.y - circles[7].r);
      ctx.stroke();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.rightLineWidth > 0.02) {
        this.rightLineWidth -= 0.1;
      }

      if (this.leftLineWidth > 0.02) {
        this.leftLineWidth -= 0.1;
      }

      if (this.bottomLineWidth > 0.02) {
        this.bottomLineWidth -= 0.1;
      }

      if (this.topLineWidth > 0.02) {
        this.topLineWidth -= 0.1;
      }

      this.draw();
    }
  }]);

  return Cross;
}();