"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Set the canvas element to a variable.
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
var ctx2 = c2.getContext("2d");
c2.width = window.innerWidth;
c2.height = window.innerHeight;
lem = document.getElementById("lander");
button1 = document.getElementById("button1");
button2 = document.getElementById("button2");
messageBoard = document.getElementById("message");
scoreBoard = document.getElementById("score");
fuelLeft = document.getElementById("myBar");
var particles = [];
var landingZones = [];
var moonZones = [];
var lzcords = new Array();
var lemEngine = document.getElementById("audio1");
var thrusters = document.getElementById("audio2");
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
    fuel;
var KP = {}; //Keyspressed array.

var rotateLeft = false,
    rotateRight = false,
    thrustUp = false,
    thrustDown = false,
    lemAlive = true,
    overlz = false; //lander class.

var Lander =
/*#__PURE__*/
function () {
  //construct Lander data.
  function Lander(x, y) {
    _classCallCheck(this, Lander);

    this.x = x;
    this.y = y;
    this.velocity = {
      x: 0,
      y: 0
    };
  } //move Lander draw flame.


  _createClass(Lander, [{
    key: "move",
    value: function move() {
      lem.style.left = this.x - landerSize / 2 + "px";
      lem.style.top = this.y - landerSize / 2 + "px";

      if (thrustForce > 0 && !rotateLeft && !rotateRight) {
        lem.style.backgroundImage = "url('images/Lunar Lander engine on.png')";
        lemEngine.play();
      } else if (thrustForce <= 0 && !rotateLeft && !rotateRight) {
        lem.style.backgroundImage = "url('images/Lunar Lander engine off.png')";
        lemEngine.pause();
        lemEngine.currentTime = 0;
      }
    } //update Lander.

  }, {
    key: "update",
    value: function update() {
      if (rotateLeft) {
        rotation -= 0.1;
        lem.style.transform = "rotate(" + rotation + "deg)";

        if (thrustForce > 0) {
          lem.style.backgroundImage = "url('images/Lunar Lander engine on rotate left.png')";
        } else {
          lem.style.backgroundImage = "url('images/Lunar Lander engine off rotate left.png')";
        }

        thrusters.play();
      }

      if (rotateRight) {
        rotation += 0.1;
        lem.style.transform = "rotate(" + rotation + "deg)";

        if (thrustForce > 0) {
          lem.style.backgroundImage = "url('images/Lunar Lander engine on rotate right.png')";
        } else {
          lem.style.backgroundImage = "url('images/Lunar Lander engine off rotate right.png')";
        }

        thrusters.play();
      }

      if (thrustUp) {
        thrustForce += (90 - Math.abs(rotation)) / 10000000;

        if (thrustForce > 0.002) {
          thrustForce = 0.002;
        }
      }

      if (thrustDown) {
        thrustForce -= 0.00001;

        if (thrustForce < 0) {
          thrustForce = 0;
        }
      } //update position.


      this.velocity.y -= thrustForce;
      this.x += this.velocity.x;
      this.y += this.velocity.y; //add lateral motion & gravity.

      if (thrustForce > 0) {
        this.velocity.x += rotation / (10000 - thrustForce);
      }

      if (lander.y >= c.height - 20) {} else {
        this.velocity.y += gravity;
      }

      this.move();
    }
  }]);

  return Lander;
}(); //create particle class.


var Particle =
/*#__PURE__*/
function () {
  //construct particle data.
  function Particle(x, y, radius, color, velocity) {
    _classCallCheck(this, Particle);

    this.x = x;
    this.y = y;
    this.r = radius;
    this.c = color;
    this.v = velocity;
    this.alpha = 1;
  } //draw particle.


  _createClass(Particle, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.c;
      ctx.fill();
      ctx.restore();
    } //update particle.

  }, {
    key: "update",
    value: function update() {
      this.v.x *= friction;
      this.v.y *= friction;
      this.v.y += gravity * 4;
      this.x += this.v.x;
      this.y += this.v.y;
      this.alpha -= 0.01;
      this.draw();
    }
  }]);

  return Particle;
}(); //create landing zone class.


var LZ =
/*#__PURE__*/
function () {
  //construct landing zone data.
  function LZ(x, y, length, color, points, used, textColor) {
    _classCallCheck(this, LZ);

    this.x = x;
    this.y = y;
    this.length = length;
    this.color = color;
    this.points = points;
    this.used = used;
    this.textColor = textColor;
  } //draw landing zone.


  _createClass(LZ, [{
    key: "draw",
    value: function draw() {
      ctx2.beginPath();
      ctx2.moveTo(this.x, this.y);
      ctx2.lineTo(this.x + this.length, this.y);
      ctx2.strokeStyle = this.color;
      ctx2.stroke();
      ctx2.font = "20px Arial"; //cover text after landing.

      if (this.used) {
        this.textColor = "black";
      }

      ctx2.fillStyle = this.textColor;
      ctx2.fillText(this.points, this.x + this.length / 4, this.y + 25);
    }
  }]);

  return LZ;
}(); //create moon zone class.


var MZ =
/*#__PURE__*/
function () {
  //construct moon zone data.
  function MZ(x, y, MZX, MZY, color) {
    _classCallCheck(this, MZ);

    this.x = x;
    this.y = y;
    this.mzx = MZX;
    this.mzy = MZY;
    this.color = color;
  } //draw moon zone.


  _createClass(MZ, [{
    key: "draw",
    value: function draw() {
      ctx2.beginPath();
      ctx2.moveTo(this.x, this.y);
      var ysize = Math.abs(this.y - this.mzy);

      for (var i = (this.mzx - this.x) / 20; i <= this.mzx - this.x; i += (this.mzx - this.x) / 20) {
        if (this.y < this.mzy) {
          ctx2.lineTo(i + this.x, Math.random() * moonScapeSize + (this.y += ysize / 20));
        } else {
          ctx2.lineTo(i + this.x, Math.random() * moonScapeSize + (this.y -= ysize / 20));
        }
      }

      ctx2.lineTo(this.mzx, this.mzy);
      ctx2.strokeStyle = this.color;
      ctx2.stroke();
    }
  }]);

  return MZ;
}();

function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

function landerOverLZ() {
  for (var i = 0; i < 4; i++) {
    if (lander.x > lzcords[i][0] && lander.x + landerSize / 2 < lzcords[i][2]) {
      overlz = true;
      break;
    } else {
      overlz = false;
    }
  }
}

function crash() {
  for (var i = 0; i < 200; i++) {
    particles.push(new Particle(lander.x + 10, lander.y + 10, Math.random() * 2, "white", {
      x: (Math.random() - 0.5) * (Math.random() * 6),
      y: (Math.random() - 0.5) * (Math.random() * 6)
    }));
  }
}

function landerPosition() {
  if (lemAlive) {
    for (var i = 0; i <= landerSize; i++) {
      var data = ctx2.getImageData(lander.x - landerSize / 2 + i, lander.y + landerSize / 2, 1, 1);

      if ((data.data[0] != 0 || data.data[1] != 0 || data.data[2] != 0) && !overlz) {
        messageBoard.textContent = "Ooops! you crashed!";
        messageBoard.style.visibility = "visible";
        button1.style.visibility = "visible";
        lemAlive = false;
        lem.style.visibility = "hidden";
        rotation = 0;
        lander.velocity.x = 0;
        lander.velocity.y = 0;
        thrustForce = 0;
        crash();
        break;
      }
    }
  }
}

function landCheck() {
  if (lemAlive) {
    for (var i = 0; i < 4; i++) {
      if (lander.x > lzcords[i][0] && lander.x + landerSize / 2 < lzcords[i][2] && lander.y + landerSize / 2 > lzcords[i][1] && lander.velocity.y * 100 <= 10 && lander.velocity.x * 10 > -0.2 && rotation > -3 && rotation < 3 && lander.velocity.x * 10 < 0.2) {
        lander.y = lzcords[i][1] - landerSize / 2;
        rotation = 0;
        lander.velocity.x = 0;
        lander.velocity.y = 0;
        thrustForce = 0;

        if (!landingZones[i].used) {
          score += lzcords[i][3];
          fuel += landingZones[i].points;
          if (fuel > 100) fuel = 100;
        }

        fuelLeft.style.width = fuel + "%";
        landingZones[i].used = true;
        scoreBoard.textContent = "Score: " + score;
        messageBoard.textContent = "The Eagle has Landed";
        messageBoard.style.visibility = "visible";
        button2.style.visibility = "visible";
        cancelAnimationFrame(animationId);
        break;
      } else if (lander.x > lzcords[i][0] && lander.x + landerSize / 2 < lzcords[i][2] && lander.y + landerSize / 2 > lzcords[i][1] && (lander.velocity.y * 100 > 10 || lander.velocity.x * 10 < -0.2 || rotation > 3 || rotation < -3 || lander.velocity.x * 10 > 0.2)) {
        messageBoard.textContent = "Ooops! you crashed!";
        messageBoard.style.visibility = "visible";
        button1.style.visibility = "visible";
        lemAlive = false;
        lem.style.visibility = "hidden";
        rotation = 0;
        lander.velocity.x = 0;
        lander.velocity.y = 0;
        thrustForce = 0;
        crash();
        break;
      }
    }
  }
}

function launch() {
  if (landingZones[0].used == true && landingZones[1].used == true && landingZones[2].used == true && landingZones[3].used == true) {
    skillLevel -= 1;
    init();
  } else {
    messageBoard.style.visibility = "hidden";
    button2.style.visibility = "hidden";
    lander.y -= 1;
    thrustForce = 0.002;
  }

  animate();
} //initilize settings.


function init() {
  ctx2.clearRect(0, 0, c2.width, c2.height);
  messageBoard.style.visibility = "hidden";
  button1.style.visibility = "hidden";
  button2.style.visibility = "hidden";
  landingZones = [];
  moonZones = [];
  fuel = 100;
  fuelLeft.style.width = "100%";

  if (!lemAlive) {
    score = 0;
  }

  lemAlive = true;
  rotation = 0;
  thrustForce = 0;
  rotateLeft = false;
  rotateRight = false;
  thrustUp = false;
  thrustDown = false;
  overlz = false;
  lem.style.top = "40px";
  lem.style.left = "10px";
  lemX = lem.offsetLeft + landerSize / 2;
  lemY = lem.offsetTop + landerSize / 2;
  lander = new Lander(lemX, lemY);
  var spaced = c.width / 5;
  var length = 0,
      oldLength = 0;
  var level = c.height / 2 + Math.random() * c.height / 2 - 100,
      oldLevel; //create zones.

  for (var i = 0; i < 4; i++) {
    oldLevel = level;
    level = c.height / 2 + Math.random() * c.height / 2 - 100;
    moonZones.push(new MZ(spaced - c.width / 5 + length, oldLevel, spaced, level, "white"));
    oldLength = length;
    length = Math.random() * skillLevel + 30;
    var point = Math.abs(Math.round(150 - length));
    landingZones.push(new LZ(spaced, level, length, "green", point, false, "green"));
    lzcords[i] = new Array(spaced, level, spaced + length, point);
    spaced += c.width / 5;
  } //create last moon zone corodinate.


  moonZones.push(new MZ(spaced - c.width / 5 + length, level, spaced, c.height / 2 + Math.random() * c.height / 2, "white")); //draw moon zones.

  moonZones.forEach(function (mz, index) {
    mz.draw();
  });
  lem.style.transform = "rotate(" + rotation + "deg)";
  lem.style.visibility = "visible";
}

function animate() {
  //call next frame.
  animationId = requestAnimationFrame(animate);
  fuelLeft.style.width = fuel + "%";
  fuel -= thrustForce * 10;

  if (fuel <= 0) {
    thrustForce = 0;
    lem.style.background = "red";
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

onkeydown = onkeyup = function onkeyup(e) {
  e = e || event; // to deal with IE

  KP[e.keyCode] = e.type == "keydown";
  /* insert conditional here */

  if (KP[37] || KP[65]) {
    rotateLeft = true;
  } else if (KP[39] || KP[68]) {
    rotateRight = true;
  } else if (KP[87] || KP[38]) {
    if (fuel > 0) {
      thrustUp = true;
    }
  } else if (KP[83] || KP[40]) {
    thrustDown = true;
  } else if (KP[32]) {
    thrustForce = 0;
  } else {
    rotateLeft = false;
    rotateRight = false;

    if (thrustForce > 0) {
      lem.style.backgroundImage = "url('images/Lunar Lander engine on')";
    } else {
      lem.style.backgroundImage = "url('images/Lunar Lander engine off')";
    }

    thrustUp = false;
    thrustDown = false;
  }

  if (KP[82]) {
    rotation = 0;
    lem.style.transform = "rotate(" + rotation + "deg)";
  }
}; //adjust canvas on screen resize.


window.addEventListener("resize", function () {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  c2.width = window.innerWidth;
  c2.height = window.innerHeight;
  landingZones = [];
  moonZones = [];
  ctx.clearRect(0, 0, c.width, c.height);
  ctx2.clearRect(0, 0, c2.width, c2.height);
  init();
});

function reset() {
  init();
}