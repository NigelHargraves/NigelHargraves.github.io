// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let notes = [],
    upperNotes = [],
    stars = [],
    chords = [],
    bubbles = [],
    whiteStars = [];

let note1;
let note2;
let note3;
let upperNote1;
let upperNote2;
let upperNote3;

let chordChange = 'C',
    delay = 0;

let cross;

let changeChordNotes = false,
    changeChordUpperNotes = false,
    start = false,
    playSoundOnce = true,
    showChords = false;



function animate() {
    //CLS.
    ctx.fillStyle = "rgb(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "white";
    ctx.globalAlpha = 0.01;
    ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", (canvas.width / 2.4), canvas.height / 2);
    ctx.globalAlpha = 1;
    if (!start) {
        delay += 1;
        if (delay >= 100) {
            start = true;
        }
    }

    if (start) {
        if (playSoundOnce) {
            CBass.play();
            CVoice.play();
            playSoundOnce = false;
        }



        forNote();

        forUpperNote();

        forStar();

        forChord();

        forBubble();

        forWhiteStars();

        cross.update();

        if (showChords) {
            ctx.font = "bold 20px Arial";
            ctx.fillStyle = "white";
            ctx.fillText(chordChange, 0, canvas.height * 0.02);
        }
    }

    //call next frame.
    animationId = requestAnimationFrame(animate);

}

init();
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