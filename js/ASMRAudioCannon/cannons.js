class Cannon {
    constructor(x, y, angle, direction, color) {
        this.x = x;
        this.y = y;
        this.r = 20;
        this.angle = angle;
        this.left = direction;
        this.color = color;
        this.oldAngle = this.angle;
        this.aimPoint = { x: 0, y: 0 };
        this.fireInterval = 1000;
        this.fireTime = Math.floor(Math.random() * this.fireInterval) + 200;
        this.count = 0;
    }
    draw() {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.aimPoint.x, this.y + this.aimPoint.y);
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.lineWidth = 1;
    }
    update() {
        this.aimPoint.x = 50 * Math.cos(this.oldAngle);
        this.aimPoint.y = 50 * Math.sin(this.oldAngle);


        if (this.count == (Math.floor(this.fireTime / 2))) {
            let thisNote = 0;
            if (chordToPlay == 'D1' || chordToPlay == 'D2') {
                thisNote = chordD[noteNumber];
            }
            if (chordToPlay == 'A1' || chordToPlay == 'A2') {
                thisNote = chordA[noteNumber];
            }
            if (chordToPlay == 'G1' || chordToPlay == 'G2') {
                thisNote = chordG[noteNumber];
            }
            if (chordToPlay == 'Bm') {
                thisNote = chordBm[noteNumber];
            }
            if (chordToPlay == 'F#m') {
                thisNote = chordFSm[noteNumber];
            }

            notes.push(new Note(this.x, this.y, { x: this.aimPoint.x / 20, y: this.aimPoint.y / 20 }, thisNote, color[Math.floor(Math.random() * 24)]));

            thisNote.play();
            for (let i = 0; i < 10; i++) {
                particles.push(new Particle(this.x, this.y, { x: this.aimPoint.x / (30 + (Math.random() * 10)), y: this.aimPoint.y / (30 + (Math.random() * 10)) }, color[noteNumber]));
            }
            noteNumber++;
            if (noteNumber > 23) noteNumber = 0;
        }

        if (this.count >= this.fireTime) {
            if (this.left) {
                this.angle = 0 - Math.random() * (Math.PI / 2);
            } else {
                this.angle = 0 - (Math.PI / 2) - Math.random() * (Math.PI / 2)
            }
            this.count = 0;
            this.fireTime = Math.floor(Math.random() * this.fireInterval) + 200;
        }

        if (this.oldAngle < this.angle + 0.0001) {
            this.oldAngle += 0.01;
        }
        if (this.oldAngle > this.angle - 0.0001) {
            this.oldAngle -= 0.01;
        }

        this.count++;

        this.draw();
    }
}

function forCannons() {
    cannons.forEach((cannon, index) => {
        cannon.update();
    });
}