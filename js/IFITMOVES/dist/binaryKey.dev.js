"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BinaryKey =
/*#__PURE__*/
function () {
  function BinaryKey(x, y, number) {
    _classCallCheck(this, BinaryKey);

    this.x = x;
    this.y = y;
    this.number = number;
    this.opacity = 0;
    this.materialize = false;
  }

  _createClass(BinaryKey, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.drawImage(binaryPad, floor.x + this.x - 20, floor.y + this.y - 20, 40, 40);
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      if (materialize) {
        if (this.materialize) {
          if (materializeNumber == this.number) {
            this.opacity += 0.005;
          }
        }

        if (this.opacity >= 1 && this.materialize) {
          binaryFade.currentTime = 0;
          binaryFade.pause();
          this.materialize = false;
          this.firstNumber += 1;
          materializeNumber += 1;
        }
      }

      this.draw();
    }
  }]);

  return BinaryKey;
}();

function forBinaryKey() {
  binaryKeys.forEach(function (key, index) {
    if (floor.x + 2980 < player.x && floor.y + 1010 > player.y && materializeNumber < 8) {
      materialize = true;

      if (key.number == materializeNumber) {
        if (materializeNumber < 8) {
          binaryFade.play();
        }

        key.materialize = true;
      }
    } else {
      materialize = false;
    }

    key.update();
  });
}