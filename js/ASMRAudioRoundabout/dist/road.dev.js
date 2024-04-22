"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Road =
/*#__PURE__*/
function () {
  function Road() {
    _classCallCheck(this, Road);

    this.x = center.x;
    this.y = center.y;
    this.lineWidth = 1;
    this.topLeft = {
      x: canvas.width * 0.080,
      y: canvas.height * 0.080
    };
    this.topRight = {
      x: canvas.width - canvas.width * 0.080,
      y: canvas.height * 0.080
    };
    this.bottomLeft = {
      x: canvas.width * 0.080,
      y: canvas.height - canvas.height * 0.080
    };
    this.bottomRight = {
      x: canvas.width - canvas.width * 0.080,
      y: canvas.height - canvas.height * 0.080
    };
  }

  _createClass(Road, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = 'white'; //roundabout.

      ctx.beginPath();
      ctx.arc(this.x, this.y, center.y / 4, 0, Math.PI * 2);
      ctx.lineWidth = this.lineWidth;
      ctx.stroke(); //big square.

      ctx.beginPath();
      ctx.moveTo(this.topLeft.x, this.topLeft.y);
      ctx.lineTo(this.topRight.x, this.topRight.y);
      ctx.lineTo(this.bottomRight.x, this.bottomRight.y);
      ctx.lineTo(this.bottomLeft.x, this.bottomLeft.y);
      ctx.closePath();
      ctx.stroke(); //connecting roads.
      //top.

      ctx.beginPath();
      ctx.moveTo(center.x, center.y - center.y / 4);
      ctx.lineTo(center.x, this.topLeft.y);
      ctx.stroke(); //bottom.

      ctx.beginPath();
      ctx.moveTo(center.x, center.y + center.y / 4);
      ctx.lineTo(center.x, this.bottomLeft.y);
      ctx.stroke(); //left.

      ctx.beginPath();
      ctx.moveTo(center.x - center.y / 4, center.y);
      ctx.lineTo(this.topLeft.x, center.y);
      ctx.stroke(); //right.

      ctx.beginPath();
      ctx.moveTo(center.x + center.y / 4, center.y);
      ctx.lineTo(this.topRight.x, center.y);
      ctx.stroke();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return Road;
}();