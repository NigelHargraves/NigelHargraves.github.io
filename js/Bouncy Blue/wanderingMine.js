//create wandering mine class.
class WanderingMine {
    //construct wandering mine data.
    constructor(x, y, radius, velocity, countdown) {
        this.x = x;
        this.y = y;
        this.r = radius;
        this.v = velocity;
        this.alpha = 0;
        this.glow = false;
        this.countdown = countdown;
    }

    //draw wandering mine.
    draw() {
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.globalAlpha = 1;
        }
        //update wandering mine.
    update() {
        if (this.alpha <= 0.7) {
            this.glow = true;
        }
        if (this.alpha >= 1) {
            this.glow = false;
        }
        if (this.glow) {
            this.alpha += 0.02;
        } else {
            this.alpha -= 0.02;
        }
        this.x += -player.velocity.x + this.v.x;
        this.y += this.v.y;
        this.v.x = (Math.random() - 0.5) * 20;
        this.v.y = (Math.random() - 0.5) * 20;
        this.countdown -= 0.01;
        this.draw();
    }

}