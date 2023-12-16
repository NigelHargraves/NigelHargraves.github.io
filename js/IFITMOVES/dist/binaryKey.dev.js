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
    this.numberOpacity = 0.001;
    this.on = false;
    this.color = "red";
  }

  _createClass(BinaryKey, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.drawImage(binaryPad, floor.x + this.x - 20, floor.y + this.y - 20, 40, 40);

      if (this.on) {
        this.color = "green";
      } else {
        this.color = "red";
      }

      ctx.beginPath();
      ctx.arc(floor.x + this.x, floor.y + this.y, 10, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.restore();

      if (materializeNumber > 6) {
        ctx.save();
        ctx.globalAlpha = this.numberOpacity;
        ctx.font = "bold 30px Arial";
        ctx.fillStyle = "lime";
        ctx.fillText(guessNumber + " ", floor.x + 3005, floor.y + 620);
        ctx.restore();

        if (this.numberOpacity < 1) {
          this.numberOpacity += 0.001;
        }
      }
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

      if (this.on) {
        numberOut += "1";
      } else {
        numberOut += "0";
      }

      if (this.number == 6) {
        numberOut = "";
      }

      this.draw();
    }
  }]);

  return BinaryKey;
}();

function forBinaryKey() {
  binaryKeys.forEach(function (key, index) {
    if (floor.x + 2980 < player.x && floor.y + 1010 > player.y && materializeNumber < 7) {
      materialize = true;

      if (key.number == materializeNumber) {
        if (materializeNumber < 7) {
          binaryFade.play();
        }

        key.materialize = true;
      }
    } else if (materializeNumber == 7) {
      guessNumber = 126;
      decimalNumber = guessNumber;

      for (var i = 1; i <= 1000; i++) {
        if (decimalNumber % 2 != 0) {
          binaryNumber += "1";
        } else {
          binaryNumber += "0";
        }

        if (decimalNumber < 2) {
          decimalNumber = decimalNumber / 2;
        } else {
          decimalNumber = Math.floor(decimalNumber / 2);
        }

        if (decimalNumber < 1) {
          break;
        }
      }

      binaryNumber = binaryNumber.split("").reverse().join("");
      materializeNumber += 1;
      materialize = false;
    }

    key.update();
  });
}