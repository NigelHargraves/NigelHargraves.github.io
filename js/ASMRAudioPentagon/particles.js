class Particle {
    constructor(x, y, radius, color, translate, velocity) {
        this.x = x;
        this.y = y;
        this.r = radius;
        this.color = color;
        this.translate = { x: translate.x, y: translate.y };
        this.velocity = velocity;
        this.opacity = 1;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.save();
        ctx.translate(this.translate.x, this.translate.y);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 0.4;
        ctx.restore();
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.opacity -= 0.001;
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