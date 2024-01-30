class Star {
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.image = image;
        this.size = (Math.random() * 30) + 20;
        this.velocity = { x: Math.random() - 0.5, y: Math.random() - 0.5 };
        this.opacity = 1;
    }
    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(this.image, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
        ctx.globalAlpha = 1;
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.opacity -= 0.01;
        this.draw();
    }
}

function forStar() {
    stars.forEach((star, index) => {
        if (star.opacity <= 0) {
            stars.splice(index, 1);
        }
        star.update();
    });

}