// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let center = { x: canvas.width / 2, y: canvas.height / 2 };

let notes = [],
    particles = [],
    zigzags = [],
    chordC = [],
    chordF = [],
    chordG = [],
    chordGsus4 = [],
    chordDm = [],
    chordEm = [],
    color = [];

let start = false,
    playNow = true;

let delay = 0,
    speed = 5,
    innerSpeed = 1,
    chord,
    noteNumber = 0;

let cross = new Cross(center.x, center.y);

createChords();

let chordToPlay = 'C1';




for (let i = 70; i <= 430; i += 30) {
    let hue1 = (Math.random() * 260) + 100;
    let hue2 = (Math.random() * 260) + 100;
    let hue3 = (Math.random() * 260) + 100;
    color.push('rgb(' + hue1 + ',' + hue2 + ',' + hue3 + ')')
    if (i <= 400) {
        notes.push(new Note(center.x, center.y, i, speed, noteNumber, color[noteNumber], innerSpeed));
        noteNumber++;
    }
    innerSpeed += 0.01;
    speed += 0.01;
    if (i > 400) {
        chord = new Chord(center.x, center.y, i + 30, speed + 0.1);
    }
}



for (let i = -70; i >= -400; i += -30) {
    let hue1 = (Math.random() * 260) + 100;
    let hue2 = (Math.random() * 260) + 100;
    let hue3 = (Math.random() * 260) + 100;
    color.push('rgb(' + hue1 + ',' + hue2 + ',' + hue3 + ')')
    notes.push(new Note(center.x, center.y, i, speed, noteNumber, color[noteNumber], innerSpeed));
    noteNumber++;
    innerSpeed += 0.01;
    speed += 0.01;
}

setVolume();

function animate() {
    //CLS.
    ctx.fillStyle = "rgb(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = 'white';
    ctx.globalAlpha = 0.01;
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
            CBass.play();
            CVox1.play();
            playNow = false;
        }

        let createZigzags = Math.random();
        if (createZigzags > 0.9) {
            let direction = Math.random();
            if (direction > 0.5) {
                zigzags.push(new Zigzag(Math.random() * canvas.width, Math.random() * canvas.height, 'x'))
            } else {
                zigzags.push(new Zigzag(Math.random() * canvas.width, Math.random() * canvas.height, 'y'))
            }

        }


        cross.update();

        chord.update();

        forNotes();

        forParticles();

        forZigzags();


    }

    //call next frame.
    animationId = requestAnimationFrame(animate);

}


animate();