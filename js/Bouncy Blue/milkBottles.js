//create milkBottles class.
class MilkBottle {
    //construct milkBottles data.
    constructor(x, y) {
            this.x = x;
            this.y = y;
            this.r = 50;
        }
        //draw milkBottles.
    draw() {
            ctx.drawImage(milkBottle, this.x - this.r / 2, this.y - this.r * 1.5, this.r, this.r * 1.5);
        }
        //update milkBottles.
    update() {
        this.x += -player.velocity.x * 1.25;
        this.draw();
    }
}

function forMilkBottles() {
    milkBottles.forEach((mb, index) => {
        let colide = collisionDetection(mb.x, mb.y, mb.r / 2, mb.r * 1.5, x, player.y, player.r, player.r);
        if (colide) {
            gain.currentTime = 0;
            gain.play();
            if (milkBottleCount < 20) {
                milkBottleCount += 1;
            }
            if (milkBottleCount == 20) {
                collectedMilkBottles = true;
                milkBottles = [];
            }
            milkBottles.splice(index, 1);
        }
        mb.update();
    });
}