class BigDrop {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 0;
        this.gravity = 0.01;
        this.velocity = 0;
    }
    draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(this.x - this.size, this.y + this.size, this.x - this.size, this.y + this.size * 2, this.x, this.y + this.size * 2);
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(this.x + this.size, this.y + this.size, this.x + this.size, this.y + this.size * 2, this.x, this.y + this.size * 2);
        ctx.fillStyle = 'DeepSkyBlue';
        ctx.fill();
        ctx.strokeStyle = 'DeepSkyBlue';
        ctx.stroke();
    }
    update() {
        if (this.size < 25) {
            this.size += 0.1;
        } else {
            this.y += this.velocity;
            this.velocity += this.gravity;
        }

        if (this.y >= (canvas.height / 8) - 1 && this.y <= (canvas.height / 8) + 1) {
            bigDrops.push(new BigDrop(canvas.width / 2, 0));
        }


        this.draw();
    }
}


function bassNoteToPlay() {
    if (chordToPlay == 1) {
        DUBass.volume = 0.2;
        DUBass.play();
        DChord.play();
    }
    if (chordToPlay == 2 || chordToPlay == 8) {
        ABass.volume = 0.2;
        ABass.play();
        AChord.play();
    }
    if (chordToPlay == 3) {
        BBass.volume = 0.2;
        BBass.play();
        BmChord.play();
    }
    if (chordToPlay == 4) {
        FSBass.volume = 0.2;
        FSBass.play();
        FSmChord.play();
    }
    if (chordToPlay == 5 || chordToPlay == 7) {
        GBass.volume = 0.2;
        GBass.play();
        GChord.play();
    }
    if (chordToPlay == 6) {
        DLBass.volume = 0.2;
        DLBass.play();
        DChord.play();
    }
}

function forBigDrops() {
    bigDrops.forEach((bd, index) => {
        if (bd.y >= canvas.height - 50) {
            for (let i = 0; i < 40; i++) {
                splashes.push(new Splash(bd.x, bd.y + 49, 'DeepSkyBlue', { x: Math.random() - 0.5, y: Math.random() - 2 }));
            }
            noteToPlay = 1;
            bigDrops.splice(index, 1);
            drumBass.volume = 0.1;
            drumBass.play();
            chordToPlay++;
            bassNoteToPlay();
            if (chordToPlay >= 8) {
                chordToPlay = 0;
            }
        }
        bd.update();
    });
}