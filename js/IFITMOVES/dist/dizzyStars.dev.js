"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DizzyStar =
/*#__PURE__*/
function () {
  function DizzyStar(x, y) {
    _classCallCheck(this, DizzyStar);

    this.x = x;
    this.y = y;
    this.size = Math.random() * 60;
    this.velocity = {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5
    };
    this.opacity = 1;
  }

  _createClass(DizzyStar, [{
    key: "draw",
    value: function draw() {
      ctx.globalAlpha = this.opacity;
      ctx.drawImage(dizzyStar, floor.x + this.x, floor.y + this.y, this.size, this.size);
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

  return DizzyStar;
}();

function forDizzyStars() {
  dizzyStars.forEach(function (star, index) {
    if (star.opacity <= 0) {
      dizzyStars.splice(index, 1);
    }

    star.update();
  });
}