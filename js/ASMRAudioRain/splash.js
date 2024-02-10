class Splash {
    constructor(x, y, color, velocity) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = velocity;
        this.opacity = 1;
        this.gravity = Math.random() / 100;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        ctx.strokeStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        ctx.globalAlpha = 0.4;
    }
    update() {
        if (this.x - 1 <= 0 || this.x + 1 >= canvas.width) {
            this.velocity.x = -this.velocity.x;
        }
        if (this.y >= canvas.height) {
            this.velocity.y = -this.velocity.y;
        }
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.velocity.y += this.gravity;
        this.opacity -= 0.002;
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