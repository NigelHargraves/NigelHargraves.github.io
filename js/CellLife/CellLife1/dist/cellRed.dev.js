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
    this.cellLife = 1000 + Math.random() * 10000;
    this.kill = false;
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

        if (_this.cellNumber != RC.cellNumber) {
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
        }
      });
      this.x += this.velocity.x;
      this.y += this.velocity.y; //mutate cell

      this.cellLife -= 1;

      if (this.cellLife < 0) {
        var mutate = Math.random();

        if (mutate > 0.999) {
          var changePerameter = Math.random();
          var changeUp = Math.random();

          if (changePerameter > 0.5) {
            if (changeUp > 0.5) {
              rangeRed += 0.5;
            } else {
              rangeRed -= 0.5;
            }

            if (rangeRed < repelRedRange + 1) {
              rangeRed = repelRedRange + 1;
            }
          } else {
            if (changeUp > 0.5) {
              repelRedRange += 0.5;
            } else {
              repelRedRange -= 0.5;
            }

            if (repelRedRange < 5) {
              repelRedRange = 5;
            }
          }
        }

        this.kill = true;
      }

      this.draw();
    }
  }]);

  return RedCell;
}();

function forRedCells() {
  redCells.forEach(function (RC, index) {
    if (RC.kill) {
      var newNumber = RC.cellNumber;
      redCells.splice(index, 1);
      redCells.push(new RedCell(Math.random() * canvas.width, Math.random() * canvas.height, newNumber));
    }

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