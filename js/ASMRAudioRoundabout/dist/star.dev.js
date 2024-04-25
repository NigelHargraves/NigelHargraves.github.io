"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Star =
/*#__PURE__*/
function () {
  function Star(x, y, speed) {
    _classCallCheck(this, Star);

    this.x = x;
    this.y = y;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.angle = 0;
    this.speed = speed;
  }

  _createClass(Star, [{
    key: "draw",
    value: function draw() {
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
      ctx.fill();
    }
  }, {
    key: "update",
    value: function update() {
      this.speed -= this.speed * 0.005;
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.angle = Math.atan2(center.y - this.y, center.x - this.x);
      this.velocity.x = Math.cos(this.angle) * this.speed;
      this.velocity.y = Math.sin(this.angle) * this.speed;
      this.draw();
    }
  }]);

  return Star;
}();

function forStars() {
  stars.forEach(function (star, index) {
    if (star.x >= center.x - 1 && star.x <= center.x + 1 && star.y >= center.y - 1 && star.y <= center.y + 1) {
      road.centerStarRadius += 2;
      stars.splice(index, 1);
    }

    star.update();
  });
}