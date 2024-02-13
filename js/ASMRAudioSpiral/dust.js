class Dust {
    constructor(x, y, vx, vy, number) {
        this.x = x;
        this.y = y;
        this.velocity = { x: vx, y: vy };
        this.number = number;
        this.opacity = 1;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 0.1, 0, Math.PI * 2);
        ctx.globalAlpha = this.opacity;
        ctx.strokeStyle = color[this.number];
        ctx.stroke();
        ctx.strokeStyle = 'white';
        ctx.globalAlpha = 1;
    }
    update() {
        if (this.opacity > 0) {
            this.opacity -= 0.01;
        }
        this.x += -this.velocity.x;
        this.y += -this.velocity.y;
        this.draw();
    }
}


function forDusts() {
    dusts.forEach((dust, index) => {
        if (dust.opacity <= 0) {
            dusts.splice(index, 1);
        }
        dust.update();
    });
}