"use strict";

// Set the canvas element to  variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var clouds = [];
clouds.push(new Cloud(Math.random() * canvas.width, Math.random() * canvas.height / 2));
clouds.push(new Cloud(Math.random() * canvas.width, Math.random() * canvas.height / 2));
clouds.push(new Cloud(Math.random() * canvas.width, Math.random() * canvas.height / 2));
clouds.push(new Cloud(Math.random() * canvas.width, Math.random() * canvas.height / 2));

function animate() {
  //CLS.
  ctx.fillStyle = "rgb(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "bold 50px Arial";
  ctx.fillStyle = "white";
  ctx.globalAlpha = 0.01;
  ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", canvas.width / 2.4, canvas.height / 2);
  ctx.globalAlpha = 0.4;
  forClouds(); //call next frame.

  animationId = requestAnimationFrame(animate);
}

animate();