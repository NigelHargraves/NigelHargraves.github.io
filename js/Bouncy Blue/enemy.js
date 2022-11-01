//Enemy class.
class Enemy {
    //construct enemy data.
    constructor(x, y, velocityX, velocityY, radius) {
            this.x = x;
            this.y = y;
            this.velocityX = velocityX;
            this.velocityY = velocityY;
            this.r = radius;
        }
        //draw enemy.
    draw() {
            ctx.drawImage(fangs, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
        }
        //update enemy.
    update() {
        this.x += -player.velocity.x;
        this.y += this.velocityY;
        this.draw();
    }
}