class Chord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.z = 400;
        this.size = 300;
        this.zoom = 100;
        this.directX = (Math.random() - 0.5) * 0.01;
        this.directY = (Math.random() - 0.5) * 0.01;
        this.edges = new SphubeEdge(this.x, this.y, this.z, this.size);
        this.radius = { x: 600, y: 150 };
        this.point = { x: 0, y: 0 };
        this.angle = 0;
        this.lineWidth = 5;
        this.delay = 100;
    }
    draw() {


        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = 'coral';
        ctx.fillStyle = 'coral';
        //horizontal line.
        ctx.beginPath();
        ctx.moveTo(0, center.y);
        ctx.lineTo(canvas.width, center.y);
        ctx.stroke();

        //ellipse
        ctx.beginPath();
        ctx.ellipse(center.x, center.y, this.radius.x, this.radius.y, 0, 0, Math.PI * 2);

        ctx.stroke();


        let vertices = sphubeProject(this.edges.vertices, canvas.width, canvas.height, this.zoom);

        ctx.save();
        ctx.translate(this.point.x, this.point.y);
        //draw sphube.
        for (let i = this.edges.faces.length - 1; i > -1; --i) {
            let face = this.edges.faces[i];
            ctx.beginPath();
            ctx.moveTo(vertices[face[0]].x, vertices[face[0]].y);
            ctx.lineTo(vertices[face[1]].x, vertices[face[1]].y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(vertices[face[1]].x, vertices[face[1]].y);
            ctx.lineTo(vertices[face[2]].x, vertices[face[2]].y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(vertices[face[2]].x, vertices[face[2]].y);
            ctx.lineTo(vertices[face[3]].x, vertices[face[3]].y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(vertices[face[3]].x, vertices[face[3]].y);
            ctx.lineTo(vertices[face[0]].x, vertices[face[0]].y);
            ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(center.x, center.y, 4, 0, Math.PI * 2);

        ctx.fill();
        ctx.restore();

        ctx.lineWidth = 1;

    }
    update() {

        if (this.lineWidth > 1) {
            this.lineWidth -= 0.01;
        } else {
            if (this.lineWidth > 0.2) {
                this.lineWidth -= 0.001;
            }
        }


        this.point.x = this.radius.x * Math.cos(this.angle);
        this.point.y = this.radius.y * Math.sin(this.angle);

        this.angle += (Math.PI / 180) / 9;

        if (this.angle >= Math.PI * 2) {
            this.angle = 0;
            this.lineWidth = 5;
            chordChange();
            sphube.lineWidth = 5;
            this.directX = (Math.random() - 0.5) * 0.01;
            this.directY = (Math.random() - 0.5) * 0.01;
            sphube.directX = (Math.random() - 0.5) * 0.002;
            sphube.directY = (Math.random() - 0.5) * 0.002;
            let direction;
            for (let i = 0; i < 100; i++) {
                direction = Math.random();
                if (direction > 0.5) {
                    particles.push(new Particle(center.x + this.point.x, center.y + this.point.y))
                } else {
                    particles.push(new Particle(center.x + this.point.x, center.y + this.point.y))
                }
            }
        }

        if (this.angle <= Math.PI + 0.001 && this.angle >= Math.PI - 0.001 && this.delay == 0) {
            this.lineWidth = 5;
            chordChange();
            this.delay = 100;
            sphube.lineWidth = 5;
            this.directX = (Math.random() - 0.5) * 0.01;
            this.directY = (Math.random() - 0.5) * 0.01;
            sphube.directX = (Math.random() - 0.5) * 0.002;
            sphube.directY = (Math.random() - 0.5) * 0.002;
            let direction;
            for (let i = 0; i < 100; i++) {
                direction = Math.random();
                if (direction > 0.5) {
                    particles.push(new Particle(center.x + this.point.x, center.y + this.point.y))
                } else {
                    particles.push(new Particle(center.x + this.point.x, center.y + this.point.y))
                }
            }
        }

        if (this.delay > 0) {
            this.delay -= 1;
        }

        this.edges.rotateX(this.directX);
        this.edges.rotateY(this.directY);

        this.draw();
    }
}

function chordChange() {
    drumBass.play();
    if (chordToPlay == 'C') {
        chordToPlay = 'F';
        FBass.play();
        FChord.play();
    } else if (chordToPlay == 'F') {
        chordToPlay = 'G';
        GBass.play();
        GChord.play();
    } else if (chordToPlay == 'G') {
        chordToPlay = 'Em';
        EBass.play();
        EmChord.play();
    } else if (chordToPlay == 'Em') {
        chordToPlay = 'Am';
        ABass.play();
        AmChord.play();
    } else if (chordToPlay == 'Am') {
        chordToPlay = 'Asus2';
        BBass.play();
        Asus2Chord.play();
    } else if (chordToPlay == 'Asus2') {
        chordToPlay = 'Dsus4';
        DBass.play();
        Dsus4Chord.play();
    } else if (chordToPlay == 'Dsus4') {
        chordToPlay = 'Gsus4';
        GBass.play();
        Gsus4Chord.play();
    } else if (chordToPlay == 'Gsus4') {
        chordToPlay = 'C';
        CBass.play();
        CChord.play();
    }






    if (chordToPlay == 'C') {
        for (let i = 0; i < 18; i++) {
            notes[i].note = chordC[i];
        }
        for (let i = 0; i < 18; i++) {
            antiNotes[i].note = chordC[i];
        }
    }
    if (chordToPlay == 'F') {
        for (let i = 0; i < 18; i++) {
            notes[i].note = chordF[i];
        }
        for (let i = 0; i < 18; i++) {
            antiNotes[i].note = chordF[i];
        }
    }
    if (chordToPlay == 'G') {
        for (let i = 0; i < 18; i++) {
            notes[i].note = chordG[i];
        }
        for (let i = 0; i < 18; i++) {
            antiNotes[i].note = chordG[i];
        }
    }
    if (chordToPlay == 'Em') {
        for (let i = 0; i < 18; i++) {
            notes[i].note = chordEm[i];
        }
        for (let i = 0; i < 18; i++) {
            antiNotes[i].note = chordEm[i];
        }
    }
    if (chordToPlay == 'Am') {
        for (let i = 0; i < 18; i++) {
            notes[i].note = chordAm[i];
        }
        for (let i = 0; i < 18; i++) {
            antiNotes[i].note = chordAm[i];
        }
    }
    if (chordToPlay == 'Asus2') {
        for (let i = 0; i < 18; i++) {
            notes[i].note = chordAsus2[i];
        }
        for (let i = 0; i < 18; i++) {
            antiNotes[i].note = chordAsus2[i];
        }
    }
    if (chordToPlay == 'Dsus4') {
        for (let i = 0; i < 18; i++) {
            notes[i].note = chordDsus4[i];
        }
        for (let i = 0; i < 18; i++) {
            antiNotes[i].note = chordDsus4[i];
        }
    }
    if (chordToPlay == 'Gsus4') {
        for (let i = 0; i < 18; i++) {
            notes[i].note = chordGsus4[i];
        }
        for (let i = 0; i < 18; i++) {
            antiNotes[i].note = chordGsus4[i];
        }
    }


}