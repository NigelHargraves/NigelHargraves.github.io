// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let fretBoard = { x: canvas.width / 4, y: (canvas.height / 2) - canvas.height / 8 };

let center = { x: canvas.width / 2, y: canvas.height / 2 };

let start = false,
    checkNote = false;

let delay = 200;

let bridge = canvas.width / 30;

let guitar = new Guitar();

let noteToPlay = [DO1, FO1, AO1, CO2];



let strings = [],
    frets = [],
    fretNumber = [],
    notes = [];
//(fretBoard.x / 2) / 20
let fret = 0;
let fretSpace = (canvas.width / 2) / 30;
let noteSpace = (canvas.width / 2) / 60;

for (let i = fretSpace; i < fretSpace * 36; i += fretSpace) {
    frets.push(i);
    fret += (fretBoard.x / 2) / 80;
    i += fret;
}
fret = 0;
let number = 20;
for (let i = noteSpace; i < noteSpace * 40; i += noteSpace) {

    if (fret == 0) {
        noteSpace = (canvas.width / 2) / 30;
    }
    fretNumber.push({ pos: i, fn: number });
    number -= 1;
    fret += (fretBoard.x / 2) / 86;
    i += fret;

}



notes.push(CO1, DO1, EO1, FO1, GO1, AO1, BO1, CO2, DO2, EO2, FO2, GO2, AO2, BO2, CO3);

let nextNote = 0,
    addNote = 50;









let stringGap = ((canvas.height / 4) - (canvas.height / 40)) / 5;
strings.push(new String(0, 'EBottom'))
strings.push(new String(stringGap, 'A'));
strings.push(new String(stringGap * 2, 'D'));
strings.push(new String(stringGap * 3, 'G'))
strings.push(new String(stringGap * 4, 'B'));
strings.push(new String(stringGap * 5, 'ETop'));











function animate() {
    //CLS.
    ctx.fillStyle = "rgb(0, 0, 0, 0.6)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);




    if (!start) {
        delay -= 1;
        if (delay <= 0) {
            start = true;

        }
    }

    if (start) {

        guitar.update();

        forStrings();

        if (delay <= 0) {


            noteToPlay[nextNote].play();

            nextNote++;
            if (nextNote == 4) {
                nextNote = 0;
            }
            delay = 100;

        }
        delay -= 1;




    }

    //call next frame.
    animationId = requestAnimationFrame(animate);

}


animate();