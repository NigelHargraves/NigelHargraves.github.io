"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//mine class.
var Mine =
/*#__PURE__*/
function () {
  //construct mine data.
  function Mine(x, y, radius, countdown) {
    _classCallCheck(this, Mine);

    this.x = x;
    this.y = y;
    this.r = radius;
    this.countdown = countdown;
    this.alpha = 0;
  } //draw mine.


  _createClass(Mine, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(landmine, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
    } //update mine.

  }, {
    key: "update",
    value: function update() {
      this.countdown -= 0.01;
      this.x += -player.velocity.x * 1.25;
      this.draw();
    }
  }]);

  return Mine;
}();

function forMine() {
  mines.forEach(function (mine, index) {
    var colide = collisionDetection(mine.x, mine.y, mine.r * 2, mine.r * 2, x, player.y, player.r, player.r);

    if (colide) {
      if (!playerSheild) {
        playerAlive = false;
      } else {
        sheildHit.currentTime = 0;
        sheildHit.play();
        var points = Math.trunc(mine.x / 10 + (c.height - mine.y) / 10);
        score += points;
        texts.push(new Text(x, player.y, Math.random() - 0.5, -c.height * 0.001, points, "bold 20px Arial", "yellow", 1, false));
        texts.push(new Text(x, player.y, Math.random() - 0.5, -c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false));
      }

      mines.splice(index, 1);
    } //countdown = 0


    if (mine.countdown <= 0) {
      if (mine.x > 0 - mine.r && mine.x < c.width + mine.r) {
        mineExplode.currentTime = 0;
        mineExplode.play();

        for (var _i = 0; _i < 10; _i++) {
          projectiles.push(new Projectile(mine.x, mine.y, 2));
        }
      }

      for (i = 0; i < 30; i++) {
        deaths.push(new Death(mine.x, mine.y - 30, Math.random() * 2, "red", {
          x: (Math.random() - 0.5) * 8,
          y: (Math.random() - 0.5) * 8
        }));
      }

      mines.splice(index, 1);
    }

    mine.update();
  });
}