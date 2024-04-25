class Star {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.velocity = { x: 0, y: 0 };
        this.angle = 0;
        this.speed = speed;
    }
    draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        ctx.fill();
    }
    update() {
        this.speed -= (this.speed * 0.005);
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.angle = Math.atan2(center.y - this.y, center.x - this.x);
        this.velocity.x = Math.cos(this.angle) * this.speed;
        this.velocity.y = Math.sin(this.angle) * this.speed;
        this.draw();
    }
}

function forStars() {
    stars.forEach((star, index) => {
        if (star.x >= center.x - 1 && star.x <= center.x + 1 && star.y >= center.y - 1 && star.y <= center.y + 1) {
            road.centerStarRadius += 2;
            stars.splice(index, 1);
        }
        star.update();
    });
}