//create Particle class.
class Particle {
    //construct Particle data.
    constructor(x, y, radius, velocity, color, alpha) {
        this.x = x;
        this.y = y;
        this.r = radius;
        this.velX = velocity.x;
        this.velY = velocity.y;
        this.c = color;
        this.a = alpha;
    }

    draw() {
        ctx.save();
        ctx.shadowBlur = 20;
        ctx.shadowColor = "grey";
        ctx.globalAlpha = this.a;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.c;
        ctx.fill();
        ctx.restore();
    }

    //update Particle.
    update() {
        this.x += this.velX + -player.velocity.x;
        this.y += this.velY;
        this.a -= 0.01;
        this.draw();
    }
}