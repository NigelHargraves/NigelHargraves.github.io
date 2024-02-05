class Note {
    constructor(x, y, note) {
        this.x = x;
        this.y = y;
        this.note = note;
        this.r = 10;
        this.velocity = { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 };
        this.opacity = 0.2;
        this.noteLife = 500;
        this.lineWidth = 1;
    }
    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = "deepskyblue";
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.globalApha = 1;
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        if (this.x + this.r >= canvas.width || this.x - this.r <= 0) {
            this.velocity.x = -this.velocity.x;
            this.note.play();
            this.opacity = 1;
            this.lineWidth = 3;
        }
        if (this.y + this.r >= canvas.height || this.y - this.r <= 0) {
            this.velocity.y = -this.velocity.y;
            this.note.play();
            this.opacity = 1;
            this.lineWidth = 3;
        }

        if (this.opacity > 0.2) {
            stars.push(new Star(this.x, this.y, starDSB));
            this.opacity -= 0.01;
        }

        if (this.lineWidth > 1) {
            this.lineWidth -= 0.1;
        }

        this.noteLife -= 0.1;

        this.draw();
    }
}

function forNote() {
    notes.forEach((note, index) => {
        //change chord.
        if (chordChange == 'C' && changeChordNotes) {
            if (note.note == d) {
                note.note = c;
            }
            if (note.note == g) {
                note.note = e;
            }
            if (note.note == b) {
                note.note = g;
            }
        }

        if (chordChange == 'D' && changeChordNotes) {
            if (note.note == c) {
                note.note = d;
            }
            if (note.note == e) {
                note.note = fs;
            }
            if (note.note == g) {
                note.note = a;
            }
        }

        if (chordChange == 'F' && changeChordNotes) {
            if (note.note == d) {
                note.note = c;
            }
            if (note.note == fs) {
                note.note = f;
            }
            if (note.note == a) {
                note.note = a;
            }
        }


        if (chordChange == 'G' && changeChordNotes) {
            if (note.note == c) {
                note.note = d;
            }
            if (note.note == f) {
                note.note = g;
            }
            if (note.note == a) {
                note.note = b;
            }
        }

        if (note.noteLife <= 0) {
            notes.splice(index, 1);
        }


        if (note.x <= (canvas.width / 2) + 0.4 && note.x >= (canvas.width / 2) - 0.4) {
            note.note.play();
            note.opacity = 1;
            note.lineWidth = 3;
            cross.opacity = 1;
        }

        if (note.y <= (canvas.height / 2) + 0.4 && note.y >= (canvas.height / 2) - 0.4) {
            note.note.play();
            note.opacity = 1;
            note.lineWidth = 3;
            cross.opacity = 1;
        }







        note.update();
    });
    changeChordNotes = false;
}