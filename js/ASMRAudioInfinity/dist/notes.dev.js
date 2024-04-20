"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Note =
/*#__PURE__*/
function () {
  function Note(x, y, speed, note, color) {
    _classCallCheck(this, Note);

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.note = note;
    this.color = color;
    this.lineWidth = 5;
    this.moveRight = true;
    this.delay = 100;
    this.radii = {
      p1: {
        x: 200,
        y: 200
      },
      p2: {
        x: 200,
        y: 200
      },
      p3: {
        x: 663,
        y: 688
      },
      p4: {
        x: 663,
        y: 688
      },
      p5: {
        x: 663,
        y: 688
      },
      p6: {
        x: 663,
        y: 688
      }
    };
    this.angle = Math.PI + Math.PI / 4;
    this.radius = {
      x: this.radii.p4.x,
      y: this.radii.p4.y
    };
    this.point = {
      x: 0,
      y: 0
    };
    this.centerPoint = {
      x: center.x + infinityLoop.point1.x,
      y: canvas.height
    };
  }

  _createClass(Note, [{
    key: "draw",
    value: function draw() {
      ctx.lineWidth = this.lineWidth;
      ctx.strokeStyle = this.color;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.centerPoint.x + this.point.x, this.centerPoint.y + this.point.y, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(this.centerPoint.x + this.point.x, this.centerPoint.y + this.point.y, 10, 0, Math.PI * 2);
      ctx.stroke();
      ctx.lineWidth = 1;
    }
  }, {
    key: "update",
    value: function update() {
      //right small circle
      if (this.angle <= Math.PI / 2 * 3 + 0.001 && this.angle >= Math.PI / 2 * 3 - 0.001 && this.moveRight && this.delay == 0) {
        this.centerPoint = {
          x: center.x + infinityLoop.point1.x,
          y: center.y
        };
        this.radius = {
          x: this.radii.p2.x,
          y: this.radii.p2.y
        };
        this.speed -= 10;
        this.delay = 100;
        this.moveRight = false;
      } //right large top circle


      if (this.angle <= Math.PI / 2 + 0.001 && this.angle >= Math.PI / 2 - 0.001 && !this.moveRight && this.delay == 0) {
        this.centerPoint = {
          x: center.x + infinityLoop.point1.x,
          y: 0
        };
        this.radius = {
          x: this.radii.p6.x,
          y: this.radii.p6.y
        };
        this.speed += 10;
        this.delay = 100;
      } //left large bottom circle


      if (this.angle <= Math.PI / 2 + Math.PI / 4 + 0.001 && this.angle >= Math.PI / 2 + Math.PI / 4 - 0.001 && !this.moveRight && this.delay == 0) {
        for (var i = 0; i < 10; i++) {
          particles.push(new Particle(center.x, center.y, this.color, {
            x: Math.random() - 0.5,
            y: Math.random() - 0.5
          }));
        }

        this.centerPoint = {
          x: infinityLoop.point1.x,
          y: canvas.height
        };
        this.radius = {
          x: this.radii.p5.x,
          y: this.radii.p5.y
        };
        this.angle = Math.PI / 2 * 3 + Math.PI / 4;
        this.delay = 100;
        infinityLoop.lineWidth = 5;
        infinityLoop.color = this.color;
        this.lineWidth = 5;
        this.note.play();
      } //leftt small circle


      if (this.angle <= Math.PI / 2 * 3 + 0.001 && this.angle >= Math.PI / 2 * 3 - 0.001 && !this.moveRight && this.delay == 0) {
        this.centerPoint = {
          x: infinityLoop.point1.x,
          y: center.y
        };
        this.radius = {
          x: this.radii.p1.x,
          y: this.radii.p1.y
        };
        this.speed -= 10;
        this.delay = 100;
        this.moveRight = true;
      } //left large top circle


      if (this.angle <= Math.PI / 2 + 0.001 && this.angle >= Math.PI / 2 - 0.001 && this.moveRight && this.delay == 0) {
        this.centerPoint = {
          x: infinityLoop.point1.x,
          y: 0
        };
        this.radius = {
          x: this.radii.p3.x,
          y: this.radii.p3.y
        };
        this.speed += 10;
        this.delay = 100;
      } //right large bottom circle


      if (this.angle <= Math.PI / 4 + 0.001 && this.angle >= Math.PI / 4 - 0.001 && this.moveRight && this.delay == 0) {
        for (var _i = 0; _i < 10; _i++) {
          particles.push(new Particle(center.x, center.y, this.color, {
            x: Math.random() - 0.5,
            y: Math.random() - 0.5
          }));
        }

        this.centerPoint = {
          x: center.x + infinityLoop.point1.x,
          y: canvas.height
        };
        this.radius = {
          x: this.radii.p4.x,
          y: this.radii.p4.y
        };
        this.angle = Math.PI + Math.PI / 4;
        this.delay = 100;
        infinityLoop.lineWidth = 5;
        infinityLoop.color = this.color;
        this.lineWidth = 5;
        this.note.play();
      }

      this.point.x = this.radius.x * Math.cos(this.angle);
      this.point.y = this.radius.y * Math.sin(this.angle);

      if (this.centerPoint.x < center.x) {
        this.angle -= Math.PI / 180 / this.speed;
      } else {
        this.angle += Math.PI / 180 / this.speed;
      }

      if (this.angle >= Math.PI * 2) {
        for (var _i2 = 0; _i2 < 10; _i2++) {
          particles.push(new Particle(this.centerPoint.x + this.point.x, this.centerPoint.y + this.point.y, this.color, {
            x: Math.random() - 0.5,
            y: Math.random() - 0.5
          }));
        }

        this.angle = 0;
        infinityLoop.lineWidth = 5;
        infinityLoop.color = this.color;
        this.lineWidth = 5;
        this.note.play();
      }

      if (this.angle <= Math.PI + 0.001 && this.angle >= Math.PI - 0.001 && this.delay == 0) {
        for (var _i3 = 0; _i3 < 10; _i3++) {
          particles.push(new Particle(this.centerPoint.x + this.point.x, this.centerPoint.y + this.point.y, this.color, {
            x: Math.random() - 0.5,
            y: Math.random() - 0.5
          }));
        }

        infinityLoop.lineWidth = 5;
        infinityLoop.color = this.color;
        this.lineWidth = 5;
        this.delay = 100;
        this.note.play();
      }

      if (this.delay > 0) {
        this.delay -= 1;
      }

      if (this.lineWidth > 0.2) {
        this.lineWidth -= 0.01;
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