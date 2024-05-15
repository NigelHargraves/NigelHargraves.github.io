class Circle {
    constructor(radius) {
        this.x = center.x;
        this.y = center.y;
        this.r = radius;
    }
    draw() {

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.globalAlpha = 1;
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.globalAlpha = 0.6;
    }
    update() {

        this.draw();
    }
}

function forCircles() {



    circles.update()
}