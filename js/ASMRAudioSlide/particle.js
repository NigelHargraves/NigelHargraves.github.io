class Particle {
    constructor(x, y, velocity, endTime) {
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.endTime = endTime;
        this.opacity = 1;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 0.2, 0, Math.PI * 2);
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        ctx.globalAlpha = 0.4;
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.opacity -= Math.random() / this.endTime;
        this.draw();
    }
}

function forParticles() {
    particles.forEach((particle, index) => {
        if (particle.opacity < 0) {
            particles.splice(index, 1);
        }
        particle.update();
    });
}