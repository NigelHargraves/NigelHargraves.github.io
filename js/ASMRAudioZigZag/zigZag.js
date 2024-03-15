class ZigZag {
    constructor() {
        this.y;
        this.leftLineWidth = 5;
        this.middleLineWidth = 1;
        this.rightLineWidth = 1;
        this.cBoxLineWidth = 10;
        this.kickLineWidth = 5;
        this.leftColor = 'white';
        this.rightColor = 'white';
        this.middleColor = 'white';
    }
    draw() {
        ctx.lineWidth = 0.4;
        this.y = cTop;
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'white';
        //notes.
        //diagonal lines.
        ctx.beginPath();
        ctx.moveTo(left, this.y);
        this.y += cTop;
        ctx.lineTo(right, this.y);
        this.y += cTop;
        ctx.lineTo(left, this.y);
        this.y += cTop;
        ctx.lineTo(right, this.y);
        this.y += cTop;
        ctx.lineTo(left, this.y);
        this.y += cTop;
        ctx.lineTo(right, this.y);
        this.y += cTop;
        ctx.lineTo(left, this.y);
        this.y += cTop;
        ctx.lineTo(right, this.y);
        this.y += cTop;
        ctx.lineTo(left, this.y);
        ctx.lineTo(right, this.y);
        this.y -= cTop;
        ctx.lineTo(left, this.y);
        this.y -= cTop;
        ctx.lineTo(right, this.y);
        this.y -= cTop;
        ctx.lineTo(left, this.y);
        this.y -= cTop;
        ctx.lineTo(right, this.y);
        this.y -= cTop;
        ctx.lineTo(left, this.y);
        this.y -= cTop;
        ctx.lineTo(right, this.y);
        this.y -= cTop;
        ctx.lineTo(left, this.y);
        this.y -= cTop;
        ctx.lineTo(right, this.y);
        ctx.lineTo(left, this.y);
        ctx.stroke();

        //note dots.
        for (let i = cTop; i < (cTop) * 10; i += cTop) {
            ctx.beginPath();
            ctx.arc(left, i, 4, 0, Math.PI * 2);
            ctx.fillStyle = this.leftColor;
            ctx.fill();
        }

        for (let i = cTop; i < (cTop) * 10; i += cTop) {
            ctx.beginPath();
            ctx.arc(right, i, 4, 0, Math.PI * 2);
            ctx.fillStyle = this.rightColor;
            ctx.fill();
        }

        let number = 0;
        for (let i = cTop; i < (cTop) * 10; i += cTop) {
            if (number == 1 || number == 9) {
                i -= (cTop) / 2;
            }
            ctx.beginPath();
            ctx.arc(center.x, i, 4, 0, Math.PI * 2);
            ctx.fillStyle = this.middleColor;
            ctx.fill();
            number++;
        }

        //vertical lines.
        ctx.beginPath();
        ctx.moveTo(left, this.y);
        ctx.lineTo(left, canvas.height - this.y);
        ctx.lineWidth = this.leftLineWidth;
        ctx.strokeStyle = this.leftColor;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(center.x, this.y);
        ctx.lineTo(center.x, canvas.height - this.y);
        ctx.lineWidth = this.middleLineWidth;
        ctx.strokeStyle = this.middleColor;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(right, this.y);
        ctx.lineTo(right, canvas.height - this.y);
        ctx.lineWidth = this.rightLineWidth;
        ctx.strokeStyle = this.rightColor;

        ctx.stroke();
        ctx.lineWidth = 0.4;

        //chord box.
        ctx.strokeStyle = 'Turquoise';
        ctx.fillStyle = 'Turquoise';
        ctx.beginPath();
        ctx.moveTo(cLeft, cTop);
        ctx.lineTo(cRight, cTop);
        ctx.lineTo(cRight, canvas.height - (cTop));
        ctx.lineTo(cLeft, canvas.height - (cTop));
        ctx.lineTo(cLeft, cTop);
        //diagonals.
        ctx.moveTo(cLeft, cTop);
        ctx.lineTo(cRight, cbottom);
        ctx.moveTo(cRight, cTop);
        ctx.lineTo(cLeft, cbottom);
        ctx.lineWidth = this.cBoxLineWidth;
        ctx.stroke();

        //chord dots.
        //diagonals.
        let yCoord = 0;
        for (let i = cTop; i < (cTop) * 10; i += cTop * 2) {
            ctx.beginPath();
            ctx.arc(cLeft + yCoord, i, 4, 0, Math.PI * 2);
            ctx.fill();
            yCoord += (cRight - cLeft) / 4;
        }
        yCoord = 0;
        for (let i = cTop; i < (cTop) * 10; i += cTop * 2) {
            ctx.beginPath();
            ctx.arc(cRight - yCoord, i, 4, 0, Math.PI * 2);
            ctx.fill();
            yCoord += (cRight - cLeft) / 4;
        }
        //verticals.
        for (let i = cTop; i < (cTop) * 10; i += cTop * 2) {
            ctx.beginPath();
            ctx.arc(cLeft, i, 4, 0, Math.PI * 2);
            ctx.fill();
            yCoord += (cRight - cLeft) / 4;
        }
        for (let i = cTop; i < (cTop) * 10; i += cTop * 2) {
            ctx.beginPath();
            ctx.arc(cRight, i, 4, 0, Math.PI * 2);
            ctx.fill();
            yCoord += (cRight - cLeft) / 4;
        }

        //kick drum skin.
        ctx.fillStyle = 'seashell';
        ctx.beginPath();
        ctx.arc(right + (canvas.width - right) / 2, center.y, 98, 0, Math.PI * 2);
        ctx.fill();
        ctx.font = "bold 45px Arial";
        ctx.fillStyle = "red";
        ctx.fillText('𝒵𝒾𝑔𝒵𝒶𝑔', (right + (canvas.width - right) / 2) - 85, center.y + 10);
        //kick drum case.
        ctx.strokeStyle = 'slateblue';
        ctx.beginPath();
        ctx.arc(right + (canvas.width - right) / 2, center.y, 100, 0, Math.PI * 2);
        ctx.lineWidth = this.kickLineWidth;
        ctx.stroke();
        //legs.
        ctx.beginPath();
        ctx.moveTo((right + (canvas.width - right) / 2) - 100, center.y);
        ctx.lineTo((right + (canvas.width - right) / 2) - 150, center.y + 100);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo((right + (canvas.width - right) / 2) + 100, center.y);
        ctx.lineTo((right + (canvas.width - right) / 2) + 150, center.y + 100);
        ctx.stroke();
        //leg base.
        ctx.beginPath();
        ctx.moveTo((right + (canvas.width - right) / 2) - 160, center.y + 100);
        ctx.lineTo((right + (canvas.width - right) / 2) - 140, center.y + 100);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo((right + (canvas.width - right) / 2) + 160, center.y + 100);
        ctx.lineTo((right + (canvas.width - right) / 2) + 140, center.y + 100);
        ctx.stroke()
        ctx.lineWidth = 1;

        //tensioners.
        ctx.fillStyle = 'slateblue';
        ctx.beginPath();
        ctx.arc(right + ((canvas.width - right) / 2) - 100, center.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(right + ((canvas.width - right) / 2) + 100, center.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(right + ((canvas.width - right) / 2), center.y - 100, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(right + ((canvas.width - right) / 2), center.y + 100, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.save();
        ctx.translate(right + ((canvas.width - right) / 2), center.y);
        ctx.rotate(Math.PI / 4);
        ctx.beginPath();
        ctx.arc(0 - 100, 0, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(0 + 100, 0, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(0, 0 - 100, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(0, 0 + 100, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();





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
        if (this.cBoxLineWidth > 1) {
            this.cBoxLineWidth -= 0.1;
        }
        if (this.kickLineWidth > 1) {
            this.kickLineWidth -= 0.1;
        }
        this.draw();
    }
}