"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Note =
/*#__PURE__*/
function () {
  function Note(x, y, acceleration, note, speed, number) {
    _classCallCheck(this, Note);

    this.x = x;
    this.y = y;
    this.acceleration = acceleration;
    this.note = note;
    this.speed = speed;
    this.number = number;
    this.r = 10;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.angle = 0;
    this["in"] = true;
    this.distance = 400;
    this.measure = this.distance;
    this.opacity = 1;
    this.bigOpacity = 1;
    this.lineWidth = 3;
  }

  _createClass(Note, [{
    key: "draw",
    value: function draw() {
      //draw big circle.
      ctx.globalAlpha = this.bigOpacity;
      ctx.lineWidth = 0.2;
      ctx.beginPath();
      ctx.arc(x, y, 400, 0, Math.PI * 2);
      ctx.strokeStyle = strokeStyle;
      ctx.stroke(); //draw Notes.

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.strokeStyle = color[this.number];
      ctx.lineWidth = this.lineWidth;
      ctx.globalAlpha = this.opacity;
      ctx.stroke(); //draw lines.

      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.strokeStyle = 'white';
      ctx.globalAlpha = 0.4;
      ctx.lineWidth = 1;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.bigOpacity > 0.2) {
        this.bigOpacity -= 0.1;
      }

      if (this.opacity > 0.6) {
        this.opacity -= 0.01;
      }

      if (this.lineWidth > 0.2) {
        this.lineWidth -= 0.1;
      }

      if (this["in"]) {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.measure -= this.acceleration;
        this.r /= 1.003;
        this.acceleration -= 0.001;
      } else {
        this.x -= this.velocity.x;
        this.y -= this.velocity.y;
        this.measure += this.acceleration;
        this.r *= 1.003;
        this.acceleration += 0.001;
      }

      if (this.measure <= 0) {
        this["in"] = false;
      }

      if (this.measure >= this.distance) {
        for (var i = 0; i < 10; i++) {
          dusts.push(new Dust(this.x, this.y, (this.velocity.x + Math.random() - 0.5) / 6, (this.velocity.y + Math.random() - 0.5) / 6, this.number));
        }

        strokeStyle = color[this.number];
        this.note.play();
        this.bigOpacity = 1;
        this.opacity = 1;
        this.lineWidth = 3;
        this["in"] = true;
      }

      this.angles = Math.atan2(y - this.y, x - this.x);
      this.velocity.x = Math.cos(this.angles) * this.acceleration;
      this.velocity.y = Math.sin(this.angles) * this.acceleration;
      this.draw();
    }
  }]);

  return Note;
}();

function forNotes() {
  if (chord.start) {
    if (chord.r == 1) {
      if (chord.chord == 'Am1' || chord.chord == 'Am2') {
        for (var i = 0; i < 24; i++) {
          notes[i].note = chordAm1[i];
        }
      }

      if (chord.chord == 'Am3' || chord.chord == 'Am4') {
        for (var _i = 0; _i < 24; _i++) {
          notes[_i].note = chordAm2[_i];
        }
      }

      if (chord.chord == 'F1' || chord.chord == 'F2') {
        for (var _i2 = 0; _i2 < 24; _i2++) {
          notes[_i2].note = chordF1[_i2];
        }
      }

      if (chord.chord == 'F3') {
        for (var _i3 = 0; _i3 < 24; _i3++) {
          notes[_i3].note = chordF2[_i3];
        }
      }

      if (chord.chord == 'C1' || chord.chord == 'C2') {
        for (var _i4 = 0; _i4 < 24; _i4++) {
          notes[_i4].note = chordC1[_i4];
        }
      }

      if (chord.chord == 'C3') {
        for (var _i5 = 0; _i5 < 24; _i5++) {
          notes[_i5].note = chordC2[_i5];
        }
      }

      if (chord.chord == 'G1' || chord.chord == 'G2') {
        for (var _i6 = 0; _i6 < 24; _i6++) {
          notes[_i6].note = chordG[_i6];
        }
      }

      if (chord.chord == 'E7') {
        for (var _i7 = 0; _i7 < 24; _i7++) {
          notes[_i7].note = chordE7[_i7];
        }
      }

      if (chord.chord == 'Dm7') {
        for (var _i8 = 0; _i8 < 24; _i8++) {
          notes[_i8].note = chordDm7[_i8];
        }
      }

      if (chord.chord == 'Gsus4') {
        for (var _i9 = 0; _i9 < 24; _i9++) {
          notes[_i9].note = chordGsus4[_i9];
        }
      }

      if (chord.chord == 'Dm') {
        for (var _i10 = 0; _i10 < 24; _i10++) {
          notes[_i10].note = chordDm[_i10];
        }
      }
    }
  }

  notes.forEach(function (note, index) {
    note.update();
  });
}