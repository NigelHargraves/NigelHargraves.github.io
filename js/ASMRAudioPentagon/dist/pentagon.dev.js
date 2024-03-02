"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pentagon =
/*#__PURE__*/
function () {
  function Pentagon(x, y) {
    _classCallCheck(this, Pentagon);

    this.x = x;
    this.y = y;
    this.r = 400;
    this.angle = 0;
    this.point = {
      x: 0,
      y: 0
    };
    this.rotateAngle = 0;
    this.lineWidth = 5;
  }

  _createClass(Pentagon, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotateAngle);
      this.point = {
        x: 0,
        y: 0
      };
      this.angle = 0;
      this.point.x = 0 + this.r * Math.cos(this.angle);
      this.point.y = 0 + this.r * Math.sin(this.angle);
      ctx.strokeStyle = 'white';
      ctx.beginPath();
      ctx.moveTo(this.point.x, this.point.y);
      this.angle += Math.PI * 2 / 5;
      this.point.x = 0 + this.r * Math.cos(this.angle);
      this.point.y = 0 + this.r * Math.sin(this.angle);
      ctx.lineTo(this.point.x, this.point.y);
      this.angle += Math.PI * 2 / 5;
      this.point.x = 0 + this.r * Math.cos(this.angle);
      this.point.y = 0 + this.r * Math.sin(this.angle);
      ctx.lineTo(this.point.x, this.point.y);
      this.angle += Math.PI * 2 / 5;
      this.point.x = 0 + this.r * Math.cos(this.angle);
      this.point.y = 0 + this.r * Math.sin(this.angle);
      ctx.lineTo(this.point.x, this.point.y);
      this.angle += Math.PI * 2 / 5;
      this.point.x = 0 + this.r * Math.cos(this.angle);
      this.point.y = 0 + this.r * Math.sin(this.angle);
      ctx.lineTo(this.point.x, this.point.y);
      this.angle += Math.PI * 2 / 5;
      this.point.x = 0 + this.r * Math.cos(this.angle);
      this.point.y = 0 + this.r * Math.sin(this.angle);
      ctx.lineTo(this.point.x, this.point.y);
      ctx.lineWidth = this.lineWidth;
      ctx.stroke();
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.lineWidth > 1) {
        this.lineWidth -= 0.01;
      }

      this.rotateAngle += Math.PI / 180 / 20;

      if (this.rotateAngle >= Math.PI * 2) {
        this.lineWidth = 5;
        this.rotateAngle = 0;

        if (scaleToPlay == 'C') {
          scaleToPlay = 'Em';
          EBass.play();
        } else if (scaleToPlay == 'Em') {
          scaleToPlay = 'Gm';
          GBass.play();
        } else if (scaleToPlay == 'Gm') {
          scaleToPlay = 'C';
          CBass.play();
        }

        if (scaleToPlay == 'Em') {
          for (var i = 0; i < 28; i++) {
            notes[i].note = scaleEm[i];
          }
        } else if (scaleToPlay == 'C') {
          for (var _i = 0; _i < 28; _i++) {
            notes[_i].note = scaleC[_i];
          }
        } else if (scaleToPlay == 'Gm') {
          for (var _i2 = 0; _i2 < 28; _i2++) {
            notes[_i2].note = scaleGm[_i2];
          }
        }
      }

      this.draw();
    }
  }]);

  return Pentagon;
}();