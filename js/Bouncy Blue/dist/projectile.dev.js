"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create projectile class.
var Projectile =
/*#__PURE__*/
function () {
  //construct projectile data.
  function Projectile(x, y, radius) {
    _classCallCheck(this, Projectile);

    this.x = x;
    this.y = y;
    this.velocityX = (Math.random() - 0.5) * 10;
    this.velocityY = (Math.random() - 0.5) * 10;
    this.r = radius;
    this.alpha = 1;
  } //draw projectile.


  _createClass(Projectile, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.drawImage(starMissile2, this.x - this.r * 4, this.y - this.r * 4, this.r * 8, this.r * 8);
      ctx.restore();
    } //update projectile.

  }, {
    key: "update",
    value: function update() {
      this.alpha -= 0.005;
      this.x += -player.velocity.x + this.velocityX;
      this.y += this.velocityY;
      this.draw();
    }
  }]);

  return Projectile;
}();

function forProjectile() {
  projectiles.forEach(function (pro, index) {
    var colide = collisionDetection(pro.x, pro.y, pro.r, pro.r, x, player.y, player.r, player.r);

    if (colide) {
      if (!playerSheild) {
        hit.currentTime = 0;
        hit.play(); //reduce player size/reset variables.

        if (player.r > 20) {
          player.r = 20;
        } else {
          player.r -= 2;
        }

        splats.push(new Splat(x, player.y, x1, y1, ang, player.r));
      } else {
        var points = Math.trunc(pro.x / 10 + (c.height - pro.y) / 10);
        score += points;

        if (player.y > c.height / 2) {
          texts.push(new Text(x, player.y, Math.random() - 0.5, -c.height * 0.001, points, "bold 20px Arial", "yellow", 1, false));
          texts.push(new Text(x, player.y, Math.random() - 0.5, -c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false));
        } else {
          texts.push(new Text(x, player.y, Math.random() - 0.5, c.height * 0.001, points, "bold 20px Arial", "yellow", 1, false));
          texts.push(new Text(x, player.y, Math.random() - 0.5, c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false));
        }
      }

      reset();
      projectiles.splice(index, 1);
    }

    if (player.r <= 14) {
      playerAlive = false;
    }

    if (pro.alpha <= 0 || pro.y > c.height) {
      projectiles.splice(index, 1);
    }

    pro.update();
  });
}