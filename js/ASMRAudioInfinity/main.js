// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let center = { x: canvas.width / 2, y: canvas.height / 2 };






let start = false,
    playNow = true,
    showChords = false;

let delay = 0,
    speed = 14,
    sphubeSize = 2,
    chordToPlay = 'Am';



let chordC = [],
    chordG = [],
    chordBm = [],
    chordAm = [],
    chordAsus2 = [],
    chordDsus4 = [],
    chordF = [],
    chordGsus4 = [];

let colors = [],
    notes = [],
    antiNotes = [],
    particles = [],
    backgroundSphubes = [];



createChords();

setVolume();

for (let i = 0; i < 24; i++) {
    let hue1 = (Math.random() * 260) + 100;
    let hue2 = (Math.random() * 260) + 100;
    let hue3 = (Math.random() * 260) + 100;
    colors.push('rgb(' + hue1 + ',' + hue2 + ',' + hue3 + ')');
}


let infinityLoop = new InfinityLoop();

let chord = new Chord(center.x, center.y);

for (let i = 0; i < 24; i++) {
    notes.push(new Note(center.x, center.y, speed, chordAm[i], colors[i]));
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
            for (let i = 0; i < 24; i++) {
                chordAm[i].play();
            }
            ABass.play();
            playNow = false;
        }

        if (showChords) {
            ctx.font = "bold 20px Arial";
            ctx.fillStyle = "white";
            ctx.fillText(chordToPlay, 0, canvas.height * 0.02);
        }


        infinityLoop.update();

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