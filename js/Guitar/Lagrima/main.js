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

let noteToPlay = [E2_1, FS2_1, Ab2_1, Eb1_2];



let strings = [],
    frets = [],
    fretNumber = [],
    notes = [];

let fret = 0;
let fretSpace = (canvas.width / 2) / 30;
let noteSpace = (canvas.width / 2) / 60;


//Calculate fret space and Note space.
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





let nextNote = 0,
    addNote = 50,
    barSplit = 1;









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

            notes = [];

            if (barSplit == 1) {
                notes.push(E2_1, Ab3_1);
            }
            if (barSplit == 2) {
                notes.push(B2_0_5);
            }
            if (barSplit == 3) {
                notes.push(FS2_1, A3_1);
            }
            if (barSplit == 4) {
                notes.push(B2_0_5);
            }
            if (barSplit == 5) {
                notes.push(Ab2_1, B3_1);
            }
            if (barSplit == 6) {
                notes.push(B2_0_5);
            }
            if (barSplit == 7) {
                notes.push(Eb1_2, FS3_2);
            }


            for (let i = 0; i < notes.length; i++) {

                notes[i].play();
            }




            nextNote++;
            if (nextNote == 2) {
                nextNote = 0;
            }

            barSplit++;
            if (barSplit == 8) {
                barSplit = 1;
                delay = 100;
            } else {
                delay = 25;
            }
        }
        delay -= 1;




    }

    //call next frame.
    animationId = requestAnimationFrame(animate);

}


animate();