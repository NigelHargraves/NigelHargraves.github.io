class Tail {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.opacity = 1;
        this.velocity = { x: Math.random() - 0.5, y: Math.random() - 0.5 };

    }
    draw() {
        ctx.save();
        ctx.translate(square.x, square.y);
        ctx.rotate(square.rotateAngle);
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x - canvas.width / 2, this.y - canvas.height / 2, 1, 0, Math.PI * 2);
        ctx.strokeStyle = "silver";
        ctx.stroke();
        ctx.globalAlpha = 0.2;
        ctx.restore();
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        if (this.opacity > 0) {
            this.opacity -= 0.001;
        }
        this.draw();
    }
}

function forTails() {
    tails.forEach((tail, index) => {
        if (tail.opacity <= 0.01) {
            tails.splice(index, 1);
        }
        tail.update();
    });
}