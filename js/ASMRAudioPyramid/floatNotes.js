class FloatNote {
    constructor() {
        this.x = center.x;
        this.y = center.y;
        this.r = 10;
        this.velocity = { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 };
        this.expire = false;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = "aqua";
        ctx.stroke();
    }
    update() {
        if (!this.expire) {
            this.x += this.velocity.x;
            this.y += this.velocity.y;
        } else {
            this.r -= 1;
        }
        this.draw();
    }
}









function forFloatNotes() {

    floatNotes.forEach((fn, index) => {

        if (fn.x + fn.r >= canvas.width || fn.x - fn.r <= 0) {
            fn.expire = true;
        }
        if (fn.y + fn.r >= canvas.height || fn.y - fn.r <= 0) {
            fn.expire = true;
        }

        if (fn.r <= 1) {
            for (let i = 0; i < 10; i++) {
                edgeSplats.push(new EdgeSplat(fn.x, fn.y));
            }
            if (chordToPlay == 'Am') {
                if (chordAmS[floatNoteNote].currentTime != 0) chordAmS[floatNoteNote].currentTime = 0;
                chordAmS[floatNoteNote].play();
            }
            if (chordToPlay == 'F') {
                if (chordFS[floatNoteNote].currentTime != 0) chordFS[floatNoteNote].currentTime = 0;
                chordFS[floatNoteNote].play();
            }
            if (chordToPlay == 'C1' || chordToPlay == 'C2') {
                if (chordCS[floatNoteNote].currentTime != 0) chordCS[floatNoteNote].currentTime = 0;
                chordCS[floatNoteNote].play();
            }
            if (chordToPlay == 'G') {
                if (chordGS[floatNoteNote].currentTime != 0) chordGS[floatNoteNote].currentTime = 0;
                chordGS[floatNoteNote].play();
            }
            if (chordToPlay == 'Em') {
                if (chordEmS[floatNoteNote].currentTime != 0) chordEmS[floatNoteNote].currentTime = 0;
                chordEmS[floatNoteNote].play();
            }
            if (chordToPlay == 'Dm') {
                if (chordDmS[floatNoteNote].currentTime != 0) chordDmS[floatNoteNote].currentTime = 0;
                chordDmS[floatNoteNote].play();
            }
            if (chordToPlay == 'Gsus4') {
                if (chordGsus4S[floatNoteNote].currentTime != 0) chordGsus4S[floatNoteNote].currentTime = 0;
                chordGsus4S[floatNoteNote].play();
            }
            floatNoteNote++;
            if (floatNoteNote == 18) floatNoteNote = 0;
            floatNotes.splice(index, 1);
        }

        fn.update();
    });
}