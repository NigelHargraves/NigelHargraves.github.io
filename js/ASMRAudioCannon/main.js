// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let center = { x: canvas.width / 2, y: canvas.height / 2 };



let start = false,
    playNow = true,
    showChords = false,
    dontChangeChord = true;

let delay = 0,
    createChord = 0,
    noteNumber = 0,
    chordToPlay = 'D1';


let chordD = [],
    chordA = [],
    chordBm = [],
    chordF$m = [],
    chordG = [];


let cannons = [],
    notes = [],
    particles = [],
    chords = [];

cannons.push(new Cannon(50, canvas.height - 20, 0 - Math.random() * (Math.PI / 2), true));
cannons.push(new Cannon(150, canvas.height - 20, 0 - Math.random() * (Math.PI / 2), true));
cannons.push(new Cannon(250, canvas.height - 20, 0 - Math.random() * (Math.PI / 2), true));
cannons.push(new Cannon(canvas.width - 50, canvas.height - 20, 0 - (Math.PI / 2) - Math.random() * (Math.PI / 2), false));
cannons.push(new Cannon(canvas.width - 150, canvas.height - 20, 0 - (Math.PI / 2) - Math.random() * (Math.PI / 2), false));
cannons.push(new Cannon(canvas.width - 250, canvas.height - 20, 0 - (Math.PI / 2) - Math.random() * (Math.PI / 2), false));

chords.push(new Chord(center.x, 0));

createChords();


function animate() {
    //CLS.
    ctx.fillStyle = "rgb(0, 0, 0, 0.6)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = 'white';
    ctx.globalAlpha = 0.04;
    ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", center.x - (center.x / 6), center.y);
    ctx.globalAlpha = 0.4;

    if (showChords) {
        ctx.font = "bold 20px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(chordToPlay, 0, canvas.height * 0.02);
    }

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

        createChord++;

        if (createChord >= 800) {
            chords.push(new Chord(center.x, 0));
            createChord = 0;
        }




        forCannons();

        forNotes();

        forParticles();

        forChords();

    }

    //call next frame.
    animationId = requestAnimationFrame(animate);

}


animate();