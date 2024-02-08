"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cross =
/*#__PURE__*/
function () {
  function Cross(x, y) {
    _classCallCheck(this, Cross);

    this.x = x;
    this.y = y;
    this.opacity = 0.01;
    this.end = false;
    this.velocity = {
      x: (Math.random() - 0.5) / 4,
      y: (Math.random() - 0.5) / 4
    };
  }

  _createClass(Cross, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.moveTo(0, this.y);
      ctx.lineTo(canvas.width, this.y);
      ctx.moveTo(this.x, 0);
      ctx.lineTo(this.x, canvas.height);
      ctx.strokeStyle = "white";
      ctx.globalAlpha = this.opacity;
      ctx.lineWidth = 0.1;
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.2;
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      if (this.opacity >= 0.3) {
        this.end = true;
      }

      if (!this.end) {
        this.opacity += 0.0001;
      }

      if (this.end) {
        this.opacity -= 0.0001;
      }

      this.draw();
    }
  }]);

  return Cross;
}();

function forCross() {
  crosses.forEach(function (cross, index) {
    if (cross.opacity < 0.01) {
      crosses.splice(index, 1);
    }

    cross.update();
  });
}