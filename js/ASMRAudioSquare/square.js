class Square {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.opacity = 0.2;
        this.rotateAngle = 0;
        this.lineWidth = 5;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotateAngle);
        ctx.beginPath();
        ctx.rect(0 - canvas.height / 4, 0 - canvas.height / 4, canvas.height / 2, canvas.height / 2);
        ctx.strokeStyle = "gold";
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        ctx.restore();
        ctx.globalAlpha = 0.2;
    }
    update() {
        if (this.opacity > 0.2) {
            this.opacity -= 0.1;
        }
        if (this.lineWidth > 0.2) {
            this.lineWidth -= 0.1;
        }
        this.rotateAngle += (Math.PI / 180) / 100;
        if (this.rotateAngle >= Math.PI * 2) {
            this.rotateAngle = 0;
        }
        /*
        ctx.font = "bold 30px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("Angle = " + this.rotateAngle, (canvas.width / 2), canvas.height * 0.040);
        */
        this.draw();
    }
}