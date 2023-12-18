"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create spiderSplat class.
var SpiderSplat =
/*#__PURE__*/
function () {
  //construct spiderSplat data.
  function SpiderSplat(x, y) {
    _classCallCheck(this, SpiderSplat);

    this.x = x;
    this.y = y;
    this.r = 2;
    this.size = 100;
    this.opacity = 1;
    this.rotate = Math.random() * (Math.PI * 2);
  }

  _createClass(SpiderSplat, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.translate(this.x + floor.x, this.y + floor.y);
      ctx.rotate(this.rotate);
      ctx.globalAlpha = this.opacity;
      ctx.filter = "blur(2px)";
      ctx.drawImage(splat, 0 - this.r / 2, 0 - this.r / 2, this.r, this.r);
      ctx.filter = "blur(0px)";
      ctx.globalAlpha = 1;
      ctx.drawImage(spiderDeadShadow, 0 - this.size / 2 + 10, 0 - this.size / 2 + 10, this.size, this.size);
      ctx.drawImage(spiderDead, 0 - this.size / 2, 0 - this.size / 2, this.size, this.size);
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.r <= 150) {
        this.r += 1;
      }

      if (this.opacity > 0.1 && this.r >= 100) {
        this.opacity -= 0.0002;
        this.size -= 0.02;
      }

      this.draw();
    }
  }]);

  return SpiderSplat;
}();

function forSplats() {
  spiderSplats.forEach(function (splat, index) {
    var collide = collisionDetection(player.x - floor.x, player.y - floor.y, player.r / 2.5, player.r / 2.5, splat.x, splat.y, splat.r / 2, splat.r / 2);

    if (collide) {
      health -= 0.1;
    }

    if (splat.opacity <= 0.1) {
      spiderSplats.splice(index, 1);
    }

    splat.update();
  });
}