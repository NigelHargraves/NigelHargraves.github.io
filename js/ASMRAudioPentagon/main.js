// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let center = { x: canvas.width / 2, y: canvas.height / 2 };



let start = false,
    playNow = true,
    showChords = false;

let delay = 0,
    speed = 1,
    chordToPlay = 'E1';

let pentagon = new Pentagon(center.x, center.y);

let startPoint = { x: center.x + 400 * Math.cos(0), y: center.y + 400 * Math.sin(0) };

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



createChords();



for (let i = 0; i < 36; i++) {
    let hue1 = (Math.random() * 260) + 100;
    let hue2 = (Math.random() * 260) + 100;
    let hue3 = (Math.random() * 260) + 100;
    color.push('rgb(' + hue1 + ',' + hue2 + ',' + hue3 + ')')
    notes.push(new Notes(startPoint.x, startPoint.y, speed, i, chordE[i], color[i]));
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
    ctx.globalAlpha = 0.4;



    if (!start) {
        delay += 1;
        if (delay >= 100) {
            start = true;
        }
    }

    if (start) {
        if (playNow) {
            CBass.play();
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


        let createPentaons = Math.random();

        if (createPentaons > 0.99) {
            smallPentagons.push(new SmallPentagon(Math.random() * canvas.width, Math.random() * canvas.height, color[Math.floor(Math.random() * 36)]));
        }





        pentagon.update();

        forNotes();

        forSmallPentagons();

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