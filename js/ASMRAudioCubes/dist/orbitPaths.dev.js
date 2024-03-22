"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OrbitPath =
/*#__PURE__*/
function () {
  function OrbitPath(x, y, radiusX, radiusY) {
    _classCallCheck(this, OrbitPath);

    this.x = x;
    this.y = y;
    this.radius = {
      x: radiusX,
      y: radiusY
    };
  }

  _createClass(OrbitPath, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.ellipse(this.x, this.y, this.radius.x, this.radius.y, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'white';
      ctx.stroke();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return OrbitPath;
}();

function forOrbitPaths() {
  orbitPaths.forEach(function (op, index) {
    op.update();
  });
}