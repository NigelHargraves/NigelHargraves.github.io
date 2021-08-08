"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var file = document.getElementById("fileupload");
var alienMove = document.getElementById("audio1");
var playerShoot = document.getElementById("audio2");
var alienExplode = document.getElementById("audio3");
var winner = document.getElementById("audio4");
var loser = document.getElementById("audio5");
var aliens = [];
var numberOfAliens = 10;
var alienNumber = 0;
var score = 0;
var gunPos = 10;
var blastX = 0;
var blastY = canvas.height - 40;
var moveLeft = false;
var moveRight = false;
var shoot = false;
var fired = false;
var hit = false;
var changeImage = 0;
var alienVictory = false;
var playerWin = false;
var alienImage1 = new Image();
alienImage1.src = 'images/si1.png';
var alienImage2 = new Image();
alienImage2.src = 'images/si2.png';
var background = new Image();
background.src = "https://wonderfulengineering.com/wp-content/uploads/2014/07/universe-backgrounds-141-610x343.jpg";

var alien =
/*#__PURE__*/
function () {
  //construct alien.
  function alien() {
    _classCallCheck(this, alien);

    this.x = Math.random() * (canvas.width / 2) + 200;
    this.y = 0;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 1.5;
    this.alien = alienNumber;
    alienNumber += 1;
  } //draw alien.


  _createClass(alien, [{
    key: "draw",
    value: function draw() {
      if (changeImage < 25) {
        ctx.drawImage(alienImage1, this.x, this.y, 50, 50);
      } else {
        ctx.drawImage(alienImage2, this.x, this.y, 50, 50);
      }
      /*ctx.beginPath();
      ctx.fillStyle = "purple";
      ctx.fillRect(this.x, this.y, 50, 50);*/

    } //move alien.

  }, {
    key: "update",
    value: function update() {
      alienMove.play();
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > canvas.width - 150 || this.x < 100) {
        this.speedX = -this.speedX;
      }

      if (this.y + 50 >= canvas.height) alienVictory = true;
      this.draw(); //call draw function to draw in new position.
    }
  }]);

  return alien;
}(); //fill array with alien data.


function init() {
  for (i = 0; i < numberOfAliens; i++) {
    aliens.push(new alien());
  }

  console.log(aliens);
}

function animateAliens() {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  for (i = 0; i < aliens.length; i++) {
    aliens[i].update();
  }

  if (changeImage > 50) {
    changeImage = 0;
  } else {
    changeImage += 1;
  }

  if (aliens.length < 1) playerWin = true;

  if (alienVictory == true || playerWin == true) {
    if (alienVictory == true) {
      loser.play();
      shoot = false;
      ctx.font = "900 100px Arial";
      ctx.fillStyle = "red";
      ctx.textAlign = "center";
      ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);
    } else {
      winner.play();
      ctx.font = "900 100px Arial";
      ctx.fillStyle = "green";
      ctx.textAlign = "center";
      ctx.fillText("YOU WIN", canvas.width / 2, canvas.height / 2);
    }
  } else {
    requestAnimationFrame(animateAliens); //adjust to screen refresh rate and call next frame.
  }
}

init();
animateAliens();

function checkKey(e) {
  if (e.keyCode == 37 || e.keyCode == 65) {
    moveLeft = true;
  } else if (e.keyCode == 39 || e.keyCode == 68) {
    moveRight = true;
  }

  if (e.keyCode == 32 && shoot == false) {
    fired = true;
    shoot = true;
    var elem = document.querySelector("div");
    var rect = elem.getBoundingClientRect();
    blastX = rect.x + 37;
  }
}

function movePlayer() {
  if (moveLeft == true && gunPos > 10) {
    gunPos -= 1;
    gun.style.left = gunPos + "%";
  } else if (gunPos < 10) {
    gunPos = 10;
  }

  if (moveRight == true && gunPos < 90) {
    gunPos += 1;
    gun.style.left = gunPos + "%";
  } else if (gunPos > 90) {
    gunPos = 90;
  }

  if (fired === true) {
    fired = false;
    playerShoot.play();
    laserBlast();
  }
}

function laserBlast() {
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.moveTo(blastX, blastY);
  ctx.lineTo(blastX, blastY - 20);
  ctx.stroke();
  blastY -= 8; //check for alien hit.

  for (var _i = 0; _i < aliens.length; _i++) {
    if (blastX > aliens[_i].x + 50 || blastX < aliens[_i].x || blastY > aliens[_i].y + 50 || blastY < aliens[_i].y) {//no hit.
    } else {
      //hit
      alienExplode.play();
      aliens.splice(_i, 1);
      shoot = false;
      blastY = canvas.height - 40;
    }
  }

  if (blastY <= 0) {
    shoot = false;
    blastY = canvas.height - 40;
  }

  if (shoot == true) {
    requestAnimationFrame(laserBlast);
  }
}

function stopKey() {
  moveLeft = false;
  moveRight = false;
}

window.addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});
document.onkeydown = checkKey;
document.onkeyup = stopKey;
setInterval(movePlayer, 50);