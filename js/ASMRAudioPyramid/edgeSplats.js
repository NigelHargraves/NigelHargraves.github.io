class EdgeSplat {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocity = { x: Math.random() - 0.5, y: Math.random() - 0.5 };
        this.opacity = 1;
    }
    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        ctx.strokeStyle = "aqua";
        ctx.stroke();
        ctx.globalAlpha = 0.2;
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        this.opacity -= 0.005;

        this.draw();
    }
}

function forEdgeSplats() {
    edgeSplats.forEach((es, index) => {
        if (es.opacity <= 0.01) {
            edgeSplats.splice(index, 1);
        }
        es.update();
    });
}