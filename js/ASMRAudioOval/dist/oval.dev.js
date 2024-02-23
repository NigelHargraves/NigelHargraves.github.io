"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Oval =
/*#__PURE__*/
function () {
  function Oval(x, y) {
    _classCallCheck(this, Oval);

    this.x = x;
    this.y = y;
    this.radius = {
      x: 600,
      y: 300
    };
    this.rotation = {
      x: 0,
      y: 0
    };
    this.rotateUp = true;
    this.radiusShrink = true;
  }

  _createClass(Oval, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.ellipse(this.x, this.y, this.radius.x, this.radius.y, this.rotation.x, this.rotation.y, Math.PI * 2);
      ctx.strokeStyle = 'white';
      ctx.stroke();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.rotateUp) {
        this.rotation.x -= 0.0001;
      } else {
        this.rotation.x += 0.0001;
      }

      if (this.rotation.x <= -0.8) {
        this.rotateUp = false;
      }

      if (this.rotation.x >= 0.8) {
        this.rotateUp = true;
      }

      if (this.radiusShrink) {
        this.radius.y -= 0.01;
      } else {
        this.radius.y += 0.01;
      }

      if (this.radius.y <= 10) {
        this.radiusShrink = false;
      }

      if (this.radius.y >= 300) {
        this.radiusShrink = true;
      }

      this.draw();
    }
  }]);

  return Oval;
}();