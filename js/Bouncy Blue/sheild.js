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
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.font = "10px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("S", this.x - 3, this.y + 2);
    }

    update() {
        this.countdown -= 0.01;
        this.x += -player.velocity.x;
        this.draw();
    }


}