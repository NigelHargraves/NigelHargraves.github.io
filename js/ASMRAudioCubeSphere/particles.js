class Particle {
    constructor(x, y, coordinate) {
        this.x = x;
        this.y = y;
        this.coordiate = coordinate;
        this.velocity = { x: 0, y: 0 };
        this.aim = { x: Math.random() * canvas.width, y: Math.random() * canvas.height };
        this.angles = 0;
        this.opacity = 0.1;
        this.brighten = true;
        this.time = 40;
        this.zigzagTimer = this.time;
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
        this.velocity.x = Math.cos(this.angles) * 0.5;
        this.velocity.y = Math.sin(this.angles) * 0.5;

        if (this.opacity < 1 && this.brighten) {
            this.opacity += 0.008;
        } else {
            this.opacity -= 0.001;
            this.brighten = false;
        }

        if (this.zigzagTimer <= 0) {
            if (this.coordiate == 'x') {
                this.velocity.x = -this.velocity.x;
                if (this.velocity.y < 0) {
                    this.velocity.y -= 0.01;
                } else {
                    this.velocity.y += 0.01;
                }
            } else {
                this.velocity.y = -this.velocity.y;
                if (this.velocity.x < 0) {
                    this.velocity.x -= 0.01;
                } else {
                    this.velocity.x += 0.01;
                }
            }
            this.time -= 5;
            this.zigzagTimer = this.time;
        }

        this.zigzagTimer -= 1;



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