class Hat {
    constructor() {
        this.x = rectangle.x - canvas.width / 10;
        this.y = canvas.height / 50 + canvas.width / 2;
        this.r = ((canvas.width / 2) / 12) / 4;
        this.velocity = 4;
        this.up = true;
        this.opacity = 0.4;
        this.lineWidth = 1;
        this.color = colors[14];
    }
    draw() {
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = this.lineWidth;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.stroke();
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
        if (!this.up) {
            for (let i = canvas.height / 50; i <= canvas.height / 50 + canvas.width / 2; i += (canvas.height / 50 + canvas.width / 2) / 6) {
                if (this.y >= i - 2 && this.y <= i + 2) {
                    for (let j = 0; j < 10; j++) {
                        particles.push(new Particle(this.x, this.y, { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 }, 50, this.color, 0.2));
                    }
                    hat.play();
                    this.opacity = 1;
                    this.lineWidth = 5;
                }

            }
        } else {
            for (let i = canvas.height / 50 + (canvas.height / 50 + canvas.width / 2) / 6; i < canvas.height / 50 + canvas.width / 2; i += (canvas.height / 50 + canvas.width / 2) / 6) {
                if (this.y >= (i - 12) - 2 && this.y <= (i - 12) + 2) {
                    for (let j = 0; j < 10; j++) {
                        particles.push(new Particle(this.x, this.y + 12, { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 }, 50, this.color, 0.2));
                    }
                    hat.play();
                    this.opacity = 1;
                    this.lineWidth = 5;
                }

            }
        }

        if (this.y <= canvas.height / 50) {
            this.y = canvas.height / 50;
            this.r = ((canvas.width / 2) / 12) / 4;
            this.up = false;
        }
        if (this.y >= canvas.height / 50 + canvas.width / 2) {
            this.y = canvas.height / 50 + canvas.width / 2;
            this.r = ((canvas.width / 2) / 12) / 4;
            this.up = true;
        }
        this.draw();
    }
}