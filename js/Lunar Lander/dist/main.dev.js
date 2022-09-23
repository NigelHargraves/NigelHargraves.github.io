"use strict";

// Set both canvas elements to variables.
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
var ctx2 = c2.getContext("2d");
c2.width = window.innerWidth;
c2.height = window.innerHeight; //set elements to variables.

lem = document.getElementById("lander");
button1 = document.getElementById("button1");
button2 = document.getElementById("button2");
messageBoard = document.getElementById("message");
scoreBoard = document.getElementById("score");
fuelLeft = document.getElementById("myBar"); //create arrays.

var particles = [];
var landingZones = [];
var moonZones = [];
var lzcords = new Array(); //set audio to variables.

var lemEngine = document.getElementById("audio1");
var thrusters = document.getElementById("audio2");
var lunarImpact = document.getElementById("audio3"); //set global variables.

var lemX,
    lemY,
    gravity = 0.001,
    velocityAmount = 0.02,
    score = 0,
    bonus = 0,
    rotation = 0,
    thrustForce = 0,
    friction = 0.99,
    skillLevel = 100,
    landerSize = 20,
    moonScapeSize = 10,
    fuel; //create Keyspressed array.

var KP = {}; //set boolean variables.

var rotateLeft = false,
    rotateRight = false,
    thrustUp = false,
    thrustDown = false,
    lemAlive = true,
    overlz = false; //Animation loop.

function animate() {
  //call next frame.
  animationId = requestAnimationFrame(animate);
  fuelLeft.style.width = fuel + "%";
  fuel -= thrustForce * 10;

  if (fuel <= 0) {
    thrustForce = 0;
    lem.style.backgroundImage = "url('images/Lunar Lander engine off.png')";
  }

  ctx.font = "20px Arial";
  ctx.fillStyle = "white";

  if (thrustForce == 0.002) {
    ctx.fillText("Thrust Force: MAX", 0, 20);
  } else {
    ctx.fillText("Thrust Force: " + (thrustForce * 1000).toFixed(2), 0, 20);
  }

  ctx.fillText("Vertical Velocity: " + (lander.velocity.y * 100).toFixed(2), c.width / 4, 20);
  ctx.fillText("Rotation: " + rotation.toFixed(2) + " °", c.width / 2, 20);
  ctx.fillText("Lateral Velocity: " + (lander.velocity.x * 10).toFixed(2), c.width / 2 + c.width / 4, 20); //CLS.

  ctx.fillStyle = "rgb(0, 0, 0,0.3";
  ctx.fillRect(0, 0, c.width, c.height); //draw landing zones.

  landingZones.forEach(function (lz, index) {
    lz.draw();
  }); //check if lander is over landing zone.

  landerOverLZ(); //check lander position.

  landerPosition(); //check to land in LZ.

  landCheck(); //update crash particles.

  particles.forEach(function (particle, index) {
    if (particle.alpha <= 0.01) {
      particles.splice(index, 1);
    } else {
      particle.update();
    } //end sim.


    if (particles == []) {
      cancelAnimationFrame(animationId);
    }
  }); //if not crashed update lander.

  if (lemAlive) {
    lander.update();
  }
}

init();
animate();