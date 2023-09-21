//create projectile class.
class Projectile {
    //construct projectile data.
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.velocityX = (Math.random() - 0.5) * 10;
        this.velocityY = (Math.random() - 0.5) * 10;
        this.r = radius;
        this.alpha = 1;
    }

    //draw projectile.
    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.drawImage(starMissile2, this.x - this.r * 4, this.y - this.r * 4, this.r * 8, this.r * 8)
        ctx.restore();
    }

    //update projectile.
    update() {
        this.alpha -= 0.005;
        this.x += -player.velocity.x + this.velocityX;
        this.y += this.velocityY;
        this.draw();
    }
}