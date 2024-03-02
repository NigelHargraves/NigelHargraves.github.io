"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pentagon =
/*#__PURE__*/
function () {
  function Pentagon(x, y) {
    _classCallCheck(this, Pentagon);

    this.x = x;
    this.y = y;
    this.r = 100;
    this.angle = 0;
    this.point = {
      x: 0,
      y: 0
    };
  }

  _createClass(Pentagon, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = 'white';
      ctx.beginPath();
      ctx.moveTo(this.point.x, this.point.y);
      this.angle += Math.PI / 180 / 5;
      this.point.x = this.r * Math.cos(this.angle);
      this.point.y = this.r * Math.sin(this.angle);
      ctx.lineTo(this.point.x, this.point.y);
      ctx.stroke();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return Pentagon;
}();