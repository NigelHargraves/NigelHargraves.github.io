"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Text class.
var Text =
/*#__PURE__*/
function () {
  //construct Text data.
  function Text(x, y, velocityX, velocityY, text, size, color, opacity, still) {
    _classCallCheck(this, Text);

    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.text = text;
    this.size = size;
    this.color = color;
    this.opacity = opacity;
    this.still = still;
  } //draw text.


  _createClass(Text, [{
    key: "draw",
    value: function draw() {
      ctx.font = this.size;
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.fillText(this.text, this.x, this.y);
      ctx.globalAlpha = 1;
    } //update text.

  }, {
    key: "update",
    value: function update() {
      if (!this.still) {
        this.x += this.velocityX;
        this.x += -player.velocity.x;
      }

      this.y += this.velocityY;
      this.draw();
    }
  }]);

  return Text;
}();