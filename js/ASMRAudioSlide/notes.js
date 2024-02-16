class Note {
    constructor(x, y, velocity, note, acceleration) {
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.setVelocity = this.velocity;
        this.note = note;
        this.acceleration = acceleration;
        this.r = ((canvas.width / 2) / 12) / 4;
        this.up = false;
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
            for (let i = 0; i < 10; i++) {
                particles.push(new Particle((this.x - this.r * 2) + Math.random() * (this.r * 4), this.y, { x: 0, y: (-this.velocity + Math.random()) / 2 }, 40));
            }
            this.velocity = this.setVelocity;
            this.r = ((canvas.width / 2) / 12) / 4;
            this.note.play();
            this.y = rectangle.y + canvas.height / 2;
            bounceLines.push(new BounceLine(this.x - rectangle.space / 2, this.y, false));
            this.opacity = 1;
            this.lineWidth = 5;
            this.up = true;
        }
        if (this.y <= rectangle.y) {
            for (let i = 0; i < 10; i++) {
                particles.push(new Particle((this.x - this.r * 2) + Math.random() * (this.r * 4), this.y, { x: 0, y: (this.velocity + Math.random()) / 2 }, 40));
            }
            this.velocity = this.setVelocity;
            this.r = ((canvas.width / 2) / 12) / 4;
            this.note.play();
            this.y = rectangle.y;
            bounceLines.push(new BounceLine(this.x - rectangle.space / 2, this.y, true));
            this.opacity = 1;
            this.lineWidth = 5;
            this.up = false;
        }
        this.draw();
    }
}

function forNotes() {

    if (chordToPlay == 'G') {
        for (let i = 0; i < 12; i++) {
            notes[i].note = chordC[i];
        }
    }
    if (chordToPlay == 'Am') {
        for (let i = 0; i < 12; i++) {
            notes[i].note = chordG[i];
        }
    }
    if (chordToPlay == 'F') {
        for (let i = 0; i < 12; i++) {
            notes[i].note = chordAm[i];
        }
    }
    if (chordToPlay == 'C') {
        for (let i = 0; i < 12; i++) {
            notes[i].note = chordF[i];
        }
    }


    notes.forEach((note, index) => {
        note.update();
    });
}