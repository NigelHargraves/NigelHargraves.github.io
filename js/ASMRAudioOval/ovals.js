class Ovals {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = { x: Math.random() - 0.5, y: Math.random() - 0.5 };
        this.radiusNumber = Math.random() * 200;
        this.radius = { x: this.radiusNumber, y: this.radiusNumber / 2 };
        this.rotation = { x: 0, y: 0 };
        this.opacity = 0.01;
        this.brighten = true;
        this.direction = Math.random();
        if (this.direction > 0.5) {
            this.rotateUp = true;
        } else {
            this.rotateUp = false;
        }

    }
    draw() {
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.radius.x, this.radius.y, this.rotation.x, this.rotation.y, Math.PI * 2);
        ctx.strokeStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        ctx.globalAlpha = 0.4;
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        if (this.rotateUp) {
            this.rotation.x -= 0.001;
        } else {
            this.rotation.x += 0.001;
        }

        if (this.rotation.x <= -0.2) {
            this.rotateUp = false;
        }
        if (this.rotation.x >= 0.2) {
            this.rotateUp = true;
        }
        if (this.brighten && this.opacity < 1) {
            this.opacity += 0.001;
        }
        if (this.opacity >= 1) {
            this.brighten = false;
        }
        if (!this.brighten) {
            this.opacity -= 0.001;
        }
        this.draw();
    }
}

function forOvals() {

    smallOvals.forEach((ov, index) => {

        if (!ov.brighten && ov.opacity < 0.1) {
            smallOvals.splice(index, 1);
        }


        ov.update();
    });
}