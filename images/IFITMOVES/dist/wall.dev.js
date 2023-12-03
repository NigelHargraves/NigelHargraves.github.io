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
    this.height = 100;
  }

  _createClass(Wall, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(obstacleBlock, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      blob -= 1;
      this.draw();
    }
  }]);

  return Wall;
}();