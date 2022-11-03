"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create kill class.
var Kill =
/*#__PURE__*/
function () {
  //construct kill data.
  function Kill(x, y, radius, countdown) {
    _classCallCheck(this, Kill);

    this.x = x;
    this.y = y;
    this.r = radius;
    this.countdown = countdown;
  } //draw kill.


  _createClass(Kill, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(lightningBolt, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
    } //update kill.

  }, {
    key: "update",
    value: function update() {
      this.countdown -= 0.01;
      this.x += -player.velocity.x;
      this.draw();
    }
  }]);

  return Kill;
}();