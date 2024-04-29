"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NoteLeft =
/*#__PURE__*/
function () {
  function NoteLeft(x, y, speed, note, color) {
    _classCallCheck(this, NoteLeft);

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.note = note;
    this.color = color;
    this.lineWidth = 1;
    this.r = center.y / 4;
    this.angle = 0;
    this.point = {
      x: 0,
      y: 0
    };
    this.onRoundabout = true;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.aim = {
      x: road.topLeft.x,
      y: center.y
    };
    this.onLeft = true;
    this.onRightLoop = false;
    this.onLeftLoop = false;
    this.toRoundabout = false;
    this.headingLeft = true;
    this.slice = 0.8;
    this.delay = 0;
    this.render = true;
  }

  _createClass(NoteLeft, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = this.color;
      ctx.fillStyle = this.color;

      if (this.render) {
        if (this.onRoundabout) {
          ctx.beginPath();
          ctx.arc(this.x + this.point.x, this.y + this.point.y, 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(this.x + this.point.x, this.y + this.point.y, 10, 0, Math.PI * 2);
          ctx.lineWidth = this.lineWidth;
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
          ctx.lineWidth = this.lineWidth;
          ctx.stroke();
        }
      } else {
        this.render = true;
      }

      ctx.lineWidth = 1;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.delay > 0) {
        this.delay -= 1;
      }

      if (this.lineWidth > 1) {
        this.lineWidth -= 0.01;
      }

      if (this.onRoundabout) {
        this.point.x = this.r * Math.cos(this.angle);
        this.point.y = this.r * Math.sin(this.angle);
        this.angle += Math.PI / 180 / this.speed;

        if (this.headingLeft) {
          if (this.angle >= Math.PI / 2 * 3) {
            this.speed -= 0.75;
            this.onRoundabout = false;
            this.y -= center.y / 4;
            this.onLeftLoop = true;
            this.onLeft = true;
            this.aim = {
              x: center.x,
              y: road.topLeft.y
            };
            this.toRoundabout = false;
          }
        } else {
          if (this.angle >= Math.PI / 2) {
            this.speed -= 0.75;
            this.onRoundabout = false;
            this.y += center.y / 4;
            this.onRightLoop = true;
            this.onLeft = false;
            this.aim = {
              x: center.x,
              y: road.bottomLeft.y
            };
            this.toRoundabout = false;
          }
        }
      } else {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.angle = Math.atan2(this.aim.y - this.y, this.aim.x - this.x);
        this.velocity.x = Math.cos(this.angle) * this.speed;
        this.velocity.y = Math.sin(this.angle) * this.speed;

        if (this.onLeft) {
          if (this.onLeftLoop) {
            if (this.y <= this.aim.y + this.slice && this.y >= this.aim.y - this.slice) {
              this.aim.x = road.topLeft.x;
              this.onLeftLoop = false;
            }
          } else {
            if (this.x <= this.aim.x + this.slice && this.x >= this.aim.x - this.slice) {
              this.aim.y = center.y;

              if (this.delay == 0) {
                this.note.play();
                this.lineWidth = 3;
                road.bigSquare = this.color;
                this.delay = 900;

                for (var i = 0; i < 10; i++) {
                  particles.push(new Particle(this.x, this.y, this.color, {
                    x: (Math.random() - 0.5) / Math.random(),
                    y: (Math.random() - 0.5) / Math.random()
                  }));
                }
              }
            }

            if (this.y <= center.y + this.slice && this.y >= center.y - this.slice) {
              this.aim.x = center.x - center.y / 4;
              this.toRoundabout = true;
            }

            if (this.x <= this.aim.x + this.slice && this.x >= this.aim.x - this.slice && this.toRoundabout) {
              for (var _i = 0; _i < 10; _i++) {
                particles.push(new Particle(this.x, this.y, this.color, {
                  x: (Math.random() - 0.5) / Math.random(),
                  y: (Math.random() - 0.5) / Math.random()
                }));
              }

              this.x = center.x;
              this.y = center.y;
              this.angle = -Math.PI;
              this.onRoundabout = true;
              this.render = false;
              this.note.play();
              road.lineWidth = 3;
              road.roundaboutColor = this.color;
              road.leftRoad = this.color;
              this.lineWidth = 3;
              this.speed += 0.75;
              this.headingLeft = false;
              this.onRight = false;
            }
          }
        } else {
          if (this.onRightLoop) {
            if (this.y <= this.aim.y + this.slice && this.y >= this.aim.y - this.slice) {
              this.aim.x = road.bottomRight.x;
              this.onRightLoop = false;
            }
          } else {
            if (this.x <= this.aim.x + this.slice && this.x >= this.aim.x - this.slice) {
              this.aim.y = center.y;

              if (this.delay == 0) {
                this.note.play();
                this.lineWidth = 3;
                road.bigSquare = this.color;
                this.delay = 900;

                for (var _i2 = 0; _i2 < 10; _i2++) {
                  particles.push(new Particle(this.x, this.y, this.color, {
                    x: (Math.random() - 0.5) / Math.random(),
                    y: (Math.random() - 0.5) / Math.random()
                  }));
                }
              }
            }

            if (this.y <= center.y + this.slice && this.y >= center.y - this.slice) {
              this.aim.x = center.x + center.y / 4;
              this.toRoundabout = true;
            }

            if (this.x <= this.aim.x + this.slice && this.x >= this.aim.x - this.slice && this.toRoundabout) {
              for (var _i3 = 0; _i3 < 10; _i3++) {
                particles.push(new Particle(this.x, this.y, this.color, {
                  x: (Math.random() - 0.5) / Math.random(),
                  y: (Math.random() - 0.5) / Math.random()
                }));
              }

              this.x = center.x;
              this.y = center.y;
              this.angle = 0;
              this.onRoundabout = true;
              this.render = false;
              this.note.play();
              road.lineWidth = 3;
              road.roundaboutColor = this.color;
              road.rightRoad = this.color;
              this.lineWidth = 3;
              this.speed += 0.75;
              this.headingLeft = true;
              this.onLeft = false;
            }
          }
        }
      }

      this.draw();
    }
  }]);

  return NoteLeft;
}();

function forNotesLeft() {
  notesLeft.forEach(function (note, index) {
    note.update();
  });
}