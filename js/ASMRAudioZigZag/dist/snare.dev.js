"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Snare =
/*#__PURE__*/
function () {
  function Snare() {
    _classCallCheck(this, Snare);

    this.expand = 1;
    this.opacity = 1;
  }

  _createClass(Snare, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.rect(pCenter - cTop - this.expand, cBottom - cTop - cTop / 1.5 - this.expand, cTop * 2 + this.expand * 2, cBottom - (cBottom - cTop / 1.5) + this.expand * 2);
      ctx.globalAlpha = this.opacity;
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'plum';
      ctx.stroke();
      ctx.globalAlpha = 0.2;
    }
  }, {
    key: "update",
    value: function update() {
      this.expand += 1;

      if (this.opacity > 0.02) {
        this.opacity -= 0.02;
      }

      this.draw();
    }
  }]);

  return Snare;
}();

function forSnareRects() {
  snareRects.forEach(function (sr, index) {
    if (sr.opacity <= 0.02) {
      snareRects.splice(index, 1);
    }

    sr.update();
  });
}