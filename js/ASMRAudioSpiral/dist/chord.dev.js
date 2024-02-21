"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Chord =
/*#__PURE__*/
function () {
  function Chord(x, y, chord) {
    _classCallCheck(this, Chord);

    this.x = x;
    this.y = y;
    this.chord = chord;
    this.r = 1;
    this.expand = true;
    this.start = false;
    this.lineWidth = 3;
    this.opacity = 1;
    this.color = color[Math.floor(Math.random() * 24)];
  }

  _createClass(Chord, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(x, y, this.r, 0, Math.PI * 2);
      ctx.strokeStyle = this.color;
      ctx.lineWidth = this.lineWidth;
      ctx.globalAlpha = this.opacity;
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.4;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.opacity > 0.4) {
        this.opacity -= 0.01;
      }

      if (this.lineWidth > 0.2) {
        this.lineWidth -= 0.01;
      }

      if (this.expand) {
        this.r += 1;
      }

      if (!this.expand) {
        this.r -= 1;
      }

      if (this.r <= 1) {
        this.color = color[Math.floor(Math.random() * 24)];

        if (this.start) {
          for (var i = 0; i < 20; i++) {
            dusts.push(new Dust(x, y, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4, 24));
          }

          this.lineWidth = 3;
          this.opacity = 1;

          if (this.chord == 'Am1') {
            FBass.play();
            this.chord = 'F1';
            FChord.currentTime = 0.1;
            FChord.play();
          } else if (this.chord == 'F1') {
            CBass.play();
            this.chord = 'C1';
            CChord.currentTime = 0.1;
            CChord.play();
          } else if (this.chord == 'C1') {
            BBass.play();
            this.chord = 'G1';
            GChord.currentTime = 0.1;
            GChord.play();
          } else if (this.chord == 'G1') {
            ABass.play();
            this.chord = 'Am2';
            AmChord.currentTime = 0.1;
            AmChord.play();
          } else if (this.chord == 'Am2') {
            FBass.play();
            this.chord = 'F2';
            FChord.currentTime = 0.1;
            FChord.play();
          } else if (this.chord == 'F2') {
            CBass.play();
            this.chord = 'C2';
            CChord.currentTime = 0.1;
            CChord.play();
          } else if (this.chord == 'C2') {
            BBass.play();
            this.chord = 'G2';
            GChord.currentTime = 0.1;
            GChord.play();
          } else if (this.chord == 'G2') {
            ABass.play();
            this.chord = 'Am3';
            AmChord.currentTime = 0.1;
            AmChord.play();
          } else if (this.chord == 'Am3') {
            FBass.play();
            this.chord = 'F3';
            FChord.currentTime = 0.1;
            FChord.play();
          } else if (this.chord == 'F3') {
            EBass.play();
            this.chord = 'E7';
            E7Chord.currentTime = 0.1;
            E7Chord.play();
          } else if (this.chord == 'E7') {
            ABass.play();
            this.chord = 'Am4';
            AmChord.currentTime = 0.1;
            AmChord.play();
          } else if (this.chord == 'Am4') {
            DBass.play();
            this.chord = 'Dm7';
            Dm7Chord.currentTime = 0.1;
            Dm7Chord.play();
          } else if (this.chord == 'Dm7') {
            GBass.play();
            this.chord = 'Gsus4';
            Gsus4Chord.currentTime = 0.1;
            Gsus4Chord.play();
          } else if (this.chord == 'Gsus4') {
            CBass.play();
            this.chord = 'C3';
            CChord.currentTime = 0.1;
            CChord.play();
          } else if (this.chord == 'C3') {
            CBass.play();
            this.chord = 'Caug';
            CaugChord.currentTime = 0.1;
            CaugChord.play();
          } else if (this.chord == 'Caug') {
            ABass.play();
            this.chord = 'Am1';
            AmChord.currentTime = 0.1;
            AmChord.play();
          }
        }

        this.expand = true;
      }

      if (this.r >= 400) {
        this.start = true;
        this.expand = false;
      }

      this.draw();
    }
  }]);

  return Chord;
}();