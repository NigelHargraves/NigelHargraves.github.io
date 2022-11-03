//create sheild class.
class Sheild {
    //construct sheild data.
    constructor(x, y, radius, countdown) {
        this.x = x;
        this.y = y;
        this.r = radius;
        this.countdown = countdown;
    }
    draw() {
        ctx.drawImage(sheild, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
    }

    update() {
        this.countdown -= 0.01;
        this.x += -player.velocity.x;
        this.draw();
    }


}