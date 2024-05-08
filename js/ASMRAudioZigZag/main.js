// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let center = { x: canvas.width / 2, y: canvas.height / 2 };

let left = center.x / 2,
    right = center.x + center.x / 2;

let cLeft = left / 4,
    cRight = left - (left / 4),
    cTop = canvas.height / 10,
    cBottom = canvas.height - (canvas.height / 10);


let pCenter = right + (canvas.width - right) / 2;

let bass1 = cTop + cTop * 2,
    bass2 = cTop + cTop * 4,
    bass3 = cTop + cTop * 6;

let hatInterval = (cTop * 2) / 6;


let start = false,
    playNow = true,
    showChords = false;

let delay = 0,
    speed = 1,
    chordToPlay = 'E1';



let chordE = [],
    chordA = [],
    chordB = [],
    chordGsus4 = [],
    chordC = [],
    chordF = [],
    chordBsus4 = [],
    chordG = [],
    chordFSm7 = [];

let color = [],
    notes = [],
    bassCircles = [],
    snareRects = []
particles = [],
    kicks = [];

let zz = new ZigZag(),
    chord = new Chord(cLeft, canvas.height / 10),
    hat = new Hat(right + (canvas.width - right) / 2, cTop * 2);




createChords();

for (let i = 0; i < 18; i++) {
    let hue1 = (Math.random() * 260) + 100;
    let hue2 = (Math.random() * 260) + 100;
    let hue3 = (Math.random() * 260) + 100;
    color.push('rgb(' + hue1 + ',' + hue2 + ',' + hue3 + ')')
    if (i < 9) {
        notes.push(new Note(left, cTop, speed, chordE[i + 18], true, 2, color[i]));
    } else {
        notes.push(new Note(right, cBottom, speed, chordE[i + 18], false, 8, color[i]));
    }
    speed += speed * 0.02;
}


setVolume();












function animate() {
    //CLS.
    ctx.fillStyle = "rgb(0, 0, 0, 0.6)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = 'white';
    ctx.globalAlpha = 0.04;
    ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", center.x - (center.x / 6), center.y);
    ctx.globalAlpha = 0.2;



    if (!start) {
        delay += 1;
        if (delay >= 100) {
            start = true;
        }
    }

    if (start) {
        if (playNow) {
            for (let i = 0; i < 18; i++) {
                chordE[i + 18].play();
            }
            EBass.play();
            EChord.play();
            playNow = false;
        }

        if (showChords) {
            ctx.font = "bold 20px Arial";
            ctx.fillStyle = "white";
            let thisChord
            if (chordToPlay == 'B' || chordToPlay == 'Gsus4' || chordToPlay == 'F#m7' || chordToPlay == 'Bsus4' || chordToPlay == 'G') {
                thisChord = chordToPlay;
            } else {
                thisChord = chordToPlay.substring(0, chordToPlay.length - 1);
            }
            ctx.fillText(thisChord, 0, canvas.height * 0.02);
        }




        zz.update();

        chord.update();

        hat.update();

        forKicks();

        forNotes();

        forBassCircles()

        forSnareRects()

        forParticles()

    }

    //call next frame.
    animationId = requestAnimationFrame(animate);

}


animate();

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 32) {
        if (showChords) {
            showChords = false;
        } else {
            showChords = true;
        }
    }
});

window.addEventListener("mousedown", (e) => {
    info = e.which;
    if (e.which == 1) {
        if (showChords) {
            showChords = false;
        } else {
            showChords = true;
        }
    }
});