"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//mushroom class.
var Mushroom =
/*#__PURE__*/
function () {
  //construct mushroom data.
  function Mushroom(x, y) {
    _classCallCheck(this, Mushroom);

    this.x = x;
    this.y = y;
  } //draw mushroom.


  _createClass(Mushroom, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(mushroomImage, this.x, this.y, mushroomSize, mushroomSize);
    } //update mushroom.

  }, {
    key: "update",
    value: function update() {
      this.x += -player.velocity.x * 1.25;
      this.draw();
    }
  }]);

  return Mushroom;
}();