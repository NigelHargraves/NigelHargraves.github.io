class Arrows {
    constructor() {
        this.x = center.x;
        this.y = center.y;
        this.size = 250;
        this.angle = 0;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.drawImage(arrows, 0 - this.size / 2, 0 - this.size / 2, this.size, this.size);
        ctx.restore();
    }
    update() {
        this.angle += (Math.PI / 180) / 20;
        if (this.angle >= Math.PI * 2) {
            this.angle = 0;
        }
        this.draw();
    }
}