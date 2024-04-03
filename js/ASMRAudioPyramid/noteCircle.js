class NoteCircle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.r = 1;
        this.opacity = 1;
    }
    draw() {
        ctx.strokeStyle = this.color;
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

function forNoteCircles() {
    noteCircles.forEach((nc, index) => {
        if (nc.opacity <= 0.02) {
            noteCircles.splice(index, 1);
        }
        nc.update();
    });
}