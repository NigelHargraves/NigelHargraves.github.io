"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Door =
/*#__PURE__*/
function () {
  function Door(x, y, direction, key, color) {
    _classCallCheck(this, Door);

    this.x = x;
    this.y = y;
    this.horizontal = direction;
    this.image = key;
    this.color = color;
    this.on = true;
    this.size = 100;
  }

  _createClass(Door, [{
    key: "draw",
    value: function draw() {
      if (!this.horizontal) {
        ctx.drawImage(this.image, floor.x + this.x - this.size / 2, floor.y + this.y, this.size, this.size);

        if (this.on) {
          ctx.beginPath();
          ctx.moveTo(floor.x + this.x + (Math.random() - 0.5) * 20, floor.y + this.y);

          for (var i = 10; i <= 100; i += 10) {
            ctx.lineTo(this.x - 10 + Math.random() * 20 + floor.x, this.y + i + floor.y);
          }

          ctx.lineWidth = 1;
          ctx.strokeStyle = "white";
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(floor.x + this.x + (Math.random() - 0.5) * 20, floor.y + this.y);

          for (var _i = 10; _i <= 100; _i += 10) {
            ctx.lineTo(this.x - 10 + Math.random() * 20 + floor.x, this.y + _i + floor.y);
          }

          ctx.strokeStyle = "white";
          ctx.stroke();
        } //draw gate sides.


        ctx.beginPath();
        ctx.moveTo(floor.x + this.x - 10, floor.y + this.y);
        ctx.lineTo(this.x + 10 + floor.x, floor.y + this.y);
        ctx.moveTo(floor.x + this.x - 10, floor.y + this.y + 100);
        ctx.lineTo(this.x + 10 + floor.x, floor.y + this.y + 100);
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.color;
        ctx.stroke();
      } else {
        ctx.drawImage(this.image, floor.x + this.x, floor.y + this.y - this.size / 2, this.size, this.size);

        if (this.on) {
          ctx.beginPath();
          ctx.moveTo(floor.x + this.x, floor.y + this.y + (Math.random() - 0.5) * 20);

          for (var _i2 = 10; _i2 <= 100; _i2 += 10) {
            ctx.lineTo(this.x + _i2 + floor.x, this.y - 10 + Math.random() * 20 + floor.y);
          }

          ctx.lineWidth = 1;
          ctx.strokeStyle = "white";
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(floor.x + this.x, floor.y + this.y + (Math.random() - 0.5) * 20);

          for (var _i3 = 10; _i3 <= 100; _i3 += 10) {
            ctx.lineTo(this.x + _i3 + floor.x, this.y - 10 + Math.random() * 20 + floor.y);
          }

          ctx.strokeStyle = "white";
          ctx.stroke();
        } //draw gate sides.


        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.moveTo(floor.x + this.x, floor.y + this.y - 10);
        ctx.lineTo(this.x + floor.x, floor.y + this.y + 10);
        ctx.moveTo(floor.x + this.x + 100, floor.y + this.y - 10);
        ctx.lineTo(this.x + floor.x + 100, floor.y + this.y + 10);
        ctx.strokeStyle = this.color;
        ctx.stroke();
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return Door;
}();

function forDoor() {
  doors.forEach(function (door) {
    var walkOnDoorPad;

    if (door.horizontal) {
      walkOnDoorPad = collisionDetection(player.x, player.y, player.r / 2, player.r / 2, door.x + 50 + floor.x, door.y + floor.y, 50, 50);
    } else {
      walkOnDoorPad = collisionDetection(player.x, player.y, player.r / 2, player.r / 2, door.x + floor.x, door.y + 50 + floor.y, 50, 50);
    }

    if (walkOnDoorPad) {
      if (door.color == "red" && gotRedKey) {
        door.on = false;
      }

      if (door.color == "yellow" && gotYellowKey) {
        door.on = false;
      }

      if (door.color == "green" && gotGreenKey) {
        door.on = false;
      }

      if (door.color == "turquoise" && gotTurquoiseKey) {
        door.on = false;
      }

      if (door.color == "orange" && gotOrangeKey) {
        door.on = false;
      }

      if (door.color == "pink" && gotPinkKey) {
        door.on = false;
      }
    } else {
      door.on = true;
    }

    var hit;

    if (door.horizontal) {
      hit = collisionDetection(player.x, player.y, player.r / 2, player.r / 2, door.x + 50 + floor.x, door.y + floor.y, 50, 10);
    } else {
      hit = collisionDetection(player.x, player.y, player.r / 2, player.r / 2, door.x + floor.x, door.y + 50 + floor.y, 10, 50);
    }

    if (hit && door.on) {
      var taper = 1;

      for (var i = 1; i >= 0.1; i -= 0.1) {
        ctx.globalAlpha = i;
        ctx.beginPath();
        ctx.arc(player.x, player.y, 20 + 20 * taper, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        taper += 0.1;
      }

      teleport.play();
      ctx.globalAlpha = 1;
      floor.x = c.width / 2.2;
      floor.y = c.height / 2.3;
    }

    spiders.forEach(function (spider, index) {
      hit = collisionDetection(spider.x + floor.x, spider.y + floor.y, spider.r / 4, spider.r / 4, door.x + floor.x, door.y + 50 + floor.y, 10, 50); //kill spider.

      if (hit) {
        splated.currentTime = 0;
        splated.play();
        spiderInView = false;
        spiderSplats.push(new SpiderSplat(spider.x, spider.y));
        spiders.splice(index, 1);
      }
    });

    if (door.color == "black" && !switchDoorOn) {
      door.image = keyHolefootpadOpen;
      door.on = false;
      switchTimer += 1;
    }

    if (switchTimer >= 2000) {
      door.image = keyHolefootpad;
      door.on = true;
      switchDoorOn = true;
      switchTimer = 0;
    }
  });
}