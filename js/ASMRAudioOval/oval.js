class Oval {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = { x: 600, y: 300 };
        this.rotation = { x: 0, y: 0 };
        this.rotateUp = true;
        this.radiusShrink = true;
    }
    draw() {
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.radius.x, this.radius.y, this.rotation.x, this.rotation.y, Math.PI * 2);
        ctx.strokeStyle = 'white';
        ctx.stroke();
    }
    update() {
        if (this.rotateUp) {
            this.rotation.x -= 0.0001;
        } else {
            this.rotation.x += 0.0001;
        }

        if (this.rotation.x <= -0.8) {
            this.rotateUp = false;
        }
        if (this.rotation.x >= 0.8) {
            this.rotateUp = true;
        }

        if (this.radiusShrink) {
            this.radius.y -= 0.01;
        } else {
            this.radius.y += 0.01;
        }

        if (this.radius.y <= 10) {
            this.radiusShrink = false;
        }
        if (this.radius.y >= 300) {
            this.radiusShrink = true;
        }
        this.draw();
    }
}