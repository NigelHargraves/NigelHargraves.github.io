class Chord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.color = 'white';
        this.chordColor = 'blueviolet';
        this.opacity = 1;
        this.lineWidth = 5;
        this.velocity = 1;
        this.up = false;
        this.dontChangeChord = true;
        this.timer = 100;
    }
    draw() {
        ctx.save();
        ctx.translate(center.x, center.y);
        ctx.rotate(oval.rotation.x);
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(0, -center.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(0, center.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(0, -center.y);
        ctx.lineTo(0, center.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, Math.PI * 2);
        ctx.strokeStyle = this.chordColor;
        ctx.fillStyle = this.chordColor;
        ctx.lineWidth = this.lineWidth;
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        ctx.globalAlpha = 0.4;

    }
    update() {
        if (this.lineWidth > 1) {
            this.lineWidth -= 0.1;
        }

        if (this.opacity > 0.2) {
            this.opacity -= 0.01;
        }
        if (this.up) {
            this.y += this.velocity;

        } else {
            this.y += -this.velocity;
        }

        if (this.dontChangeChord) {
            this.timer -= 1;
        }

        if (this.timer <= 0) {
            this.dontChangeChord = false;
        }

        if (this.y >= center.y) {
            if (!this.dontChangeChord) {
                chordChange();
            }
            this.opacity = 1;
            this.lineWidth = 5;
            for (let i = 0; i < 20; i++) {
                particles.push(new Particle(this.x, this.y, this.chordColor));
            }
            this.color = this.chordColor;
            this.up = false;
        }

        if (this.y <= -center.y) {
            if (!this.dontChangeChord) {
                chordChange();
            }
            this
            this.opacity = 1;
            this.lineWidth = 5;
            for (let i = 0; i < 20; i++) {
                particles.push(new Particle(this.x, this.y, this.chordColor));
            }
            this.color = this.chordColor;
            this.up = true;
        }

        this.draw();
    }
}

function chordChange() {
    if (chordToPlay == 'Am') {
        chordToPlay = 'C';
        CBass.play();
        CVox.play();
    } else if (chordToPlay == 'C') {
        chordToPlay = 'Bm';
        BBass.play();
        BmVox.play();
    } else if (chordToPlay == 'Bm') {
        chordToPlay = 'D';
        DBass.play();
        DVox.play();
    } else if (chordToPlay == 'D') {
        chordToPlay = 'Cm';
        CBass.play();
        CmVox.play();
    } else if (chordToPlay == 'Cm') {
        chordToPlay = 'E';
        EBass.play();
        EVox.play();
    } else if (chordToPlay == 'E') {
        chordToPlay = 'Dm';
        DBass.play();
        DmVox.play();
    } else if (chordToPlay == 'Dm') {
        chordToPlay = 'F';
        FBass.play();
        FVox.play();
    } else if (chordToPlay == 'F') {
        chordToPlay = 'Em';
        EBass.play();
        EmVox.play();
    } else if (chordToPlay == 'Em') {
        chordToPlay = 'G';
        GBass.play();
        GVox.play();
    } else if (chordToPlay == 'G') {
        chordToPlay = 'Fm';
        FBass.play();
        FmVox.play();
    } else if (chordToPlay == 'Fm') {
        chordToPlay = 'A';
        ABass.play();
        AVox.play();
    } else if (chordToPlay == 'A') {
        chordToPlay = 'Gm';
        GBass.play();
        GmVox.play();
    } else if (chordToPlay == 'Gm') {
        chordToPlay = 'B';
        BBass.play();
        BVox.play();
    } else if (chordToPlay == 'B') {
        chordToPlay = 'Am';
        ABass.play();
        AmVox.play();
    }


}