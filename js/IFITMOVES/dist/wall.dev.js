"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create wall class.
var Wall =
/*#__PURE__*/
function () {
  function Wall(x, y) {
    _classCallCheck(this, Wall);

    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 500;
  }

  _createClass(Wall, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(obstacleBlock, this.x + floor.x - this.width / 2, this.y + floor.y - this.height / 2, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return Wall;
}();

function forWall() {
  walls.forEach(function (wall) {
    var hit = collisionDetection(player.x, player.y, player.r / 2, player.r / 2, wall.x + floor.x, wall.y + floor.y, wall.width / 2, wall.height / 2);

    if (hit) {
      if (player.x > wall.x + floor.x) {
        floor.x -= 2;
      } else if (player.x < wall.x + floor.x) {
        floor.x += 2;
      }
    }
  });
}