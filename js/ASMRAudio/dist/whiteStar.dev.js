"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WhiteStar =
/*#__PURE__*/
function () {
  function WhiteStar(x, y) {
    _classCallCheck(this, WhiteStar);

    this.x = x;
    this.y = y;
    this.opacity = 1;
    this.velocity = {
      x: (Math.random() - 0.5) / 10,
      y: (Math.random() - 0.5) / 10
    };
  }

  _createClass(WhiteStar, [{
    key: "draw",
    value: function draw() {
      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
      ctx.strokeStyle = "white";
      ctx.stroke();
      ctx.globalApha = 1;
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.opacity -= 0.0001;
      this.draw();
    }
  }]);

  return WhiteStar;
}();

function forWhiteStars() {
  whiteStars.forEach(function (ws, index) {
    if (ws.opacity <= 0.05) {
      whiteStars.splice(index, 1);
    }

    ws.update();
  });
}