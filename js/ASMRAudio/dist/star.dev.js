"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Star =
/*#__PURE__*/
function () {
  function Star(x, y, image) {
    _classCallCheck(this, Star);

    this.x = x;
    this.y = y;
    this.image = image;
    this.size = Math.random() * 30 + 20;
    this.velocity = {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5
    };
    this.opacity = 1;
  }

  _createClass(Star, [{
    key: "draw",
    value: function draw() {
      ctx.globalAlpha = this.opacity;
      ctx.drawImage(this.image, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
      ctx.globalAlpha = 1;
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.opacity -= 0.01;
      this.draw();
    }
  }]);

  return Star;
}();

function forStar() {
  stars.forEach(function (star, index) {
    if (star.opacity <= 0) {
      stars.splice(index, 1);
    }

    star.update();
  });
}