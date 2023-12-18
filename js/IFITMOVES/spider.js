//create spider class.
class Spider {
    //construct spider data.
    constructor(image, imageShadow, x, y) {
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
        this.frameSpeed = 5;
        this.spiderSpeed = 95;
        this.run = false;
        this.idle = false;
        this.runTimer = 0;
        this.idleTimer = 0;
        this.changeDirection = 0.999;
    }



    //draw spider.
    draw() {

        if (this.imageAngle == 360) {
            if (this.idle) {
                this.image = Nervous0;
                this.imageShadow = NervousShadow0;
            } else {
                this.image = spiderWalk0;
                this.imageShadow = spiderWalkShadow0;
            }

        }
        if (this.imageAngle == 30) {
            if (this.idle) {
                this.image = Nervous30;
                this.imageShadow = NervousShadow30;
            } else {
                this.image = spiderWalk30;
                this.imageShadow = spiderWalkShadow30;
            }

        }
        if (this.imageAngle == 45) {
            if (this.idle) {
                this.image = Nervous45;
                this.imageShadow = NervousShadow45;
            } else {
                this.image = spiderWalk45;
                this.imageShadow = spiderWalkShadow45;
            }

        }
        if (this.imageAngle == 60) {
            if (this.idle) {
                this.image = Nervous60;
                this.imageShadow = NervousShadow60;
            } else {
                this.image = spiderWalk60;
                this.imageShadow = spiderWalkShadow60;
            }

        }
        if (this.imageAngle == 90) {
            if (this.idle) {
                this.image = Nervous90;
                this.imageShadow = NervousShadow90;
            } else {
                this.image = spiderWalk90;
                this.imageShadow = spiderWalkShadow90;
            }

        }
        if (this.imageAngle == 120) {
            if (this.idle) {
                this.image = Nervous120;
                this.imageShadow = NervousShadow120;
            } else {
                this.image = spiderWalk120;
                this.imageShadow = spiderWalkShadow120;
            }

        }
        if (this.imageAngle == 135) {
            if (this.idle) {
                this.image = Nervous135;
                this.imageShadow = NervousShadow135;
            } else {
                this.image = spiderWalk135;
                this.imageShadow = spiderWalkShadow135;
            }

        }
        if (this.imageAngle == 150) {
            if (this.idle) {
                this.image = Nervous150;
                this.imageShadow = NervousShadow150;
            } else {
                this.image = spiderWalk150;
                this.imageShadow = spiderWalkShadow150;
            }

        }
        if (this.imageAngle == 180) {
            if (this.idle) {
                this.image = Nervous180;
                this.imageShadow = NervousShadow180;
            } else {
                this.image = spiderWalk180;
                this.imageShadow = spiderWalkShadow180;
            }

        }
        if (this.imageAngle == 210) {
            if (this.idle) {
                this.image = Nervous210;
                this.imageShadow = NervousShadow210;
            } else {
                this.image = spiderWalk210;
                this.imageShadow = spiderWalkShadow210;
            }

        }
        if (this.imageAngle == 225) {
            if (this.idle) {
                this.image = Nervous225;
                this.imageShadow = NervousShadow225;
            } else {
                this.image = spiderWalk225;
                this.imageShadow = spiderWalkShadow225;
            }

        }
        if (this.imageAngle == 240) {
            if (this.idle) {
                this.image = Nervous240;
                this.imageShadow = NervousShadow240;
            } else {
                this.image = spiderWalk240;
                this.imageShadow = spiderWalkShadow240;
            }

        }
        if (this.imageAngle == 270) {
            if (this.idle) {
                this.image = Nervous270;
                this.imageShadow = NervousShadow270;
            } else {
                this.image = spiderWalk270;
                this.imageShadow = spiderWalkShadow270;
            }

        }
        if (this.imageAngle == 300) {
            if (this.idle) {
                this.image = Nervous300;
                this.imageShadow = NervousShadow300;
            } else {
                this.image = spiderWalk300;
                this.imageShadow = spiderWalkShadow300;
            }

        }
        if (this.imageAngle == 315) {
            if (this.idle) {
                this.image = Nervous315;
                this.imageShadow = NervousShadow315;
            } else {
                this.image = spiderWalk315;
                this.imageShadow = spiderWalkShadow315;
            }

        }
        if (this.imageAngle == 330) {
            if (this.idle) {
                this.image = Nervous330;
                this.imageShadow = NervousShadow330;
            } else {
                this.image = spiderWalk330;
                this.imageShadow = spiderWalkShadow330;
            }

        }

        //only draw spider when in view.
        let renderSpider = collisionDetection(this.x, this.y, this.r / 2, this.r / 2, player.x - floor.x, player.y - floor.y, c.width / 2, c.height / 2);
        if (renderSpider) {
            ctx.drawImage(this.imageShadow, this.walkX, this.walkY, this.spriteLength, this.spriteLength,
                floor.x + this.x - this.r / 2, floor.y + this.y - this.r / 2, this.r, this.r);
            ctx.drawImage(this.image, this.walkX, this.walkY, this.spriteLength, this.spriteLength,
                floor.x + this.x - this.r / 2, floor.y + this.y - this.r / 2, this.r, this.r);
        }





    }


    //draw spider.
    update() {



        let changeDirection = Math.random();
        if (changeDirection > this.changeDirection) {
            let direction = Math.random();
            if (direction >= 0.4) {
                if (this.imageAngle == 360 || this.imageAngle == 60 || this.imageAngle == 90 || this.imageAngle == 150 ||
                    this.imageAngle == 180 || this.imageAngle == 240 || this.imageAngle == 270 || this.imageAngle == 330) {
                    this.imageAngle += 30;
                    if (this.imageAngle == 390) {
                        this.imageAngle = 30;
                    }
                    //increase angle by increments.
                    this.spiderAngle += (Math.PI / 180) * 30;
                } else {
                    this.imageAngle += 15;
                    //increase angle by increments.
                    this.spiderAngle += (Math.PI / 180) * 15;
                }
            } else {
                if (this.imageAngle == 360 || this.imageAngle == 30 || this.imageAngle == 90 || this.imageAngle == 120 ||
                    this.imageAngle == 180 || this.imageAngle == 210 || this.imageAngle == 270 || this.imageAngle == 300) {
                    this.imageAngle -= 30;
                    if (this.imageAngle == 0) {
                        this.imageAngle = 360;
                    }
                    //decrease angle by increments.
                    this.spiderAngle -= (Math.PI / 180) * 30;
                } else {
                    this.imageAngle -= 15;
                    //decrease angle by increments.
                    this.spiderAngle -= (Math.PI / 180) * 15;
                }
            }
        }


        //hit edge.
        if ((this.x - this.r / 2) + floor.x <= floor.x || (this.x + this.r / 2) >= floor.width ||
            (this.y - this.r / 2) + floor.y <= floor.y || (this.y + this.r / 2) >= floor.height) {
            //increase angle to go 90 or 180 degrees.
            if (this.imageAngle == 360 || this.imageAngle == 90 || this.imageAngle == 180 || this.imageAngle == 270) {
                this.imageAngle += 180;
                this.spiderAngle += (Math.PI / 180) * 180;
            } else {
                this.imageAngle += 90;
                this.spiderAngle += (Math.PI / 180) * 90;
            }
            if (this.imageAngle > 360) {
                this.imageAngle -= 360;
            }
            if (this.imageAngle < 0) {
                this.imageAngle += 360;
            }
        }




        //calculate aim point.
        this.aimx = this.r * Math.cos(this.spiderAngle) / 5;
        this.aimy = this.r * Math.sin(this.spiderAngle) / 5;





        //calc angle to aim point
        let angles = Math.atan2(this.aimy - this.y, this.aimx - this.x);


        //calc velocity x & y to aim point.
        this.velocity.x = (Math.cos(angles) * 1);
        this.velocity.y = (Math.sin(angles) * 1);

        let spiderIdle = Math.random();
        if (spiderIdle > 0.999 && !this.run && !this.idle) {
            this.frameSpeed = 2;
            this.idle = true;
            this.changeDirection = 0.99;
        }


        let spiderRun = Math.random();
        if (spiderRun > 0.999 && !this.run && !this.idle) {
            this.spiderSpeed = 20;
            this.frameSpeed = 1;
            this.run = true;
        }

        if (!this.idle) {
            this.x += this.aimx / this.spiderSpeed;
            this.y += this.aimy / this.spiderSpeed;
        }


        if (this.idle) {
            this.idleTimer += 1;
        }
        if (this.idleTimer >= 600) {
            this.idleTimer = 0;
            this.idle = false;
            this.spiderSpeed = 95;
            this.frameSpeed = 5;
            this.walkX = 0;
            this.walkY = 0;
            this.changeDirection = 0.999;
        }

        if (this.run) {
            this.runTimer += 1;
        }
        if (this.runTimer >= 300) {
            this.runTimer = 0;
            this.run = false;
            this.spiderSpeed = 95;
            this.frameSpeed = 5;
        }


        if (this.frameCount >= this.frameSpeed) {

            if (this.idle) {
                if (this.walkX == this.spriteLength * 5) {
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
            }
        } else {
            this.frameCount += 1;
        }
        this.draw();
    }
}

function forSpider() {
    spiders.forEach((spider) => {
        let collide = collisionDetection(player.x - floor.x, player.y - floor.y, player.r / 2.5, player.r / 2.5, spider.x, spider.y, spider.r / 4, spider.r / 4);
        if (collide) {
            health -= 0.1;
        }
        spider.update();
    });
    //cut spider sound if none in view.
    let spiderCount = 0;
    spiders.forEach((spider) => {
        let playSound = collisionDetection(spider.x, spider.y, spider.r / 2, spider.r / 2, player.x - floor.x, player.y - floor.y, c.width / 2, c.height / 2);
        if (playSound) {
            spiderInView = true;
            return;
        } else {
            spiderCount += 1;
        }
        if (spiderCount == spiders.length) {
            spiderInView = false;
        }
    });

    if (spiderInView) {
        spiderWalking.play();
    } else {
        spiderInView.currentTime = 0;
        spiderWalking.pause();
    }
}