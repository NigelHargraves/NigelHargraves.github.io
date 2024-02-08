class Cloud {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.blur = 4;
        this.velocity = { x: (Math.random() - 0.5) / 4, y: (Math.random() - 0.5) / 10 };
    }
    draw() {

        // draw cloud
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(this.x - 40, this.y + 20, this.x - 40, this.y + 70, this.x + 60, this.y + 70);
        ctx.bezierCurveTo(this.x + 80, this.y + 100, this.x + 150, this.y + 100, this.x + 170, this.y + 70);
        ctx.bezierCurveTo(this.x + 250, this.y + 70, this.x + 250, this.y + 40, this.x + 220, this.y + 30);
        ctx.bezierCurveTo(this.x + 260, this.y - 40, this.x + 200, this.y - 50, this.x + 170, this.y - 30);
        ctx.bezierCurveTo(this.x + 150, this.y - 75, this.x + 80, this.y - 60, this.x + 80, this.y - 30);
        ctx.bezierCurveTo(this.x + 30, this.y - 75, this.x - 20, this.y - 60, this.x, this.y);
        ctx.closePath();
        ctx.lineWidth = 2
        ctx.filter = "blur(" + this.blur + "px)";;
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.strokeStyle = 'silver';
        ctx.stroke();
        ctx.filter = "blur(" + 1 + "px)";;
    }
    update() {
        if (this.y >= canvas.height / 2 || this.y <= 0) {
            this.velocity.y = -this.velocity.y;
        }
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.draw();
    }
}

function forClouds() {
    clouds.forEach((cloud, index) => {

        cloud.update();
    });
}