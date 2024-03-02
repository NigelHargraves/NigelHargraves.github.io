class Pentagon {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 100;
        this.angle = 0;
        this.point = { x: 0, y: 0 };
    }
    draw() {
        ctx.strokeStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(this.point.x, this.point.y);
        this.angle += (Math.PI / 180) / 5;
        this.point.x = this.r * Math.cos(this.angle);
        this.point.y = this.r * Math.sin(this.angle);
        ctx.lineTo(this.point.x, this.point.y);
        ctx.stroke();
    }
    update() {







        this.draw();
    }
}