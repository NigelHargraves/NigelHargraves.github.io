class SpiderPortal {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.color = "black";
        this.r = 2;
        this.time = 0;
        this.createSpider = true;


    }
    draw() {
        ctx.save();
        let taper = 0.1;
        for (let i = 1; i >= 0.1; i -= 0.1) {
            ctx.globalAlpha = i;
            ctx.beginPath();
            ctx.arc(floor.x + this.x, floor.y + this.y, this.r + this.r * taper, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            taper += 0.1;
        }
        ctx.restore();
        ctx.beginPath();
        ctx.arc(floor.x + this.x, floor.y + this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        let extra = this.r + 20;
        ctx.beginPath();
        ctx.moveTo(floor.x + this.x, floor.y + this.y);
        ctx.lineTo(this.x + Math.random() * extra + floor.x, this.y + Math.random() * extra + floor.y);
        ctx.moveTo(floor.x + this.x, floor.y + this.y);
        ctx.lineTo(this.x + Math.random() * -extra + floor.x, this.y + Math.random() * extra + floor.y);
        ctx.moveTo(floor.x + this.x, floor.y + this.y);
        ctx.lineTo(this.x + Math.random() * -extra + floor.x, this.y + Math.random() * -extra + floor.y);
        ctx.moveTo(floor.x + this.x, floor.y + this.y);
        ctx.lineTo(this.x + Math.random() * extra + floor.x, this.y + Math.random() * -extra + floor.y);
        ctx.strokeStyle = "white";
        ctx.stroke();

    }
    update() {
        if (this.r <= 40 && this.time < 5) {
            this.r += 0.5;
            portalOpen.play();
        } else {
            this.color = "white";
            this.time += 1;

        }
        if (this.time >= 5) {
            if (this.createSpider) {
                spiders.push(new Spider(spiderWalk0, spiderWalkShadow0, this.x, this.y));
                this.createSpider = false;

            }

            this.color = "black"
            this.r -= 0.5;
        }
        this.draw();
    }
}