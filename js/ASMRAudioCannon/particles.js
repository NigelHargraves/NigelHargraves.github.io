class Particle {
    constructor(x, y, velocity) {
        this.x = x;
        this.y = y;

        this.velocity = velocity;
        this.opacity = 1;
        this.gravity = 0.00001;
        this.acceleration = 0;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 0.4, 0, Math.PI * 2);
        ctx.strokeStyle = 'white';
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        ctx.globalAlpha = 0.4;
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.velocity.y += this.acceleration;
        this.acceleration += this.gravity;
        if (this.y >= canvas.height) {
            this.velocity.y = -this.velocity.y;
        }
        this.opacity -= 0.002;
        this.draw();
    }
}

function forParticles() {
    particles.forEach((particle, index) => {
        if (particle.opacity <= 0.01) {
            particles.splice(index, 1);
        }
        particle.update();
    });
}