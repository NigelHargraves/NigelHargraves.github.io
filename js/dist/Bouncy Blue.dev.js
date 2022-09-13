"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Set the canvas element to a variable.
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
var enemies = [];
var foods = [];
var bonusPoints = [];
var texts = [];
var guidedMissiles = [];
var deaths = [];
var levelGains = [];
var bounce = document.getElementById("audio1");
var levelUp = document.getElementById("audio2");
var hit = document.getElementById("audio3");
var food = document.getElementById("audio4");
var eatFood = document.getElementById("audio5");
var misFire = document.getElementById("audio6");
var bombDrop = document.getElementById("audio7");
var bonusP = document.getElementById("audio8");
var bonusRelease = document.getElementById("audio9");
var losingBeep = document.getElementById("audio10");
var levelRelease = document.getElementById("audio11");
var KP = {}; //Keyspressed array

var elem = document.getElementById("myBar");
var gravity = 0.03,
    friction = 0.002,
    controlLevel = 1,
    velocityAmount = 0.02,
    width = 0,
    score = 0,
    levelBonus = 8000,
    skillLevel = 0.998,
    missileFire = 0.999,
    enemyVelocity = 1,
    foodVelocity = 1,
    enemyRadius = 4,
    textFade = 1,
    bonus = 0;
var moveLeft = false,
    moveRight = false,
    moveUp = false,
    moveDown = false,
    eyesBlink = false,
    eyesSquint = false,
    increaseBounce = false,
    fadeText = false,
    missile = false,
    playerAlive = true;
var leftEye = {
  x: 8,
  y: 7
},
    rightEye = {
  x: 8,
  y: 7
},
    bppos = {
  x: 0,
  y: 0
},
    countBlink = 100,
    countSquint = 100; //create player class.

var Player =
/*#__PURE__*/
function () {
  //construct player data.
  function Player(x, y, radius, color) {
    _classCallCheck(this, Player);

    this.x = x;
    this.y = y;
    this.r = radius;
    this.c = color;
    this.velocity = {
      x: 0,
      y: 0
    };
  } //draw player.


  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.c;
      ctx.fill(); //draw eyes.

      if (!eyesBlink && !eyesSquint) {
        //eyes open.
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.arc(this.x - leftEye.x, this.y - leftEye.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.arc(this.x + rightEye.x, this.y - rightEye.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "brown";
        ctx.arc(this.x - leftEye.x, this.y - leftEye.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.arc(this.x + rightEye.x, this.y - rightEye.y, 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (eyesBlink && !eyesSquint) {
        //eyes blink.
        countBlink -= 10;
        ctx.beginPath();
        ctx.moveTo(this.x - (leftEye.x + 4), this.y - leftEye.y);
        ctx.lineTo(this.x - leftEye.x + 4, this.y - rightEye.y);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(this.x + (rightEye.x - 4), this.y - leftEye.y);
        ctx.lineTo(this.x + rightEye.x + 4, this.y - rightEye.y);
        ctx.stroke();

        if (countBlink < 0) {
          countBlink = 100;
          eyesBlink = false;
        }
      } else {
        //eyes squint.
        countSquint -= 10;
        ctx.beginPath();
        ctx.moveTo(this.x - 5, this.y - 5);
        ctx.lineTo(this.x - 15, this.y - 5);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(this.x - 5, this.y - 5);
        ctx.lineTo(this.x - 13, this.y - 10);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(this.x + 5, this.y - 5);
        ctx.lineTo(this.x + 15, this.y - 5);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(this.x + 5, this.y - 5);
        ctx.lineTo(this.x + 13, this.y - 10);
        ctx.stroke();

        if (countSquint < 0) {
          countSquint = 100;
          eyesSquint = false;
        }
      } //draw mouth.


      if (!moveLeft && !moveRight && !moveUp && !moveDown && this.y + this.r < c.height - 15) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 12, Math.PI * 0.2, Math.PI * 0.8);
        ctx.strokeStyle = "red";
        ctx.stroke();
      } else if (moveLeft) {
        ctx.beginPath();
        ctx.arc(this.x - 2, this.y + 10, 5, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
      } else if (moveRight) {
        ctx.beginPath();
        ctx.arc(this.x + 2, this.y + 10, 5, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
      } else if (moveUp) {
        ctx.beginPath();
        ctx.arc(this.x, this.y + 8, 5, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
      } else if (moveDown) {
        ctx.beginPath();
        ctx.arc(this.x, this.y + 12, 5, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.moveTo(this.x - 10, this.y + 7);
        ctx.lineTo(this.x + 10, this.y + 7);
        ctx.strokeStyle = "black";
        ctx.stroke();
      }
    } //move player/eyes.

  }, {
    key: "update",
    value: function update() {
      //update position.
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      if (moveLeft) {
        leftEye.x = 11;
        rightEye.x = 5;
        this.velocity.x -= velocityAmount;
      } else if (moveRight) {
        leftEye.x = 5;
        rightEye.x = 11;
        this.velocity.x += velocityAmount;
      } else if (moveUp) {
        leftEye.y = 10;
        rightEye.y = 10;
        this.velocity.y -= velocityAmount;
      } else if (moveDown) {
        leftEye.y = 4;
        rightEye.y = 4;
        this.velocity.y += velocityAmount;
      } else {
        leftEye.x = 8;
        rightEye.x = 8;
        leftEye.y = 7;
        rightEye.y = 7;
      } //add gravity.


      this.velocity.y += gravity; //add friction.

      if (controlLevel != 2) {
        if (this.velocity.y > 0) {
          this.velocity.y -= friction;
        } else {
          this.velocity.y += friction;
        }

        if (this.velocity.x > 0) {
          this.velocity.x -= friction;
        } else {
          this.velocity.x += friction;
        }
      } //bounce off floor.


      if (this.y + this.r > c.height - 10) {
        this.y = c.height - this.r - 11;
        this.velocity.y = -this.velocity.y;
        eyesSquint = true;
        bounce.currentTime = 0;
        bounce.play();
      } //increase bounce off floor.


      if (this.y + this.r > c.height - 12 && increaseBounce) {
        this.velocity.y += this.velocity.y / 8;
        increaseBounce = false;
      } //bounce off walls.


      if (this.x + this.r > c.width) {
        this.x = c.width - this.r - 1;
        this.velocity.x = -this.velocity.x;
        bounce.currentTime = 0;
        bounce.play();
      }

      if (this.x - this.r < 0) {
        this.x = 1 + this.r;
        this.velocity.x = -this.velocity.x;
        bounce.currentTime = 0;
        bounce.play();
      }

      this.draw(); //call draw function to draw in new position.
    }
  }]);

  return Player;
}(); //Enemy class.


var Enemy =
/*#__PURE__*/
function () {
  //construct enemy data.
  function Enemy(x, y, velocityX, velocityY, radius) {
    _classCallCheck(this, Enemy);

    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.r = radius;
  } //draw enemy.


  _createClass(Enemy, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
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
}(); //GuidedMissile class.


var GuidedMissile =
/*#__PURE__*/
function () {
  //construct GuidedMissile data.
  function GuidedMissile(x, y, velocityX, velocityY, opacity, radius) {
    _classCallCheck(this, GuidedMissile);

    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.opacity = opacity;
    this.r = radius;
  } //draw GuidedMissile.


  _createClass(GuidedMissile, [{
    key: "draw",
    value: function draw() {
      if (this.opacity < 0.1) {
        missile = true;
      } else if (this.opacity > 0.9) {
        missile = false;
      }

      if (missile) {
        this.opacity += 0.2;
      } else {
        this.opacity -= 0.2;
      }

      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.globalAlpha = 1;
    } //update GuidedMissile.

  }, {
    key: "update",
    value: function update() {
      this.x += this.velocityX;
      this.y += this.velocityY;
      this.draw();
    }
  }]);

  return GuidedMissile;
}(); //Food class.


var Food =
/*#__PURE__*/
function () {
  //construct food data.
  function Food(x, y, velocityX, velocityY, radius) {
    _classCallCheck(this, Food);

    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.r = radius;
  } //draw food.


  _createClass(Food, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = "blue";
      ctx.fill();
    } //update food.

  }, {
    key: "update",
    value: function update() {
      this.x += this.velocityX;
      this.y += this.velocityY;
      this.draw();
    }
  }]);

  return Food;
}(); //LevelGain class.


var LevelGain =
/*#__PURE__*/
function () {
  //construct LevelGain data.
  function LevelGain(x, y, velocityX, velocityY, radius) {
    _classCallCheck(this, LevelGain);

    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.r = radius;
  } //draw LevelGain.


  _createClass(LevelGain, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = "yellow";
      ctx.fill();
      ctx.font = "10px Arial";
      ctx.fillStyle = "black";
      ctx.fillText("L", this.x - 3, this.y + 2);
    } //update LevelGain.

  }, {
    key: "update",
    value: function update() {
      this.x += this.velocityX;
      this.y += this.velocityY;
      this.draw();
    }
  }]);

  return LevelGain;
}(); //bonusPoints class.


var BonusPoints =
/*#__PURE__*/
function () {
  //construct bonusPoints data.
  function BonusPoints(x, y, velocityX, velocityY, radius) {
    _classCallCheck(this, BonusPoints);

    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.r = radius;
  } //draw bonusPoints.


  _createClass(BonusPoints, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = "green";
      ctx.fill();
      ctx.font = "10px Arial";
      ctx.fillStyle = "yellow";
      ctx.fillText("p", this.x - 3, this.y + 2);
    } //update bonusPoints.

  }, {
    key: "update",
    value: function update() {
      this.x += this.velocityX;
      this.y += this.velocityY;
      this.draw();
    }
  }]);

  return BonusPoints;
}(); //Text class.


var Text =
/*#__PURE__*/
function () {
  //construct Text data.
  function Text(x, y, velocityX, velocityY, points, size, color, opacity) {
    _classCallCheck(this, Text);

    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.points = points;
    this.size = size;
    this.color = color;
    this.opacity = opacity;
  } //draw text.


  _createClass(Text, [{
    key: "draw",
    value: function draw() {
      ctx.font = this.size;
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.fillText(this.points, this.x, this.y);
      ctx.globalAlpha = 1;
    } //update text.

  }, {
    key: "update",
    value: function update() {
      this.x += this.velocityX;
      this.y += this.velocityY;
      this.draw();
    }
  }]);

  return Text;
}(); //create Death class.


var Death =
/*#__PURE__*/
function () {
  //construct Death data.
  function Death(x, y, radius, color, velocity) {
    _classCallCheck(this, Death);

    this.x = x;
    this.y = y;
    this.r = radius;
    this.c = color;
    this.v = velocity;
    this.alpha = 1;
  } //draw Death.


  _createClass(Death, [{
    key: "draw",
    value: function draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.c;
      ctx.fill();
      ctx.restore();
    } //update Death.

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

  return Death;
}();

function reset() {
  hit.currentTime = 0;
  hit.play();
  foodVelocity = 1;
  velocityAmount = 0.02;
  levelBonus = 8000;
  gravity = 0.03;
  player.velocity.y = 0;
  controlLevel = 1;
  width = 0;
  elem.style.width = width + "%";
}

function levelJump() {
  levelUp.currentTime = 0;
  levelUp.play();

  if (controlLevel > 2) {
    velocityAmount += 0.02;
  }

  player.r = 20;
  gravity = 0;
  player.velocity.y = 0;
  controlLevel += 1;
  width = 0;
  elem.style.width = width + "%";
  score += levelBonus;
  levelBonus = 8000;
  skillLevel -= 0.001;
  enemyVelocity += 0.1;

  if (controlLevel > 4) {
    foodVelocity += 0.1;
  }

  if (controlLevel > 5) {
    missileFire -= 0.001;
    enemyRadius += 1;
  }
}

function init() {
  enemies = [];
  foods = [];
  bonusPoints = [];
  controlLevel = 1;
  levelBonus = 8000;
  score = 0;
  gravity = 0.03;
  player = new Player(60, c.height / 2, 20, "blue");
  enemies.push(new Enemy(Math.random() * c.width, 0, 0, 1, 4));
  foods.push(new Food(c.width, Math.random() * c.height, -1, 0, 4));
  food.currentTime = 0;
  food.play();
}

function animate() {
  //call next frame.
  animationId = requestAnimationFrame(animate);
  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("Control LV: " + controlLevel, 0, 20);
  ctx.fillText("LV Bonus: " + levelBonus, c.width / 4, 20);

  if (levelBonus <= 0) {
    levelBonus = 1;
  }

  levelBonus -= 1;
  ctx.fillText("Score: " + score, c.width - c.width / 4, 20);

  if (playerAlive) {
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Player size: " + player.r, c.width / 2, 20);
    ctx.fillStyle = "rgb(0, 0, 0,0.3";
    ctx.fillRect(0, 0, c.width, c.height);
    player.update(); //blink eyes.

    var blink = Math.random();

    if (blink > 0.998 && countBlink == 100) {
      eyesBlink = true;
    } //fire enemy.


    var enemyFire = Math.random();

    if (enemyFire > skillLevel) {
      bombDrop.currentTime = 0;
      bombDrop.play();
      enemies.push(new Enemy(Math.random() * c.width, -20, 0, enemyVelocity, enemyRadius));
    } //fire guidedMissile.


    if (controlLevel > 4 || score > 50000) {
      var fireMissile = Math.random();

      if (fireMissile > missileFire) {
        misFire.currentTime = 0;
        misFire.play();
        var startPos = Math.random() * c.width;
        var angles = Math.atan2(player.y, player.x - startPos);
        var velocity = {
          x: Math.cos(angles) * 5,
          y: Math.sin(angles) * 5
        };
        guidedMissiles.push(new GuidedMissile(startPos, 0, velocity.x, velocity.y, 1, 2));
      }
    } //create food.


    var createFood = Math.random();

    if (createFood > 0.998) {
      food.currentTime = 0;
      food.play();
      foods.push(new Food(c.width, Math.random() * c.height, -foodVelocity, 0, 4));
    } //create levelGain.


    var gainLevel = Math.random();

    if (gainLevel > 0.9999) {
      levelRelease.currentTime = 0;
      levelRelease.play();
      levelGains.push(new LevelGain(c.width, Math.random() * c.height / 2, -1, 0, 8));
    } //create bonusPoints.


    var bp = Math.random();

    if (bp > 0.9999) {
      bonusRelease.currentTime = 0;
      bonusRelease.play();
      bonusPoints.push(new BonusPoints(Math.random() * c.width, 0, 0, 1, 8));
    }

    enemies.forEach(function (enemy, index) {
      //bullet hits player.
      if (enemy.x - enemy.r < player.x + player.r && enemy.x + enemy.r > player.x - player.r && enemy.y - enemy.r < player.y + player.r && enemy.y + enemy.r > player.y - player.r) {
        //reduce player size/reset variables.
        if (player.r > 20) {
          player.r = 20;
        } else {
          player.r -= 2;
        }

        reset();
        enemies.splice(index, 1);
      }

      if (player.r <= 14) {
        playerAlive = false; //cancelAnimationFrame(animationId);
      } //bullet falls off screen.


      if (enemy.y > c.height) enemies.splice(index, 1);
      enemy.update();
    });
    guidedMissiles.forEach(function (gm, index) {
      //guidedmissile hits player.
      if (gm.x - gm.r < player.x + player.r && gm.x + gm.r > player.x - player.r && gm.y - gm.r < player.y + player.r && gm.y + gm.r > player.y - player.r) {
        //reduce player size/reset variables.
        if (player.r > 20) {
          player.r = 20;
        } else {
          player.r -= 2;
        }

        reset();
        guidedMissiles.splice(index, 1);
      }

      if (player.r <= 14) {
        playerAlive = false; //cancelAnimationFrame(animationId);
      } //guidedmissile falls off screen.


      if (gm.y > c.height) guidedMissiles.splice(index, 1);
      gm.update();
    });
    foods.forEach(function (food, index) {
      //player eats food.
      if (food.x - food.r < player.x + player.r && food.x + food.r > player.x - player.r && food.y - food.r < player.y + player.r && food.y + food.r > player.y - player.r) {
        //add to progress bar if size is greater than 20.
        if (player.r >= 20) {
          eatFood.currentTime = 0;
          eatFood.play();
          width += 10;
          elem.style.width = width + "%";
          fadeText = true;
          bppos.x = food.x;
          bppos.y = food.y;
          var points = Math.trunc(food.x / 10 + (c.height - food.y) / 10);
          score += points;
          texts.push(new Text(player.x, player.y, 0, -1, points, "15px Arial", "yellow", 1));
        } //increase player size/add to score.


        player.r += 1;
        foods.splice(index, 1); //player gets next level of control + bonus score/update             variables.

        if (player.r == 30) {
          levelJump();
        }
      } //food goes off screen.


      if (food.x < 0) foods.splice(index, 1);
      food.update();
    });
    levelGains.forEach(function (LG, index) {
      //player gains level.
      if (LG.x - LG.r < player.x + player.r && LG.x + LG.r > player.x - player.r && LG.y - LG.r < player.y + player.r && LG.y + LG.r > player.y - player.r) {
        //player gets next level of control + bonus score/update             variables.
        texts.push(new Text(player.x, player.y, 0, -1, "L+", "25px Arial", "red", 1));
        levelGains.splice(index, 1);
        levelJump();
      } //levelGain goes off screen.


      if (LG.x < 0) levelGains.splice(index, 1);
      LG.update();
    });
    bonusPoints.forEach(function (bonusPoint, index) {
      //player gets bonusPoints.
      if (bonusPoint.x - bonusPoint.r < player.x + player.r && bonusPoint.x + bonusPoint.r > player.x - player.r && bonusPoint.y - bonusPoint.r < player.y + player.r && bonusPoint.y + bonusPoint.r > player.y - player.r) {
        bonusP.currentTime = 0;
        bonusP.play();
        bonus = Math.trunc(Math.random() * 500) + 300;
        texts.push(new Text(player.x, player.y, 0, -1, bonus, "25px Arial", "green", 1));
        bonusPoints.splice(index, 1);
        score += bonus;
      } //bonusPoints goes off screen.


      if (bonusPoint.y > c.height) bonusPoints.splice(index, 1);
      bonusPoint.update();
    });
    texts.forEach(function (text, index) {
      if (text.opacity < 0.1) {
        texts.splice(index, 1);
      } else {
        text.opacity -= 0.01;
      }

      text.update();
    });
  } else {
    losingBeep.play();
    levelBonus = 0;
    friction = 0.99;
    gravity = 0.003;
    ctx.fillText("Player size: DEAD", c.width / 2, 20);
    ctx.font = "50px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("GAME OVER", c.width / 2 - c.width / 8, c.height / 2);
    ctx.fillStyle = "rgb(0, 0, 0,0.1)";
    ctx.fillRect(0, 0, c.width, c.height);
    var colour = "blue";

    for (i = 0; i < 3; i++) {
      var end = function end() {
        cancelAnimationFrame(animationId);
      };

      deaths.push(new Death(player.x, player.y, Math.random() * 2, colour, {
        x: (Math.random() - 0.5) * (Math.random() * 6),
        y: (Math.random() - 0.5) * (Math.random() * 6)
      }));

      if (colour == "white") {
        colour = "red";
      }

      if (colour == "blue") {
        colour = "white";
      }

      setTimeout(end, 2000);
    }

    deaths.forEach(function (death, index) {
      if (death.alpha <= 0.01) {
        deaths.splice(index, 1);
      } else {
        death.update();
      }
    });
  }
}

onkeydown = onkeyup = function onkeyup(e) {
  e = e || event; // to deal with IE

  KP[e.keyCode] = e.type == "keydown";
  /* insert conditional here */

  if (KP[37] || KP[65]) {
    moveLeft = true;
  } else if (KP[39] || KP[68]) {
    moveRight = true;
  } else if (KP[87] || KP[38] && controlLevel != 0) {
    moveUp = true;
  } else if (KP[83] || KP[40] && controlLevel != 0) {
    moveDown = true;
  } else if (KP[32]) {
    increaseBounce = true;
  } else {
    moveLeft = false;
    moveRight = false;
    moveUp = false;
    moveDown = false;
    increaseBounce = false;
  }
}; //adjust canvas on screen resize.


window.addEventListener("resize", function () {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  init();
});
init();
animate();