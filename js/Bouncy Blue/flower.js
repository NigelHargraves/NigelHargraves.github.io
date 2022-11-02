//flower class.
class Flower {
    //construct flower data.
    constructor(x, y, radius, countdown) {
            this.x = x;
            this.y = y;
            this.r = radius;
            this.x1 = 0;
            this.y1 = 0;
            this.ang = 0;
            this.countdown = countdown;


        }
        //draw flower.
    draw() {
            ctx.drawImage(flowerStalk, this.x - this.r, this.y, this.r * 2, 200);
            ctx.drawImage(sunflower, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
        }
        //update flower.
    update() {
        this.countdown -= 0.01;
        this.x += -player.velocity.x * 1.25;
        this.draw();
    }
}