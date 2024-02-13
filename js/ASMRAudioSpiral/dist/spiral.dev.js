"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Spiral =
/*#__PURE__*/
function () {
  function Spiral(x, y, moving, color) {
    _classCallCheck(this, Spiral);

    this.x = x;
    this.y = y;
    this.moving = moving;
    this.color = color;
    this.velocity = {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5
    };
    this.spiral = {
      x: 0,
      y: 0
    };
    this.spiralAngle = 0;
    this.rotateAngle = 0;
    this.opacity = 0.2;
    this.fadeIn = true;
  }

  _createClass(Spiral, [{
    key: "draw",
    value: function draw() {
      //draw spiral;
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotateAngle);
      ctx.beginPath();
      ctx.moveTo(0, 0);

      if (!this.moving) {
        ctx.strokeStyle = chord.color;
        ctx.globalAlpha = chord.opacity;
        ctx.lineWidth = chord.lineWidth;
      } else {
        ctx.strokeStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = 0.2;
      }

      for (var i = 0; i < 180; i++) {
        this.spiralAngle = 0.1 * i;
        this.spiral.x = (1 + this.spiralAngle) * Math.cos(this.spiralAngle);
        this.spiral.y = (1 + this.spiralAngle) * Math.sin(this.spiralAngle);
        ctx.lineTo(0 + this.spiral.x, 0 + this.spiral.y);
        ctx.stroke();
      }

      ctx.restore();
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.4;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.moving) {
        if (this.fadeIn) {
          this.opacity += 0.001;

          if (this.opacity >= 1) {
            this.fadeIn = false;
          }
        } else {
          this.opacity -= 0.001;
        }

        this.x += this.velocity.x;
        this.y += this.velocity.y;
      }

      this.rotateAngle -= Math.PI / 180 / 5;

      if (this.rotateAngle <= -Math.PI * 2) {
        this.rotateAngle = 0;
      }

      this.draw();
    }
  }]);

  return Spiral;
}();

function forSpirals() {
  spirals.forEach(function (spiral, index) {
    if (spiral.opacity <= 0.1) {
      spirals.splice(index, 1);
    }

    spiral.update();
  });
}