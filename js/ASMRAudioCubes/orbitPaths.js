class OrbitPath {
    constructor(x, y, radiusX, radiusY) {
        this.x = x;
        this.y = y;
        this.radius = { x: radiusX, y: radiusY };
        this.lineWidthR = 5;
        this.lineWidthL = 1;
        this.lineWidthT = 1;
        this.lineWidthB = 1;
        this.colorR = 'white';
        this.colorL = 'white';
        this.colorT = 'white';
        this.colorB = 'white';
    }
    draw() {
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(center.x, center.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.radius.x, this.radius.y, 0, 0, Math.PI * 2);
        ctx.stroke();

        //top line.
        ctx.strokeStyle = this.colorT;
        ctx.fillStyle = this.colorT;
        ctx.beginPath();
        ctx.moveTo(center.x, center.y);
        ctx.lineTo(center.x, center.y - this.radius.y);
        ctx.lineWidth = this.lineWidthT;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(center.x, center.y - this.radius.y, 2, 0, Math.PI * 2);
        ctx.fill();

        //bottom line.
        ctx.strokeStyle = this.colorB;
        ctx.fillStyle = this.colorB;
        ctx.beginPath();
        ctx.moveTo(center.x, center.y);
        ctx.lineTo(center.x, center.y + this.radius.y);
        ctx.lineWidth = this.lineWidthB;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(center.x, center.y + this.radius.y, 2, 0, Math.PI * 2);
        ctx.fill();

        //left line.
        ctx.strokeStyle = this.colorL;
        ctx.fillStyle = this.colorL;
        ctx.beginPath();
        ctx.moveTo(center.x, center.y);
        ctx.lineTo(center.x - this.radius.x, center.y);
        ctx.lineWidth = this.lineWidthL;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(center.x - this.radius.x, center.y, 2, 0, Math.PI * 2);
        ctx.fill();

        //rightline.
        ctx.strokeStyle = this.colorR;
        ctx.fillStyle = this.colorR;
        ctx.beginPath();
        ctx.moveTo(center.x, center.y);
        ctx.lineTo(center.x + this.radius.x, center.y);
        ctx.lineWidth = this.lineWidthR;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(center.x + this.radius.x, center.y, 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.lineWidth = 1;


    }
    update() {
        if (this.lineWidthT > 1) {
            this.lineWidthT -= 0.05;
        }
        if (this.lineWidthB > 1) {
            this.lineWidthB -= 0.05;
        }
        if (this.lineWidthL > 1) {
            this.lineWidthL -= 0.05;
        }
        if (this.lineWidthR > 1) {
            this.lineWidthR -= 0.05;
        }
        this.draw();
    }
}

function forOrbitPaths() {
    orbitPaths.forEach((op, index) => {
        op.update();
    });
}