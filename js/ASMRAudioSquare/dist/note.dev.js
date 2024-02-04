"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Note =
/*#__PURE__*/
function () {
  function Note(x, y, speed, note) {
    _classCallCheck(this, Note);

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.note = note;
    this.opacity = 0.2;
    this.r = 10;
    this.lineWidth = 5;
    this.xDirection = false;
    this.yDirection = false;
    this.left = false;
    this.up = false;
  }

  _createClass(Note, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.translate(square.x, square.y);
      ctx.rotate(square.rotateAngle);
      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.arc(this.x - canvas.width / 2, this.y - canvas.height / 2, this.r, 0, Math.PI * 2);
      ctx.strokeStyle = "darkorchid";
      ctx.lineWidth = this.lineWidth;
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.2;
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.x <= squareCorners.topLeft.x + 1 && this.x >= squareCorners.topLeft.x - 1 && this.y <= squareCorners.topLeft.y + 1 && this.y >= squareCorners.topLeft.y - 1) {
        this.xDirection = true;
        this.yDirection = false;
        this.left = false;
        this.lineWidth = 5;
        this.opacity = 1;
        this.note.currentTime = 0.1;
        this.note.play();
        square.opacity = 1;
        square.lineWidth = 5;
        createTails(this.x, this.y);
        shoots.push(new Shoot(this.x, this.y));
      }

      if (this.x <= squareCorners.topRight.x + 1 && this.x >= squareCorners.topRight.x - 1 && this.y <= squareCorners.topRight.y + 1 && this.y >= squareCorners.topRight.y - 1) {
        this.xDirection = false;
        this.yDirection = true;
        this.up = false;
        this.lineWidth = 5;
        this.opacity = 1;
        this.note.currentTime = 0.1;
        this.note.play();
        square.opacity = 1;
        square.lineWidth = 5;
        createTails(this.x, this.y);
        shoots.push(new Shoot(this.x, this.y));
      }

      if (this.x <= squareCorners.bottomRight.x + 1 && this.x >= squareCorners.bottomRight.x - 1 && this.y <= squareCorners.bottomRight.y + 1 && this.y >= squareCorners.bottomRight.y - 1) {
        this.xDirection = true;
        this.yDirection = false;
        this.left = true;
        this.lineWidth = 5;
        this.opacity = 1;
        this.note.currentTime = 0.1;
        this.note.play();
        square.opacity = 1;
        square.lineWidth = 5;
        createTails(this.x, this.y);
        shoots.push(new Shoot(this.x, this.y));
      }

      if (this.x <= squareCorners.bottomLeft.x + 1 && this.x >= squareCorners.bottomLeft.x - 1 && this.y <= squareCorners.bottomLeft.y + 1 && this.y >= squareCorners.bottomLeft.y - 1) {
        this.xDirection = false;
        this.yDirection = true;
        this.up = true;
        this.lineWidth = 5;
        this.opacity = 1;
        this.note.currentTime = 0.1;
        this.note.play();
        square.opacity = 1;
        square.lineWidth = 5;
        createTails(this.x, this.y);
        shoots.push(new Shoot(this.x, this.y));
      }

      if (this.lineWidth > 1) {
        this.lineWidth -= 0.1;
      }

      if (this.opacity > 0.2) {
        this.opacity -= 0.01;
      }

      if (this.xDirection) {
        if (this.left) {
          this.x -= this.speed;
        } else {
          this.x += this.speed;
        }
      }

      if (this.yDirection) {
        if (this.up) {
          this.y -= this.speed;
        } else {
          this.y += this.speed;
        }
      }

      this.draw();
    }
  }]);

  return Note;
}();

function createTails(x, y) {
  for (var i = 0; i < 10; i++) {
    tails.push(new Tail(x, y));
  }
}

function forNote() {
  notes.forEach(function (note, index) {
    note.update();
  });
}