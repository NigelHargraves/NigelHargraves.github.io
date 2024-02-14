class Star {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.rotateAngle = 0;
    }
    draw() {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(this.rotateAngle);
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.restore();
    }
    update() {
        this.rotateAngle -= (Math.PI / 180) / 20;
        if (this.rotateAngle <= -Math.PI * 2) {
            this.rotateAngle = 0;
        }
        this.draw();
    }
}

function forStars() {
    stars.forEach((star, index) => {
        star.update();
    });
}