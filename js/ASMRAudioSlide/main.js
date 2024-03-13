// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
x = canvas.width / 2;
y = canvas.height / 2;


const gradient = ctx.createRadialGradient(x, y, canvas.width / 8, x, y, canvas.height);
gradient.addColorStop(0, "rgba(0, 0, 0,0.4)");
gradient.addColorStop(1, 'rgba(25, 25, 112,0.2)');




let start = false,
    playNow = true,
    showChords = false;

let notes = [],
    chordC = [],
    chordG = [],
    chordAm = [],
    chordF = [],
    particles = [],
    bounceLines = [],
    stars = [],
    colors = [];

createChords();

for (let i = 0; i < 16; i++) {
    let hue1 = (Math.random() * 260) + 100;
    let hue2 = (Math.random() * 260) + 100;
    let hue3 = (Math.random() * 260) + 100;
    colors.push('rgb(' + hue1 + ',' + hue2 + ',' + hue3 + ')')
}


let rectangle = new Rectangle(),
    chord = new Chord(),
    bass = new Bass(),
    snareDrum = new Snare(),
    highHat = new Hat();





let chordToPlay = 'C1';

let speed = 0.001,
    noteNumber = 0,
    delay = 0;

for (let i = rectangle.x; i < (canvas.width / 2) + rectangle.x; i += rectangle.space) {
    notes.push(new Note(i + (rectangle.space / 2), rectangle.y, 1, chordC[noteNumber], speed, colors[noteNumber]));
    speed -= 0.0001;
    noteNumber++;
}


setVolume();



function animate() {
    //CLS.
    ctx.fillStyle = gradient;
    ctx.globalAlpha = 0.2;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = 'white';
    ctx.globalAlpha = 0.01;
    ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", (canvas.width / 2.4), canvas.height / 2);
    ctx.globalAlpha = 0.4;

    if (!start) {
        delay += 1;
        if (delay >= 100) {
            start = true;
        }
    }

    if (start) {

        if (showChords) {
            ctx.font = "bold 20px Arial";
            ctx.fillStyle = "white";
            let thisChord = chordToPlay.substring(0, chordToPlay.length - 1);
            ctx.fillText(thisChord, 0, canvas.height * 0.02);
        }

        if (playNow) {
            CChord.play();
            CBass.play();
            CO1Note.play();
            EO1Note.play();
            GO1Note.play();
            CO2Note.play();
            EO2Note.play();
            GO2Note.play();
            CO3Note.play();
            EO3Note.play();
            GO3Note.play();
            CO4Note.play();
            EO4Note.play();
            GO4Note.play();
            drumBass.play();
            playNow = false;
        }

        let createStar = Math.random();
        if (createStar > 0.99) {
            ctx.save();
            ctx.translate(x, y);
            stars.push(new Star(Math.random() * canvas.width - canvas.width / 2, Math.random() * canvas.height - canvas.height / 2));
            ctx.restore();
        }

        rectangle.update();

        chord.update();

        bass.update();

        snareDrum.update();

        highHat.update();

        forStars();

        forNotes();

        forParticles();

        forBounceLines();

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