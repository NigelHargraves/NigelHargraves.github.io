"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create spider class.
var Spider =
/*#__PURE__*/
function () {
  //construct spider data.
  function Spider(image, x, y, velocity) {
    _classCallCheck(this, Spider);

    this.image = image;
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.spriteLength = 256;
    this.r = this.spriteLength;
    this.walkX = 0;
    this.walkY = 0;
    this.frameCount = 0;
  } //draw spider.


  _createClass(Spider, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.walkX, this.walkY, this.spriteLength, this.spriteLength, this.x - this.r / 2, this.y - this.r / 2, this.r, this.r);

      if (this.frameCount >= 5) {
        if (this.walkX == this.spriteLength * 3) {
          this.walkX = 0;
          this.walkY += this.spriteLength;
        } else {
          this.walkX += this.spriteLength;
        }

        if (this.walkY == this.spriteLength * 4) {
          this.frameCount = 0;
          this.walkY = 0;
        }

        this.frameCount = 0;
      } else {
        this.frameCount += 1;
      }
    } //draw spider.

  }, {
    key: "update",
    value: function update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      if (moveForward && !moveBugs) {
        this.x -= player.aimx / speed;
        this.y -= player.aimy / speed;
      }

      this.draw();
    }
  }]);

  return Spider;
}();