"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Rectangle =
/*#__PURE__*/
function () {
  function Rectangle() {
    _classCallCheck(this, Rectangle);

    this.x = canvas.width / 4;
    this.y = canvas.height / 4;
    this.space = canvas.width / 2 / 12;
  }

  _createClass(Rectangle, [{
    key: "draw",
    value: function draw() {
      ctx.lineWidth = 0.2; //draw chord line.

      ctx.strokeStyle = chord.color;
      ctx.fillStyle = chord.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y - canvas.height / 10, 4, 0, Math.PI * 2);
      ctx.arc(this.x + canvas.width / 2, this.y - canvas.height / 10, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(this.x, this.y - canvas.height / 10);
      ctx.lineTo(this.x + canvas.width / 2, this.y - canvas.height / 10);
      ctx.stroke(); //draw bass line.

      ctx.strokeStyle = bass.color;
      ctx.fillStyle = bass.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y + canvas.height / 2 + canvas.height / 10, 4, 0, Math.PI * 2);
      ctx.arc(this.x + canvas.width / 2, this.y + canvas.height / 2 + canvas.height / 10, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(this.x, this.y + canvas.height / 2 + canvas.height / 10);
      ctx.lineTo(this.x + canvas.width / 2, this.y + canvas.height / 2 + canvas.height / 10);
      ctx.stroke(); //draw snare line.

      ctx.strokeStyle = snareDrum.color;
      ctx.fillStyle = snareDrum.color;
      ctx.beginPath();
      ctx.moveTo(this.x + (canvas.width / 2 + canvas.width / 10) - 10, canvas.height / 50);
      ctx.lineTo(this.x + (canvas.width / 2 + canvas.width / 10) + 10, canvas.height / 50);
      ctx.moveTo(this.x + (canvas.width / 2 + canvas.width / 10) - 10, canvas.height / 50 + canvas.width / 2);
      ctx.lineTo(this.x + (canvas.width / 2 + canvas.width / 10) + 10, canvas.height / 50 + canvas.width / 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(this.x + canvas.width / 2 + canvas.width / 10, y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(this.x + canvas.width / 2 + canvas.width / 10, canvas.height / 50);
      ctx.lineTo(this.x + canvas.width / 2 + canvas.width / 10, canvas.height / 50 + canvas.width / 2);
      ctx.stroke(); //draw hat line.

      ctx.strokeStyle = highHat.color;
      ctx.fillStyle = highHat.color;
      ctx.beginPath();
      ctx.moveTo(this.x - canvas.width / 10, canvas.height / 50);
      ctx.lineTo(this.x - canvas.width / 10, canvas.height / 50 + canvas.width / 2);
      ctx.moveTo(this.x - canvas.width / 10 - 10, canvas.height / 50);
      ctx.lineTo(this.x - canvas.width / 10 + 10, canvas.height / 50);
      ctx.moveTo(this.x - canvas.width / 10 - 10, canvas.height / 50 + canvas.width / 2);
      ctx.lineTo(this.x - canvas.width / 10 + 10, canvas.height / 50 + canvas.width / 2);
      ctx.stroke(); //draw hat beats.

      ctx.beginPath();

      for (var i = canvas.height / 50 + (canvas.height / 50 + canvas.width / 2) / 6; i < canvas.height / 50 + canvas.width / 2; i += (canvas.height / 50 + canvas.width / 2) / 6) {
        ctx.arc(this.x - canvas.width / 10, i, 4, 0, Math.PI * 2);
      }

      ctx.fill(); //draw rectangle.

      ctx.strokeStyle = 'white';
      ctx.beginPath();
      ctx.rect(this.x, this.y, canvas.width / 2, canvas.height / 2);
      ctx.stroke(); //draw lines.

      ctx.beginPath();

      for (var _i = this.x; _i < canvas.width / 2 + this.x; _i += this.space) {
        ctx.moveTo(_i, this.y);
        ctx.lineTo(_i, this.y + canvas.height / 2);
        ctx.stroke();
      } //calculate line distance from one note to another & change line width.


      var opp = 0,
          adj = 0,
          hyp = 0,
          width = 0;

      for (var _i2 = 0; _i2 < notes.length - 1; _i2++) {
        ctx.beginPath();
        opp = Math.pow(notes[_i2 + 1].x - notes[_i2].x, 2);
        adj = Math.pow(notes[_i2 + 1].y - notes[_i2].y, 2);
        if (adj < 0) adj *= -1;
        hyp = Math.sqrt(opp + adj) / 40;
        ctx.moveTo(notes[_i2].x, notes[_i2].y);
        ctx.lineTo(notes[_i2 + 1].x, notes[_i2 + 1].y);
        width = 5 - hyp;

        if (width <= 0.1) {
          width = 0.1;
        }

        ctx.lineWidth = width;
        ctx.stroke();
      }

      ctx.lineWidth = 0.2;
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return Rectangle;
}();