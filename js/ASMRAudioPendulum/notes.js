class Note {
    constructor(x, y, radius, note, number) {
        this.x = x;
        this.y = y;
        this.r = radius;
        this.note = note;
        this.number = number;
        this.swing = this.x;
        this.angle = -0.57;
        this.velocity = 0;
        this.acceleration = 0;
        this.force = 0;
        this.opacity = 1;
        this.lineWidth = 3;
    }
    draw() {
        ctx.strokeStyle = color[this.number];
        ctx.fillStyle = color[this.number];
        //draw pendulum arm.
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(x, 0);
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        //draw note.
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 0.4;
        ctx.lineWidth = 1;
    }
    update() {

        if (this.opacity > 0.4) {
            this.opacity -= 0.01;
        }
        if (this.lineWidth > 0.4) {
            this.lineWidth -= 0.01;
        }

        //calculate pendulum movement.
        this.force = gravity * Math.sin(this.angle);
        this.acceleration = (-1 * this.force) / this.r;
        this.velocity += this.acceleration;
        this.angle += this.velocity;
        this.x = this.r * Math.sin(this.angle) + x;
        this.y = this.r * Math.cos(this.angle);


        if (this.x <= this.swing + 0.1 && this.x >= this.swing - 0.1) {
            velocity = { x: Math.random() - 0.5, y: Math.random() - 0.5 };
            particles.push(new Particle(this.x, this.y, color[this.number], velocity));
            this.note.play();
            this.lineWidth = 3;
            this.opacity = 1;
            lines.lineWidthLeft = 3;
            lines.opacityLeft = 1;
            lines.colorLeft = color[this.number];
        }
        if (this.x <= x + (x - this.swing) + 0.1 && this.x >= x + (x - this.swing) - 0.1) {
            velocity = { x: Math.random() - 0.5, y: Math.random() - 0.5 };
            particles.push(new Particle(this.x, this.y, color[this.number], velocity));
            this.note.play();
            this.lineWidth = 3;
            this.opacity = 1;
            lines.lineWidthRight = 3;
            lines.opacityRight = 1;
            lines.colorRight = color[this.number];
        }

        if (this.x <= this.swing + 0.1 && this.x >= this.swing - 0.1) {
            this.x = this.swing;
        }

        this.draw();
    }
}

function forNotes() {
    if (chordToPlay == 'Am1' || chordToPlay == 'Am2' || chordToPlay == 'Am3' || chordToPlay == 'Am4') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordAm[i];
        }
    }
    if (chordToPlay == 'F1' || chordToPlay == 'F2' || chordToPlay == 'F3') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordF[i];
        }
    }
    if (chordToPlay == 'C1' || chordToPlay == 'C2' || chordToPlay == 'C3') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordC[i];
        }
    }
    if (chordToPlay == 'G1' || chordToPlay == 'G2') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordG[i];
        }
    }
    if (chordToPlay == 'Em') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordEm[i];
        }
    }
    if (chordToPlay == 'Dm7') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordDm7[i];
        }
    }
    if (chordToPlay == 'Gsus4') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordGsus4[i];
        }
    }
    if (chordToPlay == 'E71' || chordToPlay == 'E72') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordE7[i];
        }
    }

    notes.forEach((note, index) => {
        note.update();
    });
}