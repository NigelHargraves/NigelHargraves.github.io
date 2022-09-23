"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MZ =
/*#__PURE__*/
function () {
  //construct moon zone data.
  function MZ(x, y, MZX, MZY, color) {
    _classCallCheck(this, MZ);

    this.x = x;
    this.y = y;
    this.mzx = MZX;
    this.mzy = MZY;
    this.color = color;
  } //draw moon zone.


  _createClass(MZ, [{
    key: "draw",
    value: function draw() {
      ctx2.beginPath();
      ctx2.moveTo(this.x, this.y);
      var ysize = Math.abs(this.y - this.mzy);

      for (var i = (this.mzx - this.x) / 20; i <= this.mzx - this.x; i += (this.mzx - this.x) / 20) {
        if (this.y < this.mzy) {
          ctx2.lineTo(i + this.x, Math.random() * moonScapeSize + (this.y += ysize / 20));
        } else {
          ctx2.lineTo(i + this.x, Math.random() * moonScapeSize + (this.y -= ysize / 20));
        }
      }

      ctx2.lineTo(this.mzx, this.mzy);
      ctx2.strokeStyle = this.color;
      ctx2.stroke();
    }
  }]);

  return MZ;
}();