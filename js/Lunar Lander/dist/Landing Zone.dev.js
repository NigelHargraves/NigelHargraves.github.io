"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LZ =
/*#__PURE__*/
function () {
  //construct landing zone data.
  function LZ(x, y, length, color, points, used, textColor) {
    _classCallCheck(this, LZ);

    this.x = x;
    this.y = y;
    this.length = length;
    this.color = color;
    this.points = points;
    this.used = used;
    this.textColor = textColor;
  } //draw landing zone.


  _createClass(LZ, [{
    key: "draw",
    value: function draw() {
      ctx2.beginPath();
      ctx2.moveTo(this.x, this.y);
      ctx2.lineTo(this.x + this.length, this.y);
      ctx2.strokeStyle = this.color;
      ctx2.stroke();
      ctx2.font = "20px Arial"; //cover text after landing.

      if (this.used) {
        this.textColor = "black";
      }

      ctx2.fillStyle = this.textColor;
      ctx2.fillText(this.points, this.x + this.length / 4, this.y + 25);
    }
  }]);

  return LZ;
}();