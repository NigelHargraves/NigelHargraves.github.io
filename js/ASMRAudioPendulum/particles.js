class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocity = { x: Math.random() - 0.5, y: Math.random() - 0.5 };
        this.opacity = 1;
        this.color = color[Math.floor(Math.random() * 24)];
    }
    draw() {
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 0.2, 0, Math.PI * 2);
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        ctx.globalAlpha = 0.4;
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.velocity.y += gravity / 10;
        this.opacity -= 0.001;
        this.draw();
    }
}

function forParticles() {
    particles.forEach((particle, index) => {

        if (particle.opacity < 0.2) {
            particles.splice(index, 1);
        }
        particle.update();
    });
}