"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create eggs class.
var Egg =
/*#__PURE__*/
function () {
  //construct eggs data.
  function Egg(x, y) {
    _classCallCheck(this, Egg);

    this.x = x;
    this.y = y;
    this.r = 30;
  } //draw eggs.


  _createClass(Egg, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(chickenEgg, this.x, this.y, this.r, this.r);
    } //update eggs.

  }, {
    key: "update",
    value: function update() {
      this.x += -player.velocity.x * 1.25;
      this.draw();
    }
  }]);

  return Egg;
}();

function forEggs() {
  chickenEggs.forEach(function (egg, index) {
    var colide = collisionDetection(egg.x, egg.y, egg.r / 2, egg.r / 2, x, player.y, player.r, player.r);

    if (colide) {
      texts.push(new Text(x, player.y, Math.random() - 0.5, -c.height * 0.001, "100", "bold 20px Arial", "yellow", 1, false));
      texts.push(new Text(x, player.y, Math.random() - 0.5, -c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false));
      score += 100;
      gain.currentTime = 0;
      gain.play();

      if (eggCount < 20) {
        eggCount += 1;
      }

      if (eggCount == 20) {
        collectedEggs = true;
        chickenEggs = [];
      }

      chickenEggs.splice(index, 1);
    }

    egg.update();
  });
}