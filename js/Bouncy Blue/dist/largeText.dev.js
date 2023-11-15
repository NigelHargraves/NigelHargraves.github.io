"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//largeText class.
var LargeText =
/*#__PURE__*/
function () {
  //construct largeText data.
  function LargeText(x, y) {
    _classCallCheck(this, LargeText);

    this.x = x;
    this.y = y;
    this.opacity = 1;
  } //draw largeText.


  _createClass(LargeText, [{
    key: "draw",
    value: function draw() {
      ctx.font = "bold 80px Arial";
      ctx.fillStyle = "white";
      ctx.globalAlpha = this.opacity;
      ctx.fillText(clText + controlLevel, this.x - 330, this.y);
      ctx.globalAlpha = 1;
    } //update largeText.

  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return LargeText;
}();

function forLargeText() {
  largeTexts.forEach(function (lt, index) {
    if (lt.opacity < 0.1) {
      largeTexts = [];
    } else {
      lt.opacity -= 0.002;
    }

    lt.update();
  });
}