//create spiderSplat class.
class SpiderSplat {
    //construct spiderSplat data.
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 2;
        this.size = 100;
        this.opacity = 1;
        this.rotate = Math.random() * (Math.PI * 2);
    }

    draw() {
        ctx.save();
        ctx.translate(this.x + floor.x, this.y + floor.y);
        ctx.rotate(this.rotate);
        ctx.globalAlpha = this.opacity;

        ctx.filter = "blur(2px)";
        ctx.drawImage(splat, 0 - this.r / 2, 0 - this.r / 2, this.r, this.r);
        ctx.filter = "blur(0px)";
        ctx.globalAlpha = 1;

        ctx.drawImage(spiderDeadShadow, (0 - this.size / 2) + 10, (0 - this.size / 2) + 10, this.size, this.size);
        ctx.drawImage(spiderDead, 0 - this.size / 2, 0 - this.size / 2, this.size, this.size);

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