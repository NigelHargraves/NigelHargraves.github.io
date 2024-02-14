class Note {
    constructor(x, y, acceleration, note, speed, number) {
        this.x = x;
        this.y = y;
        this.acceleration = acceleration;
        this.note = note;
        this.speed = speed;
        this.number = number;
        this.r = 10;
        this.velocity = { x: 0, y: 0 };
        this.angle = 0;
        this.in = true;
        this.distance = 400;
        this.measure = this.distance;
        this.opacity = 1;
        this.bigOpacity = 1;
        this.lineWidth = 3;

    }
    draw() {
        //draw big circle.
        ctx.globalAlpha = this.bigOpacity;
        ctx.lineWidth = 0.2;
        ctx.beginPath();
        ctx.arc(x, y, 400, 0, Math.PI * 2);
        ctx.strokeStyle = strokeStyle;
        ctx.stroke();
        //draw Notes.
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = color[this.number];
        ctx.lineWidth = this.lineWidth;
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        //draw lines.
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.strokeStyle = 'white';
        ctx.globalAlpha = 0.4;
        ctx.lineWidth = 1;
    }
    update() {
        if (this.bigOpacity > 0.2) {
            this.bigOpacity -= 0.1;
        }
        if (this.opacity > 0.6) {
            this.opacity -= 0.01;
        }
        if (this.lineWidth > 0.2) {
            this.lineWidth -= 0.1;
        }
        if (this.in) {
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            this.measure -= this.acceleration;
            this.r /= 1.003;
            this.acceleration -= 0.001;
        } else {
            this.x -= this.velocity.x;
            this.y -= this.velocity.y;
            this.measure += this.acceleration;
            this.r *= 1.003;
            this.acceleration += 0.001;
        }

        if (this.measure <= 0) {

            this.in = false;
        }

        if (this.measure >= this.distance) {
            for (let i = 0; i < 10; i++) {
                dusts.push(new Dust(this.x, this.y, (this.velocity.x + Math.random() - 0.5) / 6, (this.velocity.y + Math.random() - 0.5) / 6, this.number));
            }
            strokeStyle = color[this.number];
            this.note.play();
            this.bigOpacity = 1;
            this.opacity = 1;
            this.lineWidth = 3;
            this.in = true;
        }

        this.angles = Math.atan2(y - this.y, x - this.x);
        this.velocity.x = Math.cos(this.angles) * this.acceleration;
        this.velocity.y = Math.sin(this.angles) * this.acceleration;






        this.draw();
    }
}

function forNotes() {

    if (chord.start) {
        if (chord.r == 1) {
            if (chord.chord == 'Am1' || chord.chord == 'Am2') {
                for (let i = 0; i < 24; i++) {
                    notes[i].note = chordAm1[i];
                }
            }
            if (chord.chord == 'Am3' || chord.chord == 'Am4') {
                for (let i = 0; i < 24; i++) {
                    notes[i].note = chordAm2[i];
                }
            }
            if (chord.chord == 'F1' || chord.chord == 'F2') {
                for (let i = 0; i < 24; i++) {
                    notes[i].note = chordF1[i];
                }
            }
            if (chord.chord == 'F3') {
                for (let i = 0; i < 24; i++) {
                    notes[i].note = chordF2[i];
                }
            }
            if (chord.chord == 'C1' || chord.chord == 'C2') {
                for (let i = 0; i < 24; i++) {
                    notes[i].note = chordC1[i];
                }
            }
            if (chord.chord == 'C3') {
                for (let i = 0; i < 24; i++) {
                    notes[i].note = chordC2[i];
                }
            }
            if (chord.chord == 'G1' || chord.chord == 'G2') {
                for (let i = 0; i < 24; i++) {
                    notes[i].note = chordG[i];
                }
            }
            if (chord.chord == 'E7') {
                for (let i = 0; i < 24; i++) {
                    notes[i].note = chordE7[i];
                }
            }
            if (chord.chord == 'Dm7') {
                for (let i = 0; i < 24; i++) {
                    notes[i].note = chordDm7[i];
                }
            }
            if (chord.chord == 'Gsus4') {
                for (let i = 0; i < 24; i++) {
                    notes[i].note = chordGsus4[i];
                }
            }
            if (chord.chord == 'Dm') {
                for (let i = 0; i < 24; i++) {
                    notes[i].note = chordDm[i];
                }
            }
        }
    }


    notes.forEach((note, index) => {
        note.update();
    });
}