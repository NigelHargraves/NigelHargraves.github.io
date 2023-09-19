//bonusPoints class.
class BonusPoints {
    //construct bonusPoints data.
    constructor(x, y, velocityX, velocityY, radius) {
            this.x = x;
            this.y = y;
            this.velocityX = velocityX;
            this.velocityY = velocityY;
            this.r = radius;
            this.swingAngle = 0;
            this.changeAngle = true;
        }
        //draw bonusPoints.
    draw() {

            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.swingAngle * Math.PI / 180);
            ctx.drawImage(pOnParachute, 0 - this.r, 0 - this.r, this.r * 2, this.r * 3);
            ctx.restore();

        }
        //update bonusPoints.
    update() {
        if (this.swingAngle <= -10) {
            this.changeAngle = true;
        }
        if (this.swingAngle >= 10) {
            this.changeAngle = false;
        }
        if (this.changeAngle) {
            this.swingAngle += Math.random() / 5;
        } else {
            this.swingAngle -= Math.random() / 5;
        }
        this.x += -player.velocity.x;
        this.y += this.velocityY;
        this.draw();
    }
}