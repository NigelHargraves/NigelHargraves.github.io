"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RainDrop =
/*#__PURE__*/
function () {
  function RainDrop(x, y) {
    _classCallCheck(this, RainDrop);

    this.x = x;
    this.y = y;
    this.gravity = 0.01;
    this.velocity = 0;
  }

  _createClass(RainDrop, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.bezierCurveTo(this.x - 5, this.y + 5, this.x - 5, this.y + 10, this.x, this.y + 10);
      ctx.moveTo(this.x, this.y);
      ctx.bezierCurveTo(this.x + 5, this.y + 5, this.x + 5, this.y + 10, this.x, this.y + 10);
      ctx.fillStyle = 'DeepSkyBlue';
      ctx.fill();
      ctx.strokeStyle = 'DeepSkyBlue';
      ctx.stroke();
    }
  }, {
    key: "update",
    value: function update() {
      this.y += this.velocity;
      this.velocity += this.gravity;
      this.draw();
    }
  }]);

  return RainDrop;
}();

function forRainDrops() {
  rainDrops.forEach(function (rd, index) {
    if (rd.y + 8 >= canvas.height) {
      for (var i = 0; i < 6; i++) {
        splashes.push(new Splash(rd.x, rd.y, 'DeepSkyBlue', {
          x: Math.random() - 0.5,
          y: Math.random() - 1
        }));
      }

      notesToPlay();
      rainDrops.splice(index, 1);
    }

    rd.update();
  });
}