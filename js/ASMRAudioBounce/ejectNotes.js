class EjectNote {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 10;
        this.gravity = Math.random() / 100;
        this.velocity = { x: Math.random() - 0.5, y: -Math.random() * 2 };
        this.friction = 0.001;
        this.lineWidth = 1;
        this.opacity = 1;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = "coral";
        ctx.lineWidth = this.lineWidth;
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.2;
    }
    update() {
        if (this.opacity > 0.2) {
            this.opacity -= 0.01;
        }

        if (this.lineWidth > 1) {
            this.lineWidth -= 0.01;
        }

        this.x += this.velocity.x;
        this.y += this.velocity.y;

        this.velocity.y += this.gravity;
        if (this.velocity.y < 0) {
            this.velocity.y += this.friction;
        }

        if (this.y + this.r >= canvas.height) {
            this.velocity.y = -this.velocity.y;
        }



        this.draw();
    }
}

function forEjectNotes() {
    ejectNotes.forEach((ejectNote, index) => {

        ejectNote.update();
    });
}