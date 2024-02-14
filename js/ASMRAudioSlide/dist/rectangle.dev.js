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
      //draw chord line.
      ctx.beginPath();
      ctx.moveTo(this.x, this.y - canvas.height / 10);
      ctx.lineTo(this.x + canvas.width / 2, this.y - canvas.height / 10);
      ctx.strokeStyle = 'white';
      ctx.stroke(); //draw notes rectangle.

      ctx.beginPath();
      ctx.rect(this.x, this.y, canvas.width / 2, canvas.height / 2);
      ctx.stroke(); //draw lines.

      ctx.beginPath();

      for (var i = this.x; i < canvas.width / 2 + this.x; i += this.space) {
        ctx.moveTo(i, this.y);
        ctx.lineTo(i, this.y + canvas.height / 2);
      }

      ctx.stroke();

      for (var _i = 0; _i < notes.length - 1; _i++) {
        ctx.beginPath();
        ctx.moveTo(notes[_i].x, notes[_i].y);
        ctx.lineTo(notes[_i + 1].x, notes[_i + 1].y);
        ctx.stroke();
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return Rectangle;
}();