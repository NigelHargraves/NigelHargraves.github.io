//GuidedMissile class.
class GuidedMissile {
    //construct GuidedMissile data.
    constructor(x, y, vX, vY, radius, dumb) {
            this.x = x;
            this.y = y;
            this.velocityX = vX;
            this.velocityY = vY;
            this.r = radius;
            this.dumb = dumb
            this.countDown = 25;
        }
        //draw GuidedMissile.
    draw() {
            if (!this.dumb) {
                ctx.drawImage(starMissile2, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2)
            } else {
                ctx.drawImage(starMissile, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2)
                if (this.x < c.width && this.x > 0 && this.y < c.height - (c.height * 0.05)) {
                    sparks.push(new Spark(this.x, this.y, Math.random() * 4));
                }
            }
        }
        //update GuidedMissile.
    update() {
        if (!this.dumb) {
            let startPos = this.x;
            let angles = Math.atan2(player.y - this.y, x - startPos);
            this.velocityX = Math.cos(angles) * 5;
            this.velocityY = Math.sin(angles) * 5;
            this.countDown -= 0.1;
        }
        this.x += -player.velocity.x + this.velocityX;
        this.y += this.velocityY;
        this.draw();
    }
}

function forGM() {
    guidedMissiles.forEach((gm, index) => {
        let colide = collisionDetection(gm.x, gm.y, gm.r + 20, gm.r + 20, x, player.y, player.r, player.r);
        if (colide) {
            mineExplode.currentTime = 0;
            mineExplode.play();
            for (let i = 0; i < 10; i++) {
                projectiles.push(new Projectile(gm.x, gm.y, 2));
            }
            guidedMissiles.splice(index, 1);
        }
        if (player.r <= 14) {
            playerAlive = false;
        }
        //guidedmissile count down hits 0 or hits floor or goes way off screen.
        if (gm.countDown <= 0 || gm.y >= c.height - c.width * 0.02 || gm.x <= -c.width || gm.x >= c.width * 2) {
            mineExplode.currentTime = 0;
            mineExplode.play();
            for (let i = 0; i < 10; i++) {
                projectiles.push(new Projectile(gm.x, gm.y, 2));
            }
            guidedMissiles.splice(index, 1);
        }
        gm.update();
    });
}