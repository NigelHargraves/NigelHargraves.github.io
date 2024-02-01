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
    this.opacity = 1;
  }

  _createClass(Cross, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x, 0);
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x, canvas.height);
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(0, this.y);
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(canvas.width, this.y);
      ctx.strokeStyle = "yellow";
      ctx.globalAlpha = this.opacity;
      ctx.stroke();
      ctx.globalAlpha = 1;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.opacity > 0.2) {
        this.opacity -= 0.01;
      }

      this.draw();
    }
  }]);

  return Cross;
}();