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
    this.cBoxLineWidth = 10;
    this.kickLineWidth = 5;
    this.leftColor = 'white';
    this.rightColor = 'white';
    this.middleColor = 'white';
  }

  _createClass(ZigZag, [{
    key: "draw",
    value: function draw() {
      ctx.lineWidth = 0.4;
      this.y = cTop;
      ctx.strokeStyle = 'white';
      ctx.fillStyle = 'white'; //notes.
      //diagonal lines.

      ctx.beginPath();
      ctx.moveTo(left, this.y);
      this.y += cTop;
      ctx.lineTo(right, this.y);
      this.y += cTop;
      ctx.lineTo(left, this.y);
      this.y += cTop;
      ctx.lineTo(right, this.y);
      this.y += cTop;
      ctx.lineTo(left, this.y);
      this.y += cTop;
      ctx.lineTo(right, this.y);
      this.y += cTop;
      ctx.lineTo(left, this.y);
      this.y += cTop;
      ctx.lineTo(right, this.y);
      this.y += cTop;
      ctx.lineTo(left, this.y);
      ctx.lineTo(right, this.y);
      this.y -= cTop;
      ctx.lineTo(left, this.y);
      this.y -= cTop;
      ctx.lineTo(right, this.y);
      this.y -= cTop;
      ctx.lineTo(left, this.y);
      this.y -= cTop;
      ctx.lineTo(right, this.y);
      this.y -= cTop;
      ctx.lineTo(left, this.y);
      this.y -= cTop;
      ctx.lineTo(right, this.y);
      this.y -= cTop;
      ctx.lineTo(left, this.y);
      this.y -= cTop;
      ctx.lineTo(right, this.y);
      ctx.lineTo(left, this.y);
      ctx.stroke(); //note dots.

      for (var i = cTop; i < cTop * 10; i += cTop) {
        ctx.beginPath();
        ctx.arc(left, i, 4, 0, Math.PI * 2);
        ctx.fillStyle = this.leftColor;
        ctx.fill();
      }

      for (var _i = cTop; _i < cTop * 10; _i += cTop) {
        ctx.beginPath();
        ctx.arc(right, _i, 4, 0, Math.PI * 2);
        ctx.fillStyle = this.rightColor;
        ctx.fill();
      }

      var number = 0;

      for (var _i2 = cTop; _i2 < cTop * 10; _i2 += cTop) {
        if (number == 1 || number == 9) {
          _i2 -= cTop / 2;
        }

        ctx.beginPath();
        ctx.arc(center.x, _i2, 4, 0, Math.PI * 2);
        ctx.fillStyle = this.middleColor;
        ctx.fill();
        number++;
      } //vertical lines.


      ctx.beginPath();
      ctx.moveTo(left, this.y);
      ctx.lineTo(left, canvas.height - this.y);
      ctx.lineWidth = this.leftLineWidth;
      ctx.strokeStyle = this.leftColor;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(center.x, this.y);
      ctx.lineTo(center.x, canvas.height - this.y);
      ctx.lineWidth = this.middleLineWidth;
      ctx.strokeStyle = this.middleColor;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(right, this.y);
      ctx.lineTo(right, canvas.height - this.y);
      ctx.lineWidth = this.rightLineWidth;
      ctx.strokeStyle = this.rightColor;
      ctx.stroke();
      ctx.lineWidth = 0.4; //chord box.

      ctx.strokeStyle = 'Turquoise';
      ctx.fillStyle = 'Turquoise';
      ctx.beginPath();
      ctx.moveTo(cLeft, cTop);
      ctx.lineTo(cRight, cTop);
      ctx.lineTo(cRight, canvas.height - cTop);
      ctx.lineTo(cLeft, canvas.height - cTop);
      ctx.lineTo(cLeft, cTop); //diagonals.

      ctx.moveTo(cLeft, cTop);
      ctx.lineTo(cRight, cbottom);
      ctx.moveTo(cRight, cTop);
      ctx.lineTo(cLeft, cbottom);
      ctx.lineWidth = this.cBoxLineWidth;
      ctx.stroke(); //chord dots.
      //diagonals.

      var yCoord = 0;

      for (var _i3 = cTop; _i3 < cTop * 10; _i3 += cTop * 2) {
        ctx.beginPath();
        ctx.arc(cLeft + yCoord, _i3, 4, 0, Math.PI * 2);
        ctx.fill();
        yCoord += (cRight - cLeft) / 4;
      }

      yCoord = 0;

      for (var _i4 = cTop; _i4 < cTop * 10; _i4 += cTop * 2) {
        ctx.beginPath();
        ctx.arc(cRight - yCoord, _i4, 4, 0, Math.PI * 2);
        ctx.fill();
        yCoord += (cRight - cLeft) / 4;
      } //verticals.


      for (var _i5 = cTop; _i5 < cTop * 10; _i5 += cTop * 2) {
        ctx.beginPath();
        ctx.arc(cLeft, _i5, 4, 0, Math.PI * 2);
        ctx.fill();
        yCoord += (cRight - cLeft) / 4;
      }

      for (var _i6 = cTop; _i6 < cTop * 10; _i6 += cTop * 2) {
        ctx.beginPath();
        ctx.arc(cRight, _i6, 4, 0, Math.PI * 2);
        ctx.fill();
        yCoord += (cRight - cLeft) / 4;
      } //kick drum skin.


      ctx.fillStyle = 'seashell';
      ctx.beginPath();
      ctx.arc(right + (canvas.width - right) / 2, center.y, 98, 0, Math.PI * 2);
      ctx.fill();
      ctx.font = "bold 45px Arial";
      ctx.fillStyle = "red";
      ctx.fillText('𝒵𝒾𝑔𝒵𝒶𝑔', right + (canvas.width - right) / 2 - 85, center.y + 10); //kick drum case.

      ctx.strokeStyle = 'slateblue';
      ctx.beginPath();
      ctx.arc(right + (canvas.width - right) / 2, center.y, 100, 0, Math.PI * 2);
      ctx.lineWidth = this.kickLineWidth;
      ctx.stroke(); //legs.

      ctx.beginPath();
      ctx.moveTo(right + (canvas.width - right) / 2 - 100, center.y);
      ctx.lineTo(right + (canvas.width - right) / 2 - 150, center.y + 100);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(right + (canvas.width - right) / 2 + 100, center.y);
      ctx.lineTo(right + (canvas.width - right) / 2 + 150, center.y + 100);
      ctx.stroke(); //leg base.

      ctx.beginPath();
      ctx.moveTo(right + (canvas.width - right) / 2 - 160, center.y + 100);
      ctx.lineTo(right + (canvas.width - right) / 2 - 140, center.y + 100);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(right + (canvas.width - right) / 2 + 160, center.y + 100);
      ctx.lineTo(right + (canvas.width - right) / 2 + 140, center.y + 100);
      ctx.stroke();
      ctx.lineWidth = 1; //tensioners.

      ctx.fillStyle = 'slateblue';
      ctx.beginPath();
      ctx.arc(right + (canvas.width - right) / 2 - 100, center.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(right + (canvas.width - right) / 2 + 100, center.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(right + (canvas.width - right) / 2, center.y - 100, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(right + (canvas.width - right) / 2, center.y + 100, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.save();
      ctx.translate(right + (canvas.width - right) / 2, center.y);
      ctx.rotate(Math.PI / 4);
      ctx.beginPath();
      ctx.arc(0 - 100, 0, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(0 + 100, 0, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(0, 0 - 100, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(0, 0 + 100, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
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

      if (this.cBoxLineWidth > 1) {
        this.cBoxLineWidth -= 0.1;
      }

      if (this.kickLineWidth > 1) {
        this.kickLineWidth -= 0.1;
      }

      this.draw();
    }
  }]);

  return ZigZag;
}();