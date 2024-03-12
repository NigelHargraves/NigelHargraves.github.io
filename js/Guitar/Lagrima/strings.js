class String {
    constructor(y, name) {
        this.y = y;
        this.name = name;
        this.smallGap = canvas.height / 80;
    }
    draw() {
        ctx.beginPath();
        ctx.moveTo(bridge, fretBoard.y + this.smallGap + this.y);
        ctx.lineTo((fretBoard.x + canvas.width / 2) + fretBoard.x / 2, fretBoard.y + this.smallGap + this.y);
        ctx.stroke();

        if (Gplay) {
            ctx.beginPath();
            ctx.arc(fretNumber[3], fretBoard.y + this.smallGap, 5, 0, Math.PI * 2);
            ctx.fillStyle = 'white';
            ctx.fill();
        }



    }
    update() {

        this.draw();
    }
}

function forStrings() {
    strings.forEach((string, index) => {
        string.update();
    });
}