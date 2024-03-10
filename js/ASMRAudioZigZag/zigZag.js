class ZigZag {
    constructor() {
        this.y;
        this.leftLineWidth = 5;
        this.middleLineWidth = 1;
        this.rightLineWidth = 1;
    }
    draw() {
        ctx.lineWidth = 0.4;
        this.y = canvas.height / 10;
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'white';
        //notes.
        //diagonal lines.
        ctx.beginPath();
        ctx.moveTo(left, this.y);
        this.y += canvas.height / 10;
        ctx.lineTo(right, this.y);
        this.y += canvas.height / 10;
        ctx.lineTo(left, this.y);
        this.y += canvas.height / 10;
        ctx.lineTo(right, this.y);
        this.y += canvas.height / 10;
        ctx.lineTo(left, this.y);
        this.y += canvas.height / 10;
        ctx.lineTo(right, this.y);
        this.y += canvas.height / 10;
        ctx.lineTo(left, this.y);
        this.y += canvas.height / 10;
        ctx.lineTo(right, this.y);
        this.y += canvas.height / 10;
        ctx.lineTo(left, this.y);
        ctx.lineTo(right, this.y);
        this.y -= canvas.height / 10;
        ctx.lineTo(left, this.y);
        this.y -= canvas.height / 10;
        ctx.lineTo(right, this.y);
        this.y -= canvas.height / 10;
        ctx.lineTo(left, this.y);
        this.y -= canvas.height / 10;
        ctx.lineTo(right, this.y);
        this.y -= canvas.height / 10;
        ctx.lineTo(left, this.y);
        this.y -= canvas.height / 10;
        ctx.lineTo(right, this.y);
        this.y -= canvas.height / 10;
        ctx.lineTo(left, this.y);
        this.y -= canvas.height / 10;
        ctx.lineTo(right, this.y);
        ctx.lineTo(left, this.y);
        ctx.stroke();

        //dots.
        for (let i = canvas.height / 10; i < (canvas.height / 10) * 10; i += canvas.height / 10) {
            ctx.beginPath();
            ctx.arc(left, i, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(right, i, 4, 0, Math.PI * 2);
            ctx.fill();
        }
        let number = 0;
        for (let i = canvas.height / 10; i < (canvas.height / 10) * 10; i += canvas.height / 10) {
            if (number == 1 || number == 9) {
                i -= (canvas.height / 10) / 2;
            }
            ctx.beginPath();
            ctx.arc(center.x, i, 4, 0, Math.PI * 2);
            ctx.fill();
            number++;
        }

        //vertical lines.
        ctx.beginPath();
        ctx.moveTo(left, this.y);
        ctx.lineTo(left, canvas.height - this.y);
        ctx.lineWidth = this.leftLineWidth;
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(center.x, this.y);
        ctx.lineTo(center.x, canvas.height - this.y);
        ctx.lineWidth = this.middleLineWidth;
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(right, this.y);
        ctx.lineTo(right, canvas.height - this.y);
        ctx.lineWidth = this.rightLineWidth;
        ctx.stroke();
        ctx.lineWidth = 0.4;

        //chord box.
        ctx.beginPath();
        ctx.moveTo(cLeft, canvas.height / 10);
        ctx.lineTo(cRight, canvas.height / 10);
        ctx.lineTo(cRight, canvas.height - (canvas.height / 10));
        ctx.lineTo(cLeft, canvas.height - (canvas.height / 10));
        ctx.lineTo(cLeft, canvas.height / 10);
        //diagonals.
        ctx.lineTo(cRight, canvas.height - (canvas.height / 10));
        ctx.moveTo(cRight, canvas.height / 10);
        ctx.lineTo(cLeft, canvas.height - (canvas.height / 10));
        ctx.stroke();




    }
    update() {
        if (this.leftLineWidth > 1) {
            this.leftLineWidth -= 0.1;
        }
        if (this.middleLineWidth > 1) {
            this.middleLineWidth -= 0.1;
        }
        if (this.rightLineWidth > 1) {
            this.rightLineWidth -= 0.1;
        }
        this.draw();
    }
}