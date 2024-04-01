"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FloatNote =
/*#__PURE__*/
function () {
  function FloatNote() {
    _classCallCheck(this, FloatNote);

    this.x = center.x;
    this.y = center.y;
    this.r = 10;
    this.velocity = {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2
    };
    this.expire = false;
  }

  _createClass(FloatNote, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.strokeStyle = "aqua";
      ctx.stroke();
    }
  }, {
    key: "update",
    value: function update() {
      if (!this.expire) {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
      } else {
        this.r -= 1;
      }

      this.draw();
    }
  }]);

  return FloatNote;
}();

function forFloatNotes() {
  floatNotes.forEach(function (fn, index) {
    if (fn.x + fn.r >= canvas.width || fn.x - fn.r <= 0) {
      fn.expire = true;
    }

    if (fn.y + fn.r >= canvas.height || fn.y - fn.r <= 0) {
      fn.expire = true;
    }

    if (fn.r <= 1) {
      for (var i = 0; i < 10; i++) {
        edgeSplats.push(new EdgeSplat(fn.x, fn.y));
      }

      floatNotes.splice(index, 1);
    }

    fn.update();
  });
}