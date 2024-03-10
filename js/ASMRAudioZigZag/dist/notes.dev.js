"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Note =
/*#__PURE__*/
function () {
  function Note(x, y, speed, note, direction, yAim) {
    _classCallCheck(this, Note);

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.note = note;
    this.down = direction;
    this.yAim = yAim;

    if (this.down) {
      this.aim = {
        x: right,
        y: cTop * this.yAim
      };
    } else {
      this.aim = {
        x: left,
        y: cTop * this.yAim
      };
    }

    this.opacity = 1;
    this.lineWidth = 5;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.detectionTimer = 100;
    this.angle = 0;
  }

  _createClass(Note, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
      ctx.strokeStyle = 'white';
      ctx.globalAlpha = this.opacity;
      ctx.lineWidth = this.lineWidth;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
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

      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.angle = Math.atan2(this.aim.y - this.y, this.aim.x - this.x);
      this.velocity.x = Math.cos(this.angle) * this.speed;
      this.velocity.y = Math.sin(this.angle) * this.speed;

      if (this.detectionTimer > 0) {
        this.detectionTimer -= 1;
      }

      if (this.x >= left - 1 && this.x <= left + 1 && this.detectionTimer <= 0) {
        zz.leftLineWidth = 5;
        this.note.play();
        this.lineWidth = 5;
        this.opacity = 1;

        if (this.down) {
          this.yAim++;
        } else {
          this.yAim--;
        }

        if (this.yAim == 10) {
          this.yAim = 9;
          this.down = false;
        }

        this.aim = {
          x: right,
          y: cTop * this.yAim
        };
        this.detectionTimer = 100;
        this.x = left;
      }

      if (this.x >= right - 1 && this.x <= right + 1 && this.detectionTimer <= 0) {
        zz.rightLineWidth = 5;
        this.note.play();
        this.lineWidth = 5;
        this.opacity = 1;

        if (this.down) {
          this.yAim++;
        } else {
          this.yAim--;
        }

        if (this.yAim == 0) {
          this.yAim = 1;
          this.down = true;
        }

        this.aim = {
          x: left,
          y: cTop * this.yAim
        };
        this.detectionTimer = 100;
        this.x = right;
      }

      if (this.x >= center.x - 1 && this.x <= center.x + 1 && this.detectionTimer == 0) {
        zz.middleLineWidth = 5;
        this.note.play();
        this.lineWidth = 5;
        this.opacity = 1;
        this.detectionTimer = 100;
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