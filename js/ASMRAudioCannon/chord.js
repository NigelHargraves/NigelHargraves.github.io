class Chord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 30;
        this.velocity = 0;
        this.gravity = 0.00001;
        this.acceleration = 0;
        this.lineWidth = 1;
        this.opacity = 0.001;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = this.lineWidth;
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.4;
    }
    update() {
        if (this.opacity < 1) {
            this.opacity += 0.0004;
        }

        this.lineWidth += 0.01;
        this.y += this.velocity;
        this.velocity += this.acceleration;
        this.acceleration += this.gravity;
        this.draw();
    }
}

function forChords() {
    chords.forEach((chord, index) => {
        if (chord.y >= canvas.height - chord.r) {
            if (!dontChangeChord) {
                changeChord();
            } else {
                drumBass.play();
                DBass.play();
                DChord.play();
                dontChangeChord = false;
            }

            for (let i = 0; i < 100; i++) {
                particles.push(new Particle(chord.x, chord.y + chord.r, { x: Math.random() - 0.5, y: Math.random() - 1 }));
            }
            chords.splice(index, 1);
        }
        chord.update();
    });
}

function changeChord() {
    // noteNumber = 0;
    if (chordToPlay == 'D1') {
        chordToPlay = 'A1';
        drumBass.play();
        CSBass.play();
        AChord.play();
    } else if (chordToPlay == 'A1') {
        chordToPlay = 'Bm';
        drumBass.play();
        BBass.play();
        BmChord.play();
    } else if (chordToPlay == 'Bm') {
        chordToPlay = 'F#m';
        drumBass.play();
        ABass.play();
        FSmChord.play();
    } else if (chordToPlay == 'F#m') {
        chordToPlay = 'G1';
        drumBass.play();
        BBass.play();
        GChord.play();
    } else if (chordToPlay == 'G1') {
        chordToPlay = 'D2';
        drumBass.play();
        FSBass.play();
        DChord.play();
    } else if (chordToPlay == 'D2') {
        chordToPlay = 'G2';
        drumBass.play();
        BBass.play();
        GChord.play();
    } else if (chordToPlay == 'G2') {
        chordToPlay = 'A2';
        drumBass.play();
        CSBass.play();
        AChord.play();
    } else if (chordToPlay == 'A2') {
        chordToPlay = 'D1';
        drumBass.play();
        DBass.play();
        DChord.play();
    }


    if (chordToPlay == 'D1' || chordToPlay == 'D2') {
        for (let i = 0; i < notes.length; i++) {
            notes[i].note = chordD[i];
        }
    }
    if (chordToPlay == 'A1' || chordToPlay == 'A2') {
        for (let i = 0; i < notes.length; i++) {
            notes[i].note = chordA[i];
        }
    }
    if (chordToPlay == 'Bm') {
        for (let i = 0; i < notes.length; i++) {
            notes[i].note = chordBm[i];
        }
    }
    if (chordToPlay == 'F#m') {
        for (let i = 0; i < notes.length; i++) {
            notes[i].note = chordF$m[i];
        }
    }
    if (chordToPlay == 'G1' || chordToPlay == 'G2') {
        for (let i = 0; i < notes.length; i++) {
            notes[i].note = chordG[i];
        }
    }

}