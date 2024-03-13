class Particle {
    constructor(x, y, velocity, endTime, color, radius) {
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.endTime = endTime;
        this.color = color;
        this.r = radius;
        this.opacity = 1;
    }
    draw() {
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        ctx.globalAlpha = 0.4;
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.opacity -= 0.02;
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