const audioContext = new AudioContext();
const container = document.getElementById('container');
const canvas = document.getElementById('canvas1');
const file = document.getElementById('fileupload');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
let red = 0;
let blue = 0;
let green = 0;
let directionX2 = 20;
let directionY2 = 20;
let barWidth = 0;
let barHeight = 20;
let x2 = canvas.width / 2;
let y2 = canvas.height / 2;
let audioSource;
let analyser;
let numberOfSpirals = 1;
let barH = [],
    redH = [],
    greenH = [],
    blueH = [],
    rotate = [];
let x = [],
    y = [],
    directionX = [],
    directionY = [];

for (i = 1; i <= numberOfSpirals; i++) {
    barH[i] = 2;
    redH[i] = 30;
    greenH[i] = 2;
    blueH[i] = 2;
    rotate[i] = 5;
    x[i] = Math.random() * canvas.width;
    y[i] = Math.random() * canvas.height;
    directionX[i] = Math.random() * 20;
    directionY[i] = Math.random() * 20;
}






container.addEventListener('click', function() {

    const audioContext = new AudioContext();
    audio1.play();
    audioSource = audioContext.createMediaElementSource(audio1);
    analyser = audioContext.createAnalyser();
    audioSource.connect(analyser);
    analyser.connect(audioContext.destination);
    analyser.fftSize = 512;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    barWidth = canvas.width / bufferLength;

    let a;


    function animate() {
        a = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);
        drawSpiral1(bufferLength, a, barWidth, barHeight, dataArray);
        drawSpiral2(bufferLength, barWidth, barHeight, dataArray);
        requestAnimationFrame(animate);

    }
    animate();
});

file.addEventListener('change', function() {
    const files = this.files;
    const audio1 = document.getElementById('audio1');
    audio1.src = URL.createObjectURL(files[0]);
    audio1.load();
    audio1.play();

})

function randomize() {
    for (i = 1; i <= numberOfSpirals; i++) {
        barH[i] = Math.random() * 3 + 0.1, redH[i] = Math.random() * 30, greenH[i] = Math.random() * 2, blueH[i] = Math.random() * 2;
        rotate[i] = Math.random() * 10;
        x[i] = Math.random() * canvas.width;
        y[i] = Math.random() * canvas.height;
    }

}

function drawSpiral1(bufferLength, a, barWidth, barHeight, dataArray) {
    for (let i = 1; i <= numberOfSpirals; i++) {
        for (let j = 0; j < bufferLength; j++) {
            barHeight = dataArray[j] * barH[i];
            ctx.save();
            ctx.translate(x[i], y[i]);
            ctx.rotate(j * Math.PI * rotate[i] / bufferLength);
            red = j * barHeight / redH[i];
            console.log(barHeight);
            green = j / greenH[i];
            blue = barHeight * blueH[i];
            ctx.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
            ctx.fillRect(0, 0, barWidth, barHeight);
            a += barWidth;
            ctx.restore();
        }
    }
}

function drawSpiral2(bufferLength, barWidth, barHeight, dataArray) {
    for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] * 2;
        ctx.save();
        ctx.translate(x2, y2);
        ctx.rotate(Math.PI * (Math.random() * 2));
        red = ((Math.random() * barHeight) / Math.random()) * 2;
        green = ((Math.random() * barHeight) / Math.random()) * 2;
        blue = ((Math.random() * barHeight) / Math.random()) * 2;
        ctx.strokeStyle = "rgb(" + red + "," + green + "," + blue + ")";
        ctx.beginPath();
        ctx.arc(0, 0, (barWidth * barHeight) / 2, 0, Math.PI * 2, false);
        ctx.moveTo(0, 0);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.stroke();
        ctx.restore();
    }
}

function move() {
    if (x2 >= canvas.width || x2 <= 0) {
        directionX2 = -directionX2;
    }
    if (y2 >= canvas.height || y2 <= 0) {
        directionY2 = -directionY2;
    }

    x2 += directionX2;
    y2 += directionY2;
}

setInterval(move, 100);



setInterval(randomize, 4000);