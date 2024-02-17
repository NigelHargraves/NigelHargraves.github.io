class Rectangle {
    constructor() {
        this.x = canvas.width / 4;
        this.y = canvas.height / 4;
        this.space = (canvas.width / 2) / 12;
    }
    draw() {
        ctx.lineWidth = 0.2;
        //draw chord line.
        ctx.beginPath();
        ctx.arc(this.x, this.y - canvas.height / 10, 4, 0, Math.PI * 2);
        ctx.arc(this.x + canvas.width / 2, this.y - canvas.height / 10, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(this.x, this.y - canvas.height / 10);
        ctx.lineTo(this.x + canvas.width / 2, this.y - canvas.height / 10);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        //draw bass line.
        ctx.beginPath();
        ctx.arc(this.x, this.y + canvas.height / 2 + canvas.height / 10, 4, 0, Math.PI * 2);
        ctx.arc(this.x + canvas.width / 2, this.y + canvas.height / 2 + canvas.height / 10, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(this.x, this.y + canvas.height / 2 + canvas.height / 10);
        ctx.lineTo(this.x + canvas.width / 2, this.y + canvas.height / 2 + canvas.height / 10);
        ctx.stroke();
        //draw snare line.
        ctx.beginPath();
        ctx.moveTo(this.x + (canvas.width / 2 + canvas.width / 10) - 10, canvas.height / 50);
        ctx.lineTo(this.x + (canvas.width / 2 + canvas.width / 10) + 10, canvas.height / 50);
        ctx.moveTo(this.x + (canvas.width / 2 + canvas.width / 10) - 10, canvas.height / 50 + canvas.width / 2);
        ctx.lineTo(this.x + (canvas.width / 2 + canvas.width / 10) + 10, canvas.height / 50 + canvas.width / 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x + canvas.width / 2 + canvas.width / 10, y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(this.x + canvas.width / 2 + canvas.width / 10, canvas.height / 50);
        ctx.lineTo(this.x + canvas.width / 2 + canvas.width / 10, canvas.height / 50 + canvas.width / 2);
        ctx.stroke();
        //draw hat line.
        ctx.beginPath();
        ctx.moveTo(this.x - canvas.width / 10, canvas.height / 50);
        ctx.lineTo(this.x - canvas.width / 10, canvas.height / 50 + canvas.width / 2);
        ctx.moveTo(this.x - (canvas.width / 10) - 10, canvas.height / 50);
        ctx.lineTo(this.x - (canvas.width / 10) + 10, canvas.height / 50);
        ctx.moveTo(this.x - (canvas.width / 10) - 10, canvas.height / 50 + canvas.width / 2);
        ctx.lineTo(this.x - (canvas.width / 10) + 10, canvas.height / 50 + canvas.width / 2);
        ctx.stroke();
        //draw hat beats.
        ctx.beginPath();
        for (let i = canvas.height / 50 + (canvas.height / 50 + canvas.width / 2) / 6; i < canvas.height / 50 + canvas.width / 2; i += (canvas.height / 50 + canvas.width / 2) / 6) {
            ctx.arc(this.x - canvas.width / 10, i, 4, 0, Math.PI * 2);
        }
        ctx.fill();
        //draw rectangle.
        ctx.beginPath();
        ctx.rect(this.x, this.y, canvas.width / 2, canvas.height / 2);
        ctx.stroke();
        //draw lines.
        ctx.beginPath();
        for (let i = this.x; i < (canvas.width / 2) + this.x; i += this.space) {
            ctx.moveTo(i, this.y);
            ctx.lineTo(i, this.y + canvas.height / 2);
            ctx.stroke();
        }

        //calculate line distance from one note to another & change line width.
        let opp = 0,
            adj = 0,
            hyp = 0,
            width = 0;
        for (let i = 0; i < notes.length - 1; i++) {
            ctx.beginPath();
            opp = Math.pow(notes[i + 1].x - notes[i].x, 2);
            adj = Math.pow(notes[i + 1].y - notes[i].y, 2);
            if (adj < 0) adj *= -1;
            hyp = Math.sqrt(opp + adj) / 40;
            ctx.moveTo(notes[i].x, notes[i].y);
            ctx.lineTo(notes[i + 1].x, notes[i + 1].y);
            width = (5 - hyp);
            if (width <= 0.1) {
                width = 0.1;
            }
            ctx.lineWidth = width;
            ctx.stroke();
        }

        ctx.lineWidth = 0.2;


    }
    update() {

        this.draw();
    }
}