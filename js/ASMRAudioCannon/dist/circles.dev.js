"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Circle =
/*#__PURE__*/
function () {
  function Circle(x, y) {
    _classCallCheck(this, Circle);

    this.x = x;
    this.y = y;
    this.r = 1;
    this.inflate = true;
    this.velocity = {
      x: (Math.random() - 0.5) / 10,
      y: (Math.random() - 0.5) / 10
    };
    this.color = color[Math.floor(Math.random() * 24)];
    this.opacity = 0.01;
  }

  _createClass(Circle, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.strokeStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.lineWidth = 0.2;
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.4;
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      if (this.inflate) {
        this.r += 0.01;
      }

      if (this.r >= 50) {
        this.inflate = false;
      }

      if (this.opacity < 1) {
        this.opacity += 0.0001;
      }

      this.draw();
    }
  }]);

  return Circle;
}();

function forCircles() {
  circles.forEach(function (circle, index) {
    if (!circle.inflate) {
      circle.r -= 1;

      if (circle.r <= 2) {
        for (var i = 0; i < 20; i++) {
          particles.push(new Particle(circle.x, circle.y, {
            x: Math.random() - 0.5,
            y: Math.random() - 0.5
          }, circle.color));
        }

        circles.splice(index, 1);
      }
    }

    circle.update();
  });
}