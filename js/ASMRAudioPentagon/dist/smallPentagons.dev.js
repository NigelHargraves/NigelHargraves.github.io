"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SmallPentagon =
/*#__PURE__*/
function () {
  function SmallPentagon(x, y, color) {
    _classCallCheck(this, SmallPentagon);

    this.center = {
      x: x,
      y: y
    };
    this.color = color;
    this.r = Math.floor(Math.random() * 100);
    this.x = this.center.x + this.r * Math.cos(0);
    this.y = this.center.y + this.r * Math.sin(0);
    this.rotateSpeed = Math.floor(Math.random() * 40);
    this.speed = Math.floor(Math.random() * 2);
    this.adj = 0;
    this.opp = 0;
    this.radiusDistance = 0;
    this.angle = 0;
    this.position = {
      x: 0,
      y: 0
    };
    this.rotateAngle = 0;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.corner = 1;
    this.opacity = 0.01;
    this.brightenUp = true;
    this.aimPoint = {
      x: this.center.x + this.r * Math.cos(Math.PI * 2 / 5),
      y: this.center.y + this.r * Math.sin(Math.PI * 2 / 5)
    };
  }

  _createClass(SmallPentagon, [{
    key: "draw",
    value: function draw() {
      ctx.fillStyle = this.color;
      ctx.save();
      ctx.translate(this.center.x, this.center.y);
      ctx.rotate(this.rotateAngle);
      ctx.beginPath();
      ctx.arc(this.x - this.center.x, this.y - this.center.y, 2, 0, Math.PI * 2);
      ctx.globalAlpha = this.opacity;
      ctx.fill();
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.opacity >= 1) {
        this.brightenUp = false;
      }

      if (this.brightenUp) {
        this.opacity += 0.001;
      } else {
        this.opacity -= 0.001;
      }

      this.rotateAngle += Math.PI / 180 / this.rotateSpeed;

      if (this.rotateAngle >= Math.PI * 2) {
        this.rotateAngle = 0;
      }

      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.angle = Math.atan2(this.aimPoint.y - this.y, this.aimPoint.x - this.x);
      this.velocity.x = Math.cos(this.angle) * this.speed;
      this.velocity.y = Math.sin(this.angle) * this.speed;
      this.opp = Math.pow(this.x - this.center.x, 2);
      if (this.opp < 0) this.opp *= -1;
      this.adj = Math.pow(this.y - this.center.y, 2);
      if (this.adj < 0) this.adj *= -1;
      this.radiusDistance = Math.floor(Math.sqrt(this.opp + this.adj));

      if (this.radiusDistance >= this.r) {
        this.aimPoint.x = this.center.x + this.r * Math.cos(Math.PI * 2 / 5 * this.corner);
        this.aimPoint.y = this.center.y + this.r * Math.sin(Math.PI * 2 / 5 * this.corner);
        this.corner += 1;

        if (this.corner == 6) {
          this.corner = 1;
        }
      }

      this.draw();
    }
  }]);

  return SmallPentagon;
}();

function forSmallPentagons() {
  smallPentagons.forEach(function (sp, index) {
    if (sp.opacity < 0.01) {
      smallPentagons.splice(index, 1);
    }

    sp.update();
  });
}