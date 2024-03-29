class Circle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.opacity = 1;
        this.r = canvas.height / 4;
        this.lineWidth = 5;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2);
        ctx.fillStyle = "aqua";
        ctx.fill();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = "aqua";
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(this.x, 0);
        ctx.lineTo(this.x, canvas.height);
        ctx.moveTo(0, this.y - this.r);
        ctx.lineTo(canvas.width, this.y - this.r);
        ctx.stroke();
        ctx.lineWidth = 0.1;
        ctx.globalAlpha = 0.2;
    }
    update() {
        if (this.opacity > 0.2) {
            this.opacity -= 0.01;
        }
        if (this.lineWidth > 0.1) {
            this.lineWidth -= 0.01;
        }
        this.draw();
    }
}