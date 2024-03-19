class Chord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = center.y * 5;
        this.angle = Math.PI + (Math.PI / 2.54);
        this.point = { x: 0, y: 0 };
        this.getPoints = true;
        this.leftPoint = { x: 0, y: 0 };
        this.rightPoint = { x: 0, y: 0 };
        this.centerHitTimer = 50;
        this.roc = false; //right of center.
        this.moveRight = true;
    }
    draw() {
        //left point dot.
        ctx.beginPath();
        ctx.arc(this.leftPoint.x, this.leftPoint.y, 4, 0, Math.PI * 2);
        ctx.fill();

        //right point dot.
        ctx.beginPath();
        ctx.arc(this.rightPoint.x, this.rightPoint.y, 4, 0, Math.PI * 2);
        ctx.fill();



        //chord circle.
        ctx.beginPath();
        ctx.arc(this.x + this.point.x, this.y + this.point.y, 15, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x + this.point.x, this.y + this.point.y, 4, 0, Math.PI * 2);
        ctx.fill();
    }
    update() {

        this.point.x = this.r * Math.cos(this.angle);
        this.point.y = this.r * Math.sin(this.angle);

        if (!this.roc) {
            if (this.moveRight) {
                this.angle += (Math.PI / 180) / 40;
            } else {
                this.angle -= (Math.PI / 180) / 40;
            }
        } else {
            if (this.moveRight) {
                this.angle -= (Math.PI / 180) / 40;
            } else {
                this.angle += (Math.PI / 180) / 40;
            }
        }

        //chord circle hits center.
        if (this.x + this.point.x >= center.x - 1 && this.x + this.point.x <= center.x + 1 && this.centerHitTimer <= 0) {
            if (this.moveRight) {
                this.roc = true;
                this.y = -canvas.height * 2;
                this.angle = Math.PI / 2;
            } else {
                this.roc = false;
                this.y = canvas.height * 3;
                this.angle = Math.PI + (Math.PI / 2);
            }
            this.centerHitTimer = 50;
        }

        if (this.x + this.point.x >= this.rightPoint.x - 1 && this.x + this.point.x <= this.rightPoint.x + 1 && this.centerHitTimer <= 0) {
            this.moveRight = false;
            this.centerHitTimer = 50;
            changeChord();
        }


        if (this.x + this.point.x >= this.leftPoint.x - 1 && this.x + this.point.x <= this.leftPoint.x + 1 && this.centerHitTimer <= 0) {
            this.moveRight = true;
            this.centerHitTimer = 50;
            changeChord();
        }


















        //calc point pos.
        if (this.getPoints) {
            this.getPoints = false;
            this.leftPoint = { x: this.x + this.point.x, y: this.y + this.point.y };
            let xpoint = this.r * Math.cos(Math.PI / 2.5);
            let ypoint = this.r * Math.sin(Math.PI / 2.5);
            this.rightPoint = { x: this.x + xpoint, y: -(canvas.height * 2) + ypoint };
        }

        if (this.angle >= Math.PI * 2) {
            this.angle = 0;
        }
        if (this.centerHitTimer > 0) {
            this.centerHitTimer -= 1;
        }
        this.draw();
    }
}

function changeChord() {
    if (chordToPlay == 'Am') {
        chordToPlay = 'F1';
        FBass.play();
    } else if (chordToPlay == 'F1') {
        chordToPlay = 'C1';
        CBass.play();
    } else if (chordToPlay == 'C1') {
        chordToPlay = 'G1';
        GBass.play();
    } else if (chordToPlay == 'G1') {
        chordToPlay = 'Em';
        EBass.play();
    } else if (chordToPlay == 'Em') {
        chordToPlay = 'C2';
        GBass.play();
    } else if (chordToPlay == 'C2') {
        chordToPlay = 'F2';
        FBass.play();
    } else if (chordToPlay == 'F2') {
        chordToPlay = 'G2';
        DBass.play();
    } else if (chordToPlay == 'G2') {
        chordToPlay = 'Am';
        ABass.play();
    }



    if (chordToPlay == 'Am') {
        for (let i = 0; i < 36; i++) {
            notes[i].note = chordAm[i];
        }
    }

    if (chordToPlay == 'F1' || chordToPlay == 'F2') {
        for (let i = 0; i < 36; i++) {
            notes[i].note = chordF[i];
        }
    }

    if (chordToPlay == 'C1' || chordToPlay == 'C2') {
        for (let i = 0; i < 36; i++) {
            notes[i].note = chordC[i];
        }
    }

    if (chordToPlay == 'G1' || chordToPlay == 'G2') {
        for (let i = 0; i < 36; i++) {
            notes[i].note = chordG[i];
        }
    }

    if (chordToPlay == 'Em') {
        for (let i = 0; i < 36; i++) {
            notes[i].note = chordEm[i];
        }
    }

}