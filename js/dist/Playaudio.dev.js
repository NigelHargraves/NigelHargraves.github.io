"use strict";

var audioContext = new AudioContext();
var container = document.getElementById('container');
var canvas = document.getElementById('canvas1');
var file = document.getElementById('fileupload');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
var red = 0;
var blue = 0;
var green = 0;
var directionX2 = 20;
var directionY2 = 20;
var barWidth = 0;
var barHeight = 20;
var x2 = canvas.width / 2;
var y2 = canvas.height / 2;
var audioSource;
var analyser;
var numberOfSpirals = 1;
var barH = [],
    redH = [],
    greenH = [],
    blueH = [],
    rotate = [];
var x = [],
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

container.addEventListener('click', function () {
  var audioContext = new AudioContext();
  audio1.play();
  audioSource = audioContext.createMediaElementSource(audio1);
  analyser = audioContext.createAnalyser();
  audioSource.connect(analyser);
  analyser.connect(audioContext.destination);
  analyser.fftSize = 512;
  var bufferLength = analyser.frequencyBinCount;
  var dataArray = new Uint8Array(bufferLength);
  barWidth = canvas.width / bufferLength;
  var a;

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
file.addEventListener('change', function () {
  var files = this.files;
  var audio1 = document.getElementById('audio1');
  audio1.src = URL.createObjectURL(files[0]);
  audio1.load();
  audio1.play();
});

function randomize() {
  for (i = 1; i <= numberOfSpirals; i++) {
    barH[i] = Math.random() * 3 + 0.1, redH[i] = Math.random() * 30, greenH[i] = Math.random() * 2, blueH[i] = Math.random() * 2;
    rotate[i] = Math.random() * 10;
    x[i] = Math.random() * canvas.width;
    y[i] = Math.random() * canvas.height;
  }
}

function drawSpiral1(bufferLength, a, barWidth, barHeight, dataArray) {
  for (var _i = 1; _i <= numberOfSpirals; _i++) {
    for (var j = 0; j < bufferLength; j++) {
      barHeight = dataArray[j] * barH[_i];
      ctx.save();
      ctx.translate(x[_i], y[_i]);
      ctx.rotate(j * Math.PI * rotate[_i] / bufferLength);
      red = j * barHeight / redH[_i];
      console.log(barHeight);
      green = j / greenH[_i];
      blue = barHeight * blueH[_i];
      ctx.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
      ctx.fillRect(0, 0, barWidth, barHeight);
      a += barWidth;
      ctx.restore();
    }
  }
}

function drawSpiral2(bufferLength, barWidth, barHeight, dataArray) {
  for (var _i2 = 0; _i2 < bufferLength; _i2++) {
    barHeight = dataArray[_i2] * 2;
    ctx.save();
    ctx.translate(x2, y2);
    ctx.rotate(Math.PI * (Math.random() * 2));
    red = Math.random() * barHeight / Math.random() * 2;
    green = Math.random() * barHeight / Math.random() * 2;
    blue = Math.random() * barHeight / Math.random() * 2;
    ctx.strokeStyle = "rgb(" + red + "," + green + "," + blue + ")";
    ctx.beginPath();
    ctx.arc(0, 0, barWidth * barHeight / 2, 0, Math.PI * 2, false);
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