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
    this.beatCount = 0;
    this.extraBeat = false;
    this.color = colors[12];
  }

  _createClass(Bass, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = this.color;
      ctx.fillStyle = this.color;

      if (this.extraBeat) {
        ctx.beginPath();
        ctx.arc(rectangle.x + rectangle.space * 2, rectangle.y + canvas.height / 2 + canvas.height / 10, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.globalAlpha = this.opacity;
      ctx.lineWidth = this.lineWidth;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
      ctx.fill();
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

      if (this.beatCount == 3) {
        this.extraBeat = true;
        this.beatCount = -1;
      }

      if (!this.left) {
        this.particleTime -= 0.2;
        particles.push(new Particle(this.x, this.y, {
          x: -this.velocity / 4,
          y: (Math.random() - 0.5) / 2
        }, this.particleTime, this.color, 0.2));

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
        }, this.particleTime, this.color, 0.2));

        if (this.x < x) {
          this.r += 0.07;
        } else {
          this.r -= 0.07;
        }

        this.x -= this.velocity;
      }

      if (this.x == rectangle.x) {
        this.extraBeat = false;
        this.beatCount++;

        for (var i = 0; i < 20; i++) {
          particles.push(new Particle(this.x, this.y, {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2
          }, 50, this.color, 0.2));
        }

        this.particleTime = 50;
        this.r = canvas.width / 2 / 12 / 4;
        this.opacity = 1;
        this.lineWidth = 5;
        changeBass();
        this.left = false;
      }

      if (this.extraBeat && this.x == rectangle.x + rectangle.space * 2) {
        this.opacity = 1;
        this.lineWidth = 5;

        for (var _i = 0; _i < 20; _i++) {
          particles.push(new Particle(this.x, this.y, {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2
          }, 50, this.color, 0.2));
        }

        drumBass.play();
      }

      if (this.x == rectangle.x + canvas.width / 2) {
        this.beatCount++;

        for (var _i2 = 0; _i2 < 20; _i2++) {
          particles.push(new Particle(this.x, this.y, {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2
          }, 50, this.color, 0.2));
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
  drumBass.currentTime = 0;
  drumBass.play();

  if (chordToPlay == 'C1') {
    CBass.currentTime = 0.1;
    CBass.play();
  }

  if (chordToPlay == 'G1') {
    GBass.currentTime = 0.1;
    GBass.play();
  }

  if (chordToPlay == 'Am1') {
    ABass.currentTime = 0.1;
    ABass.play();
  }

  if (chordToPlay == 'F1') {
    FBass.currentTime = 0.1;
    FBass.play();
  }

  if (chordToPlay == 'C2') {
    GBass.currentTime = 0.1;
    GBass.play();
  }

  if (chordToPlay == 'Am2') {
    CBass.currentTime = 0.1;
    CBass.play();
  }

  if (chordToPlay == 'F2') {
    ABass.currentTime = 0.1;
    ABass.play();
  }

  if (chordToPlay == 'G2') {
    GBass.currentTime = 0.1;
    GBass.play();
  }
}