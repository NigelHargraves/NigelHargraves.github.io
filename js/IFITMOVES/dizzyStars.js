class DizzyStar {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 60;
        this.velocity = { x: (Math.random() * 5) - 2.5, y: (Math.random() * 5) - 2.5 }
        this.opacity = 1;
    }
    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(dizzyStar, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
        ctx.globalAlpha = 1;
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.opacity -= 0.1;
        this.draw();
    }
}

function forDizzyStars() {
    dizzyStars.forEach((star, index) => {
        if (star.opacity <= 0) {
            dizzyStars.splice(index, 1);
        }
        star.update();
    });
}