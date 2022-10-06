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
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r + 2, 0, Math.PI * 2);
            ctx.strokeStyle = "#FDFEFF";
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = "red";
            ctx.fill();
        }
        //update enemy.
    update() {
        this.x += -player.velocity.x;
        this.y += this.velocityY;
        this.draw();
    }
}