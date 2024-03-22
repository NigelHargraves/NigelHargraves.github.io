"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Note =
/*#__PURE__*/
function () {
  function Note(x, y, speed, circle, note, color) {
    _classCallCheck(this, Note);

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.circle = circle;
    this.note = note;
    this.color = color;
    this.lineWidth = 5;
    this.opacity = 1;
    this.r = 200;
    this.angle = Math.PI + Math.PI / 2;
    this.point = {
      x: 0,
      y: 0
    };
  }

  _createClass(Note, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = this.color;
      ctx.fillStyle = this.color;
      ctx.lineWidth = this.lineWidth;
      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.arc(this.x + this.point.x, this.y + this.point.y, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(this.x + this.point.x, this.y + this.point.y, 10, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(this.x + this.point.x, this.y + this.point.y);
      ctx.lineTo(this.x, this.y);
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.2;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.lineWidth > 1) {
        this.lineWidth -= 0.1;
      }

      if (this.opacity > 0.2) {
        this.opacity -= 0.01;
      }

      this.point.x = this.r * Math.cos(this.angle);
      this.point.y = this.r * Math.sin(this.angle);
      this.angle += Math.PI / 180 / this.speed;

      if (this.angle >= Math.PI * 2) {
        this.angle = 0;
      }

      for (var i = 1; i < 5; i++) {
        if (this.circle == i) {
          if (this.angle <= Math.PI + Math.PI / 2 + 0.01 && this.angle >= Math.PI + Math.PI / 2 - 0.01) {
            circles[i - 1].verticalTopLineWidth = 5;
            circles[i - 1].colorTop = this.color;
            this.note.play();
            this.lineWidth = 5;
            this.opacity = 1;
          }

          if (this.angle <= Math.PI / 2 + 0.01 && this.angle >= Math.PI / 2 - 0.01) {
            circles[i - 1].verticalBottomLineWidth = 5;
            circles[i - 1].colorBottom = this.color;
            this.note.play();
            this.lineWidth = 5;
            this.opacity = 1;
          }

          if (this.angle == 0) {
            circles[i - 1].horizontalRightLineWidth = 5;
            circles[i - 1].colorRight = this.color;
            this.note.play();
            this.lineWidth = 5;
            this.opacity = 1;
          }

          if (this.angle <= Math.PI + 0.01 && this.angle >= Math.PI - 0.01) {
            circles[i - 1].horizontalLeftLineWidth = 5;
            circles[i - 1].colorLeft = this.color;
            this.note.play();
            this.lineWidth = 5;
            this.opacity = 1;
          }
        }
      }

      this.draw();
    }
  }]);

  return Note;
}();

function forNotes() {
  notes.forEach(function (note, index) {
    note.update();
  });
}