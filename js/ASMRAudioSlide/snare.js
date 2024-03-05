class Snare {
    constructor() {
        this.x = rectangle.x + canvas.width / 2 + canvas.width / 10;
        this.y = canvas.height / 50;
        this.r = ((canvas.width / 2) / 12) / 4;
        this.velocity = 4;
        this.up = false;
        this.opacity = 0.4;
        this.lineWidth = 1;
        this.beatCount = 0;
        this.extraBeat = false;
        this.color = colors[15];
    }
    draw() {
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        if (this.extraBeat) {
            ctx.beginPath();
            ctx.arc(this.x, y - rectangle.space * 2, 4, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 0.4;
        ctx.lineWidth = 1;
    }
    update() {
        if (this.opacity > 0.4) {
            this.opacity -= 0.01;
        }
        if (this.lineWidth > 1) {
            this.lineWidth -= 0.1;
        }
        if (this.beatCount == 3) {
            this.extraBeat = true;
            this.beatCount = -1;
        }
        if (!this.up) {
            particles.push(new Particle(this.x, this.y, { x: (Math.random() - 0.5) / 2, y: (-this.velocity) / 4 }, 50, this.color, 0.2));
            if (this.y < y) {
                this.r += 0.1;
            } else {
                this.r -= 0.1;
            }
            this.y += this.velocity;
        } else {
            particles.push(new Particle(this.x, this.y, { x: (Math.random() - 0.5) / 2, y: (this.velocity) / 4 }, 50, this.color, 0.2));
            if (this.y < y) {
                this.r += 0.07;
            } else {
                this.r -= 0.07;
            }
            this.y -= this.velocity;
        }

        if (this.y >= y - 1 && this.y <= y + 1) {
            for (let i = 0; i < 20; i++) {
                particles.push(new Particle(this.x, this.y, { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 }, 50, this.color, 0.2));
            }
            snare.play();
            this.opacity = 1;
            this.lineWidth = 5;
        }

        if (this.extraBeat && this.y <= (y - rectangle.space * 2) + 1 && this.y >= (y - rectangle.space * 2) - 1) {
            this.opacity = 1;
            this.lineWidth = 5;
            for (let i = 0; i < 20; i++) {
                particles.push(new Particle(this.x, this.y, { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 }, 50, this.color, 0.2));
            }
            snare.currentTime = 0;
            snare.play();
        }

        if (this.y <= canvas.height / 50) {
            this.extraBeat = false;
            this.beatCount++;
            this.y = canvas.height / 50;
            this.r = ((canvas.width / 2) / 12) / 4;
            this.up = false;
        }
        if (this.y == canvas.height / 50 + canvas.width / 2) {
            this.beatCount++;
            this.r = ((canvas.width / 2) / 12) / 4;
            this.up = true;
        }
        this.draw();
    }
}