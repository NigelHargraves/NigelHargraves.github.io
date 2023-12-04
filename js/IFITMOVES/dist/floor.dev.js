"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create floor class.
var Floor =
/*#__PURE__*/
function () {
  //construct floor data.
  function Floor(image) {
    _classCallCheck(this, Floor);

    this.x = 0;
    this.y = 0;
    this.width = c.height * 4;
    this.height = c.height * 4;
    this.image = image;
  } //draw floor.


  _createClass(Floor, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    } //update floor.

  }, {
    key: "update",
    value: function update() {
      if (moveForward) {
        if (run) {
          speed = 5;
        } else {
          speed = 10;
        }

        this.x -= player.aimx / speed;
        this.y -= player.aimy / speed;

        if (this.x + 4 >= player.x - player.r / 2) {
          this.x -= 2;
        } else if (this.x - 4 + this.width <= player.x + player.r / 2) {
          this.x += 2;
        } else if (this.y + 4 >= player.y - player.r / 2) {
          this.y -= 2;
        } else if (this.y - 4 + this.height <= player.y + player.r / 2) {
          this.y += 2;
        }
      }

      this.draw();
    }
  }]);

  return Floor;
}();