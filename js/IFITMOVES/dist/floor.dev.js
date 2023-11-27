"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create floor class.
var Floor =
/*#__PURE__*/
function () {
  //construct floor data.
  function Floor(image, y, speed) {
    _classCallCheck(this, Floor);

    this.x = 0;
    this.y = y;
    this.width = c.width * 4;
    this.height = c.height * 4;
    this.image = image;
    this.speed = speed;
  } //draw floor.


  _createClass(Floor, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    } //update floor.

  }, {
    key: "update",
    value: function update() {
      this.x -= player.velocity.x;
      this.y -= player.velocity.y;

      if (this.x + 4 >= player.x - player.r) {
        player.velocity.x = 0;
        this.x -= 2;
      }

      if (this.x - 4 + this.width <= player.x + player.r) {
        player.velocity.x = 0;
        this.x += 2;
      }

      if (this.y + 4 >= player.y - player.r) {
        player.velocity.y = 0;
        this.y -= 2;
      }

      if (this.y - 4 + this.height <= player.y + player.r) {
        player.velocity.y = 0;
        this.y += 2;
      }

      this.draw();
    }
  }]);

  return Floor;
}();