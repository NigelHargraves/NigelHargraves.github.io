class FloatNote {
    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.r = 10;
        this.velocity = { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 };
        this.expire = false;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = "aquamarine";
        ctx.stroke();
    }
    update() {
        if (!this.expire) {
            this.x += this.velocity.x;
            this.y += this.velocity.y;
        } else {
            this.r -= 1;
        }
        this.draw();
    }
}



function playLowStringNotes() {
    let randomNote = Math.floor(Math.random() * 9);
    if (key.key == 'Dm') {
        if (randomNote == 0) {
            Dls.volume = volume;
            Dls.play();
        }
        if (randomNote == 1) {
            Fls.volume = volume;
            Fls.play();
        }
        if (randomNote == 2) {
            Als.volume = volume;
            Als.play();
        }
        if (randomNote == 3) {
            Dms.volume = volume;
            Dms.play();
        }
        if (randomNote == 4) {
            Fms.volume = volume;
            Fms.play();
        }
        if (randomNote == 5) {
            Ams.volume = volume;
            Ams.play();
        }
        if (randomNote == 6) {
            Dhs.volume = volume;
            Dhs.play();
        }
        if (randomNote == 7) {
            Fhs.volume = volume;
            Fhs.play();
        }
        if (randomNote == 8) {
            Ahs.volume = volume;
            Ahs.play();
        }
    }
    if (key.key == 'G') {
        if (randomNote == 0) {
            Gls.volume = volume;
            Gls.play();
        }
        if (randomNote == 1) {
            Bls.volume = volume;
            Bls.play();
        }
        if (randomNote == 2) {
            Dls.volume = volume;
            Dls.play();
        }
        if (randomNote == 3) {
            Gms.volume = volume;
            Gms.play();
        }
        if (randomNote == 4) {
            Bms.volume = volume;
            Bms.play();
        }
        if (randomNote == 5) {
            Dms.volume = volume;
            Dms.play();
        }
        if (randomNote == 6) {
            Ghs.volume = volume;
            Ghs.play();
        }
        if (randomNote == 7) {
            Bhs.volume = volume;
            Bhs.play();
        }
        if (randomNote == 8) {
            Dhs.volume = volume;
            Dhs.play();
        }
    }
    if (key.key == 'Bm') {
        if (randomNote == 0) {
            Bls.volume = volume;
            Bls.play();
        }
        if (randomNote == 1) {
            Dls.volume = volume;
            Dls.play();
        }
        if (randomNote == 2) {
            FSls.volume = volume;
            FSls.play();
        }
        if (randomNote == 3) {
            Bms.volume = volume;
            Bms.play();
        }
        if (randomNote == 4) {
            Dms.volume = volume;
            Dms.play();
        }
        if (randomNote == 5) {
            FSms.volume = volume;
            FSms.play();
        }
        if (randomNote == 6) {
            Bhs.volume = volume;
            Bhs.play();
        }
        if (randomNote == 7) {
            Dhs.volume = volume;
            Dhs.play();
        }
        if (randomNote == 8) {
            FShs.volume = volume;
            FShs.play();
        }
    }
    if (key.key == 'C') {
        if (randomNote == 0) {
            Cls.volume = volume;
            Cls.play();
        }
        if (randomNote == 1) {
            Els.volume = volume;
            Els.play();
        }
        if (randomNote == 2) {
            Gls.volume = volume;
            Gls.play();
        }
        if (randomNote == 3) {
            Cms.volume = volume;
            Cms.play();
        }
        if (randomNote == 4) {
            Ems.volume = volume;
            Ems.play();
        }
        if (randomNote == 5) {
            Gms.volume = volume;
            Gms.play();
        }
        if (randomNote == 6) {
            Chs.volume = volume;
            Chs.play();
        }
        if (randomNote == 7) {
            Ehs.volume = volume;
            Ehs.play();
        }
        if (randomNote == 8) {
            Ghs.volume = volume;
            Ghs.play();
        }
    }
    if (key.key == 'F') {
        if (randomNote == 0) {
            Fls.volume = volume;
            Fls.play();
        }
        if (randomNote == 1) {
            Als.volume = volume;
            Als.play();
        }
        if (randomNote == 2) {
            Cls.volume = volume;
            Cls.play();
        }
        if (randomNote == 3) {
            Fms.volume = volume;
            Fms.play();
        }
        if (randomNote == 4) {
            Ams.volume = volume;
            Ams.play();
        }
        if (randomNote == 5) {
            Cms.volume = volume;
            Cms.play();
        }
        if (randomNote == 6) {
            Fhs.volume = volume;
            Fhs.play();
        }
        if (randomNote == 7) {
            Ahs.volume = volume;
            Ahs.play();
        }
        if (randomNote == 8) {
            Chs.volume = volume;
            Chs.play();
        }
    }
    if (key.key == 'Em') {
        if (randomNote == 0) {
            Els.volume = volume;
            Els.play();
        }
        if (randomNote == 1) {
            Gls.volume = volume;
            Gls.play();
        }
        if (randomNote == 2) {
            Bls.volume = volume;
            Bls.play();
        }
        if (randomNote == 3) {
            Ems.volume = volume;
            Ems.play();
        }
        if (randomNote == 4) {
            Gms.volume = volume;
            Gms.play();
        }
        if (randomNote == 5) {
            Bms.volume = volume;
            Bms.play();
        }
        if (randomNote == 6) {
            Ehs.volume = volume;
            Ehs.play();
        }
        if (randomNote == 7) {
            Ghs.volume = volume;
            Ghs.play();
        }
        if (randomNote == 8) {
            Bhs.volume = volume;
            Bhs.play();
        }
    }
}





function forFloatNotes() {

    floatNotes.forEach((fn, index) => {

        if (fn.x + fn.r >= canvas.width || fn.x - fn.r <= 0) {
            playLowStringNotes()
            fn.expire = true;
        }
        if (fn.y + fn.r >= canvas.height || fn.y - fn.r <= 0) {
            playLowStringNotes()
            fn.expire = true;
        }

        if (fn.r <= 1) {

            for (let i = 0; i < 10; i++) {
                edgeSplats.push(new EdgeSplat(fn.x, fn.y));
            }
            floatNotes.splice(index, 1);
        }

        fn.update();
    });
}