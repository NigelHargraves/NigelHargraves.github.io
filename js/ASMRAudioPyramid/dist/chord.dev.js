"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Chord =
/*#__PURE__*/
function () {
  function Chord() {
    _classCallCheck(this, Chord);

    this.x = center.x;
    this.y = center.y;
    this.opacity = 1;
    this.lineWidth = 5;
    this.smallRadius = 20;
    this.bigRadius = canvas.height / 3;
    this.angle = Math.PI * 2 - Math.PI / 2;
    this.point = {
      x: 0,
      y: 0
    };
    this.delay = 100;
  }

  _createClass(Chord, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = 'aquamarine';
      ctx.fillStyle = 'aquamarine'; //draw large circle.

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.bigRadius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = this.opacity;
      ctx.lineWidth = this.lineWidth;
      ctx.stroke(); //draw chord.

      ctx.beginPath();
      ctx.arc(this.x + this.point.x, this.y + this.point.y, this.smallRadius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(this.x + this.point.x, this.y + this.point.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 0.2;
      ctx.lineWidth = 1;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.opacity > 0.2) {
        this.opacity -= 0.01;
      }

      if (this.lineWidth > 1) {
        this.lineWidth -= 0.1;
      }

      this.point.x = this.bigRadius * Math.cos(this.angle);
      this.point.y = this.bigRadius * Math.sin(this.angle);
      this.angle += Math.PI / 180 / 4;

      if (this.angle >= Math.PI * 2) {
        this.angle = 0;
      }

      if (this.angle <= Math.PI / 2 * 3 + 0.001 && this.angle >= Math.PI / 2 * 3 - 0.001 && this.delay == 0) {
        chordChange();
        this.opacity = 1;
        this.lineWidth = 5;
        this.delay = 100;
      }

      if (this.delay > 0) {
        this.delay -= 1;
      }

      this.draw();
    }
  }]);

  return Chord;
}();

function chordChange() {
  if (chordToPlay == 'Am') {
    chordToPlay = 'F';
  } else if (chordToPlay == 'F') {
    chordToPlay = 'C';
  } else if (chordToPlay == 'C') {
    chordToPlay = 'G';
  } else if (chordToPlay == 'G') {
    chordToPlay = 'Am';
  }

  if (chordToPlay == 'Am') {
    for (var i = 0; i < 24; i++) {
      notes[i].note = chordAm[i];
    }
  }

  if (chordToPlay == 'F') {
    for (var _i = 0; _i < 24; _i++) {
      notes[_i].note = chordF[_i];
    }
  }

  if (chordToPlay == 'C') {
    for (var _i2 = 0; _i2 < 24; _i2++) {
      notes[_i2].note = chordC[_i2];
    }
  }

  if (chordToPlay == 'G') {
    for (var _i3 = 0; _i3 < 24; _i3++) {
      notes[_i3].note = chordG[_i3];
    }
  }
}