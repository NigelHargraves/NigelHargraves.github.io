// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let center = { x: canvas.width / 2, y: canvas.height / 2 };


let velocity = { x: 0, y: 0 };

let start = false,
    playNow = true,
    showChords = false;

let delay = 0,
    speed = 1,
    chordToPlay = 'Am';



let chordD = [],
    chordDm = [],
    chordF = [],
    chordAm = [],
    chordC = [],
    chordG = [],
    chordE = [];

let color = [],
    notes = [],
    orbitPaths = [],
    stars = [],
    particles = [],
    shoots = [],
    floatNotes = [],
    edgeSplats = [];















for (let i = 0; i < 24; i++) {
    let hue1 = (Math.random() * 260) + 100;
    let hue2 = (Math.random() * 260) + 100;
    let hue3 = (Math.random() * 260) + 100;
    color.push('rgb(' + hue1 + ',' + hue2 + ',' + hue3 + ')');
}



let pyramid = new Pyramid(0, 0, 10, 10)
for (let i = 0; i < 24; i++) {
    notes.push(new Note(center.x, center.y + pyramid.edges.vertices[(0)].y - (800 * 0.2), speed, i));
    speed -= 0.01;
}

function animate() {
    //CLS.
    ctx.fillStyle = "rgb(0, 0, 0, 0.6)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = 'white';
    ctx.globalAlpha = 0.02;
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
            ctx.fillText(chordToPlay, 0, canvas.height * 0.02);
        }

        pyramid.update();

        forNotes()

        forShoots()

        forFloatNotes()

        forEdgeSplats()
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