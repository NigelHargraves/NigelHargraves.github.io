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
    this.startX = this.x;
    this.startY = this.y;
    this.countdown = countdown;
    this.swayUpper = true;
    this.swayLower = false;
    this.moveX = true;
    this.moveY = true;
    this.stalkUpperPoint = 0;
    this.stalkLowerPoint = 0;
  } //draw flower.


  _createClass(Flower, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.bezierCurveTo(this.x + this.stalkUpperPoint, this.y + 100, this.x + this.stalkLowerPoint, this.y + 100, this.startX, c.height - c.height * 0.019);
      ctx.lineWidth = 5;
      ctx.strokeStyle = "LimeGreen";
      ctx.stroke();
      ctx.drawImage(sunflower, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
    } //update flower.

  }, {
    key: "update",
    value: function update() {
      if (this.swayUpper) {
        this.stalkUpperPoint += 1;
      } else {
        this.stalkUpperPoint -= 1;
      }

      if (this.stalkUpperPoint >= 140) {
        this.swayUpper = false;
      }

      if (this.stalkUpperPoint <= -140) {
        this.swayUpper = true;
      }

      if (this.swayLower) {
        this.stalkLowerPoint += 1;
      } else {
        this.stalkLowerPoint -= 1;
      }

      if (this.stalkLowerPoint >= 100) {
        this.swayLower = false;
      }

      if (this.stalkLowerPoint <= -100) {
        this.swayLower = true;
      }

      if (this.moveX) {
        this.x += Math.random() * 0.4;
      } else {
        this.x -= Math.random() * 0.4;
      }

      if (this.x >= this.startX + 100) {
        this.moveX = false;
      }

      if (this.x <= this.startX - 100) {
        this.moveX = true;
      }

      if (this.moveY) {
        this.y += Math.random() * 0.2;
      } else {
        this.y -= Math.random() * 0.2;
      }

      if (this.y >= this.startY + 50) {
        this.moveY = false;
      }

      if (this.y <= this.startY - 50) {
        this.moveY = true;
      }

      this.countdown -= 0.01;
      this.x += -player.velocity.x * 1.25;
      this.startX += -player.velocity.x * 1.25;
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