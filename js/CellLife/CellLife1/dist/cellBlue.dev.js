"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BlueCell =
/*#__PURE__*/
function () {
  function BlueCell(x, y, cellNumber) {
    _classCallCheck(this, BlueCell);

    this.x = x;
    this.y = y;
    this.cellNumber = cellNumber;
    this.r = rangeBlue;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.angle = 0;
  }

  _createClass(BlueCell, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, celSize, 0, Math.PI * 2);
      ctx.fillStyle = 'cyan';
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

  return BlueCell;
}();

function forBlueCells() {
  blueCells.forEach(function (BC1, index) {
    blueCells.forEach(function (BC2, index) {
      if (BC1.cellNumber != BC2.cellNumber) {
        var collide = collisionDetection(BC1.x, BC1.y, cellImpactSize, BC2.x, BC2.y, cellImpactSize);

        if (collide) {
          BC1.angle = Math.atan2(BC2.y - BC1.y, BC2.x - BC1.x);
          BC1.velocity.x = -Math.cos(BC1.angle) * simulationSpeed;
          BC1.velocity.y = -Math.sin(BC1.angle) * simulationSpeed;
        }
      }
    });
  });
  blueCells.forEach(function (BC, index) {
    if (BC.x < 0) {
      BC.x = canvas.width;
    }

    if (BC.x > canvas.width) {
      BC.x = 0;
    }

    if (BC.y < 0) {
      BC.y = canvas.height;
    }

    if (BC.y > canvas.height) {
      BC.y = 0;
    }

    redCells.forEach(function (RC, index) {
      var attract = collisionDetection(BC.x, BC.y, BC.r, RC.x, RC.y, RC.r);

      if (attract) {
        var repel = collisionDetection(BC.x, BC.y, repelBlueRange, RC.x, RC.y, repelYellowRange);

        if (!repel) {
          BC.angle = Math.atan2(RC.y - BC.y, RC.x - BC.x);
          BC.velocity.x = Math.cos(BC.angle) * simulationSpeed;
          BC.velocity.y = Math.sin(BC.angle) * simulationSpeed;
        } else {
          BC.angle = Math.atan2(RC.y - BC.y, RC.x - BC.x);
          BC.velocity.x = -Math.cos(BC.angle) * simulationSpeed;
          BC.velocity.y = -Math.sin(BC.angle) * simulationSpeed;
        }
      }
    });
    yellowCells.forEach(function (YC, index) {
      var repel = collisionDetection(BC.x, BC.y, repelRedRange, YC.x, YC.y, repelBlueRange);

      if (repel) {
        BC.angle = Math.atan2(YC.y - BC.y, YC.x - BC.x);
        BC.velocity.x = -Math.cos(BC.angle) * simulationSpeed;
        BC.velocity.y = -Math.sin(BC.angle) * simulationSpeed;
      }
    });
    BC.update();
  });
}