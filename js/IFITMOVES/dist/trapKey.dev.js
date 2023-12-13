"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TrapKey =
/*#__PURE__*/
function () {
  function TrapKey(x, y, image) {
    _classCallCheck(this, TrapKey);

    this.x = x;
    this.y = y;
    this.image = image;
    this.teleportTimer = Math.random() * 5000;
    this.timer = 0;
  }

  _createClass(TrapKey, [{
    key: "draw",
    value: function draw() {
      if (this.timer == 0) {
        ctx.drawImage(teleportFlash, floor.x + this.x - 20, floor.y + this.y - 20, 40, 40);
        var playSound = collisionDetection(this.x, this.y, 20, 20, player.x - floor.x, player.y - floor.y, c.width / 2, c.height / 2);

        if (playSound) {
          trapKeyTeleport.play();
        }
      }

      ctx.drawImage(this.image, floor.x + this.x - 20, floor.y + this.y - 20, 40, 40);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.timer >= this.teleportTimer) {
        var playSound = collisionDetection(this.x, this.y, 20, 20, player.x - floor.x, player.y - floor.y, c.width / 2, c.height / 2);

        if (playSound) {
          trapKeyTeleport.play();
        }

        ctx.drawImage(teleportFlash, floor.x + this.x - 20, floor.y + this.y - 20, 40, 40);
        this.x = 40 + Math.random() * (c.height * 4 - 80);
        this.y = 40 + Math.random() * (c.height * 4 - 80);
        this.timer = 0;
        this.teleportTimer = Math.random() * 5000;
      }

      this.timer += 1;
      this.draw();
    }
  }]);

  return TrapKey;
}();

function forTrapKey() {
  trapKeys.forEach(function (trapKey, index) {
    var collect = collisionDetection(trapKey.x, trapKey.y, 10, 10, player.x - floor.x, player.y - floor.y, player.r / 2, player.r / 2);

    if (collect) {
      if (trapKey.image == greenTrapKey1) {
        gotGreenTrapKey1 = true;
        trapKeys.splice(index, 1);
        nextKeySet = true;
        backpackItems += 1;
      }

      if (trapKey.image == greenTrapKey2) {
        gotGreenTrapKey2 = true;
        trapKeys.splice(index, 1);
        nextKeySet = true;
        backpackItems += 1;
      }

      if (trapKey.image == greenTrapKey3) {
        gotGreenTrapKey3 = true;
        trapKeys.splice(index, 1);
        nextKeySet = true;
        backpackItems += 1;
      }

      if (trapKey.image == greenTrapKey4) {
        gotGreenTrapKey4 = true;
        trapKeys.splice(index, 1);
        nextKeySet = true;
        backpackItems += 1;
      }

      trapKeyCollect.play();
    }

    trapKey.update();
  });
}