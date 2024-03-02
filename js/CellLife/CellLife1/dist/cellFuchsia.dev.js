"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FuchsiaCell =
/*#__PURE__*/
function () {
  function FuchsiaCell(x, y, cellNumber) {
    _classCallCheck(this, FuchsiaCell);

    this.x = x;
    this.y = y;
    this.cellNumber = cellNumber;
    this.r = rangeFuchsia;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.angle = 0;
    this.cellLife = 1000 + Math.random() * 1000;
    this.kill = false;
  }

  _createClass(FuchsiaCell, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, celSize, 0, Math.PI * 2);
      ctx.fillStyle = 'fuchsia';
      ctx.fill();
    }
  }, {
    key: "update",
    value: function update() {
      var _this = this;

      fuchsiaCells.forEach(function (FC, index) {
        var opp = 0,
            adj = 0,
            hyp = 0;

        if (_this.cellNumber != FC.cellNumber) {
          var collide = collisionDetection(_this.x, _this.y, cellImpactSize, FC.x, FC.y, cellImpactSize);

          if (collide) {
            opp = Math.pow(_this.x - FC.x, 2);
            adj = Math.pow(_this.y - FC.y, 2);
            if (opp < 0) opp *= -1;
            if (adj < 0) adj *= -1;
            hyp = Math.sqrt(opp + adj) / 10;
            _this.angle = Math.atan2(FC.y - _this.y, FC.x - _this.x);
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
              rangeFuchsia += 1;
            } else {
              rangeFuchsia -= 1;
            }
          } else {
            if (changeUp > 0.5) {
              repelFuchsiaRange += 1;
            } else {
              repelFuchsiaRange -= 1;
            }
          }
        }

        this.kill = true;

        if (repelFuchsiaRange < 5) {
          repelFuchsiaRange = 5;
        }

        if (rangeFuchsia < repelFuchsiaRange + 1) {
          rangeFuchsia = repelFuchsiaRange + 1;
        }
      }

      this.draw();
    }
  }]);

  return FuchsiaCell;
}();

function forFuchsiaCells() {
  fuchsiaCells.forEach(function (FC, index) {
    if (FC.kill) {
      var newNumber = FC.cellNumber;
      var newx = FC.x;
      var newy = FC.y;
      fuchsiaCells.splice(index, 1);
      fuchsiaCells.push(new FuchsiaCell(newx, newy, newNumber));
    }

    if (FC.x < 0) {
      FC.x = canvas.width;
    }

    if (FC.x > canvas.width) {
      FC.x = 0;
    }

    if (FC.y < 0) {
      FC.y = canvas.height;
    }

    if (FC.y > canvas.height) {
      FC.y = 0;
    }

    yellowCells.forEach(function (YC, index) {
      var repel = collisionDetection(FC.x, FC.y, FC.r, YC.x, YC.y, YC.r);

      if (repel) {
        FC.angle = Math.atan2(YC.y - FC.y, YC.x - FC.x);
        FC.velocity.x = -Math.cos(FC.angle) * simulationSpeed;
        FC.velocity.y = -Math.sin(FC.angle) * simulationSpeed;
      }
    });
    redCells.forEach(function (RC, index) {
      var attract = collisionDetection(FC.x, FC.y, FC.r, RC.x, RC.y, RC.r);

      if (attract) {
        var repel = collisionDetection(FC.x, FC.y, repelFuchsiaRange, RC.x, RC.y, repelBlueRange);

        if (!repel) {
          FC.angle = Math.atan2(RC.y - FC.y, RC.x - FC.x);
          FC.velocity.x = Math.cos(FC.angle) * simulationSpeed;
          FC.velocity.y = Math.sin(FC.angle) * simulationSpeed;
        } else {
          FC.angle = Math.atan2(RC.y - FC.y, RC.x - FC.x);
          FC.velocity.x = -Math.cos(FC.angle) * simulationSpeed;
          FC.velocity.y = -Math.sin(FC.angle) * simulationSpeed;
        }
      }
    });
    FC.update();
  });
}