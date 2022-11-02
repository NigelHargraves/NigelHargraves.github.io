//GuidedMissile class.
class GuidedMissile {
    //construct GuidedMissile data.
    constructor(x, y, vX, vY, radius, dumb) {
            this.x = x;
            this.y = y;
            this.velocityX = vX;
            this.velocityY = vY;
            this.r = radius;
            this.dumb = dumb
            this.countdown = 25;
        }
        //draw GuidedMissile.
    draw() {
            if (!this.dumb) {
                ctx.drawImage(starMissile2, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2)
            } else {
                ctx.drawImage(starMissile, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2)
            }
        }
        //update GuidedMissile.
    update() {
        this.countdown -= 0.02;
        if (!this.dumb) {
            let startPos = this.x;
            let angles = Math.atan2(player.y - this.y, x - startPos);
            this.velocityX = Math.cos(angles) * 5;
            this.velocityY = Math.sin(angles) * 5;
        }

        this.x += -player.velocity.x + this.velocityX;
        this.y += this.velocityY;


        this.draw();
    }
}