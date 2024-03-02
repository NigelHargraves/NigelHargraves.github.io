class Pentagon {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 400;
        this.angle = 0;
        this.point = { x: 0, y: 0 };
        this.rotateAngle = 0;
        this.lineWidth = 5;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotateAngle);
        this.point = { x: 0, y: 0 };
        this.angle = 0;
        this.point.x = 0 + this.r * Math.cos(this.angle);
        this.point.y = 0 + this.r * Math.sin(this.angle);
        ctx.strokeStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(this.point.x, this.point.y);
        this.angle += (Math.PI * 2) / 5;
        this.point.x = 0 + this.r * Math.cos(this.angle);
        this.point.y = 0 + this.r * Math.sin(this.angle);
        ctx.lineTo(this.point.x, this.point.y);
        this.angle += (Math.PI * 2) / 5;
        this.point.x = 0 + this.r * Math.cos(this.angle);
        this.point.y = 0 + this.r * Math.sin(this.angle);
        ctx.lineTo(this.point.x, this.point.y);
        this.angle += (Math.PI * 2) / 5;
        this.point.x = 0 + this.r * Math.cos(this.angle);
        this.point.y = 0 + this.r * Math.sin(this.angle);
        ctx.lineTo(this.point.x, this.point.y);
        this.angle += (Math.PI * 2) / 5;
        this.point.x = 0 + this.r * Math.cos(this.angle);
        this.point.y = 0 + this.r * Math.sin(this.angle);
        ctx.lineTo(this.point.x, this.point.y);
        this.angle += (Math.PI * 2) / 5;
        this.point.x = 0 + this.r * Math.cos(this.angle);
        this.point.y = 0 + this.r * Math.sin(this.angle);
        ctx.lineTo(this.point.x, this.point.y);
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        ctx.restore();
    }
    update() {
        if (this.lineWidth > 1) {
            this.lineWidth -= 0.01;
        }
        this.rotateAngle += (Math.PI / 180) / 20;
        if (this.rotateAngle >= Math.PI * 2) {
            this.lineWidth = 5;
            this.rotateAngle = 0;
            if (scaleToPlay == 'C') {
                scaleToPlay = 'Em';
                EBass.play();
            } else if (scaleToPlay == 'Em') {
                scaleToPlay = 'Gm';
                GBass.play();
            } else if (scaleToPlay == 'Gm') {
                scaleToPlay = 'C';
                CBass.play();
            }
            if (scaleToPlay == 'Em') {
                for (let i = 0; i < 28; i++) {
                    notes[i].note = scaleEm[i];
                }
            } else if (scaleToPlay == 'C') {
                for (let i = 0; i < 28; i++) {
                    notes[i].note = scaleC[i];
                }
            } else if (scaleToPlay == 'Gm') {
                for (let i = 0; i < 28; i++) {
                    notes[i].note = scaleGm[i];
                }
            }
        }





        this.draw();
    }
}