"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bubble =
/*#__PURE__*/
function () {
  function Bubble(x, y, direction) {
    _classCallCheck(this, Bubble);

    this.x = x;
    this.y = y;
    this.direction = direction;
    this.deflate = Math.random() * 0.02;
    this.r = 1;
    this.pop = false;
    this.velocity = {
      x: Math.random() * this.direction,
      y: Math.random() * -1 / 4
    };
    this.pulse = false;
    this.grow = true;
    this.pulseTimer = 0;
    this.hitEdge = false;
    this.color = color[Math.floor(Math.random() * 24)];
  }

  _createClass(Bubble, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = this.color;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x - this.r / 4, this.y - this.r / 4, this.r / 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.lineWidth = 0.4;
      ctx.stroke();
      ctx.lineWidth = 1;
    }
  }, {
    key: "update",
    value: function update() {
      if (!this.pop) {
        this.r += 0.1;
      } else {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.r -= this.deflate;
      }

      if (this.r >= 40) {
        this.pulse = true;
        this.pop = true;
      }

      if (this.pulse) {
        if (this.grow) {
          this.r += 0.1;
          this.pulseTimer += 1;
        } else {
          this.r -= 0.1;
          this.pulseTimer += 1;
        }
      }

      if (this.pulseTimer >= 10) {
        if (this.grow) {
          this.grow = false;
        } else {
          this.grow = true;
        }

        this.pulseTimer = 0;
      }

      this.draw();
    }
  }]);

  return Bubble;
}();

function forBubbles() {
  bubbles.forEach(function (bubble, index) {
    if (bubble.r <= 10 && bubble.pop) {
      bubble.r -= 1;
    }

    if (bubble.x - bubble.r < 1 || bubble.x + bubble.r > canvas.width - 1 || bubble.y - bubble.r < 1) {
      bubble.hitEdge = true;
    }

    if (bubble.hitEdge && bubble.r > 10) {
      bubble.r -= 1;
    }

    if (bubble.r <= 2 && bubble.pop) {
      for (var i = 0; i < 10; i++) {
        velocity = {
          x: Math.random() - 0.5,
          y: Math.random() - 0.5
        };
        particles.push(new Particle(bubble.x, bubble.y, bubble.color, velocity));
      }

      bubbles.splice(index, 1);
    }

    bubble.update();
  });
}