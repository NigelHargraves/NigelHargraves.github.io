//create explode class.
class Explode {
    //construct explode data.
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.s = size;
    }

    //draw explode.
    draw() {

            ctx.drawImage(explode, this.x - this.s / 2, this.y - this.s / 2, this.s, this.s);

        }
        //update explode.
    update() {
        this.s += 10;
        this.x += -player.velocity.x * 1.25;
        this.draw();

    }
}