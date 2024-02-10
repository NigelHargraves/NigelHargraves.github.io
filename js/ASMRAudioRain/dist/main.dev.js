"use strict";

// Set the canvas element to  variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var clouds = [],
    rainDrops = [],
    splashes = [],
    bigDrops = [];
var chordToPlay = 0;
clouds.push(new Cloud(Math.random() * (canvas.width - 300), Math.random() * canvas.height / 2, false));
clouds.push(new Cloud(Math.random() * (canvas.width - 300), Math.random() * canvas.height / 2, true));
clouds.push(new Cloud(Math.random() * (canvas.width - 300), Math.random() * canvas.height / 2, false));
clouds.push(new Cloud(Math.random() * (canvas.width - 300), Math.random() * canvas.height / 2, true));
bigDrops.push(new BigDrop(canvas.width / 2, 0));

function animate() {
  //CLS.
  ctx.fillStyle = "black";
  ctx.globalAlpha = 0.4;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "bold 50px Arial";
  ctx.fillStyle = "white";
  ctx.globalAlpha = 0.01;
  ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", canvas.width / 2.4, canvas.height / 2);
  ctx.globalAlpha = 0.4;
  forRainDrops();
  forClouds();
  forSplashes();
  forBigDrops(); //call next frame.

  animationId = requestAnimationFrame(animate);
}

animate();