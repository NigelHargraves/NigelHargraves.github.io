//flower class.
class Flower {
    //construct flower data.
    constructor(x, y, radius, countdown) {
            this.x = x;
            this.y = y;
            this.r = radius;
            this.startX = this.x;
            this.startY = this.y;
            this.countdown = countdown;
            this.swayUpper = true;
            this.swayLower = false;
            this.moveX = true;
            this.moveY = true;
            this.stalkUpperPoint = 0;
            this.stalkLowerPoint = 0;
            this.accelerationX = 1;
            this.accelerationY = 1;
        }
        //draw flower.
    draw() {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.bezierCurveTo(
                this.x + this.stalkUpperPoint,
                this.y + 100,
                this.x + this.stalkLowerPoint,
                this.y + 100,
                this.startX,
                c.height - c.height * 0.019
            );
            ctx.lineWidth = 5;
            ctx.strokeStyle = "LimeGreen";
            ctx.stroke();
            ctx.drawImage(sunflower, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
        }
        //update flower.
    update() {
        if (this.swayUpper) {
            this.stalkUpperPoint += 1;
        } else {
            this.stalkUpperPoint -= 1;
        }
        if (this.stalkUpperPoint >= 140) {
            this.swayUpper = false;
        }
        if (this.stalkUpperPoint <= -140) {
            this.swayUpper = true;
        }
        if (this.swayLower) {
            this.stalkLowerPoint += 1;
        } else {
            this.stalkLowerPoint -= 1;
        }
        if (this.stalkLowerPoint >= 100) {
            this.swayLower = false;
        }
        if (this.stalkLowerPoint <= -100) {
            this.swayLower = true;
        }

        if (this.moveX && this.x < this.startX + 50) {
            if (this.accelerationX <= 1) {
                this.accelerationX += 0.01;
            }
            this.x += this.accelerationX;
        } else if (this.moveX && this.x >= this.startX + 50) {
            if (this.accelerationX >= 0.2) {
                this.accelerationX -= 0.01;
            }
            this.x += this.accelerationX;
        } else if (!this.moveX && this.x >= this.startX + 50 || this.x <= this.startX - 50) {
            if (this.accelerationX >= 0.2) {
                this.accelerationX -= 0.01;
            }
            this.x -= this.accelerationX;
        } else {
            if (this.accelerationX <= 1) {
                this.accelerationX += 0.01;
            }
            this.x -= this.accelerationX;
        }

        if (this.x >= this.startX + 100) {
            this.moveX = false;
        }
        if (this.x <= this.startX - 100) {
            this.moveX = true;
        }
        if (this.moveY && this.y < this.startY + 40) {
            if (this.accelerationY <= 1) {
                this.accelerationY += 0.01;
            }
            this.y += this.accelerationY;
        } else if (this.moveY && this.y >= this.startY + 40) {
            if (this.accelerationY >= 0.2) {
                this.accelerationY -= 0.01;
            }
            this.y += this.accelerationY;
        } else if (!this.moveY && this.y >= this.startY + 40 || this.y <= this.startY - 40) {
            if (this.accelerationY >= 0.2) {
                this.accelerationY -= 0.01;
            }
            this.y -= this.accelerationY;
        } else {
            if (this.accelerationY <= 1) {
                this.accelerationY += 0.01;
            }
            this.y -= this.accelerationY;
        }

        if (this.y >= this.startY + 60) {
            this.moveY = false;
        }
        if (this.y <= this.startY - 60) {
            this.moveY = true;
        }
        this.countdown -= 0.01;
        this.x += -player.velocity.x * 1.25;
        this.startX += -player.velocity.x * 1.25;
        this.draw();
    }
}

function forFlower() {
    flowers.forEach((flower, index) => {
        let colide = collisionDetection(flower.x, flower.y, flower.r, flower.r, x, player.y, player.r, player.r);
        if (colide) {
            flowerFire.currentTime = 0;
            flowerFire.play();
            const startPos = flower.x;
            const angles = Math.atan2(player.y - flower.y, x - startPos);
            const velocity = {
                x: Math.cos(angles) * 5,
                y: Math.sin(angles) * 5
            };
            guidedMissiles.push(
                new GuidedMissile(startPos, flower.y, velocity.x, velocity.y, c.height * 0.01, false)
            );
            flowers.splice(index, 1);
        }

        if (flower.countdown <= 0) {
            if (flower.x > 0 - flower.r && flower.x < c.width + flower.r) {
                mineExplode.currentTime = 0;
                mineExplode.play();
                for (let i = 0; i < 10; i++) {
                    projectiles.push(new Projectile(flower.x, flower.y, 2));
                }
            }
            flowers.splice(index, 1);
        }
        flower.update();
    });
}