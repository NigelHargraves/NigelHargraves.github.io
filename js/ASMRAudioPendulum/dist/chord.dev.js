"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Chord =
/*#__PURE__*/
function () {
  function Chord(x, y, radius) {
    _classCallCheck(this, Chord);

    this.x = x;
    this.y = y;
    this.r = radius;
    this.first = true;
    this.changeOnce = true;
    this.swing = this.x;
    this.angle = -0.57;
    this.velocity = 0;
    this.acceleration = 0;
    this.force = 0;
    this.opacity = 1;
    this.lineWidth = 3;
  }

  _createClass(Chord, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = 'aquamarine';
      ctx.fillStyle = 'aquamarine'; //draw pendulum arm.

      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(x, 0);
      ctx.globalAlpha = this.opacity;
      ctx.lineWidth = this.lineWidth;
      ctx.stroke(); //draw chord.

      ctx.beginPath();
      ctx.arc(this.x, this.y, 20, 0, Math.PI * 2);
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

      if (this.lineWidth > 0.4) {
        this.lineWidth -= 0.01;
      } //calculate pendulum movement.


      this.force = gravity * Math.sin(this.angle);
      this.acceleration = -1 * this.force / this.r;
      this.velocity += this.acceleration;
      this.angle += this.velocity;
      this.x = this.r * Math.sin(this.angle) + x;
      this.y = this.r * Math.cos(this.angle);

      if (this.x > x) {
        this.first = false;
      }

      if (this.x > x - 1 && this.x < x + 1) {
        this.changeOnce = true;
      }

      if (this.x <= this.swing + 0.1 && this.x >= this.swing - 0.1) {
        lines.baseLineWidth = 5;

        for (var i = 0; i < 20; i++) {
          velocity = {
            x: (Math.random() - 0.5) / Math.random(),
            y: (Math.random() - 0.5) / Math.random()
          };
          particles.push(new Particle(this.x, this.y, 'aquamarine', velocity));
        }

        if (!this.first) {
          if (this.changeOnce) {
            chordChange();
            this.changeOnce = false;
          }
        } else {
          ABass.play();
          CLongNote1.play();
        }

        bubbles.push(new Bubble(this.x, this.y, -0.1));
        this.lineWidth = 3;
        this.opacity = 1;
      }

      if (this.x <= x + (x - this.swing) + 0.1 && this.x >= x + (x - this.swing) - 0.1) {
        lines.baseLineWidth = 5;

        for (var _i = 0; _i < 10; _i++) {
          velocity = {
            x: (Math.random() - 0.5) / Math.random(),
            y: (Math.random() - 0.5) / Math.random()
          };
          particles.push(new Particle(this.x, this.y, 'aquamarine', velocity));
        }

        if (this.changeOnce) {
          chordChange();
          this.changeOnce = false;
        }

        bubbles.push(new Bubble(this.x, this.y, 0.1));
        this.lineWidth = 3;
        this.opacity = 1;
      }

      if (this.x <= this.swing + 0.1 && this.x >= this.swing - 0.1) {
        this.x = this.swing;
      }

      this.draw();
    }
  }]);

  return Chord;
}();

function chordChange() {
  if (chordToPlay == 'Am1') {
    chordToPlay = 'F1';
    FBass.play();
    CLongNote2.play();
  } else if (chordToPlay == 'F1') {
    chordToPlay = 'C1';
    CBass.play();
    CLongNote1.play();
  } else if (chordToPlay == 'C1') {
    chordToPlay = 'G1';
    GBass.play();
    BLongNote.play();
  } else if (chordToPlay == 'G1') {
    chordToPlay = 'Am2';
    ABass.play();
    CLongNote1.play();
  } else if (chordToPlay == 'Am2') {
    chordToPlay = 'F2';
    FBass.play();
    CLongNote2.play();
  } else if (chordToPlay == 'F2') {
    chordToPlay = 'C2';
    CBass.play();
    CLongNote1.play();
  } else if (chordToPlay == 'C2') {
    chordToPlay = 'G2';
    GBass.play();
    DLongNote.play();
  } else if (chordToPlay == 'G2') {
    chordToPlay = 'Am3';
    ABass.play();
    ALongNote1.play();
  } else if (chordToPlay == 'Am3') {
    chordToPlay = 'F3';
    FBass.play();
    ALongNote2.play();
  } else if (chordToPlay == 'F3') {
    chordToPlay = 'E71';
    EBass.play();
    AbLongNote.play();
  } else if (chordToPlay == 'E71') {
    chordToPlay = 'Am4';
    ABass.play();
    CLongNote1.play();
  } else if (chordToPlay == 'Am4') {
    chordToPlay = 'Dm7';
    DBass.play();
    ALongNote1.play();
  } else if (chordToPlay == 'Dm7') {
    chordToPlay = 'Gsus4';
    GBass.play();
    GLongNote1.play();
  } else if (chordToPlay == 'Gsus4') {
    chordToPlay = 'C3';
    CBass.play();
    GLongNote2.play();
  } else if (chordToPlay == 'C3') {
    chordToPlay = 'E72';
    EBass.play();
    DLongNote.play();
  } else if (chordToPlay == 'E72') {
    chordToPlay = 'Am1';
    ABass.play();
    CLongNote1.play();
  }
}