"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//glow class.
var Glow =
/*#__PURE__*/
function () {
  //construct glow data.
  function Glow(x, y, radius, alpha) {
    _classCallCheck(this, Glow);

    this.x = x;
    this.y = y;
    this.r = radius;
    this.alpha = alpha;
  } //draw glow.


  _createClass(Glow, [{
    key: "draw",
    value: function draw() {
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r + 2, 0, Math.PI * 2);
      ctx.strokeStyle = "white";
      ctx.stroke();
      ctx.globalAlpha = 1;
    } //update glow.

  }, {
    key: "update",
    value: function update() {
      this.alpha -= 0.1;
      this.x = x;
      this.y = player.y;
      this.draw();
    }
  }]);

  return Glow;
}();