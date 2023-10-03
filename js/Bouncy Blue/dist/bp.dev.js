"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//bonusPoints class.
var BonusPoints =
/*#__PURE__*/
function () {
  //construct bonusPoints data.
  function BonusPoints(x, y, velocityX, velocityY, radius) {
    _classCallCheck(this, BonusPoints);

    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.r = radius;
    this.swingAngle = 0;
    this.changeAngle = true;
  } //draw bonusPoints.


  _createClass(BonusPoints, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.swingAngle * Math.PI / 180);
      ctx.drawImage(pOnParachute, 0 - this.r, 0 - this.r, this.r * 2, this.r * 3);
      ctx.restore();
    } //update bonusPoints.

  }, {
    key: "update",
    value: function update() {
      if (this.swingAngle <= -10) {
        this.changeAngle = true;
      }

      if (this.swingAngle >= 10) {
        this.changeAngle = false;
      }

      if (this.changeAngle) {
        this.swingAngle += Math.random() / 5;
      } else {
        this.swingAngle -= Math.random() / 5;
      }

      this.x += -player.velocity.x * 1.25;
      this.y += this.velocityY;
      this.draw();
    }
  }]);

  return BonusPoints;
}();

function forBP() {
  bonusPoints.forEach(function (bonusPoint, index) {
    var colide = collisionDetection(bonusPoint.x, bonusPoint.y, bonusPoint.r, bonusPoint.r * 1.5, x, player.y, player.r, player.r);

    if (colide) {
      //player gets bonusPoints.
      bonusP.currentTime = 0;
      bonusP.play();
      bonus = Math.trunc(Math.random() * 500) + 300;

      if (player.y > c.height / 2) {
        texts.push(new Text(x, player.y, Math.random() - 0.5, -c.height * 0.001, bonus, "bold 25px Arial ", "green", 1, false));
        texts.push(new Text(x, player.y, Math.random() - 0.5, -c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false));
      } else {
        texts.push(new Text(x, player.y, Math.random() - 0.5, c.height * 0.001, bonus, "bold 25px Arial ", "green", 1, false));
        texts.push(new Text(x, player.y, Math.random() - 0.5, c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false));
      }

      bonusPoints.splice(index, 1);
      score += bonus;
    } //bonusPoints hits ground.


    if (bonusPoint.y > c.height - c.height * 0.055) {
      splat.currentTime = 0;
      splat.play();

      for (i = 0; i < Math.random() * 60 + 30; i++) {
        bloodSplats.push(new BloodSplat(bonusPoint.x, bonusPoint.y, Math.random() * 2, {
          x: (Math.random() - 0.5) * (Math.random() * 6),
          y: (Math.random() - 1) * (Math.random() * 10)
        }, "green"));
      }

      bonusPoints.splice(index, 1);
    }

    bonusPoint.update();
  });
}