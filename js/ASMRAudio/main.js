// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let notes = [],
    upperNotes = [],
    stars = [],
    chords = [];

let chordChange = 'C';


let changeChordNotes = false,
    changeChordUpperNotes = false;



function animate() {
    //CLS.
    ctx.fillStyle = "rgb(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);




    forNote();
    forUpperNote();
    forStar();
    forChord();







    //call next frame.
    animationId = requestAnimationFrame(animate);

}


init();
animate();