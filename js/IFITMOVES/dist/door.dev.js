"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Door =
/*#__PURE__*/
function () {
  function Door(x, y, direction) {
    _classCallCheck(this, Door);

    this.x = x;
    this.y = y;
    this.horizontal = direction;
    this.on = true;
  }

  _createClass(Door, [{
    key: "draw",
    value: function draw() {
      if (!this.horizontal) {
        ctx.drawImage(keyHoleRed, floor.x + this.x, floor.y + this.y, 100, 100);
        ctx.beginPath();
        ctx.moveTo(floor.x + this.x, floor.y + this.y);

        for (var i = 10; i <= 100; i += 10) {
          ctx.lineTo(this.x - 10 + Math.random() * 20 + floor.x, this.y + i + floor.y);
        }

        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(floor.x + this.x, floor.y + this.y);

        for (var _i = 10; _i <= 100; _i += 10) {
          ctx.lineTo(this.x - 10 + Math.random() * 20 + floor.x, this.y + _i + floor.y);
        }

        ctx.strokeStyle = "white";
        ctx.stroke();
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return Door;
}();