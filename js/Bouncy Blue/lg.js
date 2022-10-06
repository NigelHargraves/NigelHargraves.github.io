//LevelGain class.
class LevelGain {
    //construct LevelGain data.
    constructor(x, y, velocityX, velocityY, radius) {
            this.x = x;
            this.y = y;
            this.velocityX = velocityX;
            this.velocityY = velocityY;
            this.r = radius;
        }
        //draw LevelGain.
    draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = "yellow";
            ctx.fill();
            ctx.font = "10px Arial";
            ctx.fillStyle = "black";
            ctx.fillText("L", this.x - 3, this.y + 2);
        }
        //update LevelGain.
    update() {
        this.x += -player.velocity.x + this.velocityX;
        this.y += this.velocityY;
        this.draw();
    }
}