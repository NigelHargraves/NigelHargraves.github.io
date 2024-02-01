class Square {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.opacity = 0.2;
    }
    draw() {
        ctx.beginPath();
        ctx.rect(this.x - canvas.height / 4, this.y - canvas.height / 4, canvas.height / 2, canvas.height / 2);
        ctx.strokeStyle = "gold";
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        ctx.globalAlpha = 0.2;
    }
    update() {
        if (this.opacity > 0.2) {
            this.opacity -= 0.1;
        }
        this.draw();
    }
}