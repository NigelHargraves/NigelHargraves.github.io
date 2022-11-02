"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//mine class.
var Mine =
/*#__PURE__*/
function () {
  //construct mine data.
  function Mine(x, y, radius, countdown) {
    _classCallCheck(this, Mine);

    this.x = x;
    this.y = y;
    this.r = radius;
    this.countdown = countdown;
    this.alpha = 0;
  } //draw mine.


  _createClass(Mine, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(landmine, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
    } //update mine.

  }, {
    key: "update",
    value: function update() {
      this.countdown -= 0.01;
      this.x += -player.velocity.x * 1.25;
      this.draw();
    }
  }]);

  return Mine;
}();