"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//get and set canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var file = document.getElementById("fileupload"); //audio.

var alienMove = document.getElementById("audio1");
var laser1 = document.getElementById("audio2");
var alienExplode = document.getElementById("audio3");
var winner = document.getElementById("audio4");
var loser = document.getElementById("audio5");
var death = document.getElementById("audio6");
var dead = document.getElementById("audio7");
var laser2 = document.getElementById("audio8");
var speedAquired = document.getElementById("audio9");
var speedProduced = document.getElementById("audio10"); //create elements.

var alienLaser = document.createElement("div");
var playerLaser = document.createElement("div");
var alienBoom = document.createElement("div");
var speedBonus = document.createElement("div");
var aliens = []; //alien array.
//set variables.

var numberOfAliens = 10,
    alienStartPosition = -25,
    alienNumber = 0,
    alienDestroyedX = 0,
    alienDestroyedY = 0,
    alienBlastX = 0,
    alienBlastY = 0,
    expandBoom = 0,
    changeImage = 0;
var score = 0,
    waitTime = 1,
    lives = 3,
    gameSpeed = 0.5,
    gunPosX = 50,
    gunPosY = canvas.height - 40,
    blastX = 0,
    blastY = canvas.height - 60,
    level = 1,
    gunSpeed = 8,
    bonusGunSpeed = 0,
    bonusGunSpeedX = 0,
    bonusGunSpeedY = 10;
var alienDestroyed = false,
    boomExpand = false,
    alienFired = false,
    alienVictory = false,
    stopGame = false,
    moveLeft = false,
    moveRight = false,
    mobileLeft = false,
    mobileRight = false,
    fired = false,
    hit = false,
    levelTF = false,
    playerWin = false,
    shoot = false,
    speedGunBonus = false; //set images.

var boom = new Image();
boom.src = 'images/boom.png';
var boom2 = new Image();
boom2.src = 'images/boom2.png';
var alienImage1 = new Image();
alienImage1.src = 'images/alien ship 1.png';
var alienImage2 = new Image();
alienImage2.src = 'images/alien ship 2.png';
var background = new Image();
background.src = 'images/backg.png';

var alien =
/*#__PURE__*/
function () {
  //construct alien.
  function alien() {
    _classCallCheck(this, alien);

    this.x = Math.random() * (canvas.width / 2) + canvas.width / 4;
    this.y = alienStartPosition;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * gameSpeed;
    this.alien = alienNumber;
    alienNumber += 1;
  } //draw alien.


  _createClass(alien, [{
    key: "draw",
    value: function draw() {
      if (changeImage < 25) {
        ctx.drawImage(alienImage1, this.x, this.y, 50, 25);
      } else {
        ctx.drawImage(alienImage2, this.x, this.y, 50, 25);
      }
    } //move alien.

  }, {
    key: "update",
    value: function update() {
      //random alien will shoot.
      if (alienFired == false) {
        var alienShooting = Math.random() * 100;

        if (alienShooting > 99.9) {
          laser1.play();
          alienFired = true;
          alienBlastX = this.x + 25;
          alienBlastY = this.y + 25;
          alienLaser.style.width = "3px";
          alienLaser.style.height = "20px";
          alienLaser.style.background = "white";
          alienLaser.style.boxShadow = "0px 0px 8px 3px #6287b8";
          alienLaser.style.position = "absolute";
          alienLaser.style.left = alienBlastX + "px";
          alienLaser.style.top = alienBlastY + "px";
          document.body.appendChild(alienLaser);
          alienShoot();
        }
      } //random extra gun speed bonus.


      if (speedGunBonus == false && bonusGunSpeed == 0) {
        var bonusSpeed1 = Math.random() * 200;
        var bonusSpeed2 = Math.random() * 200;

        if (bonusSpeed1 > 199 && bonusSpeed2 > 198) {
          speedProduced.play();
          speedGunBonus = true;
          bonusGunSpeedX = Math.random() * (canvas.width - 200) + 100;
          speedBonus.style.width = "50px";
          speedBonus.style.height = "20px";
          speedBonus.style.background = "green";
          speedBonus.style.color = "black";
          speedBonus.style.fontWeight = "bold";
          speedBonus.textContent = "speed";
          speedBonus.style.textAlign = "center";
          speedBonus.style.borderRadius = "50px";
          speedBonus.style.boxShadow = "1px 1px 8px 3px green";
          speedBonus.style.position = "absolute";
          speedBonus.style.left = bonusGunSpeedX + "px";
          speedBonus.style.top = bonusGunSpeedY + "px";
          document.body.appendChild(speedBonus);
          bonusDrop();
        }
      }

      alienMove.play();
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > canvas.width - 150 || this.x < 100) {
        this.speedX = -this.speedX;
      }

      if (this.y + 25 >= canvas.height) alienVictory = true; //end of game.

      this.draw(); //call draw function to draw in new position.
    }
  }]);

  return alien;
}(); //fill array with alien data.


function init() {
  for (i = 0; i < numberOfAliens; i++) {
    aliens.push(new alien());
  }
}

function alienShoot() {
  alienLaser.style.top = alienBlastY + "px";

  if (alienBlastX > gunPosX + 75 || alienBlastX < gunPosX || alienBlastY + 20 < gunPosY) {//miss.
  } else {
    //hit
    alienBlastY = 0;
    alienFired = false;
    lives -= 1;
    dead.play();
    gun.style.backgroundImage = "url('images/boom2.png')";
    document.getElementById("lives").innerHTML = 'LIVES: ' + lives;
    alienLaser.remove();
    alienDestroyed = true;
    alienDestroyedX = gunPosX + 37;
    alienDestroyedY = gunPosY + 20;
    boomExpand = true;
    alienLaser.remove();
    clearInterval(playerMove);
    gun.style.zIndex = -10;

    if (lives == 0) {
      alienVictory = true;
    } else {
      setTimeout(function () {
        gun.style.backgroundImage = "url('images/laserhouse.png')";
        playerMove = setInterval(movePlayer, 50);
        gun.style.zIndex = 1;
      }, 500);
    }
  }

  alienBlastY += 10;

  if (alienBlastY > canvas.height) {
    alienLaser.remove();
    alienFired = false;
  }

  if (alienFired == true) {
    requestAnimationFrame(alienShoot);
  }
}

function bonusDrop() {
  speedBonus.style.top = bonusGunSpeedY + "px";

  if (bonusGunSpeedX > gunPosX + 75 || bonusGunSpeedX < gunPosX - 50 || bonusGunSpeedY + 20 < gunPosY) {//miss.
  } else {
    //hit.
    speedAquired.play();
    bonusGunSpeed += 30 * gunSpeed / 100;
    speedBonus.remove();
    bonusGunSpeedX = 0;
    bonusGunSpeedY = 0;
    speedGunBonus = false;
  }

  if (bonusGunSpeedY > canvas.height) {
    speedBonus.remove();
    bonusGunSpeedX = 0;
    bonusGunSpeedY = 0;
    speedGunBonus = false;
  }

  bonusGunSpeedY += 2;

  if (speedGunBonus == true) {
    requestAnimationFrame(bonusDrop);
  }
}

function animateAliens() {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  if (levelTF == false) {
    waitTime -= 0.002;
    ctx.font = "900 100px Arial";
    ctx.fillStyle = "rgba(233, 212, 96," + waitTime + ")";
    ctx.textAlign = "center";
    ctx.fillText("level - " + level, canvas.width / 2, canvas.height / 2);

    if (waitTime < 0) {
      levelTF = true;
    }
  }

  for (i = 0; i < aliens.length; i++) {
    aliens[i].update();
  }

  if (changeImage > 50) {
    changeImage = 0;
  } else {
    changeImage += 1;
  }

  if (alienDestroyed == true) {
    if (boomExpand == true) {
      alienBoom.style.filter = "blur(5px)";
      alienBoom.style.width = expandBoom + "px";
      alienBoom.style.height = expandBoom + "px";
      alienBoom.style.background = "radial-gradient(red,orange,#9198e5)";
      alienBoom.style.position = "absolute";
      alienBoom.style.left = alienDestroyedX - expandBoom / 2 + "px";
      alienBoom.style.top = alienDestroyedY - expandBoom / 2 + "px";
      alienBoom.style.borderRadius = "50%";
      document.body.appendChild(alienBoom);
      expandBoom += 4;
      if (expandBoom > 50) boomExpand = false;
    }

    if (boomExpand == false) {
      alienBoom.style.filter = "blur(5px)";
      alienBoom.style.width = expandBoom + "px";
      alienBoom.style.height = expandBoom + "px";
      alienBoom.style.background = "radial-gradient(red,orange,#9198e5)";
      alienBoom.style.position = "absolute";
      alienBoom.style.left = alienDestroyedX - expandBoom / 2 + "px";
      alienBoom.style.top = alienDestroyedY - expandBoom / 2 + "px";
      alienBoom.style.borderRadius = "50%";
      document.body.appendChild(alienBoom);
      expandBoom -= 4;

      if (expandBoom <= 0) {
        alienBoom.remove();
        alienDestroyed = false;
      }
    }
  }

  if (aliens.length < 1) playerWin = true;

  if (alienVictory == true || playerWin == true) {
    if (alienVictory == true) {
      death.play();
      gun.style.backgroundImage = "url('images/boom2.png')";
      clearInterval(playerMove);
      loser.play();
      shoot = false;
      ctx.font = "900 100px Arial";
      ctx.fillStyle = "red";
      ctx.textAlign = "center";
      ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);
      lives = 0;
      document.getElementById("lives").innerHTML = 'LIVES: ' + lives;
    } else {
      //level complete.
      gunSpeed += 1;
      winner.play();
      level += 1;
      waitTime = 1;
      levelTF = false;
      playerWin = false;
      numberOfAliens += 1;
      alienStartPosition += 1;
      alienNumber = 0;
      gameSpeed += 0.05;
      init();
      animateAliens();
    }
  } else if (stopGame == false) {
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
    playerLaser.style.width = "3px";
    playerLaser.style.height = "20px";
    playerLaser.style.background = "red";
    playerLaser.style.boxShadow = "0px 0px 8px 3px red";
    playerLaser.style.position = "absolute";
    playerLaser.style.left = blastX + "px";
    playerLaser.style.top = blastY + "px";
    document.body.appendChild(playerLaser);
  }
}

function movePlayer() {
  if (moveLeft == true && gunPosX > 10) {
    gunPosX -= gunSpeed + bonusGunSpeed;
    gun.style.left = gunPosX + "px";
  }

  if (gunPosX <= 50) {
    gunPosX = 50;
  }

  if (moveRight == true && gunPosX < canvas.width - 125) {
    gunPosX += gunSpeed + bonusGunSpeed;
    gun.style.left = gunPosX + "px";
  }

  if (gunPosX >= canvas.width - 125) {
    gunPosX = canvas.width - 125;
  }

  if (fired == true) {
    fired = false;
    laser2.play();
    laserBlast();
  }

  if (bonusGunSpeed > 0) {
    bonusGunSpeed -= 0.02;
  } else {
    bonusGunSpeed = 0;
  }
}

function laserBlast() {
  //laser fired.
  playerLaser.style.top = blastY + "px";
  blastY -= 8; //check for alien hit.

  for (var _i = 0; _i < aliens.length; _i++) {
    if (blastX > aliens[_i].x + 50 || blastX < aliens[_i].x || blastY > aliens[_i].y + 25 || blastY < aliens[_i].y - 25) {//no hit.
    } else {
      //hit
      ctx.drawImage(boom, aliens[_i].x, aliens[_i].y, 50, 50);
      alienDestroyed = true;
      alienDestroyedX = aliens[_i].x + 25;
      alienDestroyedY = aliens[_i].y + 12.5;
      boomExpand = true;
      score += (canvas.height - aliens[_i].y) / 8;
      score = Math.floor(score);
      document.getElementById("scoreBoard").innerHTML = 'SCORE: ' + score;
      alienExplode.play();
      aliens.splice(_i, 1);
      shoot = false;
      playerLaser.remove();
      blastY = canvas.height - 60;
    }
  }

  if (blastY <= -20) {
    shoot = false;
    blastY = canvas.height - 60;
    playerLaser.remove();
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
buttonL.addEventListener("touchstart", function () {
  moveLeft = true;
});
buttonR.addEventListener("touchstart", function () {
  moveRight = true;
});
buttonL.addEventListener("touchend", function () {
  moveLeft = false;
});
buttonR.addEventListener("touchend", function () {
  moveRight = false;
});
canvas.addEventListener("click", function () {
  if (shoot == false) {
    fired = true;
    shoot = true;
    var elem = document.querySelector("div");
    var rect = elem.getBoundingClientRect();
    blastX = rect.x + 37;
    playerLaser.style.width = "3px";
    playerLaser.style.height = "20px";
    playerLaser.style.background = "red";
    playerLaser.style.boxShadow = "0px 0px 8px 3px red";
    playerLaser.style.position = "absolute";
    playerLaser.style.left = blastX + "px";
    playerLaser.style.top = blastY + "px";
    document.body.appendChild(playerLaser);
  }
});
document.onkeydown = checkKey;
document.onkeyup = stopKey;
var playerMove = setInterval(movePlayer, 50);