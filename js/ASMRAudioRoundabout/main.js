// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let center = { x: canvas.width / 2, y: canvas.height / 2 };

let arrows = new Image();
arrows.src = 'images/ASMRAudio/arrows.png';



let start1 = false,
    start2 = false,
    playNow = true,
    showChords = false;

let delay1 = 0,
    delay2 = 0,
    speed = 2,
    chordToPlay = 'Cm';



let chordC = [],
    chordCm = [],
    chordD = [],
    chordDm = [],
    chordE = [],
    chordEm = [],
    chordF = [],
    chordFm = [],
    chordG = [],
    chordGm = [],
    chordA = [],
    chordAm = [],
    chordB = [],
    chordBm = [];

let colors = [],
    colorNumber = [],
    notesRight = [],
    notesLeft = [],
    particles = [],
    stars = [];


let point = { x: 0, y: 0 },
    adj, opp, hyp;

let distance = 0.95,
    gravity = 0.001;

point = { x: center.x - ((center.x * 0.9) / distance), y: 0 + ((center.y - (center.y * 0.9)) / distance) };
adj = Math.pow(center.x - point.x, 2);
opp = Math.pow(point.y, 2);
hyp = Math.sqrt(opp + adj);

let chord = new Chord(point.x, point.y, hyp);

createChords();

setVolume();


for (let i = 0; i < 24; i++) {
    let number = Math.floor(Math.random() * 360)
    let arrayLength = 0;
    if (colorNumber.length > 0) {
        colorNumber.forEach((cn, index) => {
            if (number == cn) {
                colorNumber.splice(index, 1);
                i -= 1;
                arrayLength = 0;
                return;
            } else {
                arrayLength += 1;
            }
        });
    }
    if (arrayLength == colorNumber.length) {
        colorNumber.push(number);
    }
}

for (let i = 0; i < 24; i++) {
    colors.push("hsl(" + colorNumber[i] + ",100%,50%)");
}

let road = new Road();

let arrow = new Arrows();

for (let i = 0; i < 24; i++) {
    if (i < 12) {
        notesRight.push(new NoteRight(center.x, center.y, speed, chordCm[i], colors[i]));
    } else {
        notesLeft.push(new NoteLeft(center.x, center.y, speed, chordCm[i], colors[i]));
    }
    speed += 0.01;
}


colorNumber.sort(function(a, b) { return a - b });

function animate() {
    //CLS.
    ctx.fillStyle = "rgb(0, 0, 0, 0.4)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = 'white';
    ctx.globalAlpha = 0.02;
    ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", center.x - (center.x / 6), center.y);
    ctx.globalAlpha = 0.4;



    if (!start1) {
        delay1 += 1;
        if (delay1 >= 200) {
            start1 = true;
        }
    }

    if (start1) {


        if (showChords) {
            ctx.font = "bold 20px Arial";
            ctx.fillStyle = "white";
            ctx.fillText(chordToPlay, 0, canvas.height * 0.02);
        }



        road.update();

        if (!start2) {
            delay2 += 1;
            if (delay2 >= 400) {
                start2 = true;
            }
        }

        if (start2) {
            if (playNow) {
                for (let i = 0; i < 24; i++) {
                    chordCm[i].play();
                }
                CBass.play();
                CmChord.play();
                road.lineWidth = 3;
                playNow = false;
            }
            let createStar = Math.random();

            if (createStar > 0.98) {
                let elevation = Math.random();
                let side = Math.random();
                let y;
                let x = Math.random() * canvas.width;
                let speed = 4;
                if (elevation > 0.5) {
                    y = canvas.height + 100;
                } else {
                    y = -100;
                }
                if (x < center.x / 3 || x > center.x + ((center.x / 3) * 2)) {
                    speed = 6;
                }
                if (x > center.x / 3 && x < (center.x / 3) * 2) {
                    speed = 5;
                }
                if (x > center.x + (center.x / 3) && x < center.x + (center.x / 3) * 2) {
                    speed = 5;
                }
                stars.push(new Star(x, y, speed));
            }







            chord.update();
            arrow.update();
            forNotesRight();
            forNotesLeft();
            forParticles();
            forStars();
        }
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