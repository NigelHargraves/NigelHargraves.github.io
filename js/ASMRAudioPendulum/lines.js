class Line {
    constructor() {
        this.opacityLeft = 1;
        this.lineWidthLeft = 3;
        this.opacityRight = 1;
        this.lineWidthRight = 3;
        this.baseLineWidth = 5;
        this.colorLeft = 'white';
        this.colorRight = 'white';
    }
    draw() {
        //base line.
        ctx.strokeStyle = 'aquamarine';
        ctx.fillStyle = 'aquamarine';
        ctx.beginPath();
        ctx.moveTo(0, baseLine.y);
        ctx.lineTo(canvas.width, baseLine.y);
        ctx.lineWidth = this.baseLineWidth;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(baseLine.x, baseLine.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(canvas.width - baseLine.x, baseLine.y, 4, 0, Math.PI * 2);
        ctx.fill();

        //anchor point.
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(x, 0, 4, 0, Math.PI * 2);
        ctx.fill();

        //diagonal left.
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x / 4, y + y / 0.8);
        ctx.globalAlpha = this.opacityLeft;
        ctx.lineWidth = this.lineWidthLeft;
        ctx.strokeStyle = this.colorLeft;
        ctx.stroke();

        //diagonal right.
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(canvas.width - x / 4, y + y / 0.8);
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
        if (this.baseLineWidth > 0.4) {
            this.baseLineWidth -= 0.1;
        }
        this.draw();
    }
}