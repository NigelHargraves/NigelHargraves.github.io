"use strict";

// Set the canvas element to  variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var notes = [];
var radius = 400,
    angle = Math.PI / 12,
    x = canvas.width / 2,
    y = canvas.height / 2,
    pointx = 0,
    pointy = 0;

for (var i = 0; i < 12; i++) {
  pointx = radius * Math.cos(angle);
  pointy = radius * Math.sin(angle);
  notes.push(new Note(x + pointx, y + pointy));
  angle += Math.PI / 12;
}

function animate() {
  //CLS.
  ctx.fillStyle = "rgb(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  forNotes(); //call next frame.

  animationId = requestAnimationFrame(animate);
}

animate();