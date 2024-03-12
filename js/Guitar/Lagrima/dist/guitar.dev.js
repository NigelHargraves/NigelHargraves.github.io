"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Guitar =
/*#__PURE__*/
function () {
  function Guitar() {
    _classCallCheck(this, Guitar);
  }

  _createClass(Guitar, [{
    key: "draw",
    value: function draw() {
      this.extra = fretBoard.x / 2 / 20;
      ctx.strokeStyle = 'white'; //neck.

      ctx.beginPath();
      ctx.rect(fretBoard.x, fretBoard.y, canvas.width / 2 + fretBoard.x / 2, canvas.height / 4);
      ctx.stroke(); //frets.

      for (var i = 0; i < frets.length; i++) {
        ctx.beginPath();
        ctx.moveTo(fretBoard.x + frets[i], fretBoard.y);
        ctx.lineTo(fretBoard.x + frets[i], fretBoard.y + canvas.height / 4);
        ctx.stroke();
      } //hole.


      ctx.beginPath();
      ctx.arc(fretBoard.x - canvas.width / 10, center.y, 180, 0, Math.PI * 2);
      ctx.stroke(); //bridge.

      ctx.beginPath();
      ctx.moveTo(bridge, fretBoard.y);
      ctx.lineTo(bridge, fretBoard.y + canvas.height / 4);
      ctx.stroke();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return Guitar;
}();