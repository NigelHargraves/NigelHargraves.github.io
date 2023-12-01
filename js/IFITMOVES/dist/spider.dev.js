"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create spider class.
var Spider =
/*#__PURE__*/
function () {
  //construct spider data.
  function Spider(image, x, y) {
    _classCallCheck(this, Spider);

    this.image = image;
    this.imageAngle = 360;
    this.x = x;
    this.y = y;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.aimx = 0;
    this.aimy = 0;
    this.spiderAngle = -Math.PI / 2;
    this.spriteLength = 256;
    this.r = 200;
    this.walkX = 0;
    this.walkY = 0;
    this.frameCount = 0;
  } //draw spider.


  _createClass(Spider, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.translate(floor.x, floor.y);
      ctx.translate(this.x, this.y);
      ctx.rotate(Math.PI / 180 * this.imageAngle);

      if (this.imageAngle == 360) {
        this.image = spiderWalk0;
      }

      if (this.imageAngle == 30) {
        this.image = spiderWalk30;
      }

      if (this.imageAngle == 45) {
        this.image = spiderWalk45;
      }

      if (this.imageAngle == 60) {
        this.image = spiderWalk60;
      }

      if (this.imageAngle == 90) {
        this.image = spiderWalk90;
      }

      if (this.imageAngle == 120) {
        this.image = spiderWalk120;
      }

      if (this.imageAngle == 135) {
        this.image = spiderWalk135;
      }

      if (this.imageAngle == 150) {
        this.image = spiderWalk150;
      }

      if (this.imageAngle == 180) {
        this.image = spiderWalk180;
      }

      if (this.imageAngle == 210) {
        this.image = spiderWalk210;
      }

      if (this.imageAngle == 225) {
        this.image = spiderWalk225;
      }

      if (this.imageAngle == 240) {
        this.image = spiderWalk240;
      }

      if (this.imageAngle == 270) {
        this.image = spiderWalk270;
      }

      if (this.imageAngle == 300) {
        this.image = spiderWalk300;
      }

      if (this.imageAngle == 315) {
        this.image = spiderWalk315;
      }

      if (this.imageAngle == 330) {
        this.image = spiderWalk330;
      }

      ctx.drawImage(this.image, this.walkX, this.walkY, this.spriteLength, this.spriteLength, 0 - this.r / 2, 0 - this.r / 2, this.r, this.r);
      ctx.restore();
    } //draw spider.

  }, {
    key: "update",
    value: function update() {
      var changeDirection = Math.random();

      if (changeDirection > 0.99) {
        var direction = Math.random();

        if (direction >= 0.4) {
          if (this.imageAngle == 360 || this.imageAngle == 60 || this.imageAngle == 90 || this.imageAngle == 150 || this.imageAngle == 180 || this.imageAngle == 240 || this.imageAngle == 270 || this.imageAngle == 330) {
            this.imageAngle += 30;

            if (this.imageAngle == 390) {
              this.imageAngle = 30;
            } //increase angle by increments.


            this.spiderAngle += Math.PI / 180 * 30;
          } else {
            this.imageAngle += 15; //increase angle by increments.

            this.spiderAngle += Math.PI / 180 * 15;
          }
        } else {
          if (this.imageAngle == 0 || this.imageAngle == 60 || this.imageAngle == 90 || this.imageAngle == 150 || this.imageAngle == 180 || this.imageAngle == 240 || this.imageAngle == 270 || this.imageAngle == 330) {
            this.imageAngle -= 30;

            if (this.imageAngle == 0) {
              this.imageAngle = 360;
            } //decrease angle by increments.


            this.spiderAngle -= Math.PI / 180 * 30;
          } else {
            this.imageAngle -= 15; //decrease angle by increments.

            this.spiderAngle -= Math.PI / 180 * 15;
          }
        }
      } //hit wall.


      if (this.x - this.r / 2 + floor.x <= floor.x || this.x - this.r / 2 + floor.x >= floor.width || this.y - this.r / 2 + floor.y <= floor.y || this.y - this.r / 2 + floor.y >= floor.height) {
        //increase angle to go opposite direction.
        this.imageAngle += 180;

        if (this.imageAngle > 360) {
          this.imageAngle -= 360;
        }

        if (this.imageAngle < 0) {
          this.imageAngle += 360;
        }

        this.spiderAngle += Math.PI / 180 * 180;
      } //calculate aim point.


      this.aimx = this.r * Math.cos(this.spiderAngle) / 5;
      this.aimy = this.r * Math.sin(this.spiderAngle) / 5; //calc angle to aim point

      var angles = Math.atan2(this.aimy - this.y, this.aimx - this.x); //calc velocity x & y to aim point.

      this.velocity.x = Math.cos(angles) * 1;
      this.velocity.y = Math.sin(angles) * 1;
      /*
           
          this.x += this.velocity.x;
      this.y += this.velocity.y;
        */

      this.x += this.aimx / 100;
      this.y += this.aimy / 100;

      if (this.frameCount >= 5) {
        if (this.walkX == this.spriteLength * 3) {
          this.walkX = 0;
          this.walkY += this.spriteLength;
        } else {
          this.walkX += this.spriteLength;
        }

        if (this.walkY == this.spriteLength * 4) {
          this.frameCount = 0;
          this.walkY = 0;
        }

        this.frameCount = 0;
      } else {
        this.frameCount += 1;
      }

      this.draw();
    }
  }]);

  return Spider;
}();