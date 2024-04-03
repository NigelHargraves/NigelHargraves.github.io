class Chord {
    constructor() {
        this.x = center.x;
        this.y = center.y;
        this.opacity = 1;
        this.lineWidth = 5;
        this.smallRadius = 20;
        this.bigRadius = canvas.height / 3;
        this.angle = (Math.PI * 2) - (Math.PI / 2);
        this.point = { x: 0, y: 0 };
        this.delay = 100;
    }
    draw() {
        ctx.strokeStyle = 'aquamarine';
        ctx.fillStyle = 'aquamarine';
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = this.lineWidth;
        //draw line.
        ctx.beginPath();
        ctx.moveTo(center.x, 0);
        ctx.lineTo(center.x, canvas.height);
        ctx.stroke();
        //draw large circle.
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.bigRadius, 0, Math.PI * 2);
        ctx.stroke();
        //draw chord.
        ctx.beginPath();
        ctx.arc(this.x + this.point.x, this.y + this.point.y, this.smallRadius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x + this.point.x, this.y + this.point.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 0.2;
        ctx.lineWidth = 1;
    }
    update() {
        if (this.opacity > 0.2) {
            this.opacity -= 0.01;
        }
        if (this.lineWidth > 1) {
            this.lineWidth -= 0.1;
        }

        this.point.x = this.bigRadius * Math.cos(this.angle);
        this.point.y = this.bigRadius * Math.sin(this.angle);

        this.angle += (Math.PI / 180) / 9;

        if (this.angle >= Math.PI * 2) {
            this.angle = 0;
        }

        if (this.angle <= ((Math.PI / 2) * 3) + 0.001 && this.angle >= ((Math.PI / 2) * 3) - 0.001 && this.delay == 0) {
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle(this.x + this.point.x, this.y + this.point.y, { x: (Math.random() - 0.5) / Math.random(), y: (Math.random() - Math.random() - 1) / Math.random() }, 'aquamarine'));
            }
            chordChange();
            this.opacity = 1;
            this.lineWidth = 5;
            this.delay = 100;
        }

        if (this.delay > 0) {
            this.delay -= 1;
        }


        this.draw();
    }
}

function chordChange() {
    if (chordToPlay == 'Am') {
        chordToPlay = 'F';
        FBass.play();
    } else if (chordToPlay == 'F') {
        chordToPlay = 'C1';
        CBass.play();
    } else if (chordToPlay == 'C1') {
        chordToPlay = 'G';
        GBass.play();
    } else if (chordToPlay == 'G') {
        chordToPlay = 'Em';
        EBass.play();
        if (pyramid.directY > 0) {
            pyramid.directY = -0.0002;
        } else {
            pyramid.directY = 0.0002;
        }
    } else if (chordToPlay == 'Em') {
        chordToPlay = 'Dm';
        DBass.play();
    } else if (chordToPlay == 'Dm') {
        chordToPlay = 'Gsus4';
        GBass.play();
    } else if (chordToPlay == 'Gsus4') {
        chordToPlay = 'C2';
        CBass.play();
    } else if (chordToPlay == 'C2') {
        chordToPlay = 'Am';
        ABass.play();
        if (pyramid.directY > 0) {
            pyramid.directY = -0.0002;
        } else {
            pyramid.directY = 0.0002;
        }
    }







    if (chordToPlay == 'Am') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordAm[i];
        }
    }
    if (chordToPlay == 'F') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordF[i];
        }
    }
    if (chordToPlay == 'C1' || chordToPlay == 'C2') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordC[i];
        }
    }
    if (chordToPlay == 'G') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordG[i];
        }
    }
    if (chordToPlay == 'Em') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordEm[i];
        }
    }
    if (chordToPlay == 'Dm') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordDm[i];
        }
    }
    if (chordToPlay == 'Gsus4') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordGsus4[i];
        }
    }
}