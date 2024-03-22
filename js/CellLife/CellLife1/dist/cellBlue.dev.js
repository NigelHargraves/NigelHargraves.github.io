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
    this.cellLife = 1000 + Math.random() * 1000;
    this.kill = false;
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
      var _this = this;

      blueCells.forEach(function (BC, index) {
        var opp = 0,
            adj = 0,
            hyp = 0;

        if (_this.cellNumber != BC.cellNumber) {
          var collide = collisionDetection(_this.x, _this.y, cellImpactSize, BC.x, BC.y, cellImpactSize);

          if (collide) {
            opp = Math.pow(_this.x - BC.x, 2);
            adj = Math.pow(_this.y - BC.y, 2);
            if (opp < 0) opp *= -1;
            if (adj < 0) adj *= -1;
            hyp = Math.sqrt(opp + adj) / 10;
            _this.angle = Math.atan2(BC.y - _this.y, BC.x - _this.x);
            _this.velocity.x += -Math.cos(_this.angle) * hyp;
            _this.velocity.y += -Math.sin(_this.angle) * hyp;
          }
        }
      });
      this.x += this.velocity.x;
      this.y += this.velocity.y; //mutate cell

      this.cellLife -= 1;

      if (this.cellLife < 0) {
        var mutate = Math.random();

        if (mutate > 0.999999) {
          var changePerameter = Math.random();
          var changeUp = Math.random();

          if (changePerameter > 0.5) {
            if (changeUp > 0.5) {
              rangeBlue += 1;
            } else {
              rangeBlue -= 1;
            }
          } else {
            if (changeUp > 0.5) {
              repelBlueRange += 1;
            } else {
              repelBlueRange -= 1;
            }
          }
        }

        this.kill = true;

        if (repelBlueRange < 5) {
          repelBlueRange = 5;
        }

        if (rangeBlue < repelBlueRange + 1) {
          rangeBlue = repelBlueRange + 1;
        }
      }

      this.draw();
    }
  }]);

  return BlueCell;
}();

function forBlueCells() {
  blueCells.forEach(function (BC, index) {
    if (BC.kill) {
      var newNumber = BC.cellNumber;
      var newx = BC.x;
      var newy = BC.y;
      blueCells.splice(index, 1);
      blueCells.push(new BlueCell(newx, newy, newNumber));
    }

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
        var repel = collisionDetection(BC.x, BC.y, repelBlueRange, RC.x, RC.y, repelRedRange);

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
      var repel = collisionDetection(BC.x, BC.y, repelBlueRange, YC.x, YC.y, repelYellowRange);

      if (repel) {
        BC.angle = Math.atan2(YC.y - BC.y, YC.x - BC.x);
        BC.velocity.x = -Math.cos(BC.angle) * simulationSpeed;
        BC.velocity.y = -Math.sin(BC.angle) * simulationSpeed;
      }
    });
    BC.update();
  });
}