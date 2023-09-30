"use strict";

// Set the canvas elements to  var.
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
var ctx2 = c2.getContext("2d");
c2.width = window.innerWidth;
var ctx3 = c3.getContext("2d");
c3.width = window.innerWidth;
c3.height = window.innerHeight;
var ctx4 = c4.getContext("2d");
c4.width = window.innerWidth;
c4.height = window.innerHeight; //backgrounds to var.

var background1 = new Image();
background1.src = 'images/BB/background1.png';
var background2 = new Image();
background2.src = 'images/BB/grass1.jpg';
var background3 = new Image();
background3.src = 'images/BB/background3.png';
var background4 = new Image();
background4.src = 'images/BB/background4.png';
var mushroomImage = new Image();
mushroomImage.src = 'images/BB/mushroom.png';
var blueberry = new Image();
blueberry.src = 'images/BB/blueberryOnParachute.png';
var beeLeft = new Image();
beeLeft.src = 'images/BB/beeLeft.png';
var beeRight = new Image();
beeRight.src = 'images/BB/beeRight.png';
var faceForward = new Image();
faceForward.src = 'images/BB/faceForward.png';
var faceLeft = new Image();
faceLeft.src = 'images/BB/faceLeft.png';
var faceRight = new Image();
faceRight.src = 'images/BB/faceRight.png';
var faceUp = new Image();
faceUp.src = 'images/BB/faceUp.png';
var lookDown = new Image();
lookDown.src = 'images/BB/lookDown.png';
var faceDownLeft = new Image();
faceDownLeft.src = 'images/BB/faceDownLeft.png';
var faceDownRight = new Image();
faceDownRight.src = 'images/BB/faceDownRight.png';
var faceUpLeft = new Image();
faceUpLeft.src = 'images/BB/faceUpLeft.png';
var faceUpRight = new Image();
faceUpRight.src = 'images/BB/faceUpRight.png';
var faceBlink = new Image();
faceBlink.src = 'images/BB/faceBlink.png';
var faceSquint = new Image();
faceSquint.src = 'images/BB/faceSquint.png';
var faceBlank = new Image();
faceBlank.src = 'images/BB/faceBlank.png';
var starMissile = new Image();
starMissile.src = 'images/BB/missile.png';
var starMissile2 = new Image();
starMissile2.src = 'images/BB/missile2.png';
var landmine = new Image();
landmine.src = 'images/BB/landmine.png';
var sunflower = new Image();
sunflower.src = 'images/BB/sunflower.png';
var flowerStalk = new Image();
flowerStalk.src = 'images/BB/flowerstalk.jpg';
var drone = new Image();
drone.src = 'images/BB/drone.png';
var sheild = new Image();
sheild.src = 'images/BB/sheild.png';
var lightningBolt = new Image();
lightningBolt.src = 'images/BB/lightningBolt.png';
var lightningBall = new Image();
lightningBall.src = 'images/BB/lightningBall.png';
var bombImage = new Image();
bombImage.src = 'images/BB/bomb.png';
var explode = new Image();
explode.src = 'images/BB/explode.png';
var stalkRight = new Image();
stalkRight.src = 'images/BB/stalkRight.png';
var stalkLeft = new Image();
stalkLeft.src = 'images/BB/stalkLeft.png';
var pOnParachute = new Image();
pOnParachute.src = 'images/BB/pOnParachute.png';
var lOnParachute = new Image();
lOnParachute.src = 'images/BB/lOnParachute.png';
var flourSackOnBalloon = new Image();
flourSackOnBalloon.src = 'images/BB/flourSackOnBalloon.png';
var flourSack = new Image();
flourSack.src = 'images/BB/flourSack.png'; //declare array names.

var enemies, foods, bonusPoints, texts, guidedMissiles, deaths, levelGains, layers, glows, splats, mines, wanderingMines, projectiles, kills, flowers, sheilds, mushrooms, bullets, bloodSplats, bombs, explodes, sparks, flourSacks; //audio to var.

var bounce = document.getElementById("audio1");
var levelUp = document.getElementById("audio2");
var hit = document.getElementById("audio3");
var food = document.getElementById("audio4");
var eatFood = document.getElementById("audio5");
var misFire = document.getElementById("audio6");
var beeBuzz = document.getElementById("audio7");
var bonusP = document.getElementById("audio8");
var bonusRelease = document.getElementById("audio9");
var losingBeep = document.getElementById("audio10");
var levelRelease = document.getElementById("audio11");
var mineExplode = document.getElementById("audio12");
var killEverything = document.getElementById("audio13");
var flowerFire = document.getElementById("audio14");
var sheildHit = document.getElementById("audio15");
var sheildGain = document.getElementById("audio16");
var sheildLoss = document.getElementById("audio17");
var mushroomEat = document.getElementById("audio18");
var cheer = document.getElementById("audio19");
var bigBeeBuzz = document.getElementById("audio20");
var forestSounds = document.getElementById("audio21");
var laserShot = document.getElementById("audio22");
var splat = document.getElementById("audio23");
var pain = document.getElementById("audio24");
var dropBomb = document.getElementById("audio25");
var bombExplode = document.getElementById("audio26");
var gain = document.getElementById("audio27");
var no = document.getElementById("audio28");
var KP = {}; //Keyspressed array.
//elements to vars.

var elem = document.getElementById("myBar");
var button = document.getElementById("button");
var textName = document.getElementById("display"); //vars.

var gravity, friction, controlLevel, velocityAmount, width, score, levelBonus, skillLevel, missileFire, minePlant, enemyVelocity, foodAmount, enemyRadius, stalkSize, textFade, bonus, x, ang, x1, y1, sheildTime, mushroomCount, mushroomSize, blink, squint, boltCount, fireRate, fireRateCount, bombRate, bombRateCount, flourSackCount; //var texts.

var clText = "Control Level "; //boolean vars.

var moveLeft = false,
    moveRight = false,
    moveUp = false,
    moveDown = false,
    eyesBlink = false,
    eyesSquint = false,
    increaseBounce = false,
    fadeText = false,
    missile = false,
    playerAlive = true,
    minesToPlant = false,
    endGameSound = false,
    playerSheild = false,
    LBall = false,
    fire = false,
    fireGap = false,
    fireRight = true,
    bombDrop = false,
    bombDropGap = false;
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
    countSquint = 100;
var topScore;

if (localStorage.getItem("bestScore")) {
  topScore = JSON.parse(localStorage.getItem("bestScore"));
} else {
  topScore = {
    name: "",
    score: 0
  };
  localStorage.setItem('bestScore', JSON.stringify(topScore));
}

function animate() {
  //call next frame.
  animationId = requestAnimationFrame(animate);
  ctx.clearRect(0, 0, c.width, c.height);
  ctx3.clearRect(0, 0, c.width, c.height);
  layers.forEach(function (layer) {
    layer.update();
  });

  if (playerAlive) {
    if (forestSounds.paused) {
      forestSounds.play();
    }

    player.update();
    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Control LV: " + controlLevel, 0, c.height * 0.02);
    ctx.drawImage(mushroomImage, c.width / 8, 0, c.height * 0.02, c.height * 0.02);
    ctx.fillText("= " + mushroomCount, c.width / 7.3, c.height * 0.02);
    ctx.fillText("LV Bonus: " + levelBonus, c.width / 4, c.height * 0.02);
    ctx.drawImage(flourSack, c.width / 6, 0, c.height * 0.02, c.height * 0.02);
    ctx.fillText("= " + flourSackCount, c.width / 5.5, c.height * 0.02);

    if (levelBonus <= 0) {
      levelBonus = 1;
    }

    levelBonus -= 1;
    ctx.fillText("Score: " + score + "          Top Score: " + topScore.name + ": " + topScore.score, c.width - c.width / 4, c.height * 0.02);
    ctx.fillText("Player size: " + Math.round(player.r), c.width / 2, c.height * 0.02);
    var blinkEyes = Math.random();

    if (blinkEyes > 0.998 && !eyesBlink && !eyesSquint) {
      eyesBlink = true;
    }

    if (eyesBlink) {
      blink -= 0.2;
    }

    if (blink <= 0) {
      eyesBlink = false;
      blink = 4;
    }

    if (eyesSquint) {
      squint -= 0.2;
    }

    if (squint <= 0) {
      eyesSquint = false;
      squint = 2;
    }

    ctx.font = " bold 80px Arial";
    ctx.fillStyle = "white";

    if (player.y < 0 && player.velocity.y < 0) {
      ctx.fillText("⬆", c.width / 2, c.height / 2);
    } else if (player.y < 0 && player.velocity.y > 0) {
      ctx.fillText("⬇", c.width / 2, c.height / 2);
    } //create bomb.


    if (bombDrop && bombRateCount == 0) {
      bombDropGap = true;
      bombs.push(new Bomb(x, player.y, 0));
      dropBomb.currentTime = 0;
      dropBomb.play();
    }

    if (bombDropGap) {
      bombRateCount += 1;
    }

    if (bombRateCount >= bombRate) {
      bombDropGap = false;
      bombRateCount = 0;
    }

    if (bombs.length > 0) {
      forBomb();
    }

    if (explodes.length > 0) {
      forExplode();
    } //create bullet.


    if (fire && fireRateCount == 0) {
      fireGap = true;

      if (fireRight) {
        bullets.push(new Bullet(x, player.y - player.r - stalkSize, 10, player.velocity.x + c.height * 0.01, "greenyellow"));
      } else {
        bullets.push(new Bullet(x, player.y - player.r - stalkSize, 10, player.velocity.x + -c.height * 0.01, "greenyellow"));
      }

      laserShot.currentTime = 0;
      laserShot.play();
    }

    if (fireGap) {
      fireRateCount += 1;
    }

    if (fireRateCount >= fireRate) {
      fireGap = false;
      fireRateCount = 0;
    }

    if (bullets.length > 0) {
      forBullet();
    }

    if (bloodSplats.length > 0) {
      forBloodSplat();
    } //create mushroom.


    if (controlLevel > 2) {
      var createMushroom = Math.random();

      if (createMushroom > 0.9995) {
        mushrooms.push(new Mushroom(Math.random() * c.height * 3 + c.width, c.height - (mushroomSize + c.height * 0.02)));
      }

      createMushroom = Math.random();

      if (createMushroom > 0.9991) {
        mushrooms.push(new Mushroom(Math.random() * -c.height * 3, c.height - (mushroomSize + c.height * 0.02)));
      }
    }

    if (mushrooms.length > 0) {
      forMushroom();
    } //create sheild icon.


    if (!playerSheild && controlLevel > 5 && sheilds.length == 0) {
      var createSheild = Math.random();

      if (createSheild > 0.99999) {
        sheilds.push(new Sheild(Math.random() * (c.height * 6 - c.height * 3), Math.random() * (c.height - c.height * 0.02), c.height * 0.02, 25));
      }
    }

    if (sheilds.length > 0) {
      forShield();
    }

    if (playerSheild) {
      sheildTime -= 0.01;

      if (sheildTime < 5) {
        sheildLoss.play();
      }

      if (sheildTime <= 0) {
        playerSheild = false;
        sheildTime = 30;
      }
    } //create flower.


    if (controlLevel >= 3) {
      var createFlower = Math.random();

      if (createFlower > 0.999) {
        flowers.push(new Flower(Math.random() * (c.width * 3) + c.width, c.height - 200, c.height * 0.04, 25));
      }

      createFlower = Math.random();

      if (createFlower > 0.999) {
        flowers.push(new Flower(Math.random() * (-c.width * 3), c.height - 200, c.height * 0.04, 25));
      }
    }

    if (flowers.length > 0) {
      forFlower();
    }

    if (flourSacks.length > 0) {
      forFlourSacks();
    } //kill all.


    if (controlLevel > 6 && kills.length == 0) {
      var killAll = Math.random();

      if (killAll > 0.99999) {
        kills.push(new Kill(Math.random() * 600 - 300, Math.random() * c.height, 40, 25));
      }
    }

    if (kills.length > 0) {
      forKill();
    }

    if (LBall) {
      ctx.drawImage(lightningBall, x - 200, player.y - 200, 400, 400);
      boltCount -= 1;

      if (boltCount <= 0) {
        boltCount = 5;
        LBall = false;
      }
    } //create wandering mine.


    if (controlLevel > 6) {
      var wm = Math.random();

      if (wm > 0.999) {
        bigBeeBuzz.currentTime = 0;
        bigBeeBuzz.play();
        wanderingMines.push(new WanderingMine(c.width + 100, Math.random() * c.height / 2, 20, {
          x: -1,
          y: Math.random() - 0.5
        }, 25));
      }

      wm = Math.random();

      if (wm > 0.999) {
        wanderingMines.push(new WanderingMine(-100, Math.random() * c.height / 2, 20, {
          x: -1,
          y: Math.random() - 0.5
        }, 25));
      }
    }

    if (wanderingMines.length > 0) {
      forWanderingMine();
    } //plant mine.


    if (controlLevel > 2) {
      minesToPlant = true;
    }

    if (minesToPlant) {
      var plantMine = Math.random();

      if (plantMine > minePlant) {
        mines.push(new Mine(Math.random() * (c.width * 2) + c.width, c.height - 20, 30, 25));
      }

      plantMine = Math.random();

      if (plantMine > minePlant) {
        mines.push(new Mine(Math.random() * (-c.width * 3), c.height - 20, 30, 25));
      }
    }

    if (mines.length > 0) {
      forMine();
    } //create bee.


    var enemyFire = Math.random();

    if (enemyFire > skillLevel) {
      beeBuzz.currentTime = 0;
      beeBuzz.play();
      var beeDirection;
      var setDirection = Math.random();

      if (setDirection >= 0.5) {
        beeDirection = false;
      } else {
        beeDirection = true;
      }

      enemies.push(new Enemy(Math.random() * (c.width * 3) - c.width, 0, enemyVelocity, enemyVelocity, enemyRadius, beeDirection));
    }

    if (enemies.length > 0) {
      forEnemy();
    }

    if (player.r <= 14) {
      playerAlive = false;
    }

    if (splats.length > 0) {
      forSplat();
    } //fire guidedMissile.


    if (controlLevel > 4) {
      var fireMissile = Math.random();

      if (fireMissile > missileFire) {
        misFire.currentTime = 0;
        misFire.play();
        var startPos = Math.random() * c.width;
        var angles = Math.atan2(player.y, x - startPos);
        var velocity = {
          x: Math.cos(angles) * 5,
          y: Math.sin(angles) * 5
        };
        guidedMissiles.push(new GuidedMissile(startPos, 0, velocity.x, velocity.y, 50, true));
      }
    }

    if (guidedMissiles.length > 0) {
      forGM();
    }

    if (sparks.length > 0) {
      forSpark();
    } //create food.


    var createFood = Math.random();

    if (createFood > foodAmount) {
      food.currentTime = 0;
      food.play();
      foods.push(new Food(Math.random() * (c.width * 3) - c.width, -c.height * 0.05, Math.random() - 0.5, Math.random() + 0.1, c.height * 0.02));
    }

    if (foods.length > 0) {
      forFood();
    }

    if (glows.length > 0) {
      forGlow();
    } //create levelGain.


    var gainLevel = Math.random();

    if (gainLevel > 0.99999) {
      levelRelease.currentTime = 0;
      levelRelease.play();
      levelGains.push(new LevelGain(Math.random() * (c.width * 3) - c.width, -50, Math.random() - 0.5, Math.random() + 0.1, c.height * 0.02));
    }

    if (levelGains.length > 0) {
      forLG();
    } //create bonusPoints.


    var bp = Math.random();

    if (bp > 0.9999) {
      bonusRelease.currentTime = 0;
      bonusRelease.play();
      bonusPoints.push(new BonusPoints(Math.random() * (c.width * 3) - c.width, -50, Math.random() - 0.5, Math.random() + 0.1, c.height * 0.02));
    }

    if (bonusPoints.length > 0) {
      forBP();
    }

    if (texts.length > 0) {
      forText();
    }

    if (projectiles.length > 0) {
      forProjectile();
    }
  } else {
    forestSounds.pause();

    if (score > topScore.score) {
      textName.style.visibility = "visible";
      var name = textName.value;
      store(name, score);
    }

    button.style.visibility = "visible";
    player.velocity.x = 0;

    if (!endGameSound) {
      losingBeep.play();
      endGameSound = true;
    }

    levelBonus = 0;
    gravity = 0.003;
    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Player size: DEAD", c.width / 2, 20);
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "red";
    var str = "OH NO IT'S GAME OVER";
    var _width = ctx.measureText(str).width;
    ctx.fillText(str, c.width / 2 - _width / 2, c.height / 2);
    ctx.fillStyle = "rgb(0, 0, 0,0.1)";
    ctx.fillRect(0, 0, c.width, c.height);
    var colour = "blue";

    for (i = 0; i < 3; i++) {
      deaths.push(new Death(x, player.y, Math.random() * 2, colour, {
        x: (Math.random() - 0.5) * (Math.random() * 6),
        y: (Math.random() - 0.5) * (Math.random() * 6)
      }));

      if (colour == "white") {
        colour = "red";
      }

      if (colour == "blue") {
        colour = "white";
      }
    }

    deaths.forEach(function (death, index) {
      if (death.alpha <= 0.01) {
        deaths.splice(index, 1);
      } else {
        death.update();
      }
    });
  }
} //adjust canvas on screen resize.


window.addEventListener("resize", function () {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  init();
});
window.addEventListener("keydown", function (e) {
  if (e.keyCode == 37 || e.keyCode == 65) {
    moveLeft = true;
    fireRight = false;
  }

  if (e.keyCode == 39 || e.keyCode == 68) {
    moveRight = true;
    fireRight = true;
  }

  if (e.keyCode == 83 || e.keyCode == 40 && controlLevel > 1) {
    moveDown = true;
  }

  if (e.keyCode == 83 || e.keyCode == 40) {
    increaseBounce = true;
  }

  if (e.keyCode == 87 || e.keyCode == 38 && controlLevel > 1) {
    moveUp = true;
  }

  if (e.keyCode == 32) {
    fire = true;
  }

  if (e.keyCode == 66) {
    bombDrop = true;
  }
});
window.addEventListener("keyup", function (e) {
  if (e.keyCode == 37 || e.keyCode == 65) {
    moveLeft = false;
  }

  if (e.keyCode == 39 || e.keyCode == 68) {
    moveRight = false;
  }

  if (e.keyCode == 83 || e.keyCode == 40) {
    moveDown = false;
    increaseBounce = false;
  }

  if (e.keyCode == 87 || e.keyCode == 38) {
    moveUp = false;
  }

  if (e.keyCode == 32) {
    fire = false;
  }

  if (e.keyCode == 66) {
    bombDrop = false;
  }
});
init();
animate();