//LevelGain class.
class LevelGain {
    //construct LevelGain data.
    constructor(x, y, velocityX, velocityY, radius) {
            this.x = x;
            this.y = y;
            this.velocityX = velocityX;
            this.velocityY = velocityY;
            this.r = radius;
            this.swingAngle = 0;
            this.changeAngle = true;
        }
        //draw LevelGain.
    draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.swingAngle * Math.PI / 180);
            ctx.drawImage(lOnParachute, 0 - this.r, 0 - this.r, this.r * 2, this.r * 3);
            ctx.restore();
        }
        //update LevelGain.
    update() {
        if (this.swingAngle <= -10) {
            this.changeAngle = true;
        }
        if (this.swingAngle >= 10) {
            this.changeAngle = false;
        }
        if (this.changeAngle) {
            this.swingAngle += Math.random() / 5;
        } else {
            this.swingAngle -= Math.random() / 5;
        }
        this.x += -player.velocity.x + this.velocityX;
        this.y += this.velocityY;
        this.draw();
    }
}

function forLG() {
    levelGains.forEach((LG, index) => {
        let colide = collisionDetection(LG.x, LG.y, LG.r, x, player.y, player.r);
        if (colide) {
            //player gains level.
            //player gets next level of control + bonus score/update variables.
            if (player.y > c.height / 2) {
                texts.push(
                    new Text(x, player.y, Math.random() - 0.5, -c.height * 0.001, "L+", "bold 25px Arial", "yellow", 1, false)
                );
                texts.push(
                    new Text(x, player.y, Math.random() - 0.5, -c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false)
                );
            } else {
                texts.push(
                    new Text(x, player.y, Math.random() - 0.5, c.height * 0.001, "L+", "bold 25px Arial", "yellow", 1, false)
                );
                texts.push(
                    new Text(x, player.y, Math.random() - 0.5, c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false)
                );
            }

            levelGains.splice(index, 1);
            levelJump();
        }
        //levelGain hits ground.
        if (LG.y > c.height - (c.height * 0.055)) {
            splat.currentTime = 0;
            splat.play();
            for (i = 0; i < Math.random() * 60 + 30; i++) {
                bloodSplats.push(new BloodSplat(LG.x, LG.y, Math.random() * 2, {
                    x: (Math.random() - 0.5) * (Math.random() * 6),
                    y: (Math.random() - 1) * (Math.random() * 10)
                }, "yellow"));
            }
            levelGains.splice(index, 1);
        }
        LG.update();
    });
}