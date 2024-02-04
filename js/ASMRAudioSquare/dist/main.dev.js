"use strict";

// Set the canvas element to  variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var notes = [],
    stars = [],
    tails = [],
    shoots = [],
    floatNotes = [],
    edgeSplats = [];
var square = new Square(canvas.width / 2, canvas.height / 2);
var circle = new Circle(canvas.width / 2, canvas.height / 2);
var key = new Key(canvas.width / 2, canvas.height / 2, 'Dm');
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
var speed = 1,
    nextStar = 0;
notes.push(new Note(canvas.width / 2 - canvas.height / 4, canvas.height / 2 - canvas.height / 4, speed - Math.random() / 10, DNote1));
notes.push(new Note(canvas.width / 2 - canvas.height / 4, canvas.height / 2 - canvas.height / 4, speed - Math.random() / 10, FNote1));
notes.push(new Note(canvas.width / 2 - canvas.height / 4, canvas.height / 2 - canvas.height / 4, speed - Math.random() / 10, ANote1));
notes.push(new Note(canvas.width / 2 - canvas.height / 4, canvas.height / 2 - canvas.height / 4, speed - Math.random() / 10, DUNote1));
notes.push(new Note(canvas.width / 2 - canvas.height / 4, canvas.height / 2 - canvas.height / 4, speed - Math.random() / 10, FUNote1));
notes.push(new Note(canvas.width / 2 - canvas.height / 4, canvas.height / 2 - canvas.height / 4, speed - Math.random() / 10, AUNote1));
notes.push(new Note(canvas.width / 2 - canvas.height / 4, canvas.height / 2 - canvas.height / 4, speed - Math.random() / 10, DNote2));
notes.push(new Note(canvas.width / 2 - canvas.height / 4, canvas.height / 2 - canvas.height / 4, speed - Math.random() / 10, FNote2));
notes.push(new Note(canvas.width / 2 - canvas.height / 4, canvas.height / 2 - canvas.height / 4, speed - Math.random() / 10, ANote2));
notes.push(new Note(canvas.width / 2 - canvas.height / 4, canvas.height / 2 - canvas.height / 4, speed - Math.random() / 10, DUNote2));
notes.push(new Note(canvas.width / 2 - canvas.height / 4, canvas.height / 2 - canvas.height / 4, speed - Math.random() / 10, FUNote2));
notes.push(new Note(canvas.width / 2 - canvas.height / 4, canvas.height / 2 - canvas.height / 4, speed - Math.random() / 10, AUNote2));

function animate() {
  //CLS.
  ctx.fillStyle = "rgb(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  nextStar++;

  if (nextStar >= 10) {
    stars.push(new Star(Math.random() * canvas.width, Math.random() * canvas.height));
    nextStar = 0;
  }

  forStars();
  forNote();
  forTails();
  forShoots();
  forFloatNotes();
  forEdgeSplats();
  square.update();
  circle.update();
  key.update(); //call next frame.

  animationId = requestAnimationFrame(animate);
}

animate();