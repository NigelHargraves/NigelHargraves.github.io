class DropHit {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 1;
        this.opacity = 1;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = 'lightblue';
        ctx.lineWidth = 0.2;
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.4;

    }
    update() {
        this.r += 1;
        this.opacity -= 0.005;
        this.draw();
    }
}

function forDropHits() {
    let createDropHits = Math.random();
    if (createDropHits > 0.99) {
        dropHits.push(new DropHit(Math.random() * canvas.width, Math.random() * canvas.height));
    }
    dropHits.forEach((dh, index) => {
        if (dh.opacity < 0.05) {
            dropHits.splice(index, 1);
        }
        dh.update();
    });
}