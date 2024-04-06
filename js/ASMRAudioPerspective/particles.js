class Particle {
    constructor(x, y, color, velocity) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = velocity;
        this.opacity = 1;
        this.gravity = 0.01;
    }
    draw() {
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 0.6, 0, Math.PI * 2);
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        ctx.globalAlpha = 0.4;
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.velocity.y += this.gravity / 10;
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