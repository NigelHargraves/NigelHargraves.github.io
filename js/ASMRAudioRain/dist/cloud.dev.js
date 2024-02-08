"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cloud =
/*#__PURE__*/
function () {
  function Cloud(x, y) {
    _classCallCheck(this, Cloud);

    this.x = x;
    this.y = y;
    this.blur = 4;
    this.velocity = {
      x: (Math.random() - 0.5) / 4,
      y: (Math.random() - 0.5) / 10
    };
  }

  _createClass(Cloud, [{
    key: "draw",
    value: function draw() {
      // draw cloud
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.bezierCurveTo(this.x - 40, this.y + 20, this.x - 40, this.y + 70, this.x + 60, this.y + 70);
      ctx.bezierCurveTo(this.x + 80, this.y + 100, this.x + 150, this.y + 100, this.x + 170, this.y + 70);
      ctx.bezierCurveTo(this.x + 250, this.y + 70, this.x + 250, this.y + 40, this.x + 220, this.y + 30);
      ctx.bezierCurveTo(this.x + 260, this.y - 40, this.x + 200, this.y - 50, this.x + 170, this.y - 30);
      ctx.bezierCurveTo(this.x + 150, this.y - 75, this.x + 80, this.y - 60, this.x + 80, this.y - 30);
      ctx.bezierCurveTo(this.x + 30, this.y - 75, this.x - 20, this.y - 60, this.x, this.y);
      ctx.closePath();
      ctx.lineWidth = 2;
      ctx.filter = "blur(" + this.blur + "px)";
      ;
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.strokeStyle = 'silver';
      ctx.stroke();
      ctx.filter = "blur(" + 1 + "px)";
      ;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.y >= canvas.height / 2 || this.y <= 0) {
        this.velocity.y = -this.velocity.y;
      }

      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.draw();
    }
  }]);

  return Cloud;
}();

function forClouds() {
  clouds.forEach(function (cloud, index) {
    cloud.update();
  });
}