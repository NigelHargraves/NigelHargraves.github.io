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
    this.opacity = 1;
    this.velocity = {
      x: (Math.random() - 0.5) / 4,
      y: (Math.random() - 0.5) / 4
    };
    this.changeDirection = 100;
  }

  _createClass(Star, [{
    key: "draw",
    value: function draw() {
      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
      ctx.strokeStyle = "white";
      ctx.stroke();
      ctx.globalAlpha = 0.2;
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      if (this.opacity > 0) {
        this.opacity -= 0.001;
      }

      this.changeDirection -= 1;

      if (this.changeDirection <= 0) {
        this.velocity.x = (Math.random() - 0.5) / 4;
        this.velocity.y = (Math.random() - 0.5) / 4;
        this.changeDirection = 10;
      }

      this.draw();
    }
  }]);

  return Star;
}();

function forStars() {
  stars.forEach(function (star, index) {
    if (star.opacity <= 0.1) {
      stars.splice(index, 1);
    }

    star.update();
  });
}