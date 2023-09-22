"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create explode class.
var Explode =
/*#__PURE__*/
function () {
  //construct explode data.
  function Explode(x, y, size, alpha) {
    _classCallCheck(this, Explode);

    this.x = x;
    this.y = y;
    this.s = size;
    this.alpha = alpha;
  } //draw explode.


  _createClass(Explode, [{
    key: "draw",
    value: function draw() {
      ctx.globalAlpha = this.alpha;
      ctx.drawImage(explode, this.x - this.s / 2, this.y - this.s / 2, this.s, this.s);
      ctx.globalAlpha = 1;
    } //update explode.

  }, {
    key: "update",
    value: function update() {
      if (this.s < 100) {
        this.s += 10;
      } else if (this.s < 200) {
        this.s += 8;
      } else if (this.s < 300) {
        this.s += 6;
      } else if (this.s < 400) {
        this.s += 4;
      }

      if (this.s >= 100 && this.alpha > 0) {
        this.alpha -= 0.02;
      }

      this.x += -player.velocity.x * 1.25;
      this.draw();
    }
  }]);

  return Explode;
}();

function forExplode() {
  explodes.forEach(function (exp, index) {
    explodesCheck(exp);

    if (exp.alpha <= 0.1) {
      explodes.splice(index, 1);
    }

    exp.update();
  });
}