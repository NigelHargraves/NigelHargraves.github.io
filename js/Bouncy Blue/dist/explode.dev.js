"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create explode class.
var Explode =
/*#__PURE__*/
function () {
  //construct explode data.
  function Explode(x, y, size) {
    _classCallCheck(this, Explode);

    this.x = x;
    this.y = y;
    this.s = size;
  } //draw explode.


  _createClass(Explode, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(explode, this.x - this.s / 2, this.y - this.s / 2, this.s, this.s);
    } //update explode.

  }, {
    key: "update",
    value: function update() {
      this.s += 10;
      this.x += -player.velocity.x * 1.25;
      this.draw();
    }
  }]);

  return Explode;
}();