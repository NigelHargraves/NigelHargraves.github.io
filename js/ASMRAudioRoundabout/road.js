class Road {
    constructor() {
        this.x = center.x;
        this.y = center.y;
        this.lineWidth = 1;
        this.topLeft = { x: canvas.width * 0.080, y: canvas.height * 0.080 };
        this.topRight = { x: canvas.width - (canvas.width * 0.080), y: canvas.height * 0.080 };
        this.bottomLeft = { x: canvas.width * 0.080, y: canvas.height - (canvas.height * 0.080) };
        this.bottomRight = { x: canvas.width - (canvas.width * 0.080), y: canvas.height - (canvas.height * 0.080) };
    }
    draw() {
        ctx.strokeStyle = 'white';
        //roundabout.
        ctx.beginPath();
        ctx.arc(this.x, this.y, center.y / 4, 0, Math.PI * 2);
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        //big square.
        ctx.beginPath();
        ctx.moveTo(this.topLeft.x, this.topLeft.y);
        ctx.lineTo(this.topRight.x, this.topRight.y);
        ctx.lineTo(this.bottomRight.x, this.bottomRight.y);
        ctx.lineTo(this.bottomLeft.x, this.bottomLeft.y);
        ctx.closePath();
        ctx.stroke();
        //connecting roads.
        //top.
        ctx.beginPath();
        ctx.moveTo(center.x, center.y - (center.y / 4));
        ctx.lineTo(center.x, this.topLeft.y);
        ctx.stroke();
        //bottom.
        ctx.beginPath();
        ctx.moveTo(center.x, center.y + (center.y / 4));
        ctx.lineTo(center.x, this.bottomLeft.y);
        ctx.stroke();
        //left.
        ctx.beginPath();
        ctx.moveTo(center.x - (center.y / 4), center.y);
        ctx.lineTo(this.topLeft.x, center.y);
        ctx.stroke();
        //right.
        ctx.beginPath();
        ctx.moveTo(center.x + (center.y / 4), center.y);
        ctx.lineTo(this.topRight.x, center.y);
        ctx.stroke();
    }
    update() {

        this.draw();
    }
}