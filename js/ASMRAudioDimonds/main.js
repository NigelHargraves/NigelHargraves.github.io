// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let center = { x: canvas.width / 2, y: canvas.height / 2 };


const gradient = ctx.createRadialGradient(center.x, center.y, canvas.width / 8, center.x, center.y, canvas.height);
gradient.addColorStop(0, "rgba(0, 0, 0,0.4)");
gradient.addColorStop(1, 'rgba(127, 255, 212,0.2)');



let start = false,
    playNow = true,
    showChords = false;

let delay = 0,
    speed = 3,
    circleSpreadDistance = 100;

let chordToPlay = 'C';



let chordC = [],
    chordG = [],
    chordEm = [],
    chordAm = [],
    chordAsus2 = [],
    chordDsus4 = [],
    chordF = [],
    chordGsus4 = [];

let colors = [],
    notes = [],
    circles = [];




for (let i = 0; i < 12; i++) {
    circles.push(new Circle(circleSpreadDistance));
    circleSpreadDistance += 100;
}







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
    ctx.globalAlpha = 0.6;

    if (!start) {
        delay += 1;
        if (delay >= 100) {
            start = true;
        }
    }

    if (showChords) {
        ctx.font = "bold 20px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(chordToPlay, 0, canvas.height * 0.02);
    }

    if (start) {
        if (playNow) {

            playNow = false;
        }

        forCircles();

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