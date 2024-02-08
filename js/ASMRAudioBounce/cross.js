class Cross {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.opacity = 0.01
        this.end = false;
        this.velocity = { x: (Math.random() - 0.5) / 4, y: (Math.random() - 0.5) / 4 };
    }
    draw() {
        ctx.beginPath();
        ctx.moveTo(0, this.y);
        ctx.lineTo(canvas.width, this.y);
        ctx.moveTo(this.x, 0);
        ctx.lineTo(this.x, canvas.height);
        ctx.strokeStyle = "white";
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = 0.1;
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.2;
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        if (this.opacity >= 0.3) {
            this.end = true;
        }
        if (!this.end) {
            this.opacity += 0.0001;
        }
        if (this.end) {
            this.opacity -= 0.0001;
        }
        this.draw();
    }
}

function forCross() {
    crosses.forEach((cross, index) => {
        if (cross.opacity < 0.01) {
            crosses.splice(index, 1);
        }
        cross.update();
    });
}