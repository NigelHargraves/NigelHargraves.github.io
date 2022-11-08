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
        }
        //draw player.
    draw() {
        if (playerAlive) {
            //jumping.
            if (jump) {
                if (lookRight) {
                    ctx.drawImage(JumpRight[Math.round(timerJump)], x, y, 100, 100);
                    timerJump += 0.1;

                    if (this.velocity.x >= 0.1) {
                        this.velocity.x -= 0.03;
                    }
                    if (timerJump >= 9.4) {
                        timerJump = 9;
                    }
                    if (player.y >= playerPosition - 1) {
                        timerJump = 0.5;
                        jump = false;
                    }

                } else {
                    ctx.drawImage(JumpLeft[Math.round(timerJump)], x, y, 100, 100);
                    timerJump += 0.1;
                    if (this.velocity.x <= -0.1) {
                        this.velocity.x += 0.03;
                    }
                    if (timerJump >= 9.4) {
                        timerJump = 9;
                    }
                    if (player.y >= playerPosition - 1) {
                        timerJump = 0.5;
                        jump = false;
                    }
                }
            } else {
                //sliding.
                if (!moveLeft && !moveRight && !sit && lookRight && playerPosition <= player.y && this.velocity.x > 0.1) {
                    ctx.drawImage(SlideRight[Math.round(timerSlide)], x, y, 100, 100);
                    this.velocity.x -= 0.1;
                    timerSlide += 0.1;
                    if (timerSlide >= 5.4) {
                        timerSlide = 0.5;
                    }
                }
                if (!moveLeft && !moveRight && !sit && !lookRight && playerPosition <= player.y && this.velocity.x < -0.1) {
                    ctx.drawImage(SlideLeft[Math.round(timerSlide)], x, y, 100, 100);
                    this.velocity.x += 0.1;
                    timerSlide += 0.1;
                    if (timerSlide >= 5.4) {
                        timerSlide = 0.5;
                    }
                }
                //standing.
                if (!moveLeft && !moveRight && !sit && lookRight && playerPosition <= player.y && player.velocity.x <= 0.1) {
                    ctx.drawImage(IdleRight[Math.round(timerStand)], x, y, 100, 100);
                    timerStand += 0.3;
                    if (timerStand >= 10.4) {
                        timerStand = 0.5;
                    }
                }
                if (!moveLeft && !moveRight && !sit && !lookRight && playerPosition <= player.y && player.velocity.x >= -0.1) {
                    ctx.drawImage(IdleLeft[Math.round(timerStand)], x, y, 100, 100);
                    timerStand += 0.3;
                    if (timerStand >= 10.4) {
                        timerStand = 0.5;
                    }
                }

                //falling/running.
                if (player.velocity.y > 0.1 && lookRight) {
                    ctx.drawImage(JumpRight[Math.round(9)], x, y, 100, 100);
                    if (this.velocity.x >= 0.1) {
                        this.velocity.x -= 0.05;
                    }
                } else if (player.velocity.y > 0.1 && !lookRight) {
                    ctx.drawImage(JumpLeft[Math.round(9)], x, y, 100, 100);
                    if (this.velocity.x <= -0.1) {
                        this.velocity.x += 0.05;
                    }
                } else if (moveRight) {
                    ctx.drawImage(RunRight[Math.round(timerRun)], x, y, 100, 100);
                    timerRun += 0.5;
                    if (timerRun >= 8.4) {
                        timerRun = 0.5;
                    }
                } else if (moveLeft) {
                    ctx.drawImage(RunLeft[Math.round(timerRun)], x, y, 100, 100);
                    timerRun += 0.5;
                    if (timerRun >= 8.4) {
                        timerRun = 0.5;
                    }
                }
                if (sit) {
                    if (lookRight) {
                        if (this.velocity.y <= 0.1) {
                            ctx.drawImage(SlideRight[Math.round(5)], x, y, 100, 100);
                        }
                        if (this.velocity.x >= 0.1) {
                            this.velocity.x -= 0.1;
                        }
                    } else {
                        if (this.velocity.y <= 0.1) {
                            ctx.drawImage(SlideLeft[Math.round(5)], x, y, 100, 100);
                        }
                        if (this.velocity.x <= -0.1) {
                            this.velocity.x += 0.1;
                        }
                    }
                }
            }
        } else {
            jump = false;
            if (lookRight) {
                ctx.drawImage(DeadRight[Math.round(timerDead)], x, y, 100, 100);
                timerDead += 0.3;
                if (timerDead >= 8.4) {
                    timerDead = 8;
                }
            } else {
                ctx.drawImage(DeadLeft[Math.round(timerDead)], x, y, 100, 100);
                timerDead += 0.3;
                if (timerDead >= 8.4) {
                    timerDead = 8;
                }
            }
        }
    }
    update() {


        if (this.velocity.y >= 5 && player.y >= playerPosition - 10) {
            playerAlive = false;
        }




        if (this.velocity.y > 0) {
            this.velocity.y -= friction;
        } else {
            this.velocity.y += friction;
        }
        if (this.velocity.x > 0) {
            this.velocity.x -= friction;
        } else {
            this.velocity.x += friction;
        }
        if (this.y > playerPosition - 1) {
            if (moveLeft) {
                this.velocity.x -= velocityAmount;
            }

            if (moveRight) {
                this.velocity.x += velocityAmount;
            }

        }

        if (jump) {
            if (this.y > playerPosition - 1) {
                this.velocity.y = -4;
            }
        }

        //update position.
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        //add gravity.
        if (this.y < playerPosition) {
            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
            this.y = playerPosition;
        }
        if (this.velocity.x >= 4) {
            this.velocity.x = 3.9;
        }
        if (this.velocity.x <= -4) {
            this.velocity.x = -3.9;
        }



        this.draw();
    }
}