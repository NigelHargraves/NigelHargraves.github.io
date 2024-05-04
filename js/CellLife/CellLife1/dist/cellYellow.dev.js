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
      x: (Math.random() - 0.5) * 0.5,
      y: (Math.random() - 0.5) * 0.5
    };
    this.angle = 0;
    this.cellLife = 1000 + Math.random() * 1000;
    this.kill = false;
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
      var _this = this;

      yellowCells.forEach(function (YC, index) {
        var opp = 0,
            adj = 0,
            hyp = 0;

        if (_this.cellNumber != YC.cellNumber) {
          var collide = collisionDetection(_this.x, _this.y, cellImpactSize, YC.x, YC.y, cellImpactSize);

          if (collide) {
            opp = Math.pow(_this.x - YC.x, 2);
            adj = Math.pow(_this.y - YC.y, 2);
            if (opp < 0) opp *= -1;
            if (adj < 0) adj *= -1;
            hyp = Math.sqrt(opp + adj) / 10;
            _this.angle = Math.atan2(YC.y - _this.y, YC.x - _this.x);
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
              rangeYellow += 1;
            } else {
              rangeYellow -= 1;
            }
          } else {
            if (changeUp > 0.5) {
              repelYellowRange += 1;
            } else {
              repelYellowRange -= 1;
            }
          }
        }

        this.kill = true;

        if (repelYellowRange < 5) {
          repelYellowRange = 5;
        }

        if (rangeYellow < repelYellowRange + 1) {
          rangeYellow = repelYellowRange + 1;
        }
      }

      this.draw();
    }
  }]);

  return YellowCell;
}();

function forYellowCells() {
  yellowCells.forEach(function (YC, index) {
    if (YC.kill) {
      var newNumber = YC.cellNumber;
      var newx = YC.x;
      var newy = YC.y;
      yellowCells.splice(index, 1);
      yellowCells.push(new YellowCell(newx, newy, newNumber));
    }

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