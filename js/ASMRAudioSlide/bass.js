class Bass {
    constructor() {
        this.x = rectangle.x;
        this.y = rectangle.y + canvas.height / 2 + canvas.height / 10;
        this.r = 20;
        this.velocity = 4;
        this.left = false;
        this.opacity = 1;
        this.lineWidth = 5;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        ctx.globalAlpha = 0.4;
        ctx.lineWidth = 1;
    }
    update() {
        if (this.opacity > 0.4) {
            this.opacity -= 0.01;
        }
        if (this.lineWidth > 1) {
            this.lineWidth -= 0.1;
        }
        if (!this.left) {
            this.x += this.velocity;
        } else {
            this.x -= this.velocity;
        }
        if (this.x == rectangle.x) {
            this.opacity = 1;
            this.lineWidth = 5;
            changeBass();
            this.left = false;
        }
        if (this.x == rectangle.x + canvas.width / 2) {
            this.opacity = 1;
            this.lineWidth = 5;
            changeBass();
            this.left = true;
        }
        this.draw();
    }
}

function changeBass() {
    drumBass.play();

    if (chordToPlay == 'C') {
        FBass.currentTime = 0;
        FBass.play();

    }

    if (chordToPlay == 'G') {
        CBass.currentTime = 0;
        CBass.play();

    }
    if (chordToPlay == 'Am') {
        GBass.currentTime = 0;
        GBass.play();

    }
    if (chordToPlay == 'F') {
        ABass.currentTime = 0;
        ABass.play();

    }
}