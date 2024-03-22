"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Zigzag =
/*#__PURE__*/
function () {
  function Zigzag(x, y, coordinate) {
    _classCallCheck(this, Zigzag);

    this.x = x;
    this.y = y;
    this.coordiate = coordinate;
    this.velocity = {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5
    };
    this.opacity = 0.1;
    this.brighten = true;
    this.time = 40;
    this.zigzagTimer = this.time;
  }

  _createClass(Zigzag, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = 'white';
      ctx.beginPath();
      ctx.arc(this.x, this.y, 0.4, 0, Math.PI * 2);
      ctx.globalAlpha = this.opacity;
      ctx.stroke();
      ctx.globalAlpha = 0.2;
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      if (this.opacity < 1 && this.brighten) {
        this.opacity += 0.008;
      } else {
        this.opacity -= 0.008;
        this.brighten = false;
      }

      if (this.zigzagTimer <= 0) {
        if (this.coordiate == 'x') {
          this.velocity.x = -this.velocity.x;

          if (this.velocity.y < 0) {
            this.velocity.y -= 0.1;
          } else {
            this.velocity.y += 0.1;
          }
        } else {
          this.velocity.y = -this.velocity.y;

          if (this.velocity.x < 0) {
            this.velocity.x -= 0.1;
          } else {
            this.velocity.x += 0.1;
          }
        }

        this.time -= 5;
        this.zigzagTimer = this.time;
      }

      this.zigzagTimer -= 1;
      this.draw();
    }
  }]);

  return Zigzag;
}();

function forZigzags() {
  zigzags.forEach(function (zz, index) {
    if (zz.opacity < 0.01) {
      zigzags.splice(index, 1);
    }

    zz.update();
  });
}