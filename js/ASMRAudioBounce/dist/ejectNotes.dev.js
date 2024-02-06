"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EjectNote =
/*#__PURE__*/
function () {
  function EjectNote(x, y) {
    _classCallCheck(this, EjectNote);

    this.x = x;
    this.y = y;
    this.r = 10;
    this.gravity = Math.random() / 100;
    this.velocity = {
      x: Math.random() - 0.5,
      y: -Math.random() * 2
    };
    this.friction = 0.001;
    this.lineWidth = 1;
    this.opacity = 1;
  }

  _createClass(EjectNote, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.strokeStyle = "coral";
      ctx.lineWidth = this.lineWidth;
      ctx.globalAlpha = this.opacity;
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.2;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.opacity > 0.2) {
        this.opacity -= 0.01;
      }

      if (this.lineWidth > 1) {
        this.lineWidth -= 0.01;
      }

      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.velocity.y += this.gravity;

      if (this.velocity.y < 0) {
        this.velocity.y += this.friction;
      }

      if (this.y + this.r >= canvas.height) {
        this.velocity.y = -this.velocity.y;
      }

      this.draw();
    }
  }]);

  return EjectNote;
}();

function forEjectNotes() {
  ejectNotes.forEach(function (ejectNote, index) {
    ejectNote.update();
  });
}