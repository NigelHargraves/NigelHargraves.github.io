class Note {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 10;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 400, 0, Math.PI * 2);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.stroke();
    }
    update() {

        this.draw();
    }
}

function forNotes() {
    notes.forEach((note, index) => {

        note.update();
    });
}