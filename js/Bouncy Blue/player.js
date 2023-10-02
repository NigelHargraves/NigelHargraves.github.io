//create player class.
class Player {
    //construct player data.
    constructor(x, y, radius) {
            this.x = x;
            this.y = y;
            this.r = radius;
            this.velocity = {
                x: 0,
                y: 0
            };
            this.alpha = 0.2;
            this.glow = false;
        }
        //draw player.
    draw() {
        ctx.drawImage(river, millX, c.height - c.height * 0.260, c.height * 0.400, c.height * 0.200);
        ctx.drawImage(waterMill, millX, c.height - c.height * 0.380, c.height * 0.400, c.height * 0.400);

        if (playerSheild) {
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(x, this.y, this.r + 4, 0, Math.PI * 2);
            ctx.fillStyle = "yellow";
            ctx.fill();
            ctx.globalAlpha = 1;
        }
        if (!eyesSquint) {
            if (moveLeft && moveDown) {
                ctx.drawImage(stalkLeft, x - stalkSize / 2, player.y - player.r - stalkSize, stalkSize, stalkSize);
                ctx.drawImage(faceDownLeft, x - player.r, player.y - player.r, player.r * 2, player.r * 2);
            } else if (moveRight && moveDown) {
                ctx.drawImage(stalkRight, x - stalkSize / 2, player.y - player.r - stalkSize, stalkSize, stalkSize);
                ctx.drawImage(faceDownRight, x - player.r, player.y - player.r, player.r * 2, player.r * 2);
            } else if (moveLeft && moveUp) {
                ctx.drawImage(stalkLeft, x - stalkSize / 2, player.y - player.r - stalkSize, stalkSize, stalkSize);
                ctx.drawImage(faceUpLeft, x - player.r, player.y - player.r, player.r * 2, player.r * 2);
            } else if (moveRight && moveUp) {
                ctx.drawImage(stalkRight, x - stalkSize / 2, player.y - player.r - stalkSize, stalkSize, stalkSize);
                ctx.drawImage(faceUpRight, x - player.r, player.y - player.r, player.r * 2, player.r * 2);
            } else if (moveLeft) {
                ctx.drawImage(stalkLeft, x - stalkSize / 2, player.y - player.r - stalkSize, stalkSize, stalkSize);
                ctx.drawImage(faceLeft, x - player.r, player.y - player.r, player.r * 2, player.r * 2);
            } else if (moveRight) {
                ctx.drawImage(stalkRight, x - stalkSize / 2, player.y - player.r - stalkSize, stalkSize, stalkSize);
                ctx.drawImage(faceRight, x - player.r, player.y - player.r, player.r * 2, player.r * 2);
            } else if (moveUp) {
                if (fireRight) {
                    ctx.drawImage(stalkRight, x - stalkSize / 2, player.y - player.r - stalkSize, stalkSize, stalkSize);
                } else {
                    ctx.drawImage(stalkLeft, x - stalkSize / 2, player.y - player.r - stalkSize, stalkSize, stalkSize);
                }
                ctx.drawImage(faceUp, x - player.r, player.y - player.r, player.r * 2, player.r * 2);
            } else if (moveDown) {
                if (fireRight) {
                    ctx.drawImage(stalkRight, x - stalkSize / 2, player.y - player.r - stalkSize, stalkSize, stalkSize);
                } else {
                    ctx.drawImage(stalkLeft, x - stalkSize / 2, player.y - player.r - stalkSize, stalkSize, stalkSize);
                }
                ctx.drawImage(lookDown, x - player.r, player.y - player.r, player.r * 2, player.r * 2);
            } else {
                if (eyesBlink) {
                    if (fireRight) {
                        ctx.drawImage(stalkRight, x - stalkSize / 2, player.y - player.r - stalkSize, stalkSize, stalkSize);
                    } else {
                        ctx.drawImage(stalkLeft, x - stalkSize / 2, player.y - player.r - stalkSize, stalkSize, stalkSize);
                    }
                    ctx.drawImage(faceBlink, x - player.r, player.y - player.r, player.r * 2, player.r * 2);
                } else {
                    if (fireRight) {
                        ctx.drawImage(stalkRight, x - stalkSize / 2, player.y - player.r - stalkSize, stalkSize, stalkSize);
                    } else {
                        ctx.drawImage(stalkLeft, x - stalkSize / 2, player.y - player.r - stalkSize, stalkSize, stalkSize);
                    }
                    ctx.drawImage(faceForward, x - player.r, player.y - player.r, player.r * 2, player.r * 2);
                }
            }
        }
        if (eyesSquint) {
            ctx.drawImage(faceBlank, x - player.r, player.y - player.r, player.r * 2, player.r * 2);
            let bounceSize = 1.6;


            if (fireRight) {
                ctx.drawImage(stalkRight, x - stalkSize / 2, player.y - (player.r * (bounceSize / 2)) - stalkSize, stalkSize, stalkSize);
            } else {
                ctx.drawImage(stalkLeft, x - stalkSize / 2, player.y - (player.r * (bounceSize / 2)) - stalkSize, stalkSize, stalkSize);
            }
            ctx.drawImage(faceSquint, x - player.r, player.y - (player.r * (bounceSize / 2)), player.r * 2, player.r * bounceSize);

        }

    }

    update() {
        //update position.
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        millX -= this.velocity.x;

        if (playerSheild) {
            if (this.alpha <= 0.2) {
                this.glow = true;
            }
            if (this.alpha >= 1) {
                this.glow = false;
            }
            if (this.glow) {
                this.alpha += 0.02;
            } else {
                this.alpha -= 0.02;
            }
        }

        if (moveLeft) {
            this.velocity.x -= velocityAmount;
        }
        if (moveRight) {
            this.velocity.x += velocityAmount;
        }
        if (moveUp) {
            this.velocity.y -= velocityAmount;
        }
        if (moveDown) {
            this.velocity.y += velocityAmount;
        }




        //add gravity.
        this.velocity.y += gravity;

        //add friction.
        if (controlLevel != 2) {
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
        }
        //bounce off floor.
        if (this.y + this.r > c.height - 20) {
            this.y = c.height - this.r - 21;
            this.velocity.y = -this.velocity.y;
            eyesSquint = true;
            bounce.currentTime = 0;
            bounce.play();
        }

        //increase bounce off floor.
        if (this.y + this.r > c.height - 22 && increaseBounce) {
            this.velocity.y += this.velocity.y / 8;
            increaseBounce = false;
        }

        this.draw(); //call draw function to draw in new position.
    }
}