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
    this.droneAngle = Math.PI / 2;
    this.turn = false;
    this.turnRight = false;
    this.turnTime = 200;
    this.rotorAimx = 0;
    this.rotorAimy = 0;
    this.droneAimx = 0;
    this.droneAimy = 0;
    this.speed = 60;
  }

  _createClass(Drone, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.globalAlpha = 0.4;
      ctx.translate(floor.x + this.shadowx, floor.y + this.shadowy);
      ctx.rotate(this.droneAngle + Math.PI / 2);
      ctx.drawImage(droneShadow, 0 - this.size / 2, 0 - this.size / 2, this.size, this.size);
      ctx.restore();
      ctx.save();
      ctx.translate(floor.x + this.dronex, floor.y + this.droney);
      ctx.rotate(this.droneAngle + Math.PI / 2);
      ctx.drawImage(drone, 0 - this.size / 2, 0 - this.size / 2, this.size, this.size);
      ctx.beginPath();
      ctx.strokeStyle = "darkred";
      ctx.moveTo(-21, -21);
      ctx.lineTo(-20 + this.rotorAimx, -20 + this.rotorAimy);
      ctx.moveTo(21, -21);
      ctx.lineTo(20 + this.rotorAimx, -20 + this.rotorAimy);
      ctx.moveTo(21, 21);
      ctx.lineTo(20 + this.rotorAimx, 20 + this.rotorAimy);
      ctx.moveTo(-21, 21);
      ctx.lineTo(-20 + this.rotorAimx, 20 + this.rotorAimy);
      ctx.stroke();
      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      var droneTurn = Math.random();

      if (droneTurn > 0.999 && !this.turn) {
        this.turn = true;
        var droneDirection = Math.random();

        if (droneDirection >= 0.5) {
          this.turnRight = true;
        } else {
          this.turnRight = false;
        }
      }

      if (this.turn) {
        this.turnTime -= 1;

        if (this.turnRight) {
          this.droneAngle += 0.01;
        } else {
          this.droneAngle -= 0.01;
        }

        if (this.turnTime <= 0) {
          this.turn = false;
          this.turnTime = 200;
        }
      } //calculate rotor draw point.


      this.rotorAimx = this.size * Math.cos(this.rotorAngle) / 8;
      this.rotorAimy = this.size * Math.sin(this.rotorAngle) / 8;
      this.rotorAngle += 2;

      if (this.rotorAngle >= Math.PI * 2) {
        this.rotorAngle = 0;
      } //calculate drone aim point.


      this.droneAimx = this.size * Math.cos(this.droneAngle) / 2;
      this.droneAimy = this.size * Math.sin(this.droneAngle) / 2;
      this.dronex -= this.droneAimx / this.speed;
      this.droney -= this.droneAimy / this.speed;
      this.shadowx -= this.droneAimx / this.speed;
      this.shadowy -= this.droneAimy / this.speed; //drone flies out of range return to opposite.

      if (this.dronex <= 0 - c.height) {
        this.dronex = 0 + playArea + c.height;
        this.shadowx = 0 + playArea + c.height;
      }

      if (this.dronex > playArea + c.height) {
        this.dronex = 0 - c.height;
        this.shadowx = 0 - c.height;
      }

      if (this.droney <= 0 - c.height) {
        this.droney = 0 + playArea + c.height;
        this.shadowy = 0 + playArea + c.height + 50;
      }

      if (this.droney > playArea + c.height) {
        this.droney = 0 - c.height;
        this.shadowy = 0 - c.height + 50;
      }

      this.draw();
    }
  }]);

  return Drone;
}();

function forDrone() {
  drones.forEach(function (drone, index) {
    drone.update();
  }); //cut drone sound if none in view.

  var droneCount = 0;
  drones.forEach(function (drone) {
    var playSound = collisionDetection(drone.dronex, drone.droney, drone.size / 2, drone.size / 2, player.x - floor.x, player.y - floor.y, c.width / 2, c.height / 2);

    if (playSound) {
      droneInView = true;
      return;
    } else {
      droneCount += 1;
    }

    if (droneCount == drones.length) {
      droneInView = false;
    }
  });

  if (droneInView) {
    droneNoise.play();
  } else {
    droneNoise.currentTime = 0;
    droneNoise.pause();
  }
}