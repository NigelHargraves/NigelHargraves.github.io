//LevelGain class.
class LevelGain {
    //construct LevelGain data.
    constructor(x, y, velocityX, velocityY, radius) {
            this.x = x;
            this.y = y;
            this.velocityX = velocityX;
            this.velocityY = velocityY;
            this.r = radius;
            this.swingAngle = 0;
            this.changeAngle = true;
        }
        //draw LevelGain.
    draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.swingAngle * Math.PI / 180);
            ctx.drawImage(lOnParachute, 0 - this.r, 0 - this.r, this.r * 2, this.r * 3);
            ctx.restore();
        }
        //update LevelGain.
    update() {
        if (this.swingAngle <= -10) {
            this.changeAngle = true;
        }
        if (this.swingAngle >= 10) {
            this.changeAngle = false;
        }
        if (this.changeAngle) {
            this.swingAngle += 0.1;
        } else {
            this.swingAngle -= 0.1;
        }
        this.x += -player.velocity.x + this.velocityX;
        this.y += this.velocityY;
        this.draw();
    }
}