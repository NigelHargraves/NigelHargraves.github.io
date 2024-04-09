// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let center = { x: canvas.width / 2, y: canvas.height / 2 };


let start = false,
    playNow = true,
    showChords = false;

let delay = 0,
    speed = 3,
    sphubeSize = 2,
    chordToPlay = 'C';



let chordC = [],
    chordG = [],
    chordEm = [],
    chordAm = [],
    chordF = [],
    chordGsus4 = [];

let colors = [],
    notes = [],
    particles = [],
    backgroundCubes = [];


createChords();

setVolume();

for (let i = 0; i < 36; i++) {
    let red = Math.floor((Math.random() * 155) + 100);
    let green = Math.floor((Math.random() * 155) + 100);
    let blue = Math.floor((Math.random() * 155) + 100);
    colors.push('rgb(' + red + ',' + green + ',' + blue + ')');
}


let sphube = new Sphube(0, 0, 400, 300);

let chord = new Chord(0, 0);

for (let i = 0; i < 36; i++) {
    notes.push(new Note(0, 0, 400, 300, speed, chordC[i], colors[i]));
    speed += 0.1;
}


function animate() {
    //CLS.
    ctx.fillStyle = "rgb(0, 0, 0, 0.4)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = 'white';
    ctx.globalAlpha = 0.02;
    ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", center.x - (center.x / 6), center.y);
    ctx.globalAlpha = 0.4;



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
            if (chordToPlay == 'Am' || chordToPlay == 'F' || chordToPlay == 'Gsus4') {
                thisChord = chordToPlay;
            } else {
                thisChord = chordToPlay.substring(0, chordToPlay.length - 1);
            }
            ctx.fillText(chordToPlay, 0, canvas.height * 0.02);
        }


        sphube.update();

        chord.update();

        forNotes()

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