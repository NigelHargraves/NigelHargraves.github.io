//create explode class.
class Explode {
    //construct explode data.
    constructor(x, y, size, alpha) {
        this.x = x;
        this.y = y;
        this.s = size;
        this.alpha = alpha;
    }

    //draw explode.
    draw() {
            ctx.globalAlpha = this.alpha;
            ctx.drawImage(explode, this.x - this.s / 2, this.y - this.s / 2, this.s, this.s);
            ctx.globalAlpha = 1;
        }
        //update explode.
    update() {
        if (this.s < 100) {
            this.s += 10;
        } else if (this.s < 200) {
            this.s += 8;
        } else if (this.s < 300) {
            this.s += 6;
        } else if (this.s < 400) {
            this.s += 4;
        }

        if (this.s >= 100 && this.alpha > 0) {
            this.alpha -= 0.02;
        }
        this.x += -player.velocity.x * 1.25;
        this.draw();

    }
}