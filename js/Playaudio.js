const audioContext = new AudioContext();
const container = document.getElementById('container');
const canvas = document.getElementById('canvas1');
const file = document.getElementById('fileupload');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

let audioSource;
let analyser;
let numberOfSpirals = 4;
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
    analyser.fftSize = 1024;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const barWidth = canvas.width / bufferLength;
    let barHeight;
    let a;


    function animate() {
        a = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);
        drawSpiral(bufferLength, a, barWidth, barHeight, dataArray);
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

function drawSpiral(bufferLength, a, barWidth, barHeight, dataArray) {
    for (let i = 1; i <= numberOfSpirals; i++) {

        for (let j = 0; j < bufferLength; j++) {

            barHeight = dataArray[j] * barH[i];
            ctx.save();
            ctx.translate(x[i], y[i]);
            ctx.rotate(j * Math.PI * rotate[i] / bufferLength);
            const red = j * barHeight / redH[i];
            console.log(barHeight);
            const green = j / greenH[i];
            const blue = barHeight * blueH[i];
            ctx.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
            ctx.fillRect(0, 0, barWidth, barHeight);
            a += barWidth;
            ctx.restore();
        }
    }
}




setInterval(randomize, 4000);