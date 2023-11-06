//create eggs class.
class Egg {
    //construct eggs data.
    constructor(x, y) {
            this.x = x;
            this.y = y;
            this.r = 30;
        }
        //draw eggs.
    draw() {
            ctx.drawImage(chickenEgg, this.x, this.y, this.r, this.r);
        }
        //update eggs.
    update() {
        this.x += -player.velocity.x * 1.25;
        this.draw();
    }
}

function forEggs() {
    chickenEggs.forEach((egg, index) => {
        let colide = collisionDetection(egg.x, egg.y, egg.r / 2, egg.r / 2, x, player.y, player.r, player.r);
        if (colide) {
            gain.currentTime = 0;
            gain.play();
            if (eggCount < 20) {
                eggCount += 1;
            }
            if (eggCount == 20) {
                collectedEggs = true;
                chickenEggs = [];
            }
            chickenEggs.splice(index, 1);
        }
        egg.update();
    });
}