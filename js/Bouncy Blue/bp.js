//bonusPoints class.
class BonusPoints {
    //construct bonusPoints data.
    constructor(x, y, velocityX, velocityY, radius) {
            this.x = x;
            this.y = y;
            this.velocityX = velocityX;
            this.velocityY = velocityY;
            this.r = radius;
        }
        //draw bonusPoints.
    draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = "green";
            ctx.fill();
            ctx.font = "10px Arial";
            ctx.fillStyle = "yellow";
            ctx.fillText("p", this.x - 3, this.y + 2);
        }
        //update bonusPoints.
    update() {
        this.x += -player.velocity.x;
        this.y += this.velocityY;
        this.draw();
    }
}