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
  }

  _createClass(Square, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.rect(this.x - canvas.height / 4, this.y - canvas.height / 4, canvas.height / 2, canvas.height / 2);
      ctx.strokeStyle = "gold";
      ctx.globalAlpha = this.opacity;
      ctx.stroke();
      ctx.globalAlpha = 0.2;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.opacity > 0.2) {
        this.opacity -= 0.1;
      }

      this.draw();
    }
  }]);

  return Square;
}();