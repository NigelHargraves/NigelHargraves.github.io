"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BounceLine =
/*#__PURE__*/
function () {
  function BounceLine(x, y, top, color) {
    _classCallCheck(this, BounceLine);

    this.x = x;
    this.y = y;
    this.top = top;
    this.color = color;
    this.lineWidth = 15;
  }

  _createClass(BounceLine, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = this.color;
      ctx.beginPath();

      if (this.top) {
        ctx.moveTo(this.x, this.y + this.lineWidth / 2);
        ctx.lineTo(this.x + rectangle.space, this.y + this.lineWidth / 2);
      } else {
        ctx.moveTo(this.x, this.y - this.lineWidth / 2);
        ctx.lineTo(this.x + rectangle.space, this.y - this.lineWidth / 2);
      }

      ctx.lineWidth = this.lineWidth;
      ctx.stroke();
      ctx.lineWidth = 1;
    }
  }, {
    key: "update",
    value: function update() {
      this.lineWidth -= 0.1;
      this.draw();
    }
  }]);

  return BounceLine;
}();

function forBounceLines() {
  bounceLines.forEach(function (bl, index) {
    if (bl.lineWidth < 0.1) {
      bounceLines.splice(index, 1);
    }

    bl.update();
  });
}