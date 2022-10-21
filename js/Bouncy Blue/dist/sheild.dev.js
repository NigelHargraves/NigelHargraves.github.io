"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create sheild class.
var Sheild =
/*#__PURE__*/
function () {
  //construct sheild data.
  function Sheild(x, y, radius, countdown) {
    _classCallCheck(this, Sheild);

    this.x = x;
    this.y = y;
    this.r = radius;
    this.countdown = countdown;
  }

  _createClass(Sheild, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = "green";
      ctx.fill();
      ctx.font = "10px Arial";
      ctx.fillStyle = "black";
      ctx.fillText("S", this.x - 3, this.y + 2);
    }
  }, {
    key: "update",
    value: function update() {
      this.countdown -= 0.01;
      this.x += -player.velocity.x;
      this.draw();
    }
  }]);

  return Sheild;
}();