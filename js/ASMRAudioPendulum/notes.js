class Note {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.r = radius;
        this.swing = this.x;
        this.angle = -0.57;
        this.velocity = 0;
        this.acceleration = 0;
        this.force = 0;
        this.opacity = 1;
        this.lineWidth = 3;
    }
    draw() {
        //draw pendulum arm.
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(x, 0);
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        //draw note.
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 0.4;
        ctx.lineWidth = 1;
    }
    update() {

        if (this.opacity > 0.4) {
            this.opacity -= 0.01;
        }
        if (this.lineWidth > 0.4) {
            this.lineWidth -= 0.01;
        }

        //calculate pendulum movement.
        this.force = gravity * Math.sin(this.angle);
        this.acceleration = (-1 * this.force) / this.r;
        this.velocity += this.acceleration;
        this.angle += this.velocity;
        this.x = this.r * Math.sin(this.angle) + x;
        this.y = this.r * Math.cos(this.angle);


        if (this.x <= this.swing + 0.1 && this.x >= this.swing - 0.1) {
            this.lineWidth = 3;
            this.opacity = 1;
            lines.lineWidthLeft = 3;
            lines.opacityLeft = 1;
        }
        if (this.x <= x + (x - this.swing) + 0.1 && this.x >= x + (x - this.swing) - 0.1) {
            this.lineWidth = 3;
            this.opacity = 1;
            lines.lineWidthRight = 3;
            lines.opacityRight = 1;
        }




        if (this.x <= this.swing + 0.1 && this.x >= this.swing - 0.1) {
            this.x = this.swing;
        }

        this.draw();
    }
}

function forNotes() {

    notes.forEach((note, index) => {
        note.update();
    });
}