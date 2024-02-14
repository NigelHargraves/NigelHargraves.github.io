"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Star =
/*#__PURE__*/
function () {
  function Star(x, y) {
    _classCallCheck(this, Star);

    this.x = x;
    this.y = y;
    this.rotateAngle = 0;
  }

  _createClass(Star, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(this.rotateAngle);
      ctx.beginPath();
      ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
      ctx.strokeStyle = 'white';
      ctx.stroke();
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      this.rotateAngle -= Math.PI / 180 / 20;

      if (this.rotateAngle <= -Math.PI * 2) {
        this.rotateAngle = 0;
      }

      this.draw();
    }
  }]);

  return Star;
}();

function forStars() {
  stars.forEach(function (star, index) {
    star.update();
  });
}