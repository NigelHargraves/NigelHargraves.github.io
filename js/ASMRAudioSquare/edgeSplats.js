class EdgeSplat {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocity = { x: Math.random() - 0.5, y: Math.random() - 0.5 };
        this.opacity = 1;
    }
    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(square.rotateAngle);
        ctx.beginPath();
        ctx.arc(0, 0, 1, 0, Math.PI * 2);
        ctx.strokeStyle = "aquamarine";
        ctx.stroke();
        ctx.restore();
        ctx.globalAlpha = 0.2;
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        this.opacity -= 0.001;



        this.draw();
    }
}

function forEdgeSplats() {
    edgeSplats.forEach((es, index) => {
        if (es.opacity <= 0.05) {
            edgeSplats.splice(index, 1);
        }
        es.update();
    });
}