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
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.font = "10px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("K", this.x - 3, this.y + 2);
    }

    //update kill.
    update() {
        this.countdown -= 0.01;
        this.x += -player.velocity.x;
        this.draw();
    }
}