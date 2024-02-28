"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var YellowCell =
/*#__PURE__*/
function () {
  function YellowCell(x, y, cellNumber) {
    _classCallCheck(this, YellowCell);

    this.x = x;
    this.y = y;
    this.cellNumber = cellNumber;
    this.r = rangeYellow;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.angle = 0;
  }

  _createClass(YellowCell, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, celSize, 0, Math.PI * 2);
      ctx.fillStyle = 'yellow';
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

  return YellowCell;
}();

function forYellowCells() {
  yellowCells.forEach(function (YC1, index) {
    yellowCells.forEach(function (YC2, index) {
      if (YC1.cellNumber != YC2.cellNumber) {
        var collide = collisionDetection(YC1.x, YC1.y, cellImpactSize, YC2.x, YC2.y, cellImpactSize);

        if (collide) {
          YC1.angle = Math.atan2(YC2.y - YC1.y, YC2.x - YC1.x);
          YC1.velocity.x = -Math.cos(YC1.angle) * simulationSpeed;
          YC1.velocity.y = -Math.sin(YC1.angle) * simulationSpeed;
        }
      }
    });
  });
  var repelRadius = 2;
  yellowCells.forEach(function (YC, index) {
    if (YC.x < 0) {
      YC.x = canvas.width;
    }

    if (YC.x > canvas.width) {
      YC.x = 0;
    }

    if (YC.y < 0) {
      YC.y = canvas.height;
    }

    if (YC.y > canvas.height) {
      YC.y = 0;
    }

    redCells.forEach(function (RC, index) {
      var attract = collisionDetection(YC.x, YC.y, YC.r, RC.x, RC.y, RC.r);

      if (attract) {
        var repel = collisionDetection(YC.x, YC.y, repelYellowRange, RC.x, RC.y, repelRedRange);

        if (!repel) {
          YC.angle = Math.atan2(RC.y - YC.y, RC.x - YC.x);
          YC.velocity.x = Math.cos(YC.angle) * simulationSpeed;
          YC.velocity.y = Math.sin(YC.angle) * simulationSpeed;
        } else {
          YC.angle = Math.atan2(RC.y - YC.y, RC.x - YC.x);
          YC.velocity.x = -Math.cos(YC.angle) * simulationSpeed;
          YC.velocity.y = -Math.sin(YC.angle) * simulationSpeed;
        }
      }
    });
    YC.update();
  });
}