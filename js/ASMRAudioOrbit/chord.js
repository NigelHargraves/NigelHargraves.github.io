class Chord {
    constructor(x, y, orbitRadius, speed) {
        this.x = x;
        this.y = y;
        this.point = { x: 0, y: 0 };
        this.orbitRadius = orbitRadius;
        this.speed = speed;
        this.angle = 0 - (Math.PI / 2);
        this.opacity = 1;
        this.r = 15;
        this.lineWidth = 3;
        this.changeChord = false;
        this.changeChordTimer = 0;
        this.inner1 = { x: 0, y: 0 };
        this.inner2 = { x: 0, y: 0 };
        this.innerAngle1 = 0 - (Math.PI / 2);
        this.innerAngle2 = 0;
        this.innerSpeed = 4;
        this.innerOrbitRadius = 15;
    }
    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x + this.point.x, this.y + this.point.y, this.r, 0, Math.PI * 2);
        ctx.lineWidth = this.lineWidth;
        ctx.globalAlpha = this.opacity;
        ctx.strokeStyle = "red";
        ctx.fillStyle = 'red';
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x + this.point.x + this.inner1.x, this.y + this.point.y + this.inner1.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(this.x + this.point.x - this.inner1.x, this.y + this.point.y - this.inner1.y, 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(this.x + this.point.x + this.inner2.x, this.y + this.point.y + this.inner2.y, 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(this.x + this.point.x - this.inner2.x, this.y + this.point.y - this.inner2.y, 1, 0, Math.PI * 2);
        ctx.fill();
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

        if (this.angle <= -Math.PI * 2) {
            this.angle = 0;
        }

        this.inner1.x = this.innerOrbitRadius * Math.cos(this.innerAngle1);
        this.inner1.y = this.innerOrbitRadius * Math.sin(this.innerAngle1);

        this.innerAngle1 -= (Math.PI / 180) / this.innerSpeed;

        if (this.innerAngle1 <= -Math.PI * 2) {
            this.innerAngle1 = 0;
        }

        this.inner2.x = this.innerOrbitRadius * Math.cos(this.innerAngle2);
        this.inner2.y = this.innerOrbitRadius * Math.sin(this.innerAngle2);

        this.innerAngle2 -= (Math.PI / 180) / this.innerSpeed;

        if (this.innerAngle2 <= -Math.PI * 2) {
            this.innerAngle2 = 0;
        }

        //top.
        if (this.angle <= 0 - (Math.PI / 2) + 0.01 && this.angle >= 0 - (Math.PI / 2) - 0.01) {
            this.opacity = 1;
            this.lineWidth = 3;
            cross.colorTop = 'red';
            cross.opacityTop = 1;
            cross.lineWidthTop = 3;
            cross.opacityCenter = 1;
            for (let i = 0; i < 12; i++) {
                particles.push(new Particle(this.x + this.point.x, this.y + this.point.y, 'red'));
            }
            if (this.changeChord) {
                chordChange();
                this.changeChord = false;
            }
        }
        //left.
        if (this.angle <= 0 - (Math.PI) + 0.01 && this.angle >= 0 - (Math.PI) - 0.01) {
            this.opacity = 1;
            this.lineWidth = 3;
            cross.colorLeft = 'red';
            cross.opacityLeft = 1;
            cross.lineWidthLeft = 3;
            cross.opacityCenter = 1;
            for (let i = 0; i < 12; i++) {
                particles.push(new Particle(this.x + this.point.x, this.y + this.point.y, 'red'));
            }
            if (this.changeChord) {
                chordChange();
                this.changeChord = false;
            }
        }
        //bottom.
        if (this.angle <= 0 - (Math.PI + Math.PI / 2) + 0.01 && this.angle >= 0 - (Math.PI + Math.PI / 2) - 0.01) {
            this.opacity = 1;
            this.lineWidth = 3;
            cross.colorBottom = 'red';
            cross.opacityBottom = 1;
            cross.lineWidthBottom = 3;
            cross.opacityCenter = 1;
            for (let i = 0; i < 12; i++) {
                particles.push(new Particle(this.x + this.point.x, this.y + this.point.y, 'red'));
            }
            if (this.changeChord) {
                chordChange();
                this.changeChord = false;
            }
        }
        //right.
        if (this.angle <= 0 - (Math.PI * 2) + 0.01 && this.angle >= 0 - (Math.PI * 2) - 0.01) {
            this.opacity = 1;
            this.lineWidth = 3;
            cross.colorRight = 'red';
            cross.opacityRight = 1;
            cross.lineWidthRight = 3;
            cross.opacityCenter = 1;
            for (let i = 0; i < 12; i++) {
                particles.push(new Particle(this.x + this.point.x, this.y + this.point.y, 'red'));
            }
            if (this.changeChord) {
                chordChange();
                this.changeChord = false;
            }
        }

        if (this.changeChordTimer > 100) {
            this.changeChord = true;
            this.changeChordTimer = 0;
        }

        if (!this.changeChord) {
            this.changeChordTimer += 1;
        }
        this.draw();
    }
}

function chordChange() {
    if (chordToPlay == 'C1') {
        chordToPlay = 'F1';
        FBass.play();
        FVox.play();
    } else if (chordToPlay == 'F1') {
        chordToPlay = 'G1';
        GBass.play();
        GVox.play();
    } else if (chordToPlay == 'G1') {
        chordToPlay = 'C2';
        CBass.play();
        CVox.play();
    } else if (chordToPlay == 'C2') {
        chordToPlay = 'C3';
        CBass.play();
        CVox.currentTime = 0;
        CVox.play();
    } else if (chordToPlay == 'C3') {
        chordToPlay = 'F2';
        FBass.play();
        FVox.play();
    } else if (chordToPlay == 'F2') {
        chordToPlay = 'Gsus4';
        BBass.play();
        Gsus4Vox.play();
    } else if (chordToPlay == 'Gsus4') {
        chordToPlay = 'C4';
        CBass.play();
        CVoxEnd.play();
    } else if (chordToPlay == 'C4') {
        chordToPlay = 'Em';
        EBass.play();
        EmVox.play();
    } else if (chordToPlay == 'Em') {
        chordToPlay = 'Dm';
        DBass.play();
        DmVox.play();
    } else if (chordToPlay == 'Dm') {
        chordToPlay = 'G2';
        GBass.play();
        GVox.play();
    } else if (chordToPlay == 'G2') {
        chordToPlay = 'C5';
        CBass.play();
        CVox.play();
    } else if (chordToPlay == 'C5') {
        chordToPlay = 'C1';
        CBass.play();
        CVox.currentTime = 0;
        CVox.play();
    }
}