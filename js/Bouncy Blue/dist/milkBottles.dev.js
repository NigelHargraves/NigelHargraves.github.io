"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create milkBottles class.
var MilkBottle =
/*#__PURE__*/
function () {
  //construct milkBottles data.
  function MilkBottle(x, y) {
    _classCallCheck(this, MilkBottle);

    this.x = x;
    this.y = y;
    this.r = 50;
  } //draw milkBottles.


  _createClass(MilkBottle, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(milkBottle, this.x - this.r / 2, this.y - this.r * 1.5, this.r, this.r * 1.5);
    } //update milkBottles.

  }, {
    key: "update",
    value: function update() {
      this.x += -player.velocity.x * 1.25;
      this.draw();
    }
  }]);

  return MilkBottle;
}();

function forMilkBottles() {
  milkBottles.forEach(function (mb, index) {
    var colide = collisionDetection(mb.x, mb.y, mb.r / 2, mb.r * 1.5, x, player.y, player.r, player.r);

    if (colide) {
      texts.push(new Text(x, player.y, Math.random() - 0.5, -c.height * 0.001, "100", "bold 20px Arial", "yellow", 1, false));
      texts.push(new Text(x, player.y, Math.random() - 0.5, -c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false));
      score += 100;
      gain.currentTime = 0;
      gain.play();

      if (milkBottleCount < 20) {
        milkBottleCount += 1;
      }

      if (milkBottleCount == 20) {
        collectedMilkBottles = true;
        milkBottles = [];
      }

      milkBottles.splice(index, 1);
    }

    mb.update();
  });
}