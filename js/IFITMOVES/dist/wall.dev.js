"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create wall class.
var Wall =
/*#__PURE__*/
function () {
  function Wall(x, y, width, height, direction) {
    _classCallCheck(this, Wall);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.horizontal = direction;
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
      if (!wall.horizontal) {
        if (player.x > wall.x + floor.x) {
          floor.x -= 2;
        } else if (player.x < wall.x + floor.x) {
          floor.x += 2;
        }
      } else {
        if (player.y > wall.y + floor.y) {
          floor.y -= 2;
        } else if (player.y < wall.y + floor.y) {
          floor.y += 2;
        }
      }
    }

    spiders.forEach(function (spider) {
      hit = collisionDetection(spider.x + floor.x, spider.y + floor.y, spider.r / 4, spider.r / 4, wall.x + floor.x, wall.y + floor.y, wall.width / 2, wall.height / 2);

      if (hit) {
        spider.imageAngle += 180;

        if (spider.imageAngle > 360) {
          spider.imageAngle -= 360;
        }

        if (spider.imageAngle < 0) {
          spider.imageAngle += 360;
        }

        spider.spiderAngle += Math.PI / 180 * 180;
      }
    });
  });
}