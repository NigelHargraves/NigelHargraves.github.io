"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Trap =
/*#__PURE__*/
function () {
  function Trap(x, y, trapColor) {
    _classCallCheck(this, Trap);

    this.x = x;
    this.y = y;
    this.trapColor = trapColor;
    this.size = 200;
    this.opacity = 1;
    this.pulseUp = false;
    this.on = true;
  }

  _createClass(Trap, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.filter = "blur(4px)";
      ctx.drawImage(trapImage, floor.x + this.x - this.size / 2, floor.y + this.y - this.size / 2, this.size, this.size);
      ctx.restore();

      if (this.trapColor == "green") {
        if (!greenTrapKey1Placed) {
          ctx.drawImage(greenTrapKeyHole1Empty, floor.x + this.x - this.size / 2 - 20, floor.y + this.y - this.size / 2 - 20, 40, 40);
        } else {
          ctx.drawImage(greenTrapKeyHole1Filled, floor.x + this.x - this.size / 2 - 20, floor.y + this.y - this.size / 2 - 20, 40, 40);
        }

        if (!greenTrapKey2Placed) {
          ctx.drawImage(greenTrapKeyHole2Empty, floor.x + this.x + this.size / 2 - 20, floor.y + this.y - this.size / 2 - 20, 40, 40);
        } else {
          ctx.drawImage(greenTrapKeyHole2Filled, floor.x + this.x + this.size / 2 - 20, floor.y + this.y - this.size / 2 - 20, 40, 40);
        }

        if (!greenTrapKey3Placed) {
          ctx.drawImage(greenTrapKeyHole3Empty, floor.x + this.x - this.size / 2 - 20, floor.y + this.y + this.size / 2 - 20, 40, 40);
        } else {
          ctx.drawImage(greenTrapKeyHole3Filled, floor.x + this.x - this.size / 2 - 20, floor.y + this.y + this.size / 2 - 20, 40, 40);
        }

        if (!greenTrapKey4Placed) {
          ctx.drawImage(greenTrapKeyHole4Empty, floor.x + this.x + this.size / 2 - 20, floor.y + this.y + this.size / 2 - 20, 40, 40);
        } else {
          ctx.drawImage(greenTrapKeyHole4Filled, floor.x + this.x + this.size / 2 - 20, floor.y + this.y + this.size / 2 - 20, 40, 40);
        }
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (this.pulseUp) {
        this.opacity += 0.006;
      } else {
        this.opacity -= 0.006;
      }

      if (this.opacity <= 0.2) {
        if (trapInView) {
          pulseSound.play();
        } else {
          pulseSound.currentTime = 0;
          pulseSound.pause();
        }

        this.pulseUp = true;
      }

      if (this.opacity >= 1) {
        this.pulseUp = false;
      }

      this.draw();
    }
  }]);

  return Trap;
}();

function forTrap() {
  traps.forEach(function (trap, index) {
    trap.update();
  });
}