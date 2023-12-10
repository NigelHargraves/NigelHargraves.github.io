"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Key =
/*#__PURE__*/
function () {
  function Key(x, y, image) {
    _classCallCheck(this, Key);

    this.x = x;
    this.y = y;
    this.image = image;
  }

  _createClass(Key, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, floor.x + this.x - 20, floor.y + this.y - 20, 40, 20);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return Key;
}();

function forKey() {
  keys.forEach(function (key, index) {
    var collectKey = collisionDetection(player.x, player.y, player.r / 2, player.r / 2, key.x + floor.x, key.y + floor.y, 20, 10);

    if (collectKey) {
      if (key.image == redKey) {
        gotRedKey = true;
      }

      if (key.image == yellowKey) {
        gotYellowKey = true;
      }

      if (key.image == greenKey) {
        gotGreenKey = true;
      }

      if (key.image == turquoiseKey) {
        gotTurquoiseKey = true;
      }

      if (key.image == orangeKey) {
        gotOrangeKey = true;
      }

      if (key.image == pinkKey) {
        gotPinkKey = true;
      }

      swipe.play();
      backpackItems += 1;
      keys.splice(index, 1);
    }

    key.update();
  });
}