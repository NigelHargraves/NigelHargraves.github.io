"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//GuidedMissile class.
var GuidedMissile =
/*#__PURE__*/
function () {
  //construct GuidedMissile data.
  function GuidedMissile(x, y, vX, vY, radius, dumb) {
    _classCallCheck(this, GuidedMissile);

    this.x = x;
    this.y = y;
    this.velocityX = vX;
    this.velocityY = vY;
    this.r = radius;
    this.dumb = dumb;
    this.countDown = 25;
  } //draw GuidedMissile.


  _createClass(GuidedMissile, [{
    key: "draw",
    value: function draw() {
      if (!this.dumb) {
        ctx.drawImage(starMissile2, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
      } else {
        ctx.drawImage(starMissile, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);

        if (this.x < c.width && this.x > 0 && this.y < c.height - c.height * 0.05) {
          for (i = 0; i < 1; i++) {
            bloodSplats.push(new BloodSplat(this.x, this.y, Math.random() * 2, {
              x: (Math.random() - 0.5) * (Math.random() * 6),
              y: (Math.random() - 0.5) * (Math.random() * 6)
            }, "yellow"));
          }
        }
      }
    } //update GuidedMissile.

  }, {
    key: "update",
    value: function update() {
      if (!this.dumb) {
        var startPos = this.x;
        var angles = Math.atan2(player.y - this.y, x - startPos);
        this.velocityX = Math.cos(angles) * 5;
        this.velocityY = Math.sin(angles) * 5;
        this.countDown -= 0.1;
      }

      this.x += -player.velocity.x + this.velocityX;
      this.y += this.velocityY;
      this.draw();
    }
  }]);

  return GuidedMissile;
}();