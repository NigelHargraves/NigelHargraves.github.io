"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create wandering mine class.
var WanderingMine =
/*#__PURE__*/
function () {
  //construct wandering mine data.
  function WanderingMine(x, y, radius, velocity, countdown) {
    _classCallCheck(this, WanderingMine);

    this.x = x;
    this.y = y;
    this.r = radius;
    this.v = velocity;
    this.alpha = 0;
    this.glow = false;
    this.countdown = countdown;
  } //draw wandering mine.


  _createClass(WanderingMine, [{
    key: "draw",
    value: function draw() {
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.globalAlpha = 1;
    } //update wandering mine.

  }, {
    key: "update",
    value: function update() {
      if (this.alpha <= 0.7) {
        this.glow = true;
      }

      if (this.alpha >= 1) {
        this.glow = false;
      }

      if (this.glow) {
        this.alpha += 0.02;
      } else {
        this.alpha -= 0.02;
      }

      this.x += -player.velocity.x + this.v.x;
      this.y += this.v.y;
      this.v.x = (Math.random() - 0.5) * 20;
      this.v.y = (Math.random() - 0.5) * 20;
      this.countdown -= 0.01;
      this.draw();
    }
  }]);

  return WanderingMine;
}();