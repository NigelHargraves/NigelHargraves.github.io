class Chord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.color = 'white';
        this.chordColor = 'blueviolet';
        this.opacity = 1;
        this.lineWidth = 5;
        this.velocity = 1;
        this.up = false;
    }
    draw() {
        ctx.save();
        ctx.translate(center.x, center.y);
        ctx.rotate(oval.rotation.x);
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
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
        ctx.strokeStyle = this.chordColor;
        ctx.lineWidth = this.lineWidth;
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        ctx.globalAlpha = 0.4;

    }
    update() {
        if (this.lineWidth > 1) {
            this.lineWidth -= 0.1;
        }

        if (this.opacity > 0.2) {
            this.opacity -= 0.01;
        }
        if (this.up) {
            this.y += this.velocity;

        } else {
            this.y += -this.velocity;
        }

        if (this.y >= center.y) {
            this.opacity = 1;
            this.lineWidth = 5;
            for (let i = 0; i < 20; i++) {
                particles.push(new Particle(this.x, this.y, this.chordColor));
            }
            this.color = this.chordColor;
            this.up = false;
        }

        if (this.y <= -center.y) {
            this.opacity = 1;
            this.lineWidth = 5;
            for (let i = 0; i < 20; i++) {
                particles.push(new Particle(this.x, this.y, this.chordColor));
            }
            this.color = this.chordColor;
            this.up = true;
        }

        this.draw();
    }
}