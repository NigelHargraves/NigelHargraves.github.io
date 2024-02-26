"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cannon =
/*#__PURE__*/
function () {
  function Cannon(x, y, angle, direction) {
    _classCallCheck(this, Cannon);

    this.x = x;
    this.y = y;
    this.r = 20;
    this.angle = angle;
    this.left = direction;
    this.aimPoint = {
      x: 0,
      y: 0
    };
    this.fireInterval = 1000;
    this.fireTime = Math.floor(Math.random() * this.fireInterval);
    this.count = 0;
  }

  _createClass(Cannon, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.strokeStyle = 'white';
      ctx.fillStyle = 'white';
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x + this.aimPoint.x, this.y + this.aimPoint.y);
      ctx.lineWidth = 10;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.lineWidth = 1;
    }
  }, {
    key: "update",
    value: function update() {
      this.aimPoint.x = 50 * Math.cos(this.angle);
      this.aimPoint.y = 50 * Math.sin(this.angle);

      if (this.count == Math.floor(this.fireTime / 2)) {
        notes.push(new Note(this.x, this.y, {
          x: this.aimPoint.x / 20,
          y: this.aimPoint.y / 20
        }));
      }

      if (this.count >= this.fireTime) {
        if (this.left) {
          this.angle = 0 - Math.random() * (Math.PI / 2);
        } else {
          this.angle = 0 - Math.PI / 2 - Math.random() * (Math.PI / 2);
        }

        this.count = 0;
        this.fireTime = Math.floor(Math.random() * this.fireInterval);
      }

      this.count++;
      this.draw();
    }
  }]);

  return Cannon;
}();

function forCannons() {
  cannons.forEach(function (cannon, index) {
    cannon.update();
  });
}