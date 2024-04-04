// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let center = { x: canvas.width / 2, y: canvas.height / 2 };








let start = false,
    playNow = true,
    showChords = false;

let delay = 0,
    speed = 0.1,
    chordToPlay = 'C';



let chordDm = [],
    chordDmS = [],
    chordF = [],
    chordFS = [],
    chordAm = [],
    chordAmS = [],
    chordC = [],
    chordCS = [],
    chordG = [],
    chordGS = [],
    chordGsus4 = [],
    chordGsus4S = [],
    chordEm = [],
    chordEmS = [];

let color = [],
    notes = [],
    orbitPaths = [],
    stars = [],
    particles = [],
    shoots = [],
    floatNotes = [],
    edgeSplats = [],
    noteCircles = [];



createChords();



setVolume();





let cube = new Cube(0, 0, 800, 400);


for (let i = 0; i < 21; i++) {
    let red = Math.floor((Math.random() * 155) + 100);
    let green = Math.floor((Math.random() * 155) + 100);
    let blue = Math.floor((Math.random() * 155) + 100);
    color.push('rgb(' + red + ',' + green + ',' + blue + ')');
}

let xpos = -690,
    ypos = -400;

for (let i = 0; i < 21; i++) {
    notes.push(new Note(xpos, ypos, 500, 300, i, speed, chordC[i], color[i]));
    speed += 0.01;
    xpos += 230;
    if (i == 6) {
        ypos += 400;
        xpos = -690;
    }
    if (i == 13) {
        ypos += 400;
        xpos = -690;
    }
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
            for (let i = 0; i < 21; i++) {
                chordC[i].play();
            }
            playNow = false;
        }

        if (showChords) {
            ctx.font = "bold 20px Arial";
            ctx.fillStyle = "white";
            let thisChord
            if (chordToPlay == 'C1' || chordToPlay == 'C2') {
                thisChord = chordToPlay.substring(0, chordToPlay.length - 1);
            } else {
                thisChord = chordToPlay;
            }
            ctx.fillText(thisChord, 0, canvas.height * 0.02);
        }

        cube.update();

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