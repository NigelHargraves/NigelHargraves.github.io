//create player class.
class Player {
    //construct player data.
    constructor(x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.r = radius;
            this.c = color;
            this.velocity = {
                x: 0,
                y: 0
            };
            this.alpha = 0.2;
            this.glow = false;
        }
        //draw player.
    draw() {

            if (playerSheild) {
                ctx.globalAlpha = this.alpha;
                ctx.beginPath();
                ctx.arc(x, this.y, this.r + 4, 0, Math.PI * 2);
                ctx.fillStyle = "yellow";
                ctx.fill();
                ctx.globalAlpha = 1;
            }



            ctx.beginPath();
            ctx.arc(x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = this.c;
            ctx.fill();

            //draw eyes.
            if (!eyesBlink && !eyesSquint) {
                //eyes open.
                ctx.beginPath();
                ctx.fillStyle = "yellow";
                ctx.arc(x - leftEye.x, this.y - leftEye.y, 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.arc(x + rightEye.x, this.y - rightEye.y, 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.fillStyle = "brown";
                ctx.arc(x - leftEye.x, this.y - leftEye.y, 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.arc(x + rightEye.x, this.y - rightEye.y, 2, 0, Math.PI * 2);
                ctx.fill();
            } else if (eyesBlink && !eyesSquint) {
                //eyes blink.
                countBlink -= 10;
                ctx.beginPath();
                ctx.moveTo(x - (leftEye.x + 4), this.y - leftEye.y);
                ctx.lineTo(x - leftEye.x + 4, this.y - rightEye.y);
                ctx.strokeStyle = "black";
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x + (rightEye.x - 4), this.y - leftEye.y);
                ctx.lineTo(x + rightEye.x + 4, this.y - rightEye.y);
                ctx.stroke();
                if (countBlink < 0) {
                    countBlink = 100;
                    eyesBlink = false;
                }
            } else {
                //eyes squint.
                countSquint -= 10;
                ctx.beginPath();
                ctx.moveTo(x - 5, this.y - 5);
                ctx.lineTo(x - 15, this.y - 5);
                ctx.strokeStyle = "black";
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x - 5, this.y - 5);
                ctx.lineTo(x - 13, this.y - 10);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x + 5, this.y - 5);
                ctx.lineTo(x + 15, this.y - 5);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x + 5, this.y - 5);
                ctx.lineTo(x + 13, this.y - 10);
                ctx.stroke();
                if (countSquint < 0) {
                    countSquint = 100;
                    eyesSquint = false;
                }
            }

            //draw mouth.
            if (!moveLeft &&
                !moveRight &&
                !moveUp &&
                !moveDown &&
                this.y + this.r < c.height - 15
            ) {
                ctx.beginPath();
                ctx.arc(x, this.y, 12, Math.PI * 0.2, Math.PI * 0.8);
                ctx.strokeStyle = "red";
                ctx.stroke();
            } else if (moveLeft) {
                ctx.beginPath();
                ctx.arc(x - 2, this.y + 10, 5, 0, Math.PI * 2);
                ctx.fillStyle = "black";
                ctx.fill();
            } else if (moveRight) {
                ctx.beginPath();
                ctx.arc(x + 2, this.y + 10, 5, 0, Math.PI * 2);
                ctx.fillStyle = "black";
                ctx.fill();
            } else if (moveUp) {
                ctx.beginPath();
                ctx.arc(x, this.y + 8, 5, 0, Math.PI * 2);
                ctx.fillStyle = "black";
                ctx.fill();
            } else if (moveDown) {
                ctx.beginPath();
                ctx.arc(x, this.y + 12, 5, 0, Math.PI * 2);
                ctx.fillStyle = "black";
                ctx.fill();
            } else {
                ctx.beginPath();
                ctx.moveTo(x - 10, this.y + 7);
                ctx.lineTo(x + 10, this.y + 7);
                ctx.strokeStyle = "black";
                ctx.stroke();
            }
        }
        //move player/eyes.
    update() {
        //update position.
        this.x += this.velocity.x;
        this.y += this.velocity.y;

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
            leftEye.x = 11;
            rightEye.x = 5;
            this.velocity.x -= velocityAmount;
        } else if (moveRight) {
            leftEye.x = 5;
            rightEye.x = 11;
            this.velocity.x += velocityAmount;
        } else if (moveUp) {
            leftEye.y = 10;
            rightEye.y = 10;
            this.velocity.y -= velocityAmount;
        } else if (moveDown) {
            leftEye.y = 4;
            rightEye.y = 4;
            this.velocity.y += velocityAmount;
        } else {
            leftEye.x = 8;
            rightEye.x = 8;
            leftEye.y = 7;
            rightEye.y = 7;
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