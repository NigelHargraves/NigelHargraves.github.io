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
                ctx.globalAlpha = 0.2;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r + 2, 0, Math.PI * 2);
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.globalAlpha = 1;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.fillStyle = "yellow";
                ctx.fill();
            } else {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.fillStyle = "#FDFEFF";
                ctx.fill();
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