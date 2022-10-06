//mine class.
class Mine {
    //construct mine data.
    constructor(x, y, radius, countdown) {
            this.x = x;
            this.y = y;
            this.r = radius;
            this.countdown = countdown;
            this.alpha = 0;
            this.glow = false;
        }
        //draw mine.
    draw() {
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.globalAlpha = 1;
        }
        //update mine.
    update() {
        if (this.alpha <= 0.2) {
            this.glow = true;
        }
        if (this.alpha >= 1) {
            this.glow = false;
        }
        if (this.glow) {
            this.alpha += 0.01;
        } else {
            this.alpha -= 0.01;
        }
        this.countdown -= 0.01;
        this.x += -player.velocity.x * 1.25;
        this.draw();
    }
}