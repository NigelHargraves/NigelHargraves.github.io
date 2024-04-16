class Chord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = { x: (center.x - infinityLoop.point1.x) + 200, y: ((center.x - infinityLoop.point1.x) + 200) / 2 };
        this.radiusShrink = true;
        this.lineWidth = 5;
        this.delay = 100;
        this.color = 'aqua';
    }
    draw() {
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        //center point.
        ctx.beginPath();
        ctx.arc(center.x, center.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.radius.x, this.radius.y, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.lineWidth = 1;
    }
    update() {

        if (this.lineWidth > 0.2) {
            this.lineWidth -= 0.01;
        }

        if (this.radiusShrink) {
            this.radius.y -= 0.1;
            this.radius.x -= 0.2;
        } else {
            this.radius.y += 0.1;
            this.radius.x += 0.2;
        }

        if (this.radius.x <= 2) {
            this.radiusShrink = false;
            this.lineWidth = 5;
            changeChord();
        }
        if (this.radius.x >= (center.x - infinityLoop.point1.x) + 200) {
            this.radiusShrink = true;
            this.lineWidth = 5;
            changeChord();
        }
        this.draw();
    }
}

function changeChord() {
    if (chordToPlay == 'Am') {
        chordToPlay = 'C';
        CBass.play();
    } else if (chordToPlay == 'C') {
        chordToPlay = 'Bm';
        BBass.play();
    } else if (chordToPlay == 'Bm') {
        chordToPlay = 'G';
        GBass.play();
    } else if (chordToPlay == 'G') {
        chordToPlay = 'Am';
        ABass.play();
    }

    if (chordToPlay == 'Am') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordAm[i];
        }
    }

    if (chordToPlay == 'C') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordC[i];
        }
    }

    if (chordToPlay == 'Bm') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordBm[i];
        }
    }

    if (chordToPlay == 'G') {
        for (let i = 0; i < 24; i++) {
            notes[i].note = chordG[i];
        }
    }

}