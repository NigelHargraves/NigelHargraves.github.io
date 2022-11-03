//create kill class.
class Kill {
    //construct kill data.
    constructor(x, y, radius, countdown) {
        this.x = x;
        this.y = y;
        this.r = radius;
        this.countdown = countdown;
    }

    //draw kill.
    draw() {
            ctx.drawImage(lightningBolt, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
        }
        //update kill.
    update() {
        this.countdown -= 0.01;
        this.x += -player.velocity.x;
        this.draw();
    }
}