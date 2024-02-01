class Cross {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.opacity = 1;
    }
    draw() {

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, 0);
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, canvas.height);
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(0, this.y);
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(canvas.width, this.y);
        ctx.strokeStyle = "yellow";
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        ctx.globalAlpha = 1;
    }
    update() {
        if (this.opacity > 0.2) {
            this.opacity -= 0.01;
        }
        this.draw();
    }
}