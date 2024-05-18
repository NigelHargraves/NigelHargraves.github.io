class Circle {
    constructor(radius) {
        this.x = center.x;
        this.y = center.y;
        this.r = radius;

    }
    draw() {
        ctx.lineWidth = 0.1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = 'white';
        ctx.stroke();




    }
    update() {




        this.draw();
    }
}

function forCircles() {

    circles.forEach((circle, index) => {
        circle.update();
    });

}