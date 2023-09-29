"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create flourSacks class.
var FlourSack =
/*#__PURE__*/
function () {
  //construct flourSacks data.
  function FlourSack(x, y, radius) {
    _classCallCheck(this, FlourSack);

    this.x = x;
    this.y = y;
    this.r = radius;
    this.direction = Math.random() * 2 - 1;
  } //draw flourSacks.


  _createClass(FlourSack, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(flourSackOnBalloon, this.x - this.r, this.y - this.r * 2.25, this.r * 2, this.r * 4.5);
    } //update flourSacks.

  }, {
    key: "update",
    value: function update() {
      if (this.r <= c.height * 0.04) {
        this.r += c.height * 0.0001;
      }

      this.x += this.direction;
      this.x += -player.velocity.x;
      this.y -= 0.5;
      this.draw();
    }
  }]);

  return FlourSack;
}();

function forFlourSacks() {
  flourSacks.forEach(function (sack, index) {
    var colide = collisionDetection(sack.x, sack.y, sack.r * 1.5, x, player.y, player.r);

    if (colide) {
      flourSackCount += 1;
      flourSacks.splice(index, 1);
    }

    if (sack.y <= 0 - sack.r * 4.5) {
      flourSacks.splice(index, 1);
    }

    sack.update();
  });
}