//create wandering mine class.
class WanderingMine {
    //construct wandering mine data.
    constructor(x, y, radius, velocity, countdown) {
        this.x = x;
        this.y = y;
        this.r = radius;
        this.v = velocity;
        this.countdown = countdown;
        this.droneMove = 0;
    }

    //draw wandering mine.
    draw() {
            ctx.drawImage(drone, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
        }
        //update wandering mine.
    update() {

        this.x += -player.velocity.x + this.v.x;
        this.y += this.v.y;
        this.droneMove = Math.random();
        if (this.droneMove > 0.9) {
            this.v.x = (Math.random() - 0.5) * 10;
            this.v.y = (Math.random() - 0.5) * 10;
        }
        this.countdown -= 0.01;
        this.draw();
    }

}