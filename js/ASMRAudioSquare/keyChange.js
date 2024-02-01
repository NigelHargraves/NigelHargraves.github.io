class Key {
    constructor(x, y, key) {
        this.x = x;
        this.y = y;
        this.Key = key;
        this.opacity = 1;
        this.smallRadius = 20;
        this.bigRadius = canvas.height / 4;
        this.lineWidth = 5;
        this.angle = 0 - (Math.PI / 2);
        this.point = { x: 0, y: 0 };
        DBass.currentTime = 0.1;
        DBass.play();
    }
    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x + this.point.x, this.y + this.point.y, this.smallRadius, 0, Math.PI * 2);
        ctx.lineWidth = this.lineWidth;
        ctx.globalAlpha = this.opacity;
        ctx.strokeStyle = "aqua";
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.2;
    }
    update() {
        if (this.opacity > 0.2) {
            this.opacity -= 0.01;
        }
        if (this.lineWidth > 1) {
            this.lineWidth -= 0.01;
        }


        this.point.x = this.bigRadius * Math.cos(this.angle);
        this.point.y = this.bigRadius * Math.sin(this.angle);

        this.angle += (Math.PI / 180) / 4;


        if (this.angle <= (Math.PI + (Math.PI / 2) + 0.001) && this.angle >= (Math.PI + (Math.PI / 2) - 0.001)) {

            this.opacity = 1;
            this.lineWidth = 5;
            circle.opacity = 1;
            circle.lineWidth = 5;
            if (this.key == 'D') {
                this.key = 'G';
                notes[0].note = GNote;
                notes[1].note = BNote;
                notes[2].note = DNote;
                notes[3].note = GUNote;
                notes[4].note = BUNote;
                notes[5].note = DUNote;
            } else if (this.key == 'G') {
                this.key = 'B';
                notes[0].note = BNote;
                notes[1].note = DNote;
                notes[2].note = FSGFNote;
                notes[3].note = BUNote;
                notes[4].note = DUNote;
                notes[5].note = FSGFUNote;
            } else {
                this.key = 'D';
                notes[0].note = DNote;
                notes[1].note = FSGFNote;
                notes[2].note = ANote;
                notes[3].note = DUNote;
                notes[4].note = FSGFUNote;
                notes[5].note = AUNote;
            }


            if (this.key == 'D') {
                DBass.currentTime = 0.1;
                DBass.play();
            }
            if (this.key == 'G') {
                GBass.currentTime = 0.1;
                GBass.play();
            }
            if (this.key == 'B') {
                BBass.currentTime = 0.1;
                BBass.play();
            }
        }

        if (this.angle >= Math.PI * 2) {
            this.angle = 0;
        }

        this.draw();
    }
}