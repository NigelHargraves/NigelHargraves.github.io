class Drop {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 1;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.stroke();
    }
    update() {
        this.r += 1;
        this.draw();
    }
}

function forDrops() {
    drops.forEach((drop, index) => {
        if (drop.r > 200) {
            drops.splice(index, 1);
        }
        drop.update();
    });
}