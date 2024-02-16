class BounceLine {
    constructor(x, y, top) {
        this.x = x;
        this.y = y;
        this.top = top;
        this.lineWidth = 15;
    }
    draw() {
        ctx.beginPath();
        if (this.top) {
            ctx.moveTo(this.x, this.y + this.lineWidth / 2);
            ctx.lineTo(this.x + rectangle.space, this.y + this.lineWidth / 2);
        } else {
            ctx.moveTo(this.x, this.y - this.lineWidth / 2);
            ctx.lineTo(this.x + rectangle.space, this.y - this.lineWidth / 2);
        }

        ctx.strokeStyle = 'white';
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        ctx.lineWidth = 1;
    }
    update() {
        this.lineWidth -= 0.1;
        this.draw();
    }
}

function forBounceLines() {
    bounceLines.forEach((bl, index) => {
        if (bl.lineWidth < 0.1) {
            bounceLines.splice(index, 1);
        }
        bl.update();
    });
}