"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ZigZag =
/*#__PURE__*/
function () {
  function ZigZag() {
    _classCallCheck(this, ZigZag);

    this.y;
    this.leftLineWidth = 5;
    this.middleLineWidth = 1;
    this.rightLineWidth = 1;
  }

  _createClass(ZigZag, [{
    key: "draw",
    value: function draw() {
      ctx.lineWidth = 0.4;
      this.y = canvas.height / 10;
      ctx.strokeStyle = 'white';
      ctx.fillStyle = 'white'; //notes.
      //diagonal lines.

      ctx.beginPath();
      ctx.moveTo(left, this.y);
      this.y += canvas.height / 10;
      ctx.lineTo(right, this.y);
      this.y += canvas.height / 10;
      ctx.lineTo(left, this.y);
      this.y += canvas.height / 10;
      ctx.lineTo(right, this.y);
      this.y += canvas.height / 10;
      ctx.lineTo(left, this.y);
      this.y += canvas.height / 10;
      ctx.lineTo(right, this.y);
      this.y += canvas.height / 10;
      ctx.lineTo(left, this.y);
      this.y += canvas.height / 10;
      ctx.lineTo(right, this.y);
      this.y += canvas.height / 10;
      ctx.lineTo(left, this.y);
      ctx.lineTo(right, this.y);
      this.y -= canvas.height / 10;
      ctx.lineTo(left, this.y);
      this.y -= canvas.height / 10;
      ctx.lineTo(right, this.y);
      this.y -= canvas.height / 10;
      ctx.lineTo(left, this.y);
      this.y -= canvas.height / 10;
      ctx.lineTo(right, this.y);
      this.y -= canvas.height / 10;
      ctx.lineTo(left, this.y);
      this.y -= canvas.height / 10;
      ctx.lineTo(right, this.y);
      this.y -= canvas.height / 10;
      ctx.lineTo(left, this.y);
      this.y -= canvas.height / 10;
      ctx.lineTo(right, this.y);
      ctx.lineTo(left, this.y);
      ctx.stroke(); //dots.

      for (var i = canvas.height / 10; i < canvas.height / 10 * 10; i += canvas.height / 10) {
        ctx.beginPath();
        ctx.arc(left, i, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(right, i, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      var number = 0;

      for (var _i = canvas.height / 10; _i < canvas.height / 10 * 10; _i += canvas.height / 10) {
        if (number == 1 || number == 9) {
          _i -= canvas.height / 10 / 2;
        }

        ctx.beginPath();
        ctx.arc(center.x, _i, 4, 0, Math.PI * 2);
        ctx.fill();
        number++;
      } //vertical lines.


      ctx.beginPath();
      ctx.moveTo(left, this.y);
      ctx.lineTo(left, canvas.height - this.y);
      ctx.lineWidth = this.leftLineWidth;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(center.x, this.y);
      ctx.lineTo(center.x, canvas.height - this.y);
      ctx.lineWidth = this.middleLineWidth;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(right, this.y);
      ctx.lineTo(right, canvas.height - this.y);
      ctx.lineWidth = this.rightLineWidth;
      ctx.stroke();
      ctx.lineWidth = 0.4; //chord box.

      ctx.beginPath();
      ctx.moveTo(cLeft, canvas.height / 10);
      ctx.lineTo(cRight, canvas.height / 10);
      ctx.lineTo(cRight, canvas.height - canvas.height / 10);
      ctx.lineTo(cLeft, canvas.height - canvas.height / 10);
      ctx.lineTo(cLeft, canvas.height / 10); //diagonals.

      ctx.lineTo(cRight, canvas.height - canvas.height / 10);
      ctx.moveTo(cRight, canvas.height / 10);
      ctx.lineTo(cLeft, canvas.height - canvas.height / 10);
      ctx.stroke();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.leftLineWidth > 1) {
        this.leftLineWidth -= 0.1;
      }

      if (this.middleLineWidth > 1) {
        this.middleLineWidth -= 0.1;
      }

      if (this.rightLineWidth > 1) {
        this.rightLineWidth -= 0.1;
      }

      this.draw();
    }
  }]);

  return ZigZag;
}();