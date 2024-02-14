// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let rectangle = new Rectangle(),
    chord = new Chord();

let notes = [];

let acceleration = 1;

for (let i = rectangle.x; i < (canvas.width / 2) + rectangle.x; i += rectangle.space) {
    notes.push(new Note(i + (rectangle.space / 2), rectangle.y, acceleration));
    acceleration -= 0.01;
}


function animate() {
    //CLS.
    ctx.fillStyle = "rgb(0, 0, 0, 0.4)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "white";
    ctx.globalAlpha = 0.005;
    ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", (canvas.width / 2.4), canvas.height / 2);
    ctx.globalAlpha = 0.4;



    rectangle.update();

    chord.update();

    forNotes();



    //call next frame.
    animationId = requestAnimationFrame(animate);

}


animate();