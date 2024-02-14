class Spiral {
    constructor(x, y, antiClock, rotateAngle) {
        this.x = x;
        this.y = y;
        this.antiClock = antiClock;
        this.rotateAngle = rotateAngle;
        this.spiral = { x: 0, y: 0 };
        this.timer = 0;
        this.out = true;
    }
    draw() {
        //draw spiral;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotateAngle);
        ctx.beginPath();

        ctx.strokeStyle = chord.color;
        ctx.globalAlpha = chord.opacity;
        ctx.lineWidth = chord.lineWidth;

        ctx.arc(0 + this.spiral.x, 0 + this.spiral.y, 1, 0, Math.PI * 2);
        ctx.arc(0 + this.spiral.x, 0 + this.spiral.y, 5, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.4;
    }
    update() {
        if (this.out) {
            this.spiral.x += 0.1;
            this.spiral.y += 0.1;
        } else {
            this.spiral.x -= 0.1;
            this.spiral.y -= 0.1;
        }

        this.timer += 1;
        if (this.timer == 3000) {
            this.out = false;
            this.timer = 0;
        }

        if (this.spiral.x <= 0) {
            this.out = true;
        }

        if (this.antiClock) {
            this.rotateAngle -= (Math.PI / 180) / 2;
        } else {
            this.rotateAngle += (Math.PI / 180) / 2;
        }

        if (this.rotateAngle <= -Math.PI * 2) {
            this.rotateAngle = 0;
        }
        this.draw();
    }
}

function forSpirals() {
    spirals.forEach((spiral, index) => {
        spiral.update();
    });
}