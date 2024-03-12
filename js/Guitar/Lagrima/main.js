// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let fretBoard = { x: canvas.width / 4, y: (canvas.height / 2) - canvas.height / 8 };

let center = { x: canvas.width / 2, y: canvas.height / 2 };

let start = false,
    Gplay = true;

let delay = 0;

let bridge = canvas.width / 30;

let guitar = new Guitar();



let strings = [],
    frets = [],
    fretNumber = [];
//(fretBoard.x / 2) / 20
let fret = 0;
let fretSpace = (canvas.width / 2) / 30;

for (let i = fretSpace; i < fretSpace * 36; i += fretSpace) {
    frets.push(i);
    fret += (fretBoard.x / 2) / 80;
    i += fret;
}

let nut = (fretBoard.x + (canvas.width / 2) + fretBoard.x / 2);

fretNumber.push(0, nut - (canvas.width / 46), nut - (canvas.width / 15.5), nut - (canvas.width / 9.25))












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
        delay += 1;
        if (delay >= 50) {
            start = true;
        }
    }

    if (start) {

        guitar.update();

        forStrings();





    }

    //call next frame.
    animationId = requestAnimationFrame(animate);

}


animate();