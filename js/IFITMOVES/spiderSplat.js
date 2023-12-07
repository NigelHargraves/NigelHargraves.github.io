//create spiderSplat class.
class SpiderSplat {
    //construct spiderSplat data.
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 2;
        this.size = 100;
        this.opacity = 1;
        this.collected = false;
        this.rotate = Math.random() * (Math.PI * 2);
    }

    draw() {
        ctx.save();
        ctx.translate(this.x + floor.x, this.y + floor.y);
        ctx.rotate(this.rotate);
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(splat, 0 - this.r / 2, 0 - this.r / 2, this.r, this.r);
        ctx.globalAlpha = 1;
        if (!this.collected) {
            ctx.drawImage(spiderDeadShadow, (0 - this.size / 2) + 10, (0 - this.size / 2) + 10, this.size, this.size);
            ctx.drawImage(spiderDead, 0 - this.size / 2, 0 - this.size / 2, this.size, this.size);
        }
        ctx.restore();
    }


    update() {

        if (this.r <= 150) {
            this.r += 1;
        }
        if (this.opacity > 0.1 && this.r >= 100) {
            this.opacity -= 0.0002;
            this.size -= 0.02;
        }

        this.draw();
    }


}


function forSplats() {

    spiderSplats.forEach((splat, index) => {

        let collect = collisionDetection(player.x, player.y, player.r / 2, player.r / 2, splat.x + floor.x, splat.y + floor.y, splat.size / 2, splat.size / 2);
        if (collect && !splat.collected) {
            swipe.play();
            spiderRemains += 1;
            splat.collected = true;
            if (spiderRemains == 10) {
                if (!gotPinkKey) {
                    gotPinkKey = true;
                    spiderRemains = 0;
                    return;
                }
                if (!gotGreenKey) {
                    gotGreenKey = true;
                    spiderRemains = 0;
                    return;
                }
                if (!gotOrangeKey) {
                    gotOrangeKey = true;
                    spiderRemains = 0;
                    return;
                }
                if (!gotYellowKey) {
                    gotYellowKey = true;
                    spiderRemains = 0;
                    return;
                }
                if (!gotTurquoiseKey) {
                    gotTurquoiseKey = true;
                    spiderRemains = 0;
                    return;
                }
                if (!gotRedKey) {
                    gotRedKey = true;
                    spiderRemains = 0;
                    return;
                }

            }
        }



    });

}