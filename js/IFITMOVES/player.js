//create player class.
class Player {
    //construct player data.
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocity = {
            x: 0,
            y: 0
        };
        this.r = 50;
        this.aimx = 0;
        this.aimy = 0;
        this.walk = 40;
        this.spriteLength = 189;
        this.fire = 10;
        this.rotate = 30;
    }

    //draw player.
    draw() {


        if (playerVisible) {


            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(playerAngle + Math.PI / 2);
            if (playerAngle <= 0) {
                playerAngle = Math.PI * 2;
            }
            if (playerAngle > Math.PI * 2) {
                playerAngle = 0;
            }


            ctx.globalAlpha = 0.5;
            ctx.drawImage(playerShadow, 0 - this.r / 2, 0 - this.r / 2, this.r, this.r);
            ctx.globalAlpha = 1;




            if (!moveForward && !fire) {

                ctx.drawImage(playerImage, 8, 0, this.spriteLength, 300, 0 - this.r / 2, 0 - this.r / 2, this.r, this.r);
            }

            if (!moveForward && moveLeft || moveRight) {
                if (this.rotate >= 15) {
                    ctx.drawImage(playerImage, this.spriteLength * 4, 0, this.spriteLength, 300, 0 - this.r / 2, 0 - this.r / 2, this.r, this.r);
                } else {
                    ctx.drawImage(playerImage, this.spriteLength * 2, 0, this.spriteLength, 300, 0 - this.r / 2, 0 - this.r / 2, this.r, this.r);
                }

                this.rotate -= 1;

                if (this.rotate <= 0) {
                    this.rotate = 30;
                }
            }




            if (moveForward && !fire) {
                if (this.walk >= 30) {
                    ctx.drawImage(playerImage, this.spriteLength, 0, this.spriteLength, 300, 0 - this.r / 2, 0 - this.r / 2, this.r, this.r);
                }
                if (this.walk >= 20 && this.walk < 30) {
                    ctx.drawImage(playerImage, this.spriteLength * 2, 0, this.spriteLength, 300, 0 - this.r / 2, 0 - this.r / 2, this.r, this.r);
                }
                if (this.walk >= 10 && this.walk < 20) {
                    ctx.drawImage(playerImage, this.spriteLength * 3, 0, this.spriteLength, 300, 0 - this.r / 2, 0 - this.r / 2, this.r, this.r);
                }
                if (this.walk >= 0 && this.walk < 10) {
                    ctx.drawImage(playerImage, this.spriteLength * 4, 0, this.spriteLength, 300, 0 - this.r / 2, 0 - this.r / 2, this.r, this.r);
                }
                if (run) {
                    this.walk -= 2;
                } else {
                    this.walk -= 1;
                }

                if (this.walk <= 0) {
                    this.walk = 40;
                }
            } else {
                this.walk = 40;
            }

            if (fire) {
                if (this.fire > 9) {
                    shot.currentTime = 0;
                    shot.play();
                    const angles = Math.atan2(this.aimy, this.aimx);
                    const velocity = {
                        x: Math.cos(angles) * 20,
                        y: Math.sin(angles) * 20
                    };
                    bullets.push(new Bullet(player.x, player.y, velocity));

                }

                if (this.fire >= 6) {
                    ctx.drawImage(playerImage, this.spriteLength * 6, 0, this.spriteLength, 300, 0 - this.r / 2, 0 - this.r / 2, this.r, this.r);
                }



                if (this.fire >= 0 && this.fire < 6) {
                    ctx.drawImage(playerImage, this.spriteLength * 5, 0, this.spriteLength, 300, 0 - this.r / 2, 0 - this.r / 2, this.r, this.r);
                }
                this.fire -= 1;
                if (this.fire <= 0) {
                    this.fire = 10;
                    fire = false;
                }
            }
            ctx.restore();

            if (laserFlash) {
                ctx.globalAlpha = Math.random();
                ctx.drawImage(laserHit, player.x - 50, player.y - 50, 100, 100);
                ctx.globalAlpha = 1;
                laserFlash = false;
            }

        }



    }

    //update player.
    update() {
        if (playerVisible) {

            //move aim point.
            if (moveRight) {
                //increase angle by PI/180.
                playerAngle += Math.PI / 180;
            }
            if (moveLeft) {
                //decrease angle by PI/180.
                playerAngle -= Math.PI / 180;
            }


            //calculate aim point.
            this.aimx = this.r * Math.cos(playerAngle) / 5;
            this.aimy = this.r * Math.sin(playerAngle) / 5;





            //calc angle to aim point
            let angles = Math.atan2(this.aimy - this.y, this.aimx - this.x);

            /*
                        //calc velocity x & y to aim point.
                        this.velocity.x = (Math.cos(angles) * 1);
                        this.velocity.y = (Math.sin(angles) * 1);
            */





            //what sound to play.
            if (moveForward) {
                rotateStep.currentTime = 0;
                rotateStep.paused;
                if (!run) {
                    running.currentTime = 0;
                    running.pause();
                    walking.play();
                } else {
                    walking.currentTime = 0;
                    walking.paused;
                    running.play();
                }
            } else {
                running.currentTime = 0;
                running.pause();
                walking.currentTime = 0;
                walking.pause();
            }


            if (!moveForward && moveLeft || moveRight) {
                rotateStep.play();
            }

            let standOnSwitch = collisionDetection(this.x, this.y, this.r / 2, this.r / 2, floor.x + 2910, floor.y + 52, 40, 40);

            if (standOnSwitch) {
                switchIsOn.play();
                switchDoorOn = false;
            }


        }

        this.draw();
    }
}