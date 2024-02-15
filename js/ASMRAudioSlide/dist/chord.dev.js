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
    this.r = 20;
    this.velocity = 1;
    this.left = false;
    this.opacity = 1;
    this.lineWidth = 5;
  }

  _createClass(Chord, [{
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
        this.x += this.velocity;
      } else {
        this.x -= this.velocity;
      }

      if (this.x == rectangle.x) {
        this.opacity = 1;
        this.lineWidth = 5;
        changeChord();
        this.left = false;
      }

      if (this.x == rectangle.x + canvas.width / 2) {
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
  if (chordToPlay == 'C') {
    CChord.currentTime = 0.1;
    CChord.play();
    chordToPlay = 'G';
  } else if (chordToPlay == 'G') {
    GChord.currentTime = 0.1;
    GChord.play();
    chordToPlay = 'Am';
  } else if (chordToPlay == 'Am') {
    AmChord.currentTime = 0.1;
    AmChord.play();
    chordToPlay = 'F';
  } else if (chordToPlay == 'F') {
    FChord.currentTime = 0.1;
    FChord.play();
    chordToPlay = 'C';
  }
}