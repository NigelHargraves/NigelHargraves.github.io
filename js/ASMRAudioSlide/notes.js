class Note {
    constructor(x, y, velocity) {
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.r = ((canvas.width / 2) / 12) / 4;
        this.up = false;
        this.opacity = 1;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        ctx.globalAlpha = 0.4;
    }
    update() {
        if (this.opacity > 0.4) {
            this.opacity -= 0.01;
        }
        if (this.up) {
            this.y -= this.velocity;
        } else {
            this.y += this.velocity;
        }
        if (this.y >= rectangle.y + canvas.height / 2) {
            this.opacity = 1;
            this.up = true;
        }
        if (this.y <= rectangle.y) {
            this.opacity = 1;
            this.up = false;
        }
        this.draw();
    }
}

function forNotes() {
    notes.forEach((note, index) => {

        note.update();
    });
}