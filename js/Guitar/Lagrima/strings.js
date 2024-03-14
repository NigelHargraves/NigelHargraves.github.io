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


    if (!E2_1.paused) {
        num = 18;
        string = strings[2].y;
        ctx.beginPath();
        ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }
    if (!FS2_1.paused) {
        num = 16;
        string = strings[2].y;
        ctx.beginPath();
        ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }
    if (!Ab2_1.paused) {
        num = 14;
        string = strings[2].y;
        ctx.beginPath();
        ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }
    if (!Eb1_2.paused) {
        num = 19;
        string = strings[2].y;
        ctx.beginPath();
        ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }


    if (!B2_1.paused) {
        num = 20;
        string = strings[4].y;
        ctx.beginPath();
        ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }
    if (!B2_0_5.paused) {
        num = 20;
        string = strings[4].y;
        ctx.beginPath();
        ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }




    if (!Ab3_1.paused) {
        num = 16;
        string = strings[5].y;
        ctx.beginPath();
        ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }
    if (!A3_1.paused) {
        num = 15;
        string = strings[5].y;
        ctx.beginPath();
        ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }
    if (!B3_1.paused) {
        num = 13;
        string = strings[5].y;
        ctx.beginPath();
        ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }
    if (!FS3_2.paused) {
        num = 18;
        string = strings[5].y;
        ctx.beginPath();
        ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }




}