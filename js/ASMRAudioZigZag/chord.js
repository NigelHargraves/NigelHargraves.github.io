class Chord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.opacity = 1;
        this.lineWidth = 5;
        this.speed = 1;
        this.velocity = { x: 0, y: 0 };
        this.detectionTimer = 100;
        this.angle = 0;
        this.aim = { x: cRight, y: cbottom };
    }
    draw() {
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'white';
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, Math.PI * 2);
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
    update() {
        if (this.lineWidth > 1) {
            this.lineWidth -= 0.1;
        }

        if (this.opacity > 0.2) {
            this.opacity -= 0.01;
        }

        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.angle = Math.atan2(this.aim.y - this.y, this.aim.x - this.x);
        this.velocity.x = Math.cos(this.angle) * this.speed;
        this.velocity.y = Math.sin(this.angle) * this.speed;

        if (this.detectionTimer > 0) {
            this.detectionTimer -= 1;
        }

        if (this.x >= cLeft - 1 && this.x <= cLeft + 1 && this.y >= cTop - 1 && this.y <= cTop + 1 && this.detectionTimer == 0) {
            changeChord();
            this.lineWidth = 5;
            this.opacity = 1;
            this.aim = { x: cRight, y: cbottom };
            this.y = cTop;
            this.detectionTimer = 100;
            this.x = cLeft;
        }

        if (this.x >= cLeft - 1 && this.x <= cLeft + 1 && this.y >= cbottom - 1 && this.y <= cbottom + 1 && this.detectionTimer == 0) {
            changeChord();
            this.lineWidth = 5;
            this.opacity = 1;
            this.aim = { x: cLeft, y: cTop };
            this.y = cbottom;
            this.detectionTimer = 100;
            this.x = cLeft;
        }

        if (this.x >= cRight - 1 && this.x <= cRight + 1 && this.y >= cbottom - 1 && this.y <= cbottom + 1 && this.detectionTimer == 0) {
            changeChord();
            this.lineWidth = 5;
            this.opacity = 1;
            this.aim = { x: cRight, y: cTop };
            this.y = cbottom;
            this.detectionTimer = 100;
            this.x = cRight;
        }

        if (this.x >= cRight - 1 && this.x <= cRight + 1 && this.y >= cTop - 1 && this.y <= cTop + 1 && this.detectionTimer == 0) {
            changeChord();
            this.lineWidth = 5;
            this.opacity = 1;
            this.aim = { x: cLeft, y: cbottom };
            this.y = cTop;
            this.detectionTimer = 100;
            this.x = cRight;
        }

        this.draw();
    }
}

function changeChord() {
    if (chordToPlay == 'E1') {
        chordToPlay = 'A1';

    } else if (chordToPlay == 'A1') {
        chordToPlay = 'E2';

    } else if (chordToPlay == 'E2') {
        chordToPlay = 'A2';

    } else if (chordToPlay == 'A2') {
        chordToPlay = 'E3';

    } else if (chordToPlay == 'E3') {
        chordToPlay = 'B';

    } else if (chordToPlay == 'B') {
        chordToPlay = 'A3';

    } else if (chordToPlay == 'A3') {
        chordToPlay = 'Gsus4';

    } else if (chordToPlay == 'Gsus4') {
        chordToPlay = 'C1';

    } else if (chordToPlay == 'C1') {
        chordToPlay = 'F1';

    } else if (chordToPlay == 'F1') {
        chordToPlay = 'C2';

    } else if (chordToPlay == 'C2') {
        chordToPlay = 'F2';

    } else if (chordToPlay == 'F2') {
        chordToPlay = 'C3';

    } else if (chordToPlay == 'C3') {
        chordToPlay = 'G';

    } else if (chordToPlay == 'G') {
        chordToPlay = 'F#m7';

    } else if (chordToPlay == 'F#m7') {
        chordToPlay = 'Bsus4';

    } else if (chordToPlay == 'Bsus4') {
        chordToPlay = 'E1';

    }

    if (chordToPlay == 'E1' || chordToPlay == 'E2' || chordToPlay == 'E3') {
        for (let i = 0; i < 36; i++) {
            notes[i].note = chordE[i];
        }
    }

    if (chordToPlay == 'A1' || chordToPlay == 'A2' || chordToPlay == 'A3') {
        for (let i = 0; i < 36; i++) {
            notes[i].note = chordA[i];
        }
    }

    if (chordToPlay == 'B') {
        for (let i = 0; i < 36; i++) {
            notes[i].note = chordB[i];
        }
    }

    if (chordToPlay == 'Gsus4') {
        for (let i = 0; i < 36; i++) {
            notes[i].note = chordGsus4[i];
        }
    }

    if (chordToPlay == 'G') {
        for (let i = 0; i < 36; i++) {
            notes[i].note = chordG[i];
        }
    }

    if (chordToPlay == 'F#m7') {
        for (let i = 0; i < 36; i++) {
            notes[i].note = chordFSm7[i];
        }
    }

    if (chordToPlay == 'C1' || chordToPlay == 'C2' || chordToPlay == 'C3') {
        for (let i = 0; i < 36; i++) {
            notes[i].note = chordC[i];
        }
    }

    if (chordToPlay == 'F1' || chordToPlay == 'F2') {
        for (let i = 0; i < 36; i++) {
            notes[i].note = chordF[i];
        }
    }

    if (chordToPlay == 'Bsus4') {
        for (let i = 0; i < 36; i++) {
            notes[i].note = chordBsus4[i];
        }
    }
}