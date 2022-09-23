class Particle {
    //construct particle data.
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.r = radius;
        this.c = color;
        this.v = velocity;
        this.alpha = 1;
    }

    //draw particle.
    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.c;
        ctx.fill();
        ctx.restore();
    }

    //update particle.
    update() {
        this.v.x *= friction;
        this.v.y *= friction;
        this.v.y += gravity * 4;
        this.x += this.v.x;
        this.y += this.v.y;
        this.alpha -= 0.01;
        this.draw();
    }
}