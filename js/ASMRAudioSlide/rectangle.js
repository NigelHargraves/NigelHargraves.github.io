class Rectangle {
    constructor() {
        this.x = canvas.width / 4;
        this.y = canvas.height / 4;
        this.space = (canvas.width / 2) / 12;
    }
    draw() {
        //draw chord line.
        ctx.beginPath();
        ctx.moveTo(this.x, this.y - canvas.height / 10);
        ctx.lineTo(this.x + canvas.width / 2, this.y - canvas.height / 10);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        //draw notes rectangle.
        ctx.beginPath();
        ctx.rect(this.x, this.y, canvas.width / 2, canvas.height / 2);
        ctx.stroke();
        //draw lines.
        ctx.beginPath();
        for (let i = this.x; i < (canvas.width / 2) + this.x; i += this.space) {
            ctx.moveTo(i, this.y);
            ctx.lineTo(i, this.y + canvas.height / 2);
        }
        ctx.stroke();

        for (let i = 0; i < notes.length - 1; i++) {
            ctx.beginPath();
            ctx.moveTo(notes[i].x, notes[i].y);
            ctx.lineTo(notes[i + 1].x, notes[i + 1].y);
            ctx.stroke();
        }

    }
    update() {

        this.draw();
    }
}