"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Chord =
/*#__PURE__*/
function () {
  function Chord() {
    _classCallCheck(this, Chord);

    this.x = rectangle.x;
    this.y = rectangle.y - canvas.height / 10;
    this.r = canvas.width / 2 / 12 / 4;
    this.velocity = 1;
    this.left = false;
    this.opacity = 1;
    this.lineWidth = 5;
    this.particleTime = 100;
  }

  _createClass(Chord, [{
    key: "draw",
    value: function draw() {
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
        this.opacity -= 0.001;
      }

      if (this.lineWidth > 1) {
        this.lineWidth -= 0.005;
      }

      if (!this.left) {
        this.particleTime -= 0.1;
        particles.push(new Particle(this.x, this.y, {
          x: -this.velocity / 2,
          y: (Math.random() - 0.5) / 2
        }, this.particleTime));

        if (this.x < x) {
          this.r += 0.03;
        } else {
          this.r -= 0.03;
        }

        this.x += this.velocity;
      } else {
        this.particleTime -= 0.1;
        particles.push(new Particle(this.x, this.y, {
          x: this.velocity / 2,
          y: (Math.random() - 0.5) / 2
        }, this.particleTime));

        if (this.x < x) {
          this.r += 0.01;
        } else {
          this.r -= 0.01;
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

        this.particleTime = 100;
        this.r = canvas.width / 2 / 12 / 4;
        this.opacity = 1;
        this.lineWidth = 5;
        changeChord();
        this.left = false;
      }

      if (this.x == rectangle.x + canvas.width / 2) {
        for (var _i = 0; _i < 20; _i++) {
          particles.push(new Particle(this.x, this.y, {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2
          }, 50));
        }

        this.particleTime = 100;
        this.r = canvas.width / 2 / 12 / 4;
        this.opacity = 1;
        this.lineWidth = 5;
        changeChord();
        this.left = true;
      }

      this.draw();
    }
  }]);

  return Chord;
}();

function changeChord() {
  if (chordToPlay == 'C1') {
    chordToPlay = 'G1';
  } else if (chordToPlay == 'G1') {
    chordToPlay = 'Am1';
  } else if (chordToPlay == 'Am1') {
    chordToPlay = 'F1';
  } else if (chordToPlay == 'F1') {
    chordToPlay = 'C2';
  } else if (chordToPlay == 'C2') {
    chordToPlay = 'Am2';
  } else if (chordToPlay == 'Am2') {
    chordToPlay = 'F2';
  } else if (chordToPlay == 'F2') {
    chordToPlay = 'G2';
  } else if (chordToPlay == 'G2') {
    chordToPlay = 'C1';
  }

  crash.play();

  if (chordToPlay == 'C1') {
    CChord.play();
  } else if (chordToPlay == 'G1') {
    GChord.play();
  } else if (chordToPlay == 'Am1') {
    AmChord.play();
  } else if (chordToPlay == 'F1') {
    FChord.play();
  } else if (chordToPlay == 'C2') {
    CChord.play();
  } else if (chordToPlay == 'Am2') {
    AmChord.play();
  } else if (chordToPlay == 'F2') {
    FChord.play();
  } else if (chordToPlay == 'G2') {
    GChord.play();
  }
}