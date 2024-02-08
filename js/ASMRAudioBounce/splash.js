class Splash {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.opacity = 1;
        this.velocity = { x: Math.random() - 0.5, y: Math.random() - 1 };
        this.gravity = Math.random() / 1000;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        ctx.strokeStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        ctx.globalAlpha = 0.2;
    }
    update() {
        if (this.x - 1 <= 0 || this.x + 1 >= canvas.width) {
            this.velocity.x = -this.velocity.x;
        }
        if (this.y + 1 >= canvas.height) {
            this.velocity.y = -this.velocity.y;
        }
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.velocity.y += this.gravity;
        this.opacity -= 0.001;
        this.draw();
    }
}

function forSplashes() {
    splashes.forEach((splash, index) => {
        if (splash.opacity < 0.05) {
            splashes.splice(index, 1);
        }
        splash.update();
    });
}