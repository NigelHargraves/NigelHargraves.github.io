//create projectile class.
class Projectile {
    //construct projectile data.
    constructor(x, y, radius, velocity, countdown, color) {
        this.x = x;
        this.y = y;
        this.r = radius;
        this.v = velocity;
        this.countdown = countdown;
        this.color = color
    }

    //draw projectile.
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    //update projectile.
    update() {
        this.countdown -= 0.1;
        this.x += -player.velocity.x + this.v.x;
        this.y += this.v.y;
        this.draw();
    }
}