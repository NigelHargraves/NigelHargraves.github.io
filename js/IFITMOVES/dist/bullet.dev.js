"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create bullet class.
var Bullet =
/*#__PURE__*/
function () {
  //construct bullet data.
  function Bullet(x, y, velocity) {
    _classCallCheck(this, Bullet);

    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.r = 2;
  } //draw bullet.


  _createClass(Bullet, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = "black";
      ctx.fill();
    } //draw bullet.

  }, {
    key: "update",
    value: function update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.draw();
    }
  }]);

  return Bullet;
}();

function forBullet() {
  bullets.forEach(function (bullet, index1) {
    spiders.forEach(function (spider, index2) {
      var hit = collisionDetection(bullet.x, bullet.y, bullet.r, bullet.r, spider.x + floor.x, spider.y + floor.y, spider.r / 4, spider.r / 4); //kill spider.

      if (hit) {
        //only play splat sound when in view.
        var playSound = collisionDetection(spider.x, spider.y, spider.r / 2, spider.r / 2, player.x - floor.x, player.y - floor.y, c.width / 2, c.height / 2);

        if (playSound) {
          splated.currentTime = 0;
          splated.play();
        }

        spiderInView = false;
        spiderSplats.push(new SpiderSplat(spider.x, spider.y));
        bullets.splice(index1, 1);
        spiders.splice(index2, 1);
      }
    });
    walls.forEach(function (wall) {
      var hit = collisionDetection(bullet.x, bullet.y, bullet.r, bullet.r, wall.x + floor.x, wall.y + floor.y, wall.width / 2, wall.height / 2); //hit wall.

      if (hit) {
        bullets.splice(index1, 1);
      }
    }); //hit edge.

    if (bullet.x - bullet.r / 2 <= floor.x + 20 || bullet.x + bullet.r / 2 - floor.x >= floor.width - 20 || bullet.y - bullet.r / 2 <= floor.y + 20 || bullet.y + bullet.r / 2 - floor.y >= floor.height - 20) {
      bullets.splice(index1, 1);
    }

    bullet.update();
  });
}