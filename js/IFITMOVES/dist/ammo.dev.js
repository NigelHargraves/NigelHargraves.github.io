"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ammo =
/*#__PURE__*/
function () {
  function Ammo(x, y) {
    _classCallCheck(this, Ammo);

    this.x = x;
    this.y = y;
    this.countDown = 5000;
  }

  _createClass(Ammo, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(bullet, floor.x + this.x, floor.y + this.y, 40, 20);
    }
  }, {
    key: "update",
    value: function update() {
      this.countDown -= 1;
      this.draw();
    }
  }]);

  return Ammo;
}();

function createAmmo() {
  var makeAmmo = Math.random();

  if (makeAmmo > 0.995) {
    var x = 40 + Math.random() * (playArea - 80);
    var y = 40 + Math.random() * (playArea - 80);
    var wallCount = 1;
    walls.forEach(function (wall) {
      //only create ammo when location does not intersect a wall.
      var hit = collisionDetection(x + floor.x, y + floor.y, 100, 100, wall.x + floor.x, wall.y + floor.y, wall.width / 2, wall.height / 2);

      if (hit) {
        return;
      }

      if (wallCount == walls.length) {
        munitions.push(new Ammo(x, y));
      }

      wallCount++;
    });
  }
}

function forAmmo() {
  munitions.forEach(function (ammo, index) {
    var collectAmmo = collisionDetection(player.x, player.y, player.r / 4, player.r / 4, ammo.x + 20 + floor.x, ammo.y + 10 + floor.y, 40, 20);

    if (collectAmmo) {
      bulletAmount += 1;
      reload.currentTime = 0;
      reload.play();
      munitions.splice(index, 1);
    }

    if (ammo.countDown <= 0) {
      var playSound = collisionDetection(ammo.x + 20, ammo.y + 10, 40, 20, player.x - floor.x, player.y - floor.y, c.width / 2, c.height / 2);

      if (playSound) {
        trapKeyTeleport.play();
      }

      ctx.drawImage(teleportFlash, floor.x + ammo.x, floor.y + ammo.y - 10, 40, 40);
      munitions.splice(index, 1);
    }

    ammo.update();
  });
}