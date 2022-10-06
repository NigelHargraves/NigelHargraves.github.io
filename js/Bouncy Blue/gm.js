//GuidedMissile class.
class GuidedMissile {
    //construct GuidedMissile data.
    constructor(x, y, velocityX, velocityY, radius) {
            this.x = x;
            this.y = y;
            this.velocityX = velocityX;
            this.velocityY = velocityY;
            this.r = radius;
        }
        //draw GuidedMissile.
    draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = "#FDFEFF";
            ctx.fill();
        }
        //update GuidedMissile.
    update() {
        this.x += -player.velocity.x + this.velocityX;
        this.y += this.velocityY;
        this.draw();
    }
}