// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let center = { x: canvas.width / 2, y: canvas.height / 2 };



let start = false,
    playNow = true;

let delay = 0,
    velocity = 4,
    selectColor = 0;

let oval = new Oval(center.x, center.y);
let chord = new Chord(0, -center.y);


let notes = [],
    particles = [],
    smallOvals = [],
    color = [];

for (let i = 0; i < 24; i++) {
    let hue1 = (Math.random() * 260) + 100;
    let hue2 = (Math.random() * 260) + 100;
    let hue3 = (Math.random() * 260) + 100;
    color.push('rgb(' + hue1 + ',' + hue2 + ',' + hue3 + ')')
    if (i < 11) {
        notes.push(new Note(center.x, center.y, velocity, 0 - (Math.PI / 2), color[selectColor]));
    } else {
        notes.push(new Note(center.x, center.y, velocity, 0 - (-Math.PI / 2), color[selectColor]));
    }
    selectColor += 1;
    velocity += 0.01;
}









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

            playNow = false;
        }


        let createOvals = Math.random();
        if (createOvals > 0.998) {
            smallOvals.push(new Ovals(Math.random() * canvas.width, Math.random() * canvas.height, color[Math.floor(Math.random() * 24)]));
        }



        oval.update();

        chord.update();

        forNote();

        forParticles()

        forOvals();


    }

    //call next frame.
    animationId = requestAnimationFrame(animate);

}


animate();