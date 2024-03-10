// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let center = { x: canvas.width / 2, y: canvas.height / 2 };

let left = center.x / 2,
    right = center.x + center.x / 2;

let cLeft = left / 4,
    cRight = left - (left / 4);


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
    smallPentagons = [],
    particles = [];

let zz = new ZigZag(),
    chord = new Chord(cLeft, canvas.height / 10);


createChords();

for (let i = 0; i < 36; i++) {
    if (i < 18) {
        notes.push(new Note(left, canvas.height / 10, speed, chordE[i], true, 2));
    } else {
        notes.push(new Note(right, canvas.height - (canvas.height / 10), speed, chordE[i], false, 9));
    }



    speed += 0.01;
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

        forNotes();



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