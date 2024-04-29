class Chord {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.r = radius;
        this.swing = this.x;
        this.angle = -1;
        this.velocity = 0;
        this.acceleration = 0;
        this.force = 0;
        this.delay = 1000;
        this.lineWidth = 10;
    }
    draw() {
        ctx.strokeStyle = 'aquamarine';
        ctx.fillStyle = 'aquamarine';


        ctx.lineWidth = this.lineWidth;

        //draw chord.
        ctx.beginPath();
        ctx.arc(this.x, this.y, 50, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.lineWidth = 1;
    }
    update() {

        if (this.lineWidth > 0.4) {
            this.lineWidth -= 0.01;
        }

        //calculate pendulum movement.
        this.force = gravity * Math.sin(this.angle);
        this.acceleration = (-1 * this.force) / this.r;
        this.velocity += this.acceleration;
        this.angle += this.velocity;
        this.x = this.r * Math.sin(this.angle) + center.x;
        this.y = this.r * Math.cos(this.angle);






        if (this.y < center.y) {
            if (this.delay == 0) {
                for (let i = 0; i < 50; i++) {
                    particles.push(new Particle(this.x, this.y, 'aquamarine', { x: (Math.random() - 0.5) / Math.random(), y: (Math.random() - 0.5) / Math.random() }));
                }
                if (this.x < center.x) {
                    road.leftRoad = 'aquamarine';
                } else {
                    road.rightRoad = 'aquamarine';
                }
                chordChange();
                this.delay = 1000;
            }
            this.lineWidth = 10;
        }


        if (this.delay > 0) {
            this.delay -= 1;
        }



        this.draw();
    }
}

function chordChange() {
    if (chordToPlay == 'Cm') {
        chordToPlay = 'B';
        BBass.play();
        BChord.play();
    } else if (chordToPlay == 'B') {
        chordToPlay = 'Am';
        ABass.play();
        AmChord.play();
    } else if (chordToPlay == 'Am') {
        chordToPlay = 'G';
        GBass.play();
        GChord.play();
    } else if (chordToPlay == 'G') {
        chordToPlay = 'Fm';
        FBass.play();
        FmChord.play();
    } else if (chordToPlay == 'Fm') {
        chordToPlay = 'E';
        EBass.play();
        EChord.play();
    } else if (chordToPlay == 'E') {
        chordToPlay = 'Dm';
        DBass.play();
        DmChord.play();
    } else if (chordToPlay == 'Dm') {
        chordToPlay = 'C';
        CBass.play();
        CChord.play();
    } else if (chordToPlay == 'C') {
        chordToPlay = 'Bm';
        BBass.play();
        BmChord.play();
    } else if (chordToPlay == 'Bm') {
        chordToPlay = 'A';
        ABass.play();
        AChord.play();
    } else if (chordToPlay == 'A') {
        chordToPlay = 'Gm';
        GBass.play();
        GmChord.play();
    } else if (chordToPlay == 'Gm') {
        chordToPlay = 'F';
        FBass.play();
        FChord.play();
    } else if (chordToPlay == 'F') {
        chordToPlay = 'Em';
        EBass.play();
        EmChord.play();
    } else if (chordToPlay == 'Em') {
        chordToPlay = 'D';
        DBass.play();
        DChord.play();
    } else if (chordToPlay == 'D') {
        chordToPlay = 'Cm';
        CBass.play();
        CmChord.play();
    }



    if (chordToPlay == 'C') {
        for (let i = 0; i < 12; i++) {
            notesRight[i].note = chordC[i];
            notesLeft[i].note = chordC[i + 12];
        }
    }

    if (chordToPlay == 'Cm') {
        for (let i = 0; i < 12; i++) {
            notesRight[i].note = chordCm[i];
            notesLeft[i].note = chordCm[i + 12];
        }
    }

    if (chordToPlay == 'D') {
        for (let i = 0; i < 12; i++) {
            notesRight[i].note = chordD[i];
            notesLeft[i].note = chordD[i + 12];
        }
    }

    if (chordToPlay == 'Dm') {
        for (let i = 0; i < 12; i++) {
            notesRight[i].note = chordDm[i];
            notesLeft[i].note = chordDm[i + 12];
        }
    }

    if (chordToPlay == 'E') {
        for (let i = 0; i < 12; i++) {
            notesRight[i].note = chordE[i];
            notesLeft[i].note = chordE[i + 12];
        }
    }

    if (chordToPlay == 'Em') {
        for (let i = 0; i < 12; i++) {
            notesRight[i].note = chordEm[i];
            notesLeft[i].note = chordEm[i + 12];
        }
    }

    if (chordToPlay == 'F') {
        for (let i = 0; i < 12; i++) {
            notesRight[i].note = chordF[i];
            notesLeft[i].note = chordF[i + 12];
        }
    }

    if (chordToPlay == 'Fm') {
        for (let i = 0; i < 12; i++) {
            notesRight[i].note = chordFm[i];
            notesLeft[i].note = chordFm[i + 12];
        }
    }

    if (chordToPlay == 'G') {
        for (let i = 0; i < 12; i++) {
            notesRight[i].note = chordG[i];
            notesLeft[i].note = chordG[i + 12];
        }
    }

    if (chordToPlay == 'Gm') {
        for (let i = 0; i < 12; i++) {
            notesRight[i].note = chordGm[i];
            notesLeft[i].note = chordGm[i + 12];
        }
    }

    if (chordToPlay == 'A') {
        for (let i = 0; i < 12; i++) {
            notesRight[i].note = chordA[i];
            notesLeft[i].note = chordA[i + 12];
        }
    }

    if (chordToPlay == 'Am') {
        for (let i = 0; i < 12; i++) {
            notesRight[i].note = chordAm[i];
            notesLeft[i].note = chordAm[i + 12];
        }
    }

    if (chordToPlay == 'B') {
        for (let i = 0; i < 12; i++) {
            notesRight[i].note = chordB[i];
            notesLeft[i].note = chordB[i + 12];
        }
    }

    if (chordToPlay == 'Bm') {
        for (let i = 0; i < 12; i++) {
            notesRight[i].note = chordBm[i];
            notesLeft[i].note = chordBm[i + 12];
        }
    }
}