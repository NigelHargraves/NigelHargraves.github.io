//Enemy class.
class Enemy {
    //construct enemy data.
    constructor(x, y, velocityX, velocityY, radius, beeDirection) {
            this.x = x;
            this.y = y;
            this.velocityX = velocityX;
            this.velocityY = velocityY;
            this.r = radius;
            this.beeDirection = beeDirection;
        }
        //draw enemy.
    draw() {
            if (this.beeDirection) {
                ctx.drawImage(beeRight, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
            } else {
                ctx.drawImage(beeLeft, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
            }

        }
        //update enemy.
    update() {
        let changeDirection = Math.random();
        if (changeDirection > 0.99) {
            if (this.beeDirection) {
                this.beeDirection = false;
            } else {
                this.beeDirection = true;
            }
        }

        if (this.beeDirection) {
            this.x += 0.4;
        } else {
            this.x -= 0.4;
        }

        this.x += -player.velocity.x;
        this.y += this.velocityY;
        this.draw();
    }
}