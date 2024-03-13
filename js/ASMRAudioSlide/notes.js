class Note {
    constructor(x, y, velocity, note, acceleration, color) {
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.setVelocity = this.velocity;
        this.note = note;
        this.acceleration = acceleration;
        this.color = color;
        this.r = ((canvas.width / 2) / 12) / 4;
        this.up = false;
        this.opacity = 1;
        this.lineWidth = 5;
    }
    draw() {
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
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
        if (this.up) {

            if (this.y < rectangle.y + canvas.height / 4) {
                this.r += 0.03;
            } else {
                this.r -= 0.03;
            }
            if (this.y > y) {
                this.velocity += this.acceleration;
            } else {
                this.velocity -= this.acceleration;
            }
            this.y -= this.velocity;
        } else {
            if (this.y < rectangle.y + canvas.height / 4) {
                this.r += 0.07;
            } else {
                this.r -= 0.07;
            }
            if (this.y < y) {
                this.velocity += this.acceleration;
            } else {
                this.velocity -= this.acceleration;
            }
            this.y += this.velocity;
        }
        if (this.y >= rectangle.y + canvas.height / 2) {
            this.velocity = this.setVelocity;
            for (let i = 0; i < 10; i++) {
                particles.push(new Particle((this.x - rectangle.space / 2) + Math.random() * rectangle.space, this.y, { x: 0, y: Math.random() * -2 }, 40, this.color, 0.4));
            }
            this.r = ((canvas.width / 2) / 12) / 4;
            this.note.play();
            this.y = rectangle.y + canvas.height / 2;
            bounceLines.push(new BounceLine(this.x - rectangle.space / 2, this.y, false, this.color));
            this.opacity = 1;
            this.lineWidth = 5;
            this.up = true;
        }
        if (this.y <= rectangle.y) {
            this.velocity = this.setVelocity;
            for (let i = 0; i < 10; i++) {
                particles.push(new Particle((this.x - rectangle.space / 2) + Math.random() * rectangle.space, this.y, { x: 0, y: Math.random() * 2 }, 40, this.color, 0.4));
            }
            this.r = ((canvas.width / 2) / 12) / 4;
            this.note.play();
            this.y = rectangle.y;
            bounceLines.push(new BounceLine(this.x - rectangle.space / 2, this.y, true, this.color));
            this.opacity = 1;
            this.lineWidth = 5;
            this.up = false;
        }
        this.draw();
    }
}

function forNotes() {
    if (chordToPlay == 'C1' || chordToPlay == 'C2') {
        for (let i = 0; i < 12; i++) {
            notes[i].note = chordC[i];
        }
    }
    if (chordToPlay == 'G1' || chordToPlay == 'G2') {
        for (let i = 0; i < 12; i++) {
            notes[i].note = chordG[i];
        }
    }
    if (chordToPlay == 'Am1' || chordToPlay == 'Am2') {
        for (let i = 0; i < 12; i++) {
            notes[i].note = chordAm[i];
        }
    }
    if (chordToPlay == 'F1' || chordToPlay == 'F2') {
        for (let i = 0; i < 12; i++) {
            notes[i].note = chordF[i];
        }
    }
    notes.forEach((note, index) => {
        note.update();
    });
}