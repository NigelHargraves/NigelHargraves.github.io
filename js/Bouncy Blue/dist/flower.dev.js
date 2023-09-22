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
  } //draw flower.


  _createClass(Flower, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(flowerStalk, this.x - this.r, this.y, this.r * 2, c.height * 0.2);
      ctx.drawImage(sunflower, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
    } //update flower.

  }, {
    key: "update",
    value: function update() {
      this.countdown -= 0.01;
      this.x += -player.velocity.x * 1.25;
      this.draw();
    }
  }]);

  return Flower;
}();

function forFlower() {
  flowers.forEach(function (flower, index) {
    var colide = collisionDetection(flower.x, flower.y, flower.r * (c.height * 0.004), x, player.y, player.r);

    if (colide) {
      flowerFire.currentTime = 0;
      flowerFire.play();
      var startPos = flower.x;
      var angles = Math.atan2(player.y - flower.y, x - startPos);
      var velocity = {
        x: Math.cos(angles) * 5,
        y: Math.sin(angles) * 5
      };
      guidedMissiles.push(new GuidedMissile(startPos, flower.y, velocity.x, velocity.y, c.height * 0.01, false));
      flowers.splice(index, 1);
    }

    if (flower.countdown <= 0) {
      if (flower.x > 0 - flower.r && flower.x < c.width + flower.r) {
        mineExplode.currentTime = 0;
        mineExplode.play();

        for (var i = 0; i < 10; i++) {
          projectiles.push(new Projectile(flower.x, flower.y, 2));
        }
      }

      flowers.splice(index, 1);
    }

    flower.update();
  });
}