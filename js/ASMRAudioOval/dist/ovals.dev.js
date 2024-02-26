"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ovals =
/*#__PURE__*/
function () {
  function Ovals(x, y, color) {
    _classCallCheck(this, Ovals);

    this.x = x;
    this.y = y;
    this.color = color;
    this.angle = 0;
    this.point = {
      x: 0,
      y: 0
    };
    this.velocity = {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5
    };
    this.radiusNumber = Math.random() * 60;
    this.radius = {
      x: this.radiusNumber,
      y: this.radiusNumber / 2
    };
    this.rotation = {
      x: 0,
      y: 0
    };
    this.opacity = 0.01;
    this.brighten = true;
    this.direction = Math.random();

    if (this.direction > 0.5) {
      this.rotateUp = true;
    } else {
      this.rotateUp = false;
    }
  }

  _createClass(Ovals, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.ellipse(this.x, this.y, this.radius.x, this.radius.y, this.rotation.x, this.rotation.y, Math.PI * 2);
      ctx.strokeStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.stroke();
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation.x);
      ctx.beginPath();
      ctx.arc(0 + this.point.x, 0 + this.point.y, 2, 0, Math.PI * 2);
      ctx.arc(0 - this.point.x, 0 - this.point.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.restore();
      ctx.globalAlpha = 0.4;
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.point.x = this.radius.x * Math.cos(this.angle);
      this.point.y = this.radius.y * Math.sin(this.angle);
      this.angle += Math.PI / 180 / 4;

      if (this.angle >= Math.PI * 2) {
        this.angle = 0;
      }

      if (this.rotateUp) {
        this.rotation.x -= 0.001;
      } else {
        this.rotation.x += 0.001;
      }

      if (this.rotation.x <= -0.2) {
        this.rotateUp = false;
      }

      if (this.rotation.x >= 0.2) {
        this.rotateUp = true;
      }

      if (this.brighten && this.opacity < 1) {
        this.opacity += 0.001;
      }

      if (this.opacity >= 1) {
        this.brighten = false;
      }

      if (!this.brighten) {
        this.opacity -= 0.001;
      }

      this.draw();
    }
  }]);

  return Ovals;
}();

function forOvals() {
  smallOvals.forEach(function (ov, index) {
    if (!ov.brighten && ov.opacity < 0.01) {
      smallOvals.splice(index, 1);
    }

    ov.update();
  });
}