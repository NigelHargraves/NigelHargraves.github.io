"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Star =
/*#__PURE__*/
function () {
  //construct Star data.
  function Star(x, y) {
    _classCallCheck(this, Star);

    this.x = x;
    this.y = y;
  }

  _createClass(Star, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.translate(center.x, center.y);
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.restore();
    } //update Star.

  }, {
    key: "update",
    value: function update() {
      this.x *= 1.001;
      this.y *= 1.001;
      this.draw();
    }
  }]);

  return Star;
}();

function forStars() {
  stars.forEach(function (star, index) {
    if (star.x > canvas.width / 2 || star.x < -canvas.width / 2) {
      stars.splice(index, 1);
    }

    if (star.y > canvas.height / 2 || star.y < -canvas.height / 2) {
      stars.splice(index, 1);
    }

    star.update();
  });
}