"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ground =
/*#__PURE__*/
function () {
  function Ground(x, y) {
    _classCallCheck(this, Ground);

    this.x = x;
    this.y = y;
    this.size = playArea;
    this.resourceSize = c.height * 0.050;
  }

  _createClass(Ground, [{
    key: "draw",
    value: function draw() {
      if (zoom) {
        ctx.scale(scale, scale);
        zoom = false;
      }

      ctx.drawImage(grass, this.x, this.y, this.size, this.size);
      ctx.drawImage(burnium, this.x + burn.x - this.resourceSize / 2, this.y + burn.y - this.resourceSize / 2, this.resourceSize, this.resourceSize);
      ctx.drawImage(hardiumOre, this.x + hardOre.x - this.resourceSize / 2, this.y + hardOre.y - this.resourceSize / 2, this.resourceSize, this.resourceSize);
      ctx.drawImage(ouzeidBase, this.x + ouzeBase.x - this.resourceSize / 2, this.y + ouzeBase.y - this.resourceSize / 2, this.resourceSize, this.resourceSize);
      ctx.drawImage(lifeid, this.x + life.x - this.resourceSize / 2, this.y + life.y - this.resourceSize / 2, this.resourceSize, this.resourceSize);
    }
  }, {
    key: "update",
    value: function update() {
      if (moveFaster) {
        cameraSpeed = 10;
      } else {
        cameraSpeed = 5;
      }

      if (moveUp) {
        this.y += cameraSpeed;
      }

      if (moveDown) {
        this.y -= cameraSpeed;
      }

      if (moveLeft) {
        this.x += cameraSpeed;
      }

      if (moveRight) {
        this.x -= cameraSpeed;
      } //camera limit area edge.


      if (!moveFaster) {
        if (this.x >= cameraCenter.x) {
          this.x -= 5;
        }

        if (this.x + this.size <= cameraCenter.x) {
          this.x += 5;
        }

        if (this.y >= cameraCenter.y) {
          this.y -= 5;
        }

        if (this.y + this.size <= cameraCenter.y) {
          this.y += 5;
        }
      } else {
        if (this.x >= cameraCenter.x) {
          this.x -= 10;
        }

        if (this.x + this.size <= cameraCenter.x) {
          this.x += 10;
        }

        if (this.y >= cameraCenter.y) {
          this.y -= 10;
        }

        if (this.y + this.size <= cameraCenter.y) {
          this.y += 10;
        }
      }

      this.draw();
    }
  }]);

  return Ground;
}();