class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocity = { x: 0, y: 0 };
        this.aim = { x: Math.random() * canvas.width, y: Math.random() * canvas.height };
        this.angles = 0;
        this.opacity = 1;

    }
    draw() {
        ctx.strokeStyle = 'coral';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        ctx.globalAlpha = 0.4;
    }
    update() {

        this.x += this.velocity.x;
        this.y += this.velocity.y;

        this.angles = Math.atan2(this.aim.y - this.y, this.aim.x - this.x);

        this.velocity.x = Math.cos(this.angles) * 2;
        this.velocity.y = Math.sin(this.angles) * 2;

        this.opacity -= 0.01;

        this.draw();
    }
}

function forParticles() {
    particles.forEach((particle, index) => {
        if (particle.opacity < 0.01) {
            particles.splice(index, 1);
        }
        particle.update();
    });
}