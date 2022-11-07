"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create ledge class.
var Ledge =
/*#__PURE__*/
function () {
  //construct ledge data.
  function Ledge(image, x, y) {
    _classCallCheck(this, Ledge);

    this.image = image;
    this.x = x;
    this.y = y;
  } //draw ledge.


  _createClass(Ledge, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.x, this.y + (groundPosition - player.y), 600, 20);
    } //update ledge.

  }, {
    key: "update",
    value: function update() {
      this.x -= player.velocity.x * 1.25;
      this.draw();
    }
  }]);

  return Ledge;
}();