class Line {
    constructor() {
        this.opacityLeft = 1;
        this.lineWidthLeft = 3;
        this.opacityRight = 1;
        this.lineWidthRight = 3;
        this.colorLeft = 'white';
        this.colorRight = 'white';
    }
    draw() {
        ctx.strokeStyle = 'white';
        ctx.beginPath();
        ctx.arc(x, 0, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x / 2, y + y / 2);
        ctx.globalAlpha = this.opacityLeft;
        ctx.lineWidth = this.lineWidthLeft;
        ctx.strokeStyle = this.colorLeft;
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + x / 2, y + y / 2);
        ctx.globalAlpha = this.opacityRight;
        ctx.lineWidth = this.lineWidthRight;
        ctx.strokeStyle = this.colorRight;
        ctx.stroke();
        ctx.globalAlpha = 0.4;
        ctx.lineWidth = 1;
    }
    update() {
        if (this.opacityLeft > 0.4) {
            this.opacityLeft -= 0.01;
        }
        if (this.lineWidthLeft > 0.4) {
            this.lineWidthLeft -= 0.1;
        }
        if (this.opacityRight > 0.4) {
            this.opacityRight -= 0.01;
        }
        if (this.lineWidthRight > 0.4) {
            this.lineWidthRight -= 0.1;
        }
        this.draw();
    }
}