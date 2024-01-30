class Chord {
    constructor(x, y, chord) {
        this.x = x;
        this.y = y;
        this.chord = chord;
        this.r = 30;
        this.velocity = { x: (Math.random() - 0.5) * 3, y: (Math.random() - 0.5) * 3 };
        this.opacity = 1;
    }
    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = "red";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, 0);
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, canvas.height);
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(0, this.y);
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(canvas.width, this.y);
        ctx.stroke();
        ctx.globalApha = 1;
    }
    update() {
        let note1;
        let note2;
        let note3;
        let upperNote1;
        let upperNote2;
        let upperNote3;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        if (this.x + this.r >= canvas.width || this.x - this.r <= 0) {
            this.velocity.x = -this.velocity.x;
            if (chordChange == 'C') {
                chordChange = 'D';
                DBass.play();
            } else if (chordChange == 'D') {
                chordChange = 'F';
                FBass.play();
            } else if (chordChange == 'F') {
                chordChange = 'G';
                GBass.play();
            } else {
                chordChange = 'C';
                CBass.play();
            }
            changeChordNotes = true;
            changeChordUpperNotes = true;
            this.opacity = 1;

            if (chordChange == 'C') {
                note1 = c;
                note2 = e;
                note3 = g;
                upperNote1 = C;
                upperNote2 = E;
                upperNote3 = G;
            } else if (chordChange == 'D') {
                note1 = d;
                note2 = fs;
                note3 = a;
                upperNote1 = D;
                upperNote2 = FS;
                upperNote3 = A;
            } else if (chordChange == 'F') {
                note1 = c;
                note2 = a;
                note3 = f;
                upperNote1 = C;
                upperNote2 = A;
                upperNote3 = F;
            } else if (chordChange == 'G') {
                note1 = d;
                note2 = g;
                note3 = b;
                upperNote1 = D;
                upperNote2 = G;
                upperNote3 = B;
            }
            notes.push(new Note(this.x, this.y, note1));
            notes.push(new Note(this.x, this.y, note2));
            notes.push(new Note(this.x, this.y, note3));
            upperNotes.push(new UpperNote(this.x, this.y, upperNote1));
            upperNotes.push(new UpperNote(this.x, this.y, upperNote2));
            upperNotes.push(new UpperNote(this.x, this.y, upperNote3));
        }

        if (this.y + this.r >= canvas.height || this.y - this.r <= 0) {
            this.velocity.y = -this.velocity.y;
            if (chordChange == 'C') {
                chordChange = 'D';
                DBass.play();
            } else if (chordChange == 'D') {
                chordChange = 'F';
                FBass.play();
            } else if (chordChange == 'F') {
                chordChange = 'G';
                GBass.play();
            } else {
                chordChange = 'C';
                CBass.play();
            }
            changeChordNotes = true;
            changeChordUpperNotes = true;
            this.opacity = 1;


            if (chordChange == 'C') {
                note1 = c;
                note2 = e;
                note3 = g;
                upperNote1 = C;
                upperNote2 = E;
                upperNote3 = G;
            } else if (chordChange == 'D') {
                note1 = d;
                note2 = fs;
                note3 = a;
                upperNote1 = D;
                upperNote2 = FS;
                upperNote3 = A;
            } else if (chordChange == 'F') {
                note1 = c;
                note2 = a;
                note3 = f;
                upperNote1 = C;
                upperNote2 = A;
                upperNote3 = F;
            } else if (chordChange == 'G') {
                note1 = d;
                note2 = g;
                note3 = b;
                upperNote1 = D;
                upperNote2 = G;
                upperNote3 = B;
            }
            notes.push(new Note(this.x, this.y, note1));
            notes.push(new Note(this.x, this.y, note2));
            notes.push(new Note(this.x, this.y, note3));
            upperNotes.push(new UpperNote(this.x, this.y, upperNote1));
            upperNotes.push(new UpperNote(this.x, this.y, upperNote2));
            upperNotes.push(new UpperNote(this.x, this.y, upperNote3));
        }

        if (this.opacity > 0.2) {
            stars.push(new Star(this.x, this.y, starRed));
            this.opacity -= 0.01;
        }

        this.draw();
    }
}

function forChord() {
    chords.forEach((chord, index) => {

        chord.update();
    });
}