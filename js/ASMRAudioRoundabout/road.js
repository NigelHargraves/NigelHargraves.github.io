class Road {
    constructor() {
        this.x = center.x;
        this.y = center.y;
        this.lineWidth = 1;
        this.centerStarRadius = 4;
        this.roundaboutColor = 'white';
        this.bigSquare = 'white';
        this.topRoad = 'white';
        this.bottomRoad = 'white';
        this.leftRoad = 'white';
        this.rightRoad = 'white';
        this.topLeft = { x: canvas.width * 0.080, y: canvas.height * 0.080 };
        this.topRight = { x: canvas.width - (canvas.width * 0.080), y: canvas.height * 0.080 };
        this.bottomLeft = { x: canvas.width * 0.080, y: canvas.height - (canvas.height * 0.080) };
        this.bottomRight = { x: canvas.width - (canvas.width * 0.080), y: canvas.height - (canvas.height * 0.080) };
    }
    draw() {
        //center star.
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(center.x, center.y, this.centerStarRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = this.roundaboutColor;
        //roundabout.
        ctx.beginPath();
        ctx.arc(this.x, this.y, center.y / 4, 0, Math.PI * 2);
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        ctx.lineWidth = 1;
        //big square.
        ctx.strokeStyle = this.bigSquare;
        ctx.beginPath();
        ctx.moveTo(this.topLeft.x, this.topLeft.y);
        ctx.lineTo(this.topRight.x, this.topRight.y);
        ctx.lineTo(this.bottomRight.x, this.bottomRight.y);
        ctx.lineTo(this.bottomLeft.x, this.bottomLeft.y);
        ctx.closePath();
        ctx.stroke();
        //connecting roads.
        //top.
        ctx.strokeStyle = this.topRoad;
        ctx.beginPath();
        ctx.moveTo(center.x, center.y - (center.y / 4));
        ctx.lineTo(center.x, this.topLeft.y);
        ctx.stroke();
        //bottom.
        ctx.strokeStyle = this.bottomRoad;
        ctx.beginPath();
        ctx.moveTo(center.x, center.y + (center.y / 4));
        ctx.lineTo(center.x, this.bottomLeft.y);
        ctx.stroke();
        //left. 
        ctx.strokeStyle = this.leftRoad;
        ctx.beginPath();
        ctx.moveTo(center.x - (center.y / 4), center.y);
        ctx.lineTo(this.topLeft.x, center.y);
        ctx.stroke();
        //right.
        ctx.strokeStyle = this.rightRoad;
        ctx.beginPath();
        ctx.moveTo(center.x + (center.y / 4), center.y);
        ctx.lineTo(this.topRight.x, center.y);
        ctx.stroke();
    }
    update() {
        if (this.lineWidth > 1) {
            this.lineWidth -= 0.01;
        }
        if (this.centerStarRadius > 4) {
            this.centerStarRadius -= 0.1;
        }
        this.draw();
    }
}