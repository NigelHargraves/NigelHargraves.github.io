class BassCircle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 1;
        this.opacity = 1;
    }
    draw() {
        ctx.strokeStyle = 'Turquoise';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.globalAlpha = 0.2;
    }
    update() {
        this.r += 1;
        if (this.opacity > 0.02) {
            this.opacity -= 0.01;
        }
        this.draw();
    }
}

function forBassCircles() {
    bassCircles.forEach((bs, index) => {
        if (bs.opacity <= 0.02) {
            bassCircles.splice(index, 1);
        }
        bs.update();
    });
}