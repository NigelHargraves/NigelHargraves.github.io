"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EdgeSplat =
/*#__PURE__*/
function () {
  function EdgeSplat(x, y, note) {
    _classCallCheck(this, EdgeSplat);

    this.x = x;
    this.y = y;
    this.note = note;
    this.velocity = {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5
    };
    this.opacity = 1;
  }

  _createClass(EdgeSplat, [{
    key: "draw",
    value: function draw() {
      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
      ctx.strokeStyle = "aqua";
      ctx.stroke();
      ctx.globalAlpha = 0.2;
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.opacity -= 0.005;
      this.draw();
    }
  }]);

  return EdgeSplat;
}();

function forEdgeSplats() {
  edgeSplats.forEach(function (es, index) {
    if (es.opacity <= 0.01) {
      edgeSplats.splice(index, 1);
    }

    es.update();
  });
}