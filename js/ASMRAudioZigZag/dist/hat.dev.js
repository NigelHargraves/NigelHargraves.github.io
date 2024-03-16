"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Hat =
/*#__PURE__*/
function () {
  function Hat(x, y) {
    _classCallCheck(this, Hat);

    this.x = x;
    this.y = y;
    this.pole = {
      x: this.x,
      y: this.y - cTop
    };
    this.lineWidth = 4;
  }

  _createClass(Hat, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = 'skyblue';
      ctx.fillStyle = 'skyblue';
      ctx.beginPath();
      ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.pole.x, this.pole.y);
      ctx.moveTo(this.pole.x, this.pole.y);
      ctx.lineTo(this.pole.x - cTop, this.pole.y + cTop / 4);
      ctx.moveTo(this.pole.x - cTop, this.pole.y + cTop / 4);
      ctx.lineTo(this.pole.x + cTop, this.pole.y + cTop / 4);
      ctx.moveTo(this.pole.x + cTop, this.pole.y + cTop / 4);
      ctx.lineTo(this.pole.x, this.pole.y);
      ctx.lineWidth = this.lineWidth;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(this.x - cTop, this.y - cTop / 4 * 3 + 1);
      ctx.lineTo(this.x + cTop, this.y - cTop / 4 * 3 + 1);
      ctx.stroke();
      ctx.lineWidth = 1;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.lineWidth > 1) {
        this.lineWidth -= 0.2;
      }

      this.draw();
    }
  }]);

  return Hat;
}();