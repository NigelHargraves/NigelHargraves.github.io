class Note {
    constructor(x, y, speed, angle, color, note) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.angle = angle;
        this.color = color;
        this.note = note;
        this.smallRadius = 10;
        this.bigRadius = { x: canvas.height / 4, y: canvas.height / 8 };
        this.point = { x: 0, y: 0 };
        this.lineWidth = 1;
        this.opacity = 0.2;
    }
    draw() {
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(oval.rotation.x);
        ctx.beginPath();
        ctx.arc(0 + this.point.x, 0 + this.point.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(0 + this.point.x, 0 + this.point.y, this.smallRadius, 0, Math.PI * 2);
        ctx.lineWidth = this.lineWidth;
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.4;
        ctx.restore();
    }
    update() {

        if (this.lineWidth > 1) {
            this.lineWidth -= 0.1;
        }

        if (this.opacity > 0.2) {
            this.opacity -= 0.01;
        }

        this.point.x = oval.radius.x * Math.cos(this.angle);
        this.point.y = oval.radius.y * Math.sin(this.angle);

        this.angle += (Math.PI / 180) / this.speed;
        if (this.angle >= Math.PI * 2) {
            this.angle = 0;
        }

        if (this.x + this.point.x <= center.x + 2 && this.x + this.point.x >= center.x - 2) {
            this.note.play();
            for (let i = 0; i < 10; i++) {
                particles.push(new Particle(this.point.x, this.point.y, this.color));
            }
            chord.color = this.color;
            this.lineWidth = 3;
            this.opacity = 1;
        }

        this.draw();
    }
}

function forNote() {
    if (chordToPlay == 'Am') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordAm[i];
        }
    }
    if (chordToPlay == 'C') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordC[i];
        }
    }
    if (chordToPlay == 'Bm') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordBm[i];
        }
    }
    if (chordToPlay == 'D') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordD[i];
        }
    }
    if (chordToPlay == 'Cm') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordCm[i];
        }
    }
    if (chordToPlay == 'E') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordE[i];
        }
    }
    if (chordToPlay == 'Dm') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordDm[i];
        }
    }
    if (chordToPlay == 'F') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordF[i];
        }
    }
    if (chordToPlay == 'Em') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordEm[i];
        }
    }
    if (chordToPlay == 'G') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordG[i];
        }
    }
    if (chordToPlay == 'Fm') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordFm[i];
        }
    }
    if (chordToPlay == 'A') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordA[i];
        }
    }
    if (chordToPlay == 'Gm') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordGm[i];
        }
    }
    if (chordToPlay == 'B') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordB[i];
        }
    }
    notes.forEach((note, index) => {
        note.update();
    });
}