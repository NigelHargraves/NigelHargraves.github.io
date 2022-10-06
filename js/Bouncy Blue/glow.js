//glow class.
class Glow {
    //construct glow data.
    constructor(x, y, radius, alpha) {
            this.x = x;
            this.y = y;
            this.r = radius;
            this.alpha = alpha;
        }
        //draw glow.
    draw() {
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r + 2, 0, Math.PI * 2);
            ctx.strokeStyle = "white";
            ctx.stroke();
            ctx.globalAlpha = 1;
        }
        //update glow.
    update() {
        this.alpha -= 0.1;
        this.x = x;
        this.y = player.y;
        this.draw();
    }
}