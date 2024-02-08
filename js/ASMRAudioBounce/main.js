// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let notes = [],
    chords = [],
    ejectNotes = [],
    splashes = [],
    crosses = [];

let chordChange = 'C',
    delay = 0,
    newChord = -1,
    endNote = 0;

let start = false,
    playNow = false,
    eject = false;




function animate() {
    //CLS.
    ctx.fillStyle = "rgb(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "white";
    ctx.globalAlpha = 0.005;
    ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", (canvas.width / 2.4), canvas.height / 2);
    ctx.globalAlpha = 0.4;


    if (!start) {
        delay += 1;
        if (delay >= 100) {
            start = true;
        }
    }


    let createCross = Math.random();
    if (createCross > 0.999 && crosses.length < 4) {
        crosses.push(new Cross(Math.random() * canvas.width, Math.random() * canvas.height));
    }


    if (start) {

        forChords();

        forEjectNotes();

        forSplashes();

        forCross();
    }




    //call next frame.
    animationId = requestAnimationFrame(animate);

}


init()
animate();