class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.velocity = { x: Math.random() - 0.5, y: Math.random() - 0.5 };
        this.opacity = 1;
        this.color = color;
    }
    draw() {
        ctx.save();
        ctx.translate(center.x, center.y);
        ctx.rotate(oval.rotation.x);
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 0.2, 0, Math.PI * 2);
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        ctx.globalAlpha = 0.4;
        ctx.restore();
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.opacity -= Math.random() * 0.005;
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