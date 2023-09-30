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

function forProjectile() {
    projectiles.forEach((pro, index) => {
        let colide = collisionDetection(pro.x, pro.y, pro.r, pro.r, x, player.y, player.r, player.r);
        if (colide) {
            if (!playerSheild) {
                hit.currentTime = 0;
                hit.play();
                //reduce player size/reset variables.
                if (player.r > 20) {
                    player.r = 20;
                } else {
                    player.r -= 2;
                }
                splats.push(new Splat(x, player.y, x1, y1, ang, player.r));
            } else {
                let points = Math.trunc(pro.x / 10 + (c.height - pro.y) / 10);
                score += points;
                if (player.y > c.height / 2) {
                    texts.push(
                        new Text(x, player.y, Math.random() - 0.5, -c.height * 0.001, points, "bold 20px Arial", "yellow", 1, false)
                    );
                    texts.push(
                        new Text(x, player.y, Math.random() - 0.5, -c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false)
                    );
                } else {
                    texts.push(
                        new Text(x, player.y, Math.random() - 0.5, c.height * 0.001, points, "bold 20px Arial", "yellow", 1, false)
                    );
                    texts.push(
                        new Text(x, player.y, Math.random() - 0.5, c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false)
                    );
                }
            }
            reset();
            projectiles.splice(index, 1);
        }
        if (player.r <= 14) {
            playerAlive = false;
        }
        if (pro.alpha <= 0 || pro.y > c.height) {
            projectiles.splice(index, 1);
        }
        pro.update();
    });
}