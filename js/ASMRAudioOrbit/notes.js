class Note {
    constructor(x, y, orbitRadius, speed, number, color) {
        this.x = x;
        this.y = y;
        this.point = { x: 0, y: 0 };
        this.orbitRadius = orbitRadius;
        this.speed = speed;
        this.number = number;
        this.color = color;
        this.note = chordC[this.number];
        this.angle = 0 - (Math.PI / 2);
        this.opacity = 1;
        this.r = 10;
        this.lineWidth = 3;
    }
    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x + this.point.x, this.y + this.point.y, this.r, 0, Math.PI * 2);
        ctx.lineWidth = this.lineWidth;
        ctx.globalAlpha = this.opacity;
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.4;
    }
    update() {
        if (this.opacity > 0.2) {
            this.opacity -= 0.001;
        }

        if (this.lineWidth > 0.2) {
            this.lineWidth -= 0.05;
        }

        this.point.x = this.orbitRadius * Math.cos(this.angle);
        this.point.y = this.orbitRadius * Math.sin(this.angle);

        this.angle -= (Math.PI / 180) / this.speed;

        //top.
        if (this.angle <= 0 - (Math.PI / 2) + 0.01 && this.angle >= 0 - (Math.PI / 2) - 0.01) {
            this.opacity = 1;
            this.lineWidth = 3;
            if (this.number < 12) {
                cross.opacityTop = 1;
                cross.lineWidthTop = 3;
                cross.opacityCenter = 1;
            } else {
                cross.opacityBottom = 1;
                cross.lineWidthBottom = 3;
                cross.opacityCenter = 1;
            }

            particles.push(new Particle(this.x + this.point.x, this.y + this.point.y, this.color));
            this.note.play();
        }
        //left.
        if (this.angle <= 0 - (Math.PI) + 0.01 && this.angle >= 0 - (Math.PI) - 0.01) {
            this.opacity = 1;
            this.lineWidth = 3;
            if (this.number < 12) {
                cross.opacityLeftp = 1;
                cross.lineWidthLeftp = 3;
                cross.opacityCenter = 1;
            } else {
                cross.opacityRight = 1;
                cross.lineWidthRight = 3;
                cross.opacityCenter = 1;
            }
            particles.push(new Particle(this.x + this.point.x, this.y + this.point.y, this.color));
            this.note.play();
        }
        //bottom.
        if (this.angle <= 0 - (Math.PI + Math.PI / 2) + 0.01 && this.angle >= 0 - (Math.PI + Math.PI / 2) - 0.01) {
            this.opacity = 1;
            this.lineWidth = 3;
            if (this.number < 12) {
                cross.opacityBottom = 1;
                cross.lineWidthBottom = 3;
                cross.opacityCenter = 1;
            } else {
                cross.opacityTop = 1;
                cross.lineWidthTop = 3;
                cross.opacityCenter = 1;
            }
            particles.push(new Particle(this.x + this.point.x, this.y + this.point.y, this.color));
            this.note.play();
        }
        //right.
        if (this.angle <= 0 - (Math.PI * 2) + 0.01 && this.angle >= 0 - (Math.PI * 2) - 0.01) {
            this.opacity = 1;
            this.lineWidth = 3;
            if (this.number < 12) {
                cross.opacityRight = 1;
                cross.lineWidthRight = 3;
                cross.opacityCenter = 1;
            } else {
                cross.opacityLeft = 1;
                cross.lineWidthLeft = 3;
                cross.opacityCenter = 1;
            }
            particles.push(new Particle(this.x + this.point.x, this.y + this.point.y, this.color));
            this.note.play();
        }


        if (this.angle <= -Math.PI * 2) {
            this.angle = 0;
        }

        this.draw();
    }
}

function forNotes() {
    if (chordToPlay == 'C1' || chordToPlay == 'C2' || chordToPlay == 'C3' || chordToPlay == 'C4') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordC[i];
        }
    }
    if (chordToPlay == 'F1' || chordToPlay == 'F2') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordF[i];
        }
    }
    if (chordToPlay == 'G') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordG[i];
        }
    }
    if (chordToPlay == 'Gsus4') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordGsus4[i];
        }
    }
    notes.forEach((note, index) => {
        note.update();
    });
}