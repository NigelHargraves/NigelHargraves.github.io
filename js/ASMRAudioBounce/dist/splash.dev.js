"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Splash =
/*#__PURE__*/
function () {
  function Splash(x, y, color) {
    _classCallCheck(this, Splash);

    this.x = x;
    this.y = y;
    this.color = color;
    this.opacity = 1;
    this.velocity = {
      x: Math.random() - 0.5,
      y: Math.random() - 1
    };
    this.gravity = Math.random() / 1000;
  }

  _createClass(Splash, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
      ctx.strokeStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.stroke();
      ctx.globalAlpha = 0.2;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.x - 1 <= 0 || this.x + 1 >= canvas.width) {
        this.velocity.x = -this.velocity.x;
      }

      if (this.y + 1 >= canvas.height) {
        this.velocity.y = -this.velocity.y;
      }

      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.velocity.y += this.gravity;
      this.opacity -= 0.001;
      this.draw();
    }
  }]);

  return Splash;
}();

function forSplashes() {
  splashes.forEach(function (splash, index) {
    if (splash.opacity < 0.05) {
      splashes.splice(index, 1);
    }

    splash.update();
  });
}