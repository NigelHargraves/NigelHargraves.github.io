"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create layer class.
var Layer =
/*#__PURE__*/
function () {
  //construct layer data.
  function Layer(image, x, y, height, speed) {
    _classCallCheck(this, Layer);

    this.x = x;
    this.y = y;
    this.width = 6000;
    this.height = height;
    this.x2 = this.width;
    this.image = image;
    this.speed = speed;
  } //draw layer.


  _createClass(Layer, [{
    key: "draw",
    value: function draw() {
      if (this.image == background1) {
        ctx.drawImage(this.image, this.x, this.y + (groundPosition - player.y), this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y + (groundPosition - player.y), this.width, this.height);
      } else {
        ctx2.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx2.drawImage(this.image, this.x2, this.y, this.width, this.height);
      }

      c2.style.top = 800 + 90 + (800 - player.y) + "px";
    } //update layer.

  }, {
    key: "update",
    value: function update() {
      if (this.image == background1) {
        this.speed = player.velocity.x;
      } else {
        this.speed = player.velocity.x * 1.25;
      }

      if (player.velocity.x >= 0) {
        if (this.x <= -this.width) {
          this.x = this.width;
        }

        if (this.x2 <= -this.width) {
          this.x2 = this.width;
        }
      } else {
        if (this.x >= this.width) {
          this.x = -this.width;
        }

        if (this.x2 >= this.width) {
          this.x2 = -this.width;
        }
      }

      this.x -= this.speed;
      this.x2 -= this.speed;
      this.draw();
    }
  }]);

  return Layer;
}();