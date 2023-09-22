//flower class.
class Flower {
    //construct flower data.
    constructor(x, y, radius, countdown) {
            this.x = x;
            this.y = y;
            this.r = radius;
            this.x1 = 0;
            this.y1 = 0;
            this.ang = 0;
            this.countdown = countdown;
        }
        //draw flower.
    draw() {
            ctx.drawImage(flowerStalk, this.x - this.r, this.y, this.r * 2, c.height * 0.2);
            ctx.drawImage(sunflower, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
        }
        //update flower.
    update() {
        this.countdown -= 0.01;
        this.x += -player.velocity.x * 1.25;
        this.draw();
    }
}

function forFlower() {
    flowers.forEach((flower, index) => {
        let colide = collisionDetection(flower.x, flower.y, flower.r * (c.height * 0.004), x, player.y, player.r);
        if (colide) {
            flowerFire.currentTime = 0;
            flowerFire.play();
            const startPos = flower.x;
            const angles = Math.atan2(player.y - flower.y, x - startPos);
            const velocity = {
                x: Math.cos(angles) * 5,
                y: Math.sin(angles) * 5
            };
            guidedMissiles.push(
                new GuidedMissile(startPos, flower.y, velocity.x, velocity.y, c.height * 0.01, false)
            );
            flowers.splice(index, 1);
        }

        if (flower.countdown <= 0) {
            if (flower.x > 0 - flower.r && flower.x < c.width + flower.r) {
                mineExplode.currentTime = 0;
                mineExplode.play();
                for (let i = 0; i < 10; i++) {
                    projectiles.push(new Projectile(flower.x, flower.y, 2));
                }
            }
            flowers.splice(index, 1);
        }
        flower.update();
    });
}