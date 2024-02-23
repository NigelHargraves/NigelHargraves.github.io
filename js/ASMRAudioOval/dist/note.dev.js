"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Note =
/*#__PURE__*/
function () {
  function Note(x, y, speed, angle) {
    _classCallCheck(this, Note);

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.angle = angle;
    this.smallRadius = 10;
    this.bigRadius = {
      x: canvas.height / 4,
      y: canvas.height / 8
    };
    this.point = {
      x: 0,
      y: 0
    };
    this.lineWidth = 1;
    this.opacity = 0.2;
  }

  _createClass(Note, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = "White";
      ctx.fillStyle = "White";
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(oval.rotation.x);
      ctx.beginPath();
      ctx.arc(0 + this.point.x, 0 + this.point.y, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(0 + this.point.x, 0 + this.point.y, this.smallRadius, 0, Math.PI * 2);
      ctx.lineWidth = this.lineWidth;
      ctx.globalAlpha = this.opacity;
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.6;
      ctx.restore();
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

      if (this.x + this.point.x <= center.x + 2 && this.x + this.point.x >= center.x - 2) {
        particles.push(new Particle(this.point.x, this.point.y, 'white'));
        this.lineWidth = 3;
        this.opacity = 1;
      }

      this.point.x = oval.radius.x * Math.cos(this.angle);
      this.point.y = oval.radius.y * Math.sin(this.angle);
      this.angle += Math.PI / 180 / this.speed;

      if (this.angle >= Math.PI * 2) {
        this.angle = 0;
      }

      this.draw();
    }
  }]);

  return Note;
}();

function forNote() {
  notes.forEach(function (note, index) {
    note.update();
  });
}