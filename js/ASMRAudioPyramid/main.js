// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let center = { x: canvas.width / 2, y: canvas.height / 2 };



const gradient = ctx.createRadialGradient(center.x, center.y, canvas.width / 8, center.x, center.y, canvas.height);
gradient.addColorStop(0, "rgba(0, 0, 0,0.4)");
gradient.addColorStop(1, 'rgba(0, 100, 0,0.2)');




let start = false,
    playNow = true,
    showChords = false;

let delay = 0,
    speed = 1,
    floatNoteNote = 0,
    chordToPlay = 'Am';



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
    noteCircles = [],
    backgroundPyramids = [];




createChords();


setVolume();







for (let i = 0; i < 24; i++) {
    let hue1 = (Math.random() * 260) + 100;
    let hue2 = (Math.random() * 260) + 100;
    let hue3 = (Math.random() * 260) + 100;
    color.push('rgb(' + hue1 + ',' + hue2 + ',' + hue3 + ')');
}



let pyramid = new Pyramid(0, 0, 10, 10)
for (let i = 0; i < 24; i++) {
    notes.push(new Note(center.x, center.y + pyramid.edges.vertices[(0)].y - (800 * 0.2), speed, chordAm[i], color[i], i));
    speed -= 0.01;
}


let chord = new Chord();





function animate() {
    //CLS.
    ctx.fillStyle = "rgb(0, 0, 0, 0.4)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = gradient;
    ctx.globalAlpha = 0.2;
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
            for (let i = 0; i < 24; i++) {
                chordAm[i].play();
            }
            ABass.play();
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


        let createbgpyramid = Math.random();
        if (createbgpyramid > 0.995) {
            backgroundPyramids.push(new BackgroundPyramid((Math.random() * canvas.width) - center.x, (Math.random() * canvas.height) - center.y));
        }


        pyramid.update();

        chord.update();

        forNotes()

        forShoots()

        forFloatNotes()

        forEdgeSplats()

        forParticles()

        forNoteCircles()

        forBackgroundPyramids();

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