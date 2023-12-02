"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create spider class.
var Spider =
/*#__PURE__*/
function () {
  //construct spider data.
  function Spider(image, imageShadow, x, y) {
    _classCallCheck(this, Spider);

    this.image = image;
    this.imageShadow = imageShadow;
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
    this.spiderSpeed = 95;
  } //draw spider.


  _createClass(Spider, [{
    key: "draw",
    value: function draw() {
      if (this.imageAngle == 360) {
        this.image = spiderWalk0;
        this.imageShadow = spiderWalkShadow0;
      }

      if (this.imageAngle == 30) {
        this.image = spiderWalk30;
        this.imageShadow = spiderWalkShadow30;
      }

      if (this.imageAngle == 45) {
        this.image = spiderWalk45;
        this.imageShadow = spiderWalkShadow45;
      }

      if (this.imageAngle == 60) {
        this.image = spiderWalk60;
        this.imageShadow = spiderWalkShadow60;
      }

      if (this.imageAngle == 90) {
        this.image = spiderWalk90;
        this.imageShadow = spiderWalkShadow90;
      }

      if (this.imageAngle == 120) {
        this.image = spiderWalk120;
        this.imageShadow = spiderWalkShadow120;
      }

      if (this.imageAngle == 135) {
        this.image = spiderWalk135;
        this.imageShadow = spiderWalkShadow135;
      }

      if (this.imageAngle == 150) {
        this.image = spiderWalk150;
        this.imageShadow = spiderWalkShadow150;
      }

      if (this.imageAngle == 180) {
        this.image = spiderWalk180;
        this.imageShadow = spiderWalkShadow180;
      }

      if (this.imageAngle == 210) {
        this.image = spiderWalk210;
        this.imageShadow = spiderWalkShadow210;
      }

      if (this.imageAngle == 225) {
        this.image = spiderWalk225;
        this.imageShadow = spiderWalkShadow225;
      }

      if (this.imageAngle == 240) {
        this.image = spiderWalk240;
        this.imageShadow = spiderWalkShadow240;
      }

      if (this.imageAngle == 270) {
        this.image = spiderWalk270;
        this.imageShadow = spiderWalkShadow270;
      }

      if (this.imageAngle == 300) {
        this.image = spiderWalk300;
        this.imageShadow = spiderWalkShadow300;
      }

      if (this.imageAngle == 315) {
        this.image = spiderWalk315;
        this.imageShadow = spiderWalkShadow315;
      }

      if (this.imageAngle == 330) {
        this.image = spiderWalk330;
        this.imageShadow = spiderWalkShadow330;
      }

      ctx.drawImage(this.imageShadow, this.walkX, this.walkY, this.spriteLength, this.spriteLength, floor.x + this.x - this.r / 2, floor.y + this.y - this.r / 2, this.r, this.r);
      ctx.drawImage(this.image, this.walkX, this.walkY, this.spriteLength, this.spriteLength, floor.x + this.x - this.r / 2, floor.y + this.y - this.r / 2, this.r, this.r);
    } //draw spider.

  }, {
    key: "update",
    value: function update() {
      var changeDirection = Math.random();

      if (changeDirection > 0.999) {
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
          if (this.imageAngle == 360 || this.imageAngle == 30 || this.imageAngle == 90 || this.imageAngle == 120 || this.imageAngle == 180 || this.imageAngle == 210 || this.imageAngle == 270 || this.imageAngle == 300) {
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


      if (this.x - this.r / 2 + floor.x <= floor.x || this.x + this.r / 2 >= floor.width || this.y - this.r / 2 + floor.y <= floor.y || this.y + this.r / 2 >= floor.height) {
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
      this.x += this.aimx / this.spiderSpeed;
      this.y += this.aimy / this.spiderSpeed;

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