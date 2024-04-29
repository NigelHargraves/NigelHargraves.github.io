"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Arrows =
/*#__PURE__*/
function () {
  function Arrows() {
    _classCallCheck(this, Arrows);

    this.x = center.x;
    this.y = center.y;
    this.size = 250;
    this.angle = 0;
  }

  _createClass(Arrows, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.drawImage(arrows, 0 - this.size / 2, 0 - this.size / 2, this.size, this.size);
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      this.angle += Math.PI / 180 / 20;

      if (this.angle >= Math.PI * 2) {
        this.angle = 0;
      }

      this.draw();
    }
  }]);

  return Arrows;
}();