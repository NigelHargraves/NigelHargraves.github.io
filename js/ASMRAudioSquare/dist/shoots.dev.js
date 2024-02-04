"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Shoot =
/*#__PURE__*/
function () {
  function Shoot(x, y) {
    _classCallCheck(this, Shoot);

    this.x = x;
    this.y = y;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.angle = 0;
    this.center = {
      x: canvas.width / 2,
      y: canvas.height / 2
    };
  }

  _createClass(Shoot, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.translate(square.x, square.y);
      ctx.rotate(square.rotateAngle);
      ctx.beginPath();
      ctx.arc(this.x - this.center.x, this.y - this.center.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = "aquamarine";
      ctx.fill();
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.angle = Math.atan2(this.center.y - this.y, this.center.x - this.x);
      this.velocity.x = Math.cos(this.angle) * 3;
      this.velocity.y = Math.sin(this.angle) * 3;
      this.draw();
    }
  }]);

  return Shoot;
}();

function forShoots() {
  shoots.forEach(function (shoot, index) {
    var collide = collisionDetection(shoot.x, shoot.y, 1, 1, shoot.center.x, shoot.center.y, 2, 2);

    if (collide) {
      floatNotes.push(new FloatNote(shoot.x, shoot.y));
      shoots.splice(index, 1);
    }

    shoot.update();
  });
}