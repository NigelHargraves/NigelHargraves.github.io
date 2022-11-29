"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create nasty class.
var Nasty =
/*#__PURE__*/
function () {
  //construct nasty data.
  function Nasty(x, y, countdown, direction) {
    _classCallCheck(this, Nasty);

    this.x = x;
    this.y = y;
    this.countdown = countdown;
    this.direction = direction;
    this.size = 100;
  }

  _createClass(Nasty, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(nastyImage, this.x, this.y + (groundPosition - player.y), this.size, this.size);
    }
  }, {
    key: "update",
    value: function update() {
      this.x -= player.velocity.x * 1.25;

      if (this.direction) {
        this.x -= 0.5;
      } else {
        this.x += 0.5;
      }

      this.countdown -= 0.1;
      this.draw();
    }
  }]);

  return Nasty;
}();