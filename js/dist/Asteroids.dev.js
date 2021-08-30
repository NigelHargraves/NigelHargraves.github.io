"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Get and set the canvas element to a variable.
var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var friction = 0.99;
var animationId;
var bullets = [];
var asteroids = [];
var particles = [];
var mouse = {
  x: 0,
  y: 0
};
var ship = document.querySelector(".player"); //set images.

var playerShip = new Image();
playerShip.src = 'images/ship.png';
player.style.top = canvas.height / 2 + "px";
player.style.left = canvas.width / 2 + "px";
var angle = 0,
    playerRadius = 10;

function movePlayer(x, y) {
  angle = Math.atan2(y - ship.offsetTop, x - ship.offsetLeft) * (180 / Math.PI) + 90;
  document.querySelector(".player").style.transform = "rotate(" + angle + "deg)";
} //Bullet class.


var Bullet =
/*#__PURE__*/
function () {
  //construct bullet data.
  function Bullet(x, y, radius, color, velocity) {
    _classCallCheck(this, Bullet);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  } //draw bullets.


  _createClass(Bullet, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    } //update bullets.

  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.x += this.velocity.x;
      this.y += this.velocity.y;
    }
  }]);

  return Bullet;
}(); //Asteriod class.


var Asteroid =
/*#__PURE__*/
function () {
  //construct asteroid data.
  function Asteroid(x, y, radius, color, velocity) {
    _classCallCheck(this, Asteroid);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  } //draw asteroids.


  _createClass(Asteroid, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    } //update asteroids.

  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.x += this.velocity.x;
      this.y += this.velocity.y;
    }
  }]);

  return Asteroid;
}(); //Particle class.


var Particle =
/*#__PURE__*/
function () {
  //construct Particle data.
  function Particle(x, y, radius, color, velocity) {
    _classCallCheck(this, Particle);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    this.alpha = 1;
  } //draw Particle.


  _createClass(Particle, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.restore();
    } //update Particles.

  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.velocity.x *= friction;
      this.velocity.y *= friction;
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.alpha -= 0.01;
    }
  }]);

  return Particle;
}();

function animate() {
  animationId = requestAnimationFrame(animate); //call next frame.

  ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  particles.forEach(function (particle, index) {
    if (particle.alpha <= 0) {
      particles.splice(index, 1);
    } else {
      particle.update();
    }
  }); //update & remove offscreen bullets.

  bullets.forEach(function (bullet, index) {
    bullet.update();

    if (bullet.x + bullet.radius < 0 || bullet.x - bullet.radius > canvas.width || bullet.y + bullet.radius < 0 || bullet.y - bullet.radius > canvas.height) {
      setTimeout(function () {
        bullets.splice(index, 1);
      }, 0);
    }
  }); //update asteroids & detect game over .

  asteroids.forEach(function (asteroid, index) {
    asteroid.update();
    var dist = Math.hypot(canvas.width / 2 - asteroid.x, canvas.height / 2 - asteroid.y);

    if (dist - asteroid.radius - playerRadius < 1) {
      //game over.
      cancelAnimationFrame(animationId);
    } //detect bullet hitting asteroid and shrink or remove.


    bullets.forEach(function (bullet, bulletIndex) {
      var dist = Math.hypot(bullet.x - asteroid.x, bullet.y - asteroid.y);

      if (dist - asteroid.radius - bullet.radius < 1) {
        //create explosions.
        for (i = 0; i < asteroid.radius * 2; i++) {
          particles.push(new Particle(bullet.x, bullet.y, Math.random() * 2, asteroid.color, {
            x: (Math.random() - 0.5) * (Math.random() * 6),
            y: (Math.random() - 0.5) * (Math.random() * 6)
          }));
        }

        if (asteroid.radius - 10 > 5) {
          gsap.to(asteroid, {
            radius: asteroid.radius - 10
          });
          setTimeout(function () {
            bullets.splice(bulletIndex, 1);
          }, 0);
        } else {
          setTimeout(function () {
            asteroids.splice(index, 1);
            bullets.splice(bulletIndex, 1);
          }, 0);
        }
      }
    });
  });
} //create new asteroid.


function spawnAsteroid() {
  setInterval(function () {
    var radius = Math.random() * 20 + 10;
    var x;
    var y;

    if (Math.random() < 0.5) {
      x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
      y = Math.random() * canvas.height;
    } else {
      x = Math.random() * canvas.width;
      y = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
    }

    var color = "hsl(".concat(Math.random() * 360, ",50%,50%)");
    var angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x);
    var velocity = {
      x: Math.cos(angle),
      y: Math.sin(angle)
    };
    asteroids.push(new Asteroid(x, y, radius, color, velocity));
  }, 2000);
}

function init() {
  animate();
  spawnAsteroid();
}

addEventListener("click", function (e) {
  var angles = Math.atan2(e.clientY - canvas.height / 2, e.clientX - canvas.width / 2);
  var velocity = {
    x: Math.cos(angles) * 5,
    y: Math.sin(angles) * 5
  };
  bullets.push(new Bullet(canvas.width / 2, canvas.height / 2, 2, "white", velocity));
});
addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});
addEventListener("mousemove", function (e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  movePlayer(mouse.x, mouse.y);
});
init();