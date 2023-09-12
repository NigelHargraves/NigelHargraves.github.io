//create bomb class.
class Bomb {
    //construct bomb data.
    constructor(x, y, velocity) {
        this.x = x;
        this.y = y;
        this.v = velocity;
    }

    //draw bomb.
    draw() {

            ctx.drawImage(bombImage, this.x, this.y, 20, 40);

        }
        //update bomb.
    update() {
        gravity = 0.03;
        this.v += gravity;
        this.y += this.v;
        this.x += -player.velocity.x * 1.25;
        this.draw();
        if (controlLevel < 2) {
            gravity = 0.03;
        } else {
            gravity = 0;
        }
    }
}