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
    let minusNote = 0;
    if (nextNote == 0) {
        minusNote = 0;
    } else {
        minusNote = 1;
    }
    let num;
    let string;
    if (noteToPlay[nextNote - minusNote] == CO1) {
        num = 17;
        string = strings[1].y;
    }
    if (noteToPlay[nextNote - minusNote] == DO1) {
        num = 20;
        string = strings[2].y;
    }
    if (noteToPlay[nextNote - minusNote] == EO1) {
        num = 18;
        string = strings[2].y;
    }
    if (noteToPlay[nextNote - minusNote] == FO1) {
        num = 17;
        string = strings[2].y;
    }
    if (noteToPlay[nextNote - minusNote] == GO1) {
        num = 20;
        string = strings[3].y;
    }
    if (noteToPlay[nextNote - minusNote] == AO1) {
        num = 18;
        string = strings[3].y;
    }
    if (noteToPlay[nextNote - minusNote] == BO1) {
        num = 20;
        string = strings[4].y;
    }
    if (noteToPlay[nextNote - minusNote] == CO2) {
        num = 19;
        string = strings[4].y;
    }
    if (noteToPlay[nextNote - minusNote] == DO2) {
        num = 17;
        string = strings[4].y;
    }
    if (noteToPlay[nextNote - minusNote] == EO2) {
        num = 20;
        string = strings[5].y;
    }
    if (noteToPlay[nextNote - minusNote] == FO2) {
        num = 19;
        string = strings[5].y;
    }
    if (noteToPlay[nextNote - minusNote] == GO2) {
        num = 17;
        string = strings[5].y;
    }
    if (noteToPlay[nextNote - minusNote] == AO2) {
        num = 15;
        string = strings[5].y;
    }
    if (noteToPlay[nextNote - minusNote] == BO2) {
        num = 13;
        string = strings[5].y;
    }
    if (noteToPlay[nextNote - minusNote] == CO3) {
        num = 12;
        string = strings[5].y;
    }


    if (!noteToPlay[nextNote].ended) {
        ctx.beginPath();
        ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }


}