"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TrapKey =
/*#__PURE__*/
function () {
  function TrapKey(x, y, image, imageShadow) {
    _classCallCheck(this, TrapKey);

    this.x = x;
    this.y = y;
    this.image = image;
    this.imageShadow = imageShadow;
    this.teleportTimer = 1;
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

      ctx.globalAlpha = 0.5;
      ctx.drawImage(this.imageShadow, floor.x + this.x - 20, floor.y + this.y - 15, 40, 40);
      ctx.globalAlpha = 1;
      ctx.drawImage(this.image, floor.x + this.x - 20, floor.y + this.y - 20, 40, 40);
    }
  }, {
    key: "update",
    value: function update() {
      var _this = this;

      if (this.timer >= this.teleportTimer) {
        var x = 200 + Math.random() * (playArea - 400);
        var y = 200 + Math.random() * (playArea - 400);
        var wallNumber = 1;
        walls.forEach(function (wall) {
          //only teleport when new location does not intersect a wall.
          var hit = collisionDetection(x + floor.x, y + floor.y, 100, 100, wall.x + floor.x, wall.y + floor.y, wall.width / 2, wall.height / 2);

          if (hit) {
            return;
          }

          if (wallNumber == walls.length) {
            var playSound = collisionDetection(_this.x, _this.y, 20, 20, player.x - floor.x, player.y - floor.y, c.width / 2, c.height / 2);

            if (playSound) {
              trapKeyTeleport.play();
            }

            ctx.drawImage(teleportFlash, floor.x + _this.x - 20, floor.y + _this.y - 20, 40, 40);
            _this.x = 40 + Math.random() * (playArea - 80);
            _this.y = 40 + Math.random() * (playArea - 80);
          }

          wallNumber += 1;
        });
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
        trapKeyCollected = true;
        backpackItems += 1;
      }

      if (trapKey.image == greenTrapKey2) {
        gotGreenTrapKey2 = true;
        trapKeys.splice(index, 1);
        trapKeyCollected = true;
        backpackItems += 1;
      }

      if (trapKey.image == greenTrapKey3) {
        gotGreenTrapKey3 = true;
        trapKeys.splice(index, 1);
        trapKeyCollected = true;
        backpackItems += 1;
      }

      if (trapKey.image == greenTrapKey4) {
        gotGreenTrapKey4 = true;
        trapKeys.splice(index, 1);
        trapKeyCollected = true;
        backpackItems += 1;
      }

      if (trapKey.image == orangeTrapKey1) {
        gotOrangeTrapKey1 = true;
        trapKeys.splice(index, 1);
        trapKeyCollected = true;
        backpackItems += 1;
      }

      if (trapKey.image == orangeTrapKey2) {
        gotOrangeTrapKey2 = true;
        trapKeys.splice(index, 1);
        trapKeyCollected = true;
        backpackItems += 1;
      }

      if (trapKey.image == orangeTrapKey3) {
        gotOrangeTrapKey3 = true;
        trapKeys.splice(index, 1);
        trapKeyCollected = true;
        backpackItems += 1;
      }

      if (trapKey.image == orangeTrapKey4) {
        gotOrangeTrapKey4 = true;
        trapKeys.splice(index, 1);
        trapKeyCollected = true;
        backpackItems += 1;
      }

      if (trapKey.image == turquoiseTrapKey1) {
        gotTurquoiseTrapKey1 = true;
        trapKeys.splice(index, 1);
        trapKeyCollected = true;
        backpackItems += 1;
      }

      if (trapKey.image == turquoiseTrapKey2) {
        gotTurquoiseTrapKey2 = true;
        trapKeys.splice(index, 1);
        trapKeyCollected = true;
        backpackItems += 1;
      }

      if (trapKey.image == turquoiseTrapKey3) {
        gotTurquoiseTrapKey3 = true;
        trapKeys.splice(index, 1);
        trapKeyCollected = true;
        backpackItems += 1;
      }

      if (trapKey.image == turquoiseTrapKey4) {
        gotTurquoiseTrapKey4 = true;
        trapKeys.splice(index, 1);
        trapKeyCollected = true;
        backpackItems += 1;
      }

      trapKeyCollect.currentTime = 0;
      trapKeyCollect.play();
    }

    trapKey.update();
  });
}