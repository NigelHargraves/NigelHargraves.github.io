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


        noteToDisplay(this.smallGap);




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

function noteToDisplay(gap) {

    let num;
    let string;


    if (!DO1.paused) {
        num = 20;
        string = strings[2].y;
        ctx.beginPath();
        ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }
    if (!FO1.paused) {
        num = 17;
        string = strings[2].y;
        ctx.beginPath();
        ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }
    if (!AO1.paused) {
        num = 18;
        string = strings[3].y;
        ctx.beginPath();
        ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }
    if (!CO2.paused) {
        num = 19;
        string = strings[4].y;
        ctx.beginPath();
        ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }









}