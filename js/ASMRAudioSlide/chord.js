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
        this.color = colors[13];
    }
    draw() {
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
        ctx.fill();
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
            particles.push(new Particle(this.x, this.y, { x: (-this.velocity) / 2, y: (Math.random() - 0.5) / 2 }, this.particleTime, this.color, 0.2));
            if (this.x < x) {
                this.r += 0.03;
            } else {
                this.r -= 0.03;
            }
            this.x += this.velocity;
        } else {
            this.particleTime -= 0.1;
            particles.push(new Particle(this.x, this.y, { x: (this.velocity) / 2, y: (Math.random() - 0.5) / 2 }, this.particleTime, this.color, 0.2));
            if (this.x < x) {
                this.r += 0.01;
            } else {
                this.r -= 0.01;
            }
            this.x -= this.velocity;
        }
        if (this.x == rectangle.x) {
            for (let i = 0; i < 40; i++) {
                particles.push(new Particle(this.x, this.y, { x: (Math.random() - 0.5) / Math.random(), y: (Math.random() - 0.5) / Math.random() }, 50, this.color, 0.2));
            }
            this.particleTime = 100;
            this.r = ((canvas.width / 2) / 12) / 4;
            this.opacity = 1;
            this.lineWidth = 5;
            changeChord();
            this.left = false;
        }
        if (this.x == rectangle.x + canvas.width / 2) {
            for (let i = 0; i < 40; i++) {
                particles.push(new Particle(this.x, this.y, { x: (Math.random() - 0.5) / Math.random(), y: (Math.random() - 0.5) / Math.random() }, 50, this.color, 0.2));
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
    if (chordToPlay == 'C1') {
        chordToPlay = 'G1';
    } else if (chordToPlay == 'G1') {
        chordToPlay = 'Am1';
    } else if (chordToPlay == 'Am1') {
        chordToPlay = 'F1';
    } else if (chordToPlay == 'F1') {
        chordToPlay = 'C2';
    } else if (chordToPlay == 'C2') {
        chordToPlay = 'Am2';
    } else if (chordToPlay == 'Am2') {
        chordToPlay = 'F2';
    } else if (chordToPlay == 'F2') {
        chordToPlay = 'G2';
    } else if (chordToPlay == 'G2') {
        chordToPlay = 'C1';
    }
    crash.play();
    if (chordToPlay == 'C1') {
        CChord.play();
    } else if (chordToPlay == 'G1') {
        GChord.play();
    } else if (chordToPlay == 'Am1') {
        AmChord.play();
    } else if (chordToPlay == 'F1') {
        FChord.play();
    } else if (chordToPlay == 'C2') {
        CChord.play();
    } else if (chordToPlay == 'Am2') {
        AmChord.play();
    } else if (chordToPlay == 'F2') {
        FChord.play();
    } else if (chordToPlay == 'G2') {
        GChord.play()
    }
}