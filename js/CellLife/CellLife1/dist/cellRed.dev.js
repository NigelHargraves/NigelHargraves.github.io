"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RedCell =
/*#__PURE__*/
function () {
  function RedCell(x, y, cellNumber) {
    _classCallCheck(this, RedCell);

    this.x = x;
    this.y = y;
    this.cellNumber = cellNumber;
    this.r = rangeRed;
    this.velocity = {
      x: 0,
      y: 0
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
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.draw();
    }
  }]);

  return RedCell;
}();

function forRedCells() {
  redCells.forEach(function (RC1, index) {
    redCells.forEach(function (RC2, index) {
      if (RC1.cellNumber != RC2.cellNumber) {
        var collide = collisionDetection(RC1.x, RC1.y, cellImpactSize, RC2.x, RC2.y, cellImpactSize);

        if (collide) {
          RC1.angle = Math.atan2(RC2.y - RC1.y, RC2.x - RC1.x);
          RC1.velocity.x = -Math.cos(RC1.angle) * simulationSpeed;
          RC1.velocity.y = -Math.sin(RC1.angle) * simulationSpeed;
        }
      }
    });
  });
  var repelRadius = 2;
  redCells.forEach(function (RC, index) {
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

    yellowCells.forEach(function (YC, index) {
      var attract = collisionDetection(RC.x, RC.y, RC.r, YC.x, YC.y, YC.r);

      if (attract) {
        var repel = collisionDetection(RC.x, RC.y, repelRedRange, YC.x, YC.y, repelYellowRange);

        if (!repel) {
          RC.angle = Math.atan2(YC.y - RC.y, YC.x - RC.x);
          RC.velocity.x = Math.cos(RC.angle) * simulationSpeed;
          RC.velocity.y = Math.sin(RC.angle) * simulationSpeed;
        } else {
          RC.angle = Math.atan2(YC.y - RC.y, YC.x - RC.x);
          RC.velocity.x = -Math.cos(RC.angle) * simulationSpeed;
          RC.velocity.y = -Math.sin(RC.angle) * simulationSpeed;
        }
      }
    });
    RC.update();
  });
}