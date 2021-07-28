"use strict";

var audioContext = new AudioContext();
var container = document.getElementById('container');
var canvas = document.getElementById('canvas1');
var file = document.getElementById('fileupload');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
var audioSource;
var analyser;
var numberOfSpirals = 4;
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
  analyser.fftSize = 1024;
  var bufferLength = analyser.frequencyBinCount;
  var dataArray = new Uint8Array(bufferLength);
  var barWidth = canvas.width / bufferLength;
  var barHeight;
  var a;

  function animate() {
    a = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    analyser.getByteFrequencyData(dataArray);
    drawSpiral(bufferLength, a, barWidth, barHeight, dataArray);
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

function drawSpiral(bufferLength, a, barWidth, barHeight, dataArray) {
  for (var _i = 1; _i <= numberOfSpirals; _i++) {
    for (var j = 0; j < bufferLength; j++) {
      barHeight = dataArray[j] * barH[_i];
      ctx.save();
      ctx.translate(x[_i], y[_i]);
      ctx.rotate(j * Math.PI * rotate[_i] / bufferLength);
      var red = j * barHeight / redH[_i];
      console.log(barHeight);
      var green = j / greenH[_i];
      var blue = barHeight * blueH[_i];
      ctx.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
      ctx.fillRect(0, 0, barWidth, barHeight);
      a += barWidth;
      ctx.restore();
    }
  }
}

setInterval(randomize, 4000);