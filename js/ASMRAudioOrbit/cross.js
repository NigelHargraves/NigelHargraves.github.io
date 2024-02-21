class Cross {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.opacityTop = 1;
        this.opacityBottom = 0.4;
        this.opacityLeft = 0.4;
        this.opacityRight = 0.4;
        this.opacityCenter = 1;
        this.lineWidthTop = 3;
        this.lineWidthBottom = 0.2;
        this.lineWidthLeft = 0.2;
        this.lineWidthRight = 0.2;
        this.topLine = true;
        this.bottomLine = false;
        this.leftLine = false;
        this.rightLine = false;
    }
    draw() {
        ctx.strokeStyle = 'white';
        ctx.beginPath();
        ctx.arc(center.x, center.y, 10, 0, Math.PI * 2);
        ctx.globalAlpha = this.opacityCenter;
        ctx.fill();
        //top line.
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, 0);
        ctx.globalAlpha = this.opacityTop;
        ctx.lineWidth = this.lineWidthTop;
        ctx.stroke();
        ctx.globalAlpha = 0.4;
        ctx.lineWidth = 1;
        //bottom line.
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, canvas.height);
        ctx.globalAlpha = this.opacityBottom;
        ctx.lineWidth = this.lineWidthBottom;
        ctx.stroke();
        ctx.globalAlpha = 0.4;
        ctx.lineWidth = 1;
        //left line.
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(0, this.y);
        ctx.globalAlpha = this.opacityLeft;
        ctx.lineWidth = this.lineWidthLeft;
        ctx.stroke();
        ctx.globalAlpha = 0.4;
        ctx.lineWidth = 1;
        //right line.
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(canvas.width, this.y);
        ctx.globalAlpha = this.opacityRight;
        ctx.lineWidth = this.lineWidthRight;
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.4;
    }
    update() {
        if (this.opacityTop > 0.2) {
            this.opacityTop -= 0.001;
        }
        if (this.opacityBottom > 0.2) {
            this.opacityBottom -= 0.001;
        }
        if (this.opacityLeft > 0.2) {
            this.opacityLeft -= 0.001;
        }
        if (this.opacityRight > 0.2) {
            this.opacityRight -= 0.001;
        }
        if (this.opacityCenter >= 0.02) {
            this.opacityCenter -= 0.01;
        }

        if (this.lineWidthTop > 0.2) {
            this.lineWidthTop -= 0.05;
        }
        if (this.lineWidthBottom > 0.2) {
            this.lineWidthBottom -= 0.05;
        }
        if (this.lineWidthLeft > 0.2) {
            this.lineWidthLeft -= 0.05;
        }
        if (this.lineWidthRight > 0.2) {
            this.lineWidthRight -= 0.05;
        }
        this.draw();
    }
}