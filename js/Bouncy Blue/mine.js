//mine class.
class Mine {
    //construct mine data.
    constructor(x, y, radius, countdown) {
            this.x = x;
            this.y = y;
            this.r = radius;
            this.countdown = countdown;
            this.alpha = 0;
        }
        //draw mine.
    draw() {
            ctx.drawImage(landmine, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
        }
        //update mine.
    update() {

        this.countdown -= 0.01;
        this.x += -player.velocity.x * 1.25;
        this.draw();
    }
}

function forMine() {
    mines.forEach((mine, index) => {
        let colide = collisionDetection(mine.x, mine.y, mine.r, x, player.y, player.r);
        if (colide) {
            if (!playerSheild) {
                playerAlive = false;
            } else {
                sheildHit.currentTime = 0;
                sheildHit.play();
                let points = Math.trunc(mine.x / 10 + (c.height - mine.y) / 10);
                score += points;
                texts.push(
                    new Text(x, player.y, Math.random() - 0.5, -c.height * 0.001, points, "bold 20px Arial", "yellow", 1, false)
                );
                texts.push(
                    new Text(x, player.y, Math.random() - 0.5, -c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false)
                );
            }
            mines.splice(index, 1);
        }
        //countdown = 0
        if (mine.countdown <= 0) {
            if (mine.x > 0 - mine.r && mine.x < c.width + mine.r) {
                mineExplode.currentTime = 0;
                mineExplode.play();
                for (let i = 0; i < 10; i++) {
                    projectiles.push(new Projectile(mine.x, mine.y, 2));
                }
            }
            for (i = 0; i < 30; i++) {
                deaths.push(
                    new Death(mine.x, mine.y - 30, Math.random() * 2, "red", {
                        x: (Math.random() - 0.5) * 8,
                        y: (Math.random() - 0.5) * 8
                    })
                );
            }
            mines.splice(index, 1);
        }
        mine.update();
    });
}