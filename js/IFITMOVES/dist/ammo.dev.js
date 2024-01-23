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
    this.countDown = 1000;
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

  if (makeAmmo > 0.99) {
    munitions.push(new Ammo(40 + Math.random() * (playArea - 80), 40 + Math.random() * (playArea - 80)));
  }

  munitions.forEach(function (ammo, index) {
    var collectAmmo = collisionDetection(player.x, player.y, player.r / 2, player.r / 2, ammo.x + floor.x, ammo.y + floor.y, 40, 20);

    if (collectAmmo) {
      bulletAmount += 1;
      reload.currentTime = 0;
      reload.play();
      munitions.splice(index, 1);
    }

    if (ammo.countDown <= 0) munitions.splice(index, 1);
    ammo.update();
  });
}