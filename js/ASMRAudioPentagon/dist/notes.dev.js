"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Notes =
/*#__PURE__*/
function () {
  function Notes(x, y, speed, number, note, color) {
    _classCallCheck(this, Notes);

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.number = number;
    this.note = note;
    this.color = color;
    this.opacity = 1;
    this.lineWidth = 5;
    this.r = 400;
    this.adj = 0;
    this.opp = 0;
    this.radiusDistance = 0;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.particle = {
      x: 0,
      y: 0
    };
    this.angle = 0;
    this.addAngle = 0;
    this.corner = 2;
    this.aim = {
      x: center.x + this.r * Math.cos(Math.PI * 2 / 5 * 2),
      y: center.y + this.r * Math.sin(Math.PI * 2 / 5 * 2)
    };
  }

  _createClass(Notes, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.translate(pentagon.x, pentagon.y);
      ctx.rotate(pentagon.rotateAngle);
      ctx.beginPath();
      ctx.arc(this.x - center.x, this.y - center.y, 8, 0, Math.PI * 2);
      ctx.strokeStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.lineWidth = this.lineWidth;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(this.x - center.x, this.y - center.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(this.x - center.x, this.y - center.y);
      ctx.lineTo(0, 0);
      ctx.stroke();
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

      this.timer = 0;
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.angle = Math.atan2(this.aim.y - this.y, this.aim.x - this.x);
      this.velocity.x = Math.cos(this.angle) * this.speed;
      this.velocity.y = Math.sin(this.angle) * this.speed;
      this.opp = Math.pow(center.x - this.x, 2);
      if (this.opp < 0) this.opp *= -1;
      this.adj = Math.pow(center.y - this.y, 2);
      if (this.adj < 0) this.adj *= -1;
      this.radiusDistance = Math.floor(Math.sqrt(this.opp + this.adj));

      if (this.radiusDistance >= 400) {
        this.particle.x = this.r * Math.cos(pentagon.rotateAngle + this.addAngle);
        this.particle.y = this.r * Math.sin(pentagon.rotateAngle + this.addAngle);
        this.addAngle += Math.PI * 2 / 5 * 2;

        if (this.addAngle >= Math.PI * 2 / 5 * 10) {
          this.addAngle = 0;
        }

        particles.push(new Particle(this.particle.x, this.particle.y, 0.2, this.color, {
          x: center.x,
          y: center.y
        }, {
          x: (Math.random() - 0.5) / (Math.random() / 0.1),
          y: (Math.random() - 0.5) / (Math.random() / 0.1)
        }));
        this.note.play();
        this.lineWidth = 5;
        this.opacity = 1;
        this.aim.x = center.x + this.r * Math.cos(Math.PI * 2 / 5 * this.corner);
        this.aim.y = center.y + this.r * Math.sin(Math.PI * 2 / 5 * this.corner);
        this.corner += 2;

        if (this.corner == 12) {
          this.corner = 2;
        }
      }

      this.draw();
    }
  }]);

  return Notes;
}();

function forNotes() {
  notes.forEach(function (note, index) {
    note.update();
  });
}