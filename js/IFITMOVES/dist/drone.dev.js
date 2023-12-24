"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Drone =
/*#__PURE__*/
function () {
  function Drone(dronex, droney, shadowx, shadowy) {
    _classCallCheck(this, Drone);

    this.dronex = dronex;
    this.droney = droney;
    this.shadowx = shadowx;
    this.shadowy = shadowy;
    this.size = 100;
    this.rotorAngle = 0;
    this.aimx = 0;
    this.aimy = 0;
  }

  _createClass(Drone, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.globalAlpha = 0.4;
      ctx.translate(floor.x + this.shadowx, floor.y + this.shadowy);
      ctx.rotate(playerAngle + Math.PI / 2);
      ctx.drawImage(droneShadow, 0 - this.size / 2, 0 - this.size / 2, this.size, this.size);
      ctx.restore();
      ctx.save();
      ctx.translate(floor.x + this.dronex, floor.y + this.droney);
      ctx.rotate(playerAngle + Math.PI / 2);
      ctx.drawImage(drone, 0 - this.size / 2, 0 - this.size / 2, this.size, this.size);
      ctx.beginPath();
      ctx.strokeStyle = "white";
      ctx.moveTo(-21, -21);
      ctx.lineTo(-20 + this.aimx, -20 + this.aimy);
      ctx.moveTo(21, -21);
      ctx.lineTo(20 + this.aimx, -20 + this.aimy);
      ctx.moveTo(21, 21);
      ctx.lineTo(20 + this.aimx, 20 + this.aimy);
      ctx.moveTo(-21, 21);
      ctx.lineTo(-20 + this.aimx, 20 + this.aimy);
      ctx.stroke();
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      //calculate aim point.
      this.aimx = this.size * Math.cos(this.rotorAngle) / 8;
      this.aimy = this.size * Math.sin(this.rotorAngle) / 8;
      this.rotorAngle += 2;

      if (this.rotorAngle >= Math.PI * 2) {
        this.rotorAngle = 0;
      }

      this.draw();
    }
  }]);

  return Drone;
}();

function forDrone() {
  drones.forEach(function (drone, index) {
    drone.update();
  });
}