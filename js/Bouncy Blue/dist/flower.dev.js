"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//flower class.
var Flower =
/*#__PURE__*/
function () {
  //construct flower data.
  function Flower(x, y, radius, countdown) {
    _classCallCheck(this, Flower);

    this.x = x;
    this.y = y;
    this.r = radius;
    this.x1 = 0;
    this.y1 = 0;
    this.ang = 0;
    this.countdown = countdown;
    this.wind1 = false;
    this.wind2 = false;
    this.sway1 = 80;
    this.sway2 = 40;
    this.windy = false;
  } //draw flower.


  _createClass(Flower, [{
    key: "draw",
    value: function draw() {
      //storke.
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.bezierCurveTo(this.x + this.windy, this.y + 40, this.x - this.sway1, this.y + 40, this.x, this.y + 200);
      ctx.strokeStyle = "green";
      ctx.lineWidth = 6;
      ctx.stroke();
      ctx.lineWidth = 1; //create pettels.

      for (var i = 0; i < 360; i += 60) {
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.arc(this.x + this.windy + this.x1, this.y + this.y1, this.r / 2, 0, Math.PI * 2);
        ctx.fill(); //increment angle by PI/180.

        this.ang += Math.PI / 180 * 60;
        this.x1 = this.r * Math.cos(this.ang);
        this.y1 = this.r * Math.sin(this.ang);
      } //create centre.


      ctx.beginPath();
      ctx.fillStyle = "red";
      ctx.arc(this.x + this.windy, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
    } //update flower.

  }, {
    key: "update",
    value: function update() {
      if (this.sway1 <= -80) {
        this.wind1 = true;
      }

      if (this.sway1 >= 80) {
        this.wind1 = false;
      }

      if (this.wind1) {
        this.sway1 += 0.5;
      } else {
        this.sway1 -= 0.5;
      }

      if (this.sway2 <= -40) {
        this.wind2 = true;
      }

      if (this.sway2 >= 40) {
        this.wind2 = false;
      }

      if (this.wind2) {
        this.sway2 += 0.4;
      } else {
        this.sway2 -= 0.4;
      }

      this.countdown -= 0.01;
      this.windy = Math.random() * 4 - 2;
      this.x += -player.velocity.x * 1.25;
      this.draw();
    }
  }]);

  return Flower;
}();