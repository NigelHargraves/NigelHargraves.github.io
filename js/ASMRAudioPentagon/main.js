// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let center = { x: canvas.width / 2, y: canvas.height / 2 };



let start = false,
    playNow = true,
    showChords = true;

let delay = 0,
    speed = 1,
    scaleToPlay = 'C';

let pentagon = new Pentagon(center.x, center.y);

let startPoint = { x: center.x + 400 * Math.cos(0), y: center.y + 400 * Math.sin(0) };


let color = [],
    notes = [];

let scaleC = [CO1, DO1, EO1, FO1, GO1, AO1, BO1, CO2, DO2, EO2, FO2,
    GO2, AO2, BO2, CO3, DO3, EO3, FO3, GO3, AO3, BO3, CO4, DO4,
    EO4, FO4, GO4, AO4, BO4
];

let scaleEm = [CO1, DO1, EO1, FSO1, GO1, AO1, BO1, CO2, DO2, EO2,
    FSO2, GO2, AO2, BO2, CO3, DO3, EO3, FSO3, GO3, AO3, BO3,
    CO4, DO4, EO4, FSO4, GO4, AO4, BO4
];

let scaleGm = [CO1, DO1, EbO1, FO1, GO1, AO1, BbO1, CO2, DO2, EbO2,
    FO2, GO2, AO2, BbO2, CO3, DO3, EbO3, FO3, GO3, AO3, BbO3,
    CO4, DO4, EbO4, FO4, GO4, AO4, BbO4
];

for (let i = 0; i < 24; i++) {
    let hue1 = (Math.random() * 260) + 100;
    let hue2 = (Math.random() * 260) + 100;
    let hue3 = (Math.random() * 260) + 100;
    color.push('rgb(' + hue1 + ',' + hue2 + ',' + hue3 + ')')
}


for (let i = 0; i < 28; i++) {
    notes.push(new Notes(startPoint.x, startPoint.y, speed, i, scaleC[i]));
    speed -= (speed / 200);
    if (i == 13) {
        startPoint = { x: center.x + 400 * Math.cos((Math.PI * 2) / 5), y: center.y + 400 * Math.sin((Math.PI * 2) / 5) };
    }
}






function animate() {
    //CLS.
    ctx.fillStyle = "rgb(0, 0, 0, 0.6)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = 'white';
    ctx.globalAlpha = 0.04;
    ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", center.x - (center.x / 6), center.y);
    ctx.globalAlpha = 0.4;



    if (!start) {
        delay += 1;
        if (delay >= 100) {
            start = true;
        }
    }

    if (start) {
        if (playNow) {
            CBass.play();
            playNow = false;
        }

        if (showChords) {
            ctx.font = "bold 20px Arial";
            ctx.fillStyle = "white";
            ctx.fillText(pentagon.rotateAngle, 0, canvas.height * 0.02);
        }


        pentagon.update();

        forNotes();


    }

    //call next frame.
    animationId = requestAnimationFrame(animate);

}


animate();