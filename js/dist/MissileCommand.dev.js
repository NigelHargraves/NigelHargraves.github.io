"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Get and set the canvas element to a variable.
var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var missiles = [];
var nukes = [];
var enemies = [];
var numberOfEnemies = 10;
var animationId;
var silo = [{
  x: 15,
  y: canvas.height - 60
}, {
  x: canvas.width / 2,
  y: canvas.height - 60
}, {
  x: canvas.width - 15,
  y: canvas.height - 60
}];
var availableMissiles = [20, 20, 20];
var refillMissiles = [false, false, false];
var launch = document.getElementById("audio1");
var explode = document.getElementById("audio2");
var alert = document.getElementById("audio3");
var endBoom = document.getElementById("audio4");
var endGame = false;
var endRadius = 1;
var silosLeft = [true, true, true];
var citiesLeft = [true, true, true, true, true, true];
var citiesPos = [{
  x: canvas.width / 2 / 4 - 30,
  y: canvas.height - 60
}, {
  x: canvas.width / 2 / 4 - 30 + canvas.width / 2 / 4,
  y: canvas.height - 60
}, {
  x: canvas.width / 2 / 4 - 30 + canvas.width / 2 / 4 * 2,
  y: canvas.height - 60
}, {
  x: canvas.width / 2 + canvas.width / 2 / 4 - 30,
  y: canvas.height - 60
}, {
  x: canvas.width / 2 + canvas.width / 2 / 4 - 30 + canvas.width / 2 / 4,
  y: canvas.height - 60
}, {
  x: canvas.width / 2 + canvas.width / 2 / 4 - 30 + canvas.width / 2 / 4 * 2,
  y: canvas.height - 60
}];
var silosPos = [{
  x: 0,
  y: canvas.height - 60
}, {
  x: canvas.width / 2 - 15,
  y: canvas.height - 60
}, {
  x: canvas.width - 30,
  y: canvas.height - 60
}];

function startScreen() {
  //draw start screen.
  ctx.fillStyle = "green";
  ctx.fillRect(0, canvas.height - 30, canvas.width, canvas.height); //draw ground.
  //draw missile silos.

  for (i = 0; i < 3; i++) {
    if (silosLeft[i] == true) ctx.fillRect(silosPos[i].x, silosPos[i].y, 30, canvas.height - 30);
  } //draw cities.


  ctx.fillStyle = "brown";

  for (i = 0; i < 6; i++) {
    if (citiesLeft[i] == true) ctx.fillRect(citiesPos[i].x, citiesPos[i].y, 60, 30);
  }
} //Missile class.


var Missile =
/*#__PURE__*/
function () {
  //construct missile data.
  function Missile(x, y, radius, color, velocity, exX, exY) {
    _classCallCheck(this, Missile);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    this.explodeX = exX;
    this.explodeY = exY;
  } //draw missile.


  _createClass(Missile, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    } //update missile.

  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.x += this.velocity.x;
      this.y += this.velocity.y;
    }
  }]);

  return Missile;
}(); //Enemy class.


var Enemy =
/*#__PURE__*/
function () {
  //construct enemy data.
  function Enemy(x, y, velocityX, velocityY) {
    _classCallCheck(this, Enemy);

    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
  } //draw enemy.


  _createClass(Enemy, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = "red";
      ctx.fill();
    } //update enemy.

  }, {
    key: "update",
    value: function update() {
      this.x += this.velocityX;
      this.y += this.velocityY;
      this.draw();
    }
  }]);

  return Enemy;
}(); //Nuke class.


var Nuke =
/*#__PURE__*/
function () {
  //construct Nuke data.
  function Nuke(x, y, radius, color) {
    _classCallCheck(this, Nuke);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  } //draw nuke.


  _createClass(Nuke, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    } //update nuke.

  }, {
    key: "update",
    value: function update() {
      if (this.radius < 50) {
        this.radius += 0.5;
      }

      this.draw();
    }
  }]);

  return Nuke;
}();

function endSequence() {
  endBoom.play();
  animId = requestAnimationFrame(endSequence);
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, endRadius, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
  endRadius += 1.5;

  if (endRadius > canvas.width / 2) {
    cancelAnimationFrame(animId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "90px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Game over", canvas.width / 4, canvas.height / 2);
  }
}

function animate() {
  animationId = requestAnimationFrame(animate); //call next frame.

  ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  startScreen(); //if all cities destroyed end game.

  if (!citiesLeft[0] && !citiesLeft[1] && !citiesLeft[2] && !citiesLeft[3] && !citiesLeft[4] && !citiesLeft[5]) {
    endGame = true;
    clearInterval(spawnEnemies);
    endSequence();
    cancelAnimationFrame(animationId);
  } //reload empty silo after 30 seconds.


  for (i = 0; i < 3; i++) {
    if (availableMissiles[i] == 0 && refillMissiles[i] == true && silosLeft[i]) {
      (function () {
        refillMissiles[i] = false;
        var fill = i;
        document.getElementById("silo" + fill).innerHTML = "RL";
        setTimeout(function () {
          if (silosLeft[fill]) availableMissiles[fill] = 20;
          document.getElementById("silo" + fill).innerHTML = availableMissiles[fill];
        }, 30000);
      })();
    }
  } //detect city & silo hit by enemy & enemy caught in nuke blast & off screen.


  enemies.forEach(function (enemy, index) {
    if (enemy.x > canvas.width || enemy.x < 0) enemies.splice(index, 1); //detect enemy hit city.

    for (i = 0; i < 6; i++) {
      if (enemy.x >= citiesPos[i].x && enemy.x <= citiesPos[i].x + 60 && enemy.y > canvas.height - 60 && citiesLeft[i]) {
        explode.currentTime = 0;
        explode.play();
        nukes.push(new Nuke(enemy.x, enemy.y, 5, "red"));
      }
    } //detect enemy hit silo.


    for (i = 0; i < 3; i++) {
      if (enemy.x >= silosPos[i].x && enemy.x <= silosPos[i].x + 30 && enemy.y > canvas.height - 60 && silosLeft[i]) {
        explode.currentTime = 0;
        explode.play();
        nukes.push(new Nuke(enemy.x, enemy.y, 5, "red"));
      }
    } //enemy hit ground.


    if (enemy.y > canvas.height - 30) {
      explode.currentTime = 0;
      explode.play();
      nukes.push(new Nuke(enemy.x, enemy.y, 5, "red"));
    }

    enemy.update(); //destroy enemy if in nuke range.

    nukes.forEach(function (nuke) {
      var dist = Math.hypot(nuke.x - enemy.x, nuke.y - enemy.y);

      if (dist - 2 - nuke.radius < 1) {
        setTimeout(function () {
          explode.currentTime = 0;
          explode.play();
          nukes.push(new Nuke(enemy.x, enemy.y, 5, "red"));
          enemies.splice(index, 1);
        }, 0);
      } //remove city if nuked.


      for (i = 0; i < 6; i++) {
        if (nuke.x + nuke.radius >= citiesPos[i].x && nuke.x - nuke.radius <= citiesPos[i].x + 60 && nuke.y > canvas.height - 60 - nuke.radius) {
          citiesLeft[i] = false;
        }
      } //remove silo if nuked.


      for (i = 0; i < 3; i++) {
        if (nuke.x + nuke.radius >= silosPos[i].x && nuke.x - nuke.radius <= silosPos[i].x + 30 && nuke.y > canvas.height - 60 - nuke.radius) {
          availableMissiles[i] = 0;
          document.getElementById("silo" + i).innerHTML = availableMissiles[i];
          silosLeft[i] = false;
        }
      }
    });
  });
  nukes.forEach(function (nuke, index) {
    nuke.update();

    if (nuke.radius >= 50) {
      setTimeout(function () {
        nukes.splice(index, 1);
      }, 0);
    }
  }); //update & remove missiles at target.

  missiles.forEach(function (missile, index) {
    missile.update();

    if (missile.x <= missile.explodeX + 5 && missile.x >= missile.explodeX - 5 && missile.y <= missile.explodeY + 5 && missile.y >= missile.explodeY - 5) {
      setTimeout(function () {
        explode.currentTime = 0;
        explode.play();
        nukes.push(new Nuke(missile.x, missile.y, 5, "orange"));
        missiles.splice(index, 1);
      }, 0);
    }
  });
}

addEventListener("click", function (e) {
  if (endGame) return; //check missile stock if all are empty bad luck.

  if (availableMissiles[0] == 0 && availableMissiles[1] == 0 && availableMissiles[2] == 0) {
    return;
  } //check if all silos destroyed.


  if (silosLeft[0] == false && silosLeft[1] == false && silosLeft[2] == false) {
    return;
  }

  var explodeX = e.clientX;
  var explodeY = e.clientY;
  var orig = [];
  var num; //calc dist to target from silo.

  for (i = 0; i < 3; i++) {
    var Point = function Point(x, y) {
      this.x = x;
      this.y = y;

      this.distanceTo = function (point) {
        var distance = Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2));
        return distance;
      };
    };

    var newPoint = new Point(silo[i].x, silo[i].y);
    var nextPoint = new Point(explodeX, explodeY);
    orig.push(newPoint.distanceTo(nextPoint));
  } //select nearest silo.


  if (orig[0] < orig[1] && orig[0] < orig[2]) {
    num = 0;
  } else if (orig[0] > orig[1] && orig[1] < orig[2]) {
    num = 1;
  } else {
    num = 2;
  }

  checkStock(); //check missile stock.

  function checkStock() {
    if (availableMissiles[num] < 1) {
      if (silosLeft[num]) refillMissiles[num] = true;
      num = Math.floor(Math.random() * 3);
      checkStock(num);
    } else {
      availableMissiles[num] -= 1;
      if (silosLeft[num]) document.getElementById("silo" + num).innerHTML = availableMissiles[num];
    }
  } //calculate angle and launch missle if available.


  var angles = Math.atan2(e.clientY - silo[num].y, e.clientX - silo[num].x);
  var velocity = {
    x: Math.cos(angles) * 3,
    y: Math.sin(angles) * 3
  };
  launch.currentTime = 0;
  launch.play();
  missiles.push(new Missile(silo[num].x, silo[num].y, 2, "white", velocity, explodeX, explodeY));
}); // resize page.

addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  startScreen();
  silo = [{
    x: 15,
    y: canvas.height - 60
  }, {
    x: canvas.width / 2,
    y: canvas.height - 60
  }, {
    x: canvas.width - 15,
    y: canvas.height - 60
  }];
});
setTimeout(function () {
  alert.play();
}, 500);

for (i = 0; i < numberOfEnemies; i++) {
  var x = Math.random() * (canvas.width - canvas.width / 4) + canvas.width / 8;
  var y = Math.random() * 30 - 60;
  var velocityX = (Math.random() - 0.5) / 2;
  var velocityY = (Math.random() + 1) / 4;
  enemies.push(new Enemy(x, y, velocityX, velocityY));
}

spawnEnemies = setInterval(function () {
  numberOfEnemies += 1;

  for (i = 0; i < numberOfEnemies; i++) {
    alert.play();

    var _x = Math.random() * (canvas.width - canvas.width / 4) + canvas.width / 8;

    var _y = Math.random() * 30 - 60;

    var _velocityX = (Math.random() - 0.5) / 2;

    var _velocityY = (Math.random() + 1) / 4;

    enemies.push(new Enemy(_x, _y, _velocityX, _velocityY));
  }
}, 30000);
startScreen();
animate();