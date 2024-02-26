class Chord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 30;
        this.velocity = 0;
        this.gravity = 0.00001;
        this.acceleration = 0;
        this.lineWidth = 1;
        this.opacity = 0.001;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = this.lineWidth;
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.4;
    }
    update() {
        if (this.opacity < 1) {
            this.opacity += 0.0004;
        }

        this.lineWidth += 0.01;
        this.y += this.velocity;
        this.velocity += this.acceleration;
        this.acceleration += this.gravity;
        this.draw();
    }
}

function forChords() {
    chords.forEach((chord, index) => {
        if (chord.y >= canvas.height - chord.r) {
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle(chord.x, chord.y + chord.r));
            }
            chords.splice(index, 1);
        }
        chord.update();
    });
}