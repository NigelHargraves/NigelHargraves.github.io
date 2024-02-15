class Note {
    constructor(x, y, velocity, note) {
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.note = note;
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
            this.y -= this.velocity;
        } else {
            this.y += this.velocity;
        }
        if (this.y >= rectangle.y + canvas.height / 2) {
            this.note.play();
            this.y = rectangle.y + canvas.height / 2;
            this.opacity = 1;
            this.lineWidth = 5;
            this.up = true;
        }
        if (this.y <= rectangle.y) {
            this.note.play();
            this.y = rectangle.y;
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