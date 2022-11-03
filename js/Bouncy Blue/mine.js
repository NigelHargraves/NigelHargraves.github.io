//mine class.
class Mine {
    //construct mine data.
    constructor(x, y, radius, countdown) {
            this.x = x;
            this.y = y;
            this.r = radius;
            this.countdown = countdown;
            this.alpha = 0;
        }
        //draw mine.
    draw() {
            ctx.drawImage(landmine, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
        }
        //update mine.
    update() {

        this.countdown -= 0.01;
        this.x += -player.velocity.x * 1.25;
        this.draw();
    }
}