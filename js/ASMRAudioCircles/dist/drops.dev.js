"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Drop =
/*#__PURE__*/
function () {
  function Drop(x, y) {
    _classCallCheck(this, Drop);

    this.x = x;
    this.y = y;
    this.r = 1;
  }

  _createClass(Drop, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.stroke();
    }
  }, {
    key: "update",
    value: function update() {
      this.r += 1;
      this.draw();
    }
  }]);

  return Drop;
}();

function forDrops() {
  drops.forEach(function (drop, index) {
    if (drop.r > 200) {
      drops.splice(index, 1);
    }

    drop.update();
  });
}