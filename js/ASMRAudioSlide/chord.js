class Chord {
    constructor() {
        this.x = rectangle.x;
        this.y = rectangle.y - canvas.height / 10;
        this.r = ((canvas.width / 2) / 12) / 4;
        this.velocity = 1;
        this.left = false;
        this.opacity = 1;
        this.lineWidth = 5;
        this.particleTime = 100;
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
            this.opacity -= 0.001;
        }
        if (this.lineWidth > 1) {
            this.lineWidth -= 0.005;
        }
        if (!this.left) {
            this.particleTime -= 0.1;
            particles.push(new Particle(this.x, this.y, { x: (-this.velocity) / 2, y: (Math.random() - 0.5) / 2 }, this.particleTime));
            if (this.x < x) {
                this.r += 0.03;
            } else {
                this.r -= 0.03;
            }
            this.x += this.velocity;
        } else {
            this.particleTime -= 0.1;
            particles.push(new Particle(this.x, this.y, { x: (this.velocity) / 2, y: (Math.random() - 0.5) / 2 }, this.particleTime));
            if (this.x < x) {
                this.r += 0.01;
            } else {
                this.r -= 0.01;
            }
            this.x -= this.velocity;
        }
        if (this.x == rectangle.x) {
            for (let i = 0; i < 20; i++) {
                particles.push(new Particle(this.x, this.y, { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 }, 50));
            }
            this.particleTime = 100;
            this.r = ((canvas.width / 2) / 12) / 4;
            this.opacity = 1;
            this.lineWidth = 5;
            changeChord();
            this.left = false;
        }
        if (this.x == rectangle.x + canvas.width / 2) {
            for (let i = 0; i < 20; i++) {
                particles.push(new Particle(this.x, this.y, { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 }, 50));
            }
            this.particleTime = 100;
            this.r = ((canvas.width / 2) / 12) / 4;
            this.opacity = 1;
            this.lineWidth = 5;
            changeChord();
            this.left = true;
        }
        this.draw();
    }
}

function changeChord() {
    if (chordToPlay == 'C') {
        CChord.play();
        chordToPlay = 'G';
    } else if (chordToPlay == 'G') {
        GChord.play();
        chordToPlay = 'Am';
    } else if (chordToPlay == 'Am') {
        AmChord.play();
        chordToPlay = 'F';
    } else if (chordToPlay == 'F') {
        FChord.play();
        chordToPlay = 'C';
    }
}