class Guitar {
    constructor() {

    }
    draw() {
        this.extra = (fretBoard.x / 2) / 20;
        ctx.strokeStyle = 'white';
        //neck.
        ctx.beginPath();
        ctx.rect(fretBoard.x, fretBoard.y, (canvas.width / 2) + fretBoard.x / 2, canvas.height / 4);
        ctx.stroke();



        //frets.
        for (let i = 0; i < frets.length; i++) {
            ctx.beginPath();
            ctx.moveTo(fretBoard.x + frets[i], fretBoard.y);
            ctx.lineTo(fretBoard.x + frets[i], fretBoard.y + canvas.height / 4);
            ctx.stroke();
        }






        //hole.
        ctx.beginPath();
        ctx.arc(fretBoard.x - canvas.width / 10, center.y, 180, 0, Math.PI * 2);
        ctx.stroke();
        //bridge.
        ctx.beginPath();
        ctx.moveTo(bridge, fretBoard.y);
        ctx.lineTo(bridge, fretBoard.y + canvas.height / 4);
        ctx.stroke();
    }
    update() {

        this.draw();
    }
}