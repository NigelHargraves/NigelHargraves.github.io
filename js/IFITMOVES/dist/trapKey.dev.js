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
        this.x = Math.random() * (c.height * 4 - 80) + 40;
        this.y = Math.random() * (c.height * 4 - 80) + 40;
        this.timer = 0;
        this.teleportTimer = Math.random() * 5000;
      }

      this.timer += 1;
      this.draw();
    }
  }]);

  return TrapKey;
}();

function forTrapKey() {}