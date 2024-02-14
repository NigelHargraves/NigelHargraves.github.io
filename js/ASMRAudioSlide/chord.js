class Chord {
    constructor() {
        this.x = rectangle.x;
        this.y = rectangle.y - canvas.height / 10;
        this.r = 20;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.stroke();
    }
    update() {

        this.draw();
    }
}