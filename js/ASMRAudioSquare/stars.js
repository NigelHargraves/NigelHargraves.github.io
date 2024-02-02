class Star {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.opacity = 1;
        this.velocity = { x: (Math.random() - 0.5) / 4, y: (Math.random() - 0.5) / 4 };
        this.changeDirection = 100;
    }
    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.globalAlpha = 0.2;
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.opacity > 0) {
            this.opacity -= 0.001;
        }

        this.changeDirection -= 1;

        if (this.changeDirection <= 0) {
            this.velocity.x = (Math.random() - 0.5) / 4;
            this.velocity.y = (Math.random() - 0.5) / 4;
            this.changeDirection = 10;
        }

        this.draw();
    }
}

function forStars() {

    stars.forEach((star, index) => {
        if (star.opacity <= 0.1) {
            stars.splice(index, 1);
        }
        star.update();
    });

}