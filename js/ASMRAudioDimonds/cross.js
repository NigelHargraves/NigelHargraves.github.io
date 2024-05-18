class Cross {
    constructor() {
        this.x = center.x;
        this.y = center.y;
        this.leftLineWidth = 3;
        this.rightLineWidth = 3;
        this.bottomLineWidth = 3;
        this.topLineWidth = 3;
    }
    draw() {
        //right line.
        ctx.lineWidth = this.rightLineWidth;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + circles[7].r, this.y);
        ctx.stroke();

        //bottom line.
        ctx.lineWidth = this.bottomLineWidth;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + circles[7].r);
        ctx.stroke();

        //left line.
        ctx.lineWidth = this.leftLineWidth;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - circles[7].r, this.y);
        ctx.stroke();

        //top line.
        ctx.lineWidth = this.topLineWidth;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y - circles[7].r);
        ctx.stroke();
    }
    update() {
        if (this.rightLineWidth > 0.02) {
            this.rightLineWidth -= 0.1;
        }
        if (this.leftLineWidth > 0.02) {
            this.leftLineWidth -= 0.1;
        }
        if (this.bottomLineWidth > 0.02) {
            this.bottomLineWidth -= 0.1;
        }
        if (this.topLineWidth > 0.02) {
            this.topLineWidth -= 0.1;
        }
        this.draw();
    }
}