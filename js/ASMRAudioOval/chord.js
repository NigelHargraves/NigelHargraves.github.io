class Chord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocity = 1;
        this.up = false;
    }
    draw() {
        ctx.save();
        ctx.translate(center.x, center.y);
        ctx.rotate(oval.rotation.x);
        ctx.beginPath();
        ctx.arc(0, -center.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(0, center.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(0, -center.y);
        ctx.lineTo(0, center.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, Math.PI * 2);
        ctx.strokeStyle = "White";
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
    update() {

        if (this.up) {
            this.y += this.velocity;

        } else {
            this.y += -this.velocity;
        }

        if (this.y >= center.y) {
            for (let i = 0; i < 20; i++) {
                particles.push(new Particle(this.x, this.y, 'white'));
            }
            this.up = false;
        }

        if (this.y <= -center.y) {
            for (let i = 0; i < 20; i++) {
                particles.push(new Particle(this.x, this.y, 'white'));
            }
            this.up = true;
        }

        this.draw();
    }
}