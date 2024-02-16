"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bass =
/*#__PURE__*/
function () {
  function Bass() {
    _classCallCheck(this, Bass);

    this.x = rectangle.x;
    this.y = rectangle.y + canvas.height / 2 + canvas.height / 10;
    this.r = canvas.width / 2 / 12 / 4;
    this.velocity = 4;
    this.left = false;
    this.opacity = 1;
    this.lineWidth = 5;
    this.particleTime = 50;
  }

  _createClass(Bass, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.globalAlpha = this.opacity;
      ctx.lineWidth = this.lineWidth;
      ctx.stroke();
      ctx.globalAlpha = 0.4;
      ctx.lineWidth = 1;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.opacity > 0.4) {
        this.opacity -= 0.01;
      }

      if (this.lineWidth > 1) {
        this.lineWidth -= 0.1;
      }

      if (!this.left) {
        this.particleTime -= 0.2;
        particles.push(new Particle(this.x, this.y, {
          x: -this.velocity / 4,
          y: (Math.random() - 0.5) / 2
        }, this.particleTime));

        if (this.x < x) {
          this.r += 0.1;
        } else {
          this.r -= 0.1;
        }

        this.x += this.velocity;
      } else {
        this.particleTime -= 0.2;
        particles.push(new Particle(this.x, this.y, {
          x: this.velocity / 4,
          y: (Math.random() - 0.5) / 2
        }, this.particleTime));

        if (this.x < x) {
          this.r += 0.07;
        } else {
          this.r -= 0.07;
        }

        this.x -= this.velocity;
      }

      if (this.x == rectangle.x) {
        for (var i = 0; i < 20; i++) {
          particles.push(new Particle(this.x, this.y, {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2
          }, 50));
        }

        this.particleTime = 50;
        this.r = canvas.width / 2 / 12 / 4;
        this.opacity = 1;
        this.lineWidth = 5;
        changeBass();
        this.left = false;
      }

      if (this.x == rectangle.x + canvas.width / 2) {
        for (var _i = 0; _i < 20; _i++) {
          particles.push(new Particle(this.x, this.y, {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2
          }, 50));
        }

        this.particleTime = 50;
        this.r = canvas.width / 2 / 12 / 4;
        this.opacity = 1;
        this.lineWidth = 5;
        changeBass();
        this.left = true;
      }

      this.draw();
    }
  }]);

  return Bass;
}();

function changeBass() {
  drumBass.play();

  if (chordToPlay == 'C') {
    FBass.currentTime = 0.1;
    FBass.play();
  }

  if (chordToPlay == 'G') {
    CBass.currentTime = 0.1;
    CBass.play();
  }

  if (chordToPlay == 'Am') {
    GBass.currentTime = 0.1;
    GBass.play();
  }

  if (chordToPlay == 'F') {
    ABass.currentTime = 0.1;
    ABass.play();
  }
}