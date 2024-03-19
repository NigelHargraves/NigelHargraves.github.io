// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let center = { x: canvas.width / 2, y: canvas.height / 2 };


let circle1 = { x: center.x / 3, y: center.y / 2 };
let circle2 = { x: (center.x / 3) * 2, y: canvas.height - center.y / 2 };
let circle3 = { x: center.x + center.x / 3, y: center.y / 2 };
let circle4 = { x: center.x + (center.x / 3) * 2, y: canvas.height - center.y / 2 };

let start = false,
    playNow = true,
    showChords = false;

let delay = 0,
    speed = 6,
    chordToPlay = 'Am';



let chordDm7 = [],
    chordF = [],
    chordAm = [],
    chordC = [],
    chordG = [],
    chordEm = [];

let color = [],
    notes = [],
    circles = [],
    particles = [];


createChords();



circles.push(new Circle(circle1.x, circle1.y));
circles.push(new Circle(circle2.x, circle2.y));
circles.push(new Circle(circle3.x, circle3.y));
circles.push(new Circle(circle4.x, circle4.y));



for (let i = 0; i < 36; i++) {
    let hue1 = (Math.random() * 260) + 100;
    let hue2 = (Math.random() * 260) + 100;
    let hue3 = (Math.random() * 260) + 100;
    color.push('rgb(' + hue1 + ',' + hue2 + ',' + hue3 + ')');
}

let chord = new Chord(center.x, canvas.height * 3);

let noteNumber = 0;

for (let i = 0; i < 9; i++) {
    let circleNumber = 1;
    notes.push(new Note(circle1.x, circle1.y, speed, circleNumber, chordAm[noteNumber], color[noteNumber]));
    circleNumber++;
    speed += 0.02;
    noteNumber++;
    notes.push(new Note(circle2.x, circle2.y, speed, circleNumber, chordAm[noteNumber], color[noteNumber]));
    circleNumber++;
    speed += 0.02;
    noteNumber++;
    notes.push(new Note(circle3.x, circle3.y, speed, circleNumber, chordAm[noteNumber], color[noteNumber]));
    circleNumber++;
    speed += 0.02;
    noteNumber++;
    notes.push(new Note(circle4.x, circle4.y, speed, circleNumber, chordAm[noteNumber], color[noteNumber]));
    speed += 0.02;
    noteNumber++;
}






setVolume()





function animate() {
    //CLS.
    ctx.fillStyle = "rgb(0, 0, 0, 0.6)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = 'white';
    ctx.globalAlpha = 0.04;
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
            ABass.play();
            playNow = false;
        }

        if (showChords) {
            ctx.font = "bold 20px Arial";
            ctx.fillStyle = "white";

            ctx.fillText(chordToPlay, 0, canvas.height * 0.02);
        }

        chord.update();

        forCircles()

        forNotes()

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