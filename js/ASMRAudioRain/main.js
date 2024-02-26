// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let clouds = [],
    rainDrops = [],
    splashes = [],
    bigDrops = [],
    dropHits = [];

let chordToPlay = 0,
    noteToPlay = 1;

let playFirstDChord = true,
    showChords = false;

clouds.push(new Cloud(Math.random() * (canvas.width - 300), Math.random() * canvas.height / 2, false));
clouds.push(new Cloud(Math.random() * (canvas.width - 300), Math.random() * canvas.height / 2, true));
clouds.push(new Cloud(Math.random() * (canvas.width - 300), Math.random() * canvas.height / 2, false));
clouds.push(new Cloud(Math.random() * (canvas.width - 300), Math.random() * canvas.height / 2, true));

bigDrops.push(new BigDrop(canvas.width / 2, 0));


function animate() {
    //CLS.
    ctx.fillStyle = "black";
    ctx.globalAlpha = 0.4;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "white";
    ctx.globalAlpha = 0.01;
    ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", (canvas.width / 2.4), canvas.height / 2);
    ctx.globalAlpha = 0.4;

    if (showChords) {
        ctx.font = "bold 20px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(chordToPlay, 0, canvas.height * 0.02);
    }

    forRainDrops();

    forClouds();

    forSplashes();

    forBigDrops();

    forDropHits();




    //call next frame.
    animationId = requestAnimationFrame(animate);

}


animate();