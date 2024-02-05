class WhiteStar {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.opacity = 1;
        this.velocity = { x: (Math.random() - 0.5) / 10, y: (Math.random() - 0.5) / 10 };
    }
    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.globalApha = 1;
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.opacity -= 0.0001;
        this.draw();
    }
}

function forWhiteStars() {
    whiteStars.forEach((ws, index) => {
        if (ws.opacity <= 0.05) {
            whiteStars.splice(index, 1);
        }
        ws.update();
    });
}