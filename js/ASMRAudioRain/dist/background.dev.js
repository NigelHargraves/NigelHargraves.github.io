"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DropHit =
/*#__PURE__*/
function () {
  function DropHit(x, y) {
    _classCallCheck(this, DropHit);

    this.x = x;
    this.y = y;
    this.r = 1;
    this.opacity = 1;
  }

  _createClass(DropHit, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.strokeStyle = 'lightblue';
      ctx.lineWidth = 0.2;
      ctx.globalAlpha = this.opacity;
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.4;
    }
  }, {
    key: "update",
    value: function update() {
      this.r += 1;
      this.opacity -= 0.005;
      this.draw();
    }
  }]);

  return DropHit;
}();

function forDropHits() {
  var createDropHits = Math.random();

  if (createDropHits > 0.99) {
    dropHits.push(new DropHit(Math.random() * canvas.width, Math.random() * canvas.height));
  }

  dropHits.forEach(function (dh, index) {
    if (dh.opacity < 0.05) {
      dropHits.splice(index, 1);
    }

    dh.update();
  });
}