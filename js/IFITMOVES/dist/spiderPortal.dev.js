"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SpiderPortal =
/*#__PURE__*/
function () {
  function SpiderPortal(x, y) {
    _classCallCheck(this, SpiderPortal);

    this.x = x;
    this.y = y;
    this.color = "black";
    this.r = 2;
    this.time = 0;
    this.createSpider = true;
  }

  _createClass(SpiderPortal, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(floor.x + this.x, floor.y + this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.save();
      ctx.globalAlpha = 0.1;
      ctx.beginPath();
      ctx.arc(floor.x + this.x, floor.y + this.y, this.r + this.r * 2, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
      this.color = "black";
      var taper = 1;

      for (var i = 1; i >= 0.1; i -= 0.1) {
        ctx.globalAlpha = i;
        ctx.beginPath();
        ctx.arc(floor.x + this.x, floor.y + this.y, this.r + this.r * taper, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        taper += 0.1;
      }

      ctx.restore();
      ctx.lineWidth = 1;
      var extra = this.r + 40;
      ctx.save();
      ctx.filter = "blur(2px)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(floor.x + this.x, floor.y + this.y);
      ctx.lineTo(this.x + Math.random() * (extra / 3) + floor.x, this.y + Math.random() * (extra / 3) + floor.y);
      ctx.lineTo(this.x + Math.random() * (extra / 2) + floor.x, this.y + Math.random() * (extra / 2) + floor.y);
      ctx.lineTo(this.x + Math.random() * (extra / 1.5) + floor.x, this.y + Math.random() * (extra / 1.5) + floor.y);
      ctx.lineTo(this.x + Math.random() * extra + floor.x, this.y + Math.random() * extra + floor.y);
      ctx.moveTo(floor.x + this.x, floor.y + this.y);
      ctx.lineTo(this.x + Math.random() * -(extra / 3) + floor.x, this.y + Math.random() * (extra / 3) + floor.y);
      ctx.lineTo(this.x + Math.random() * -(extra / 2) + floor.x, this.y + Math.random() * (extra / 2) + floor.y);
      ctx.lineTo(this.x + Math.random() * -(extra / 1.5) + floor.x, this.y + Math.random() * (extra / 1.5) + floor.y);
      ctx.lineTo(this.x + Math.random() * -extra + floor.x, this.y + Math.random() * extra + floor.y);
      ctx.moveTo(floor.x + this.x, floor.y + this.y);
      ctx.lineTo(this.x + Math.random() * -(extra / 3) + floor.x, this.y + Math.random() * -(extra / 3) + floor.y);
      ctx.lineTo(this.x + Math.random() * -(extra / 2) + floor.x, this.y + Math.random() * -(extra / 2) + floor.y);
      ctx.lineTo(this.x + Math.random() * -(extra / 1.5) + floor.x, this.y + Math.random() * -(extra / 1.5) + floor.y);
      ctx.lineTo(this.x + Math.random() * -extra + floor.x, this.y + Math.random() * -extra + floor.y);
      ctx.moveTo(floor.x + this.x, floor.y + this.y);
      ctx.lineTo(this.x + Math.random() * (extra / 3) + floor.x, this.y + Math.random() * -(extra / 3) + floor.y);
      ctx.lineTo(this.x + Math.random() * (extra / 2) + floor.x, this.y + Math.random() * -(extra / 2) + floor.y);
      ctx.lineTo(this.x + Math.random() * (extra / 1.5) + floor.x, this.y + Math.random() * -(extra / 1.5) + floor.y);
      ctx.lineTo(this.x + Math.random() * extra + floor.x, this.y + Math.random() * -extra + floor.y);
      ctx.strokeStyle = "white";
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.r <= 40 && this.time < 5) {
        this.r += 0.5;
        var playSound = collisionDetection(this.x, this.y, this.r / 2, this.r / 2, player.x - floor.x, player.y - floor.y, c.width / 2, c.height / 2);

        if (playSound) {
          portalOpen.play();
        }
      } else {
        this.color = "white";
        this.time += 1;
      }

      if (this.time >= 5) {
        if (this.createSpider) {
          spiders.push(new Spider(spiderWalk0, spiderWalkShadow0, this.x, this.y));
          this.createSpider = false;
        }

        this.color = "black";
        this.r -= 0.5;
      }

      this.draw();
    }
  }]);

  return SpiderPortal;
}();