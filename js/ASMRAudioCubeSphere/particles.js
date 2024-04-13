class Particle {
    constructor(x, y, direction, color) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.color = color;
        this.center = { x: this.x, y: this.y };
        this.velocity = { x: Math.random() - 0.5, y: Math.random() - 0.5 };
        this.opacity = 1;
        this.lineWidth = 1;
        this.rotate = 0;
    }
    draw() {
        ctx.strokeStyle = this.color;
        ctx.save();
        ctx.translate(this.center.x, this.center.y);
        ctx.rotate(this.rotate);
        ctx.beginPath();
        ctx.arc(this.center.x - this.x, this.center.y - this.y, 1, 0, Math.PI * 2);
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        ctx.restore();
        ctx.globalAlpha = 0.4;
    }
    update() {

        if (this.lineWidth > 0.2) {
            this.lineWidth -= 0.01;
        }


        if (this.direction == 'R') {
            this.rotate += (Math.PI / 180) / 8;
        } else {
            this.rotate -= (Math.PI / 180) / 8;
        }


        this.x += this.velocity.x;
        this.y += this.velocity.y;


        this.opacity -= 0.001;

        this.draw();
    }
}

function forParticles() {
    particles.forEach((particle, index) => {
        if (particle.opacity < 0.1) {
            particles.splice(index, 1);
        }
        particle.update();
    });
}