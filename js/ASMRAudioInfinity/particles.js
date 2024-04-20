class Particle {
    constructor(x, y, color, velocity) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = velocity;
        this.opacity = 1;
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
        this.opacity -= 0.002;
        this.draw();
    }
}

function forParticles() {
    particles.forEach((particle, index) => {
        if (particle.opacity < 0.02) {
            particles.splice(index, 1);
        }
        particle.update();
    });
}