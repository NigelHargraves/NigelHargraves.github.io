"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Chord =
/*#__PURE__*/
function () {
  function Chord(x, y, orbitRadius, speed) {
    _classCallCheck(this, Chord);

    this.x = x;
    this.y = y;
    this.point = {
      x: 0,
      y: 0
    };
    this.orbitRadius = orbitRadius;
    this.speed = speed;
    this.angle = 0 - Math.PI / 2;
    this.opacity = 1;
    this.r = 15;
    this.lineWidth = 3;
    this.changeChord = false;
    this.changeChordTimer = 0;
  }

  _createClass(Chord, [{
    key: "draw",
    value: function draw() {
      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.arc(this.x + this.point.x, this.y + this.point.y, this.r, 0, Math.PI * 2);
      ctx.lineWidth = this.lineWidth;
      ctx.globalAlpha = this.opacity;
      ctx.strokeStyle = "red";
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.4;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.opacity > 0.2) {
        this.opacity -= 0.001;
      }

      if (this.lineWidth > 0.2) {
        this.lineWidth -= 0.05;
      }

      this.point.x = this.orbitRadius * Math.cos(this.angle);
      this.point.y = this.orbitRadius * Math.sin(this.angle);
      this.angle -= Math.PI / 180 / this.speed; //top.

      if (this.angle <= 0 - Math.PI / 2 + 0.01 && this.angle >= 0 - Math.PI / 2 - 0.01) {
        this.opacity = 1;
        this.lineWidth = 3;
        cross.opacityTop = 1;
        cross.lineWidthTop = 3;
        cross.opacityCenter = 1;

        for (var i = 0; i < 12; i++) {
          particles.push(new Particle(this.x + this.point.x, this.y + this.point.y, 'red'));
        }

        if (this.changeChord) {
          chordChange();
          this.changeChord = false;
        }
      } //left.


      if (this.angle <= 0 - Math.PI + 0.01 && this.angle >= 0 - Math.PI - 0.01) {
        this.opacity = 1;
        this.lineWidth = 3;
        cross.opacityLeft = 1;
        cross.lineWidthLeft = 3;
        cross.opacityCenter = 1;

        for (var _i = 0; _i < 12; _i++) {
          particles.push(new Particle(this.x + this.point.x, this.y + this.point.y, 'red'));
        }

        if (this.changeChord) {
          chordChange();
          this.changeChord = false;
        }
      } //bottom.


      if (this.angle <= 0 - (Math.PI + Math.PI / 2) + 0.01 && this.angle >= 0 - (Math.PI + Math.PI / 2) - 0.01) {
        this.opacity = 1;
        this.lineWidth = 3;
        cross.opacityBottom = 1;
        cross.lineWidthBottom = 3;
        cross.opacityCenter = 1;

        for (var _i2 = 0; _i2 < 12; _i2++) {
          particles.push(new Particle(this.x + this.point.x, this.y + this.point.y, 'red'));
        }

        if (this.changeChord) {
          chordChange();
          this.changeChord = false;
        }
      } //right.


      if (this.angle <= 0 - Math.PI * 2 + 0.01 && this.angle >= 0 - Math.PI * 2 - 0.01) {
        this.opacity = 1;
        this.lineWidth = 3;
        cross.opacityRight = 1;
        cross.lineWidthRight = 3;
        cross.opacityCenter = 1;

        for (var _i3 = 0; _i3 < 12; _i3++) {
          particles.push(new Particle(this.x + this.point.x, this.y + this.point.y, 'red'));
        }

        if (this.changeChord) {
          chordChange();
          this.changeChord = false;
        }
      }

      if (this.changeChordTimer > 100) {
        this.changeChord = true;
        this.changeChordTimer = 0;
      }

      if (!this.changeChord) {
        this.changeChordTimer += 1;
      }

      if (this.angle <= -Math.PI * 2) {
        this.angle = 0;
      }

      this.draw();
    }
  }]);

  return Chord;
}();

function chordChange() {
  if (chordToPlay == 'C1') {
    chordToPlay = 'F1';
    FBass.play();
    FVox.play();
  } else if (chordToPlay == 'F1') {
    chordToPlay = 'G';
    GBass.play();
    GVox.play();
  } else if (chordToPlay == 'G') {
    chordToPlay = 'C2';
    CBass.play();
    CVox.play();
  } else if (chordToPlay == 'C2') {
    chordToPlay = 'C3';
    CBass.play();
    CVox.currentTime = 0;
    CVox.play();
  } else if (chordToPlay == 'C3') {
    chordToPlay = 'F2';
    FBass.play();
    FVox.play();
  } else if (chordToPlay == 'F2') {
    chordToPlay = 'Gsus4';
    BBass.play();
    Gsus4Vox.play();
  } else if (chordToPlay == 'Gsus4') {
    chordToPlay = 'C4';
    CBass.play();
    CVoxEnd.play();
  } else if (chordToPlay == 'C4') {
    chordToPlay = 'C1';
    CBass.play();
    CVox.play();
  }
}