"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create apple class.
var Apple =
/*#__PURE__*/
function () {
  //construct apple data.
  function Apple(x, y, color) {
    _classCallCheck(this, Apple);

    this.x = x;
    this.y = y;
    this.color = color;
    this.size = 20;
  }

  _createClass(Apple, [{
    key: "draw",
    value: function draw() {
      if (this.color == "red") {
        ctx.drawImage(redApple, this.x, this.y + (groundPosition - player.y), this.size, this.size);
      } else {
        ctx.drawImage(greenApple, this.x, this.y + (groundPosition - player.y), this.size, this.size);
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.x -= player.velocity.x * 1.25;
      this.draw();
    }
  }]);

  return Apple;
}();