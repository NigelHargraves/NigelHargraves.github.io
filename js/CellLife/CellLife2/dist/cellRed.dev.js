"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RedCell =
/*#__PURE__*/
function () {
  function RedCell(x, y) {
    _classCallCheck(this, RedCell);

    this.x = x;
    this.y = y;
    this.r = rangeRed;
    this.velocity = {
      x: (Math.random() - 0.5) * 0.5,
      y: (Math.random() - 0.5) * 0.5
    };
    this.angle = 0;
  }

  _createClass(RedCell, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, celSize, 0, Math.PI * 2);
      ctx.fillStyle = 'red';
      ctx.fill();
    }
  }, {
    key: "update",
    value: function update() {
      var _this = this;

      redCells.forEach(function (RC, index) {
        var opp = 0,
            adj = 0,
            hyp = 0;
        var collide = collisionDetection(_this.x, _this.y, cellImpactSize, RC.x, RC.y, cellImpactSize);

        if (collide) {
          opp = Math.pow(_this.x - RC.x, 2);
          adj = Math.pow(_this.y - RC.y, 2);
          if (opp < 0) opp *= -1;
          if (adj < 0) adj *= -1;
          hyp = Math.sqrt(opp + adj) / 10;
          _this.angle = Math.atan2(RC.y - _this.y, RC.x - _this.x);
          _this.velocity.x += -Math.cos(_this.angle) * hyp;
          _this.velocity.y += -Math.sin(_this.angle) * hyp;
        }
      });
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.draw();
    }
  }]);

  return RedCell;
}();

function forRedCells() {
  redCells.forEach(function (RC, redIndex) {
    //rap around.
    if (RC.x < 0) {
      RC.x = canvas.width;
    }

    if (RC.x > canvas.width) {
      RC.x = 0;
    }

    if (RC.y < 0) {
      RC.y = canvas.height;
    }

    if (RC.y > canvas.height) {
      RC.y = 0;
    }

    yellowCells.forEach(function (YC, yellowIndex) {
      var attract = collisionDetection(RC.x, RC.y, RC.r, YC.x, YC.y, YC.r);

      if (attract) {
        RC.angle = Math.atan2(YC.y - RC.y, YC.x - RC.x);
        RC.velocity.x = Math.cos(RC.angle) * simulationSpeed;
        RC.velocity.y = Math.sin(RC.angle) * simulationSpeed;
      }

      var collide = collisionDetection(RC.x, RC.y, 1, YC.x, YC.y, 1);

      if (collide) {
        amoebas.push(new Amoeba(RC.x, RC.y));
        redCells.splice(redIndex, 1);
        yellowCells.splice(yellowIndex, 1);
      }
    });
    RC.update();
  });
}