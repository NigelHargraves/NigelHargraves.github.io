//create bloodSplat class.
class BloodSplat {
    //construct bloodSplat data.
    constructor(x, y, radius, velocity) {
        this.x = x;
        this.y = y;
        this.r = radius;
        this.v = velocity;

    }

    //draw bloodSplat.
    draw() {

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = "yellow";
        ctx.fill();

    }

    //update bloodSplat.
    update() {
        gravity = 0.03;
        friction = 0.99;
        this.v.x *= friction;
        this.v.y *= friction;
        this.v.y += gravity * 4;
        this.x += this.v.x;
        this.x += -player.velocity.x;
        this.y += this.v.y;

        this.draw();
        if (controlLevel < 2) {
            gravity = 0.03;
        } else {
            gravity = 0;
        }

        friction = 0.002;
    }
}