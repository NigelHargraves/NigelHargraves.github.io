"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create wandering mine class.
var WanderingMine =
/*#__PURE__*/
function () {
  //construct wandering mine data.
  function WanderingMine(x, y, radius, velocity, countdown) {
    _classCallCheck(this, WanderingMine);

    this.x = x;
    this.y = y;
    this.r = radius;
    this.v = velocity;
    this.countdown = countdown;
    this.droneMove = 0;
  } //draw wandering mine.


  _createClass(WanderingMine, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(drone, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
    } //update wandering mine.

  }, {
    key: "update",
    value: function update() {
      this.x += -player.velocity.x * 1.25 + this.v.x;
      this.y += this.v.y;
      this.droneMove = Math.random();

      if (this.droneMove > 0.9) {
        this.v.x = (Math.random() - 0.5) * 10;
        this.v.y = (Math.random() - 0.5) * 10;
      }

      this.countdown -= 0.01;
      this.draw();
    }
  }]);

  return WanderingMine;
}();

function forWanderingMine() {
  wanderingMines.forEach(function (wmine, index) {
    var colide = collisionDetection(wmine.x, wmine.y, wmine.r * 5, wmine.r * 5, x, player.y, player.r, player.r);

    if (colide) {
      if (wmine.x > 0 - wmine.r && wmine.x < c.width + wmine.r) {
        mineExplode.currentTime = 0;
        mineExplode.play();

        for (var i = 0; i < 20; i++) {
          projectiles.push(new Projectile(wmine.x, wmine.y, 2));
        }
      }

      wanderingMines.splice(index, 1);
    }

    if (wmine.countdown <= 0) {
      wanderingMines.splice(index, 1);
    }

    wmine.update();
  });
}