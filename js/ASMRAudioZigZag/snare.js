class Snare {
    constructor() {
        this.expand = 1;
        this.opacity = 1;
    }
    draw() {
        ctx.beginPath();
        ctx.rect((pCenter - cTop) - this.expand, ((cBottom - cTop) - cTop / 1.5) - this.expand, (cTop * 2) + this.expand * 2, (cBottom - (cBottom - cTop / 1.5)) + this.expand * 2);
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'plum';
        ctx.stroke();
        ctx.globalAlpha = 0.2;
    }
    update() {
        this.expand += 1;
        if (this.opacity > 0.02) {
            this.opacity -= 0.02;
        }
        this.draw();
    }
}

function forSnareRects() {
    snareRects.forEach((sr, index) => {
        if (sr.opacity <= 0.02) {
            snareRects.splice(index, 1);
        }
        sr.update();
    });
}