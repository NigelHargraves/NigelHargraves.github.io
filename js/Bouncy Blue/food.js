//Food class.
class Food {
    //construct food data.
    constructor(x, y, velocityX, velocityY, radius) {
            this.x = x;
            this.y = y;
            this.velocityX = velocityX;
            this.velocityY = velocityY;
            this.r = radius;
        }
        //draw food.
    draw() {
            ctx.drawImage(blueberry, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
        }
        //update food.
    update() {
        this.x += -player.velocity.x + this.velocityX;
        this.y += this.velocityY;
        this.draw();
    }
}