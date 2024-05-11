// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let delay = 0,
    rangeRed = 30,
    rangeYellow = 30,
    cellImpactSize = 2,
    simulationSpeed = 0.1,
    celSize = 1,
    cellBirth = 0,
    friction = 0.01;

let start = false,
    playSoundOnce = true,
    showInfo = false;

let redCells = [],
    yellowCells = [],
    amoebas = [];




function animate() {
    //CLS.
    ctx.fillStyle = "rgb(0, 0, 0, 0.4)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "white";
    ctx.globalAlpha = 0.005;
    ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", (canvas.width / 2.4), canvas.height / 2);
    ctx.globalAlpha = 0.2;





    if (!start) {
        delay += 1;
        if (delay >= 100) {
            start = true;
        }
    }


    if (start) {
        if (playSoundOnce) {

            playSoundOnce = false;
        }




        if (cellBirth == 100) {
            redCells.push(new RedCell(Math.random() * canvas.width, Math.random() * canvas.height));
        }
        if (cellBirth == 200) {
            yellowCells.push(new YellowCell(Math.random() * canvas.width, Math.random() * canvas.height));
        }


        if (redCells.length + yellowCells.length < 100) {
            if (cellBirth < 200) {
                cellBirth++;
            } else {
                cellBirth = 0;
            }
        } else {
            cellBirth = 0;
        }


        forRedCells();

        forYellowCells();

        forAmoebas();


        if (showInfo) {
            ctx.font = "bold 30px Arial";
            ctx.fillStyle = "white";
            ctx.fillText('Red            ' + redCells.length, 0, canvas.height * 0.04);
            ctx.fillText('Yellow       ' + yellowCells.length, 0, canvas.height * 0.08);
            ctx.fillText('Amoebas       ' + amoebas.length, 0, canvas.height * 0.12);
        }
    }



    //call next frame.
    animationId = requestAnimationFrame(animate);
}

animate();

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 32) {
        if (showInfo) {
            showInfo = false;
        } else {
            showInfo = true;
        }
    }
});

window.addEventListener("mousedown", (e) => {
    info = e.which;
    if (e.which == 1) {
        if (showInfo) {
            showInfo = false;
        } else {
            showInfo = true;
        }
    }
});