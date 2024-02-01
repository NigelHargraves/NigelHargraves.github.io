"use strict";

// Set the canvas element to  variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var notes = [];
var square = new Square(canvas.width / 2, canvas.height / 2);
var circle = new Circle(canvas.width / 2, canvas.height / 2);
var key = new Key(canvas.width / 2, canvas.height / 2, 'D');
var squareCorners = {
  topLeft: {
    x: canvas.width / 2 - canvas.height / 4,
    y: canvas.height / 2 - canvas.height / 4
  },
  topRight: {
    x: canvas.width / 2 + canvas.height / 4,
    y: canvas.height / 2 - canvas.height / 4
  },
  bottomLeft: {
    x: canvas.width / 2 - canvas.height / 4,
    y: canvas.height / 2 + canvas.height / 4
  },
  bottomRight: {
    x: canvas.width / 2 + canvas.height / 4,
    y: canvas.height / 2 + canvas.height / 4
  }
};
var speed = 1;
notes.push(new Note(canvas.width / 2 - canvas.height / 4, canvas.height / 2 - canvas.height / 4, speed, DNote));
notes.push(new Note(canvas.width / 2 - canvas.height / 4, canvas.height / 2 - canvas.height / 4, speed - 0.02, FSGFNote));
notes.push(new Note(canvas.width / 2 - canvas.height / 4, canvas.height / 2 - canvas.height / 4, speed - 0.04, ANote));
notes.push(new Note(canvas.width / 2 - canvas.height / 4, canvas.height / 2 - canvas.height / 4, speed - 0.08, DUNote));
notes.push(new Note(canvas.width / 2 - canvas.height / 4, canvas.height / 2 - canvas.height / 4, speed - 0.16, FSGFUNote));
notes.push(new Note(canvas.width / 2 - canvas.height / 4, canvas.height / 2 - canvas.height / 4, speed - 0.32, AUNote));

function animate() {
  //CLS.
  ctx.fillStyle = "rgb(0, 0, 0, 0.4)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  forNote();
  square.update();
  circle.update();
  key.update(); //call next frame.

  animationId = requestAnimationFrame(animate);
}

animate();