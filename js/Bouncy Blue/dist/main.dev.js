"use strict";

// Set the canvas elements to  var.
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
var ctx2 = c2.getContext("2d");
c2.width = window.innerWidth; //backgrounds to var.

var background1 = new Image();
background1.src = 'images/BB/forest.jpg';
var background2 = new Image();
background2.src = 'images/BB/grass1.jpg';
var mushroomImage = new Image();
mushroomImage.src = 'images/BB/mushroom.png';
var blueberry = new Image();
blueberry.src = 'images/BB/blueberry.png';
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
stalkLeft.src = 'images/BB/stalkLeft.png'; //arrays to var.

var enemies = [];
var foods = [];
var bonusPoints = [];
var texts = [];
var guidedMissiles = [];
var deaths = [];
var levelGains = [];
var layers = [];
var glows = [];
var splats = [];
var mines = [];
var wanderingMines = [];
var projectiles = [];
var kills = [];
var flowers = [];
var sheilds = [];
var mushrooms = [];
var bullets = [];
var bloodSplats = [];
var bombs = [];
var explodes = []; //audio to var.

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
var KP = {}; //Keyspressed array.
//elements to vars.

var elem = document.getElementById("myBar");
var button = document.getElementById("button");
var textName = document.getElementById("display"); //vars.

var gravity, friction, controlLevel, velocityAmount, width, score, levelBonus, skillLevel, missileFire, minePlant, enemyVelocity, foodVelocity, foodAmount, enemyRadius, stalkSize, textFade, bonus, x, ang, x1, y1, sheildTime, mushroomCount, mushroomSize, blink, squint, boltCount, fireRate, fireRateCount, bombRate, bombRateCount; //var texts.

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
  var _this = this;

  //call next frame.
  animationId = requestAnimationFrame(animate);

  if (forestSounds.paused) {
    forestSounds.play();
  }

  layers.forEach(function (layer, index) {
    layer.update();
  });
  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("Control LV: " + controlLevel, 0, c.height * 0.02);
  ctx.drawImage(mushroomImage, c.width / 8, 0, c.height * 0.02, c.height * 0.02);
  ctx.fillText("= " + mushroomCount, c.width / 7.3, c.height * 0.02);
  ctx.fillText("LV Bonus: " + levelBonus, c.width / 4, c.height * 0.02);

  if (levelBonus <= 0) {
    levelBonus = 1;
  }

  levelBonus -= 1;
  ctx.fillText("Score: " + score + "          Top Score: " + topScore.name + ": " + topScore.score, c.width - c.width / 4, c.height * 0.02);

  if (playerAlive) {
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
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
    }

    player.update(); //create bomb.

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

    bombs.forEach(function (bomb, index1) {
      if (bomb.y >= c.height - c.height * 0.06) {
        if (!dropBomb.paused) {
          dropBomb.pause();
          dropBomb.currentTime = 0;
        }

        bombExplode.currentTime = 0;
        bombExplode.play();
        explodes.push(new Explode(bomb.x + c.height * 0.01, bomb.y + c.height * 0.02, 5, 1));
        bombs.splice(index1, 1);
      }

      bomb.update();
    });
    explodes.forEach(function (exp, index1) {
      explodesCheck(exp);

      if (exp.s >= c.height * 0.3 && exp.alpha <= 0.2) {
        explodes.splice(index1, 1);
      }

      exp.update();
    }); //create bullet.

    if (fire && fireRateCount == 0) {
      fireGap = true;

      if (fireRight) {
        bullets.push(new Bullet(x, player.y - player.r - stalkSize, player.velocity.x + c.height * 0.01, "greenyellow"));
      } else {
        bullets.push(new Bullet(x, player.y - player.r - stalkSize, player.velocity.x + -c.height * 0.01, "greenyellow"));
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

    bullets.forEach(function (bullet, index1) {
      bulletCheck(bullet, index1);

      if (bullet.x < 0 || bullet.x > c.width) {
        bullets.splice(index1, 1);
      }

      bullet.update();
    });
    bloodSplats.forEach(function (bloodSplats, index) {
      if (bloodSplats.y > c.height) {
        bloodSplats.splice, index;
      }

      bloodSplats.update();
    }); //create mushroom.

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

    mushrooms.forEach(function (mroom, index) {
      var colide = collisionDetection(mroom.x + mushroomSize / 2, mroom.y + mushroomSize / 2, mushroomSize / 2, x, player.y, player.r);

      if (colide) {
        mushroomEat.currentTime = 0;
        mushroomEat.play();
        score += 100;
        mushroomCount += 1;
        texts.push(new Text(x, player.y, 0, -c.height * 0.001, " 100 😃 ", "bold 20px Arial", "yellow", 1, false));
        mushrooms.splice(index, 1);
      }

      if (mushroomCount >= 20) {
        cheer.currentTime = 0;
        cheer.play();
        score += 10000;
        texts.push(new Text(x, player.y, 0, -c.height * 0.001, " 10000 😎", "bold 50px Arial", "yellow", 1, false));
        mushroomCount = 0;
      }

      mroom.update();
    }); //create sheild icon.

    if (!playerSheild && controlLevel > 5 && sheilds.length == 0) {
      var createSheild = Math.random();

      if (createSheild > 0.99999) {
        sheilds.push(new Sheild(Math.random() * (c.height * 6 - c.height * 3), Math.random() * (c.height - c.height * 0.02), c.height * 0.02, 25));
      }
    }

    sheilds.forEach(function (sheild) {
      var colide = collisionDetection(sheild.x, sheild.y, sheild.r, x, player.y, player.r);

      if (colide) {
        sheilds = [];
        playerSheild = true;
        sheildGain.currentTime = 0;
        sheildGain.play();
      }

      if (sheild.countdown <= 0) {
        sheilds = [];
      }

      sheild.update();
    });

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


    if (controlLevel > 5) {
      var createFlower = Math.random();

      if (createFlower > 0.999) {
        flowers.push(new Flower(c.width + c.height * 0.1 + Math.random() * c.width, c.height - 200, c.height * 0.04, 25));
      }

      createFlower = Math.random();

      if (createFlower > 0.999) {
        flowers.push(new Flower(-c.height * 0.1 - Math.random() * c.width, c.height - 200, c.height * 0.04, 25));
      }
    }

    flowers.forEach(function (flower, index) {
      var colide = collisionDetection(flower.x, flower.y, flower.r * (c.height * 0.004), x, player.y, player.r);

      if (colide) {
        flowerFire.currentTime = 0;
        flowerFire.play();
        var startPos = flower.x;
        var angles = Math.atan2(player.y - flower.y, x - startPos);
        var velocity = {
          x: Math.cos(angles) * 5,
          y: Math.sin(angles) * 5
        };
        guidedMissiles.push(new GuidedMissile(startPos, flower.y, velocity.x, velocity.y, c.height * 0.01, false));
        flowers.splice(index, 1);
      }

      if (flower.countdown <= 0) {
        if (flower.x > 0 - flower.r && flower.x < c.width + flower.r) {
          mineExplode.currentTime = 0;
          mineExplode.play();

          for (var _i = 0; _i < 10; _i++) {
            projectiles.push(new Projectile(flower.x, flower.y, 2, {
              x: (Math.random() - 0.5) * 20,
              y: (Math.random() - 0.5) * 20
            }, 25));
          }
        }

        flowers.splice(index, 1);
      }

      flower.update();
    }); //kill all.

    if (controlLevel > 6 && kills.length == 0) {
      var killAll = Math.random();

      if (killAll > 0.99999) {
        kills.push(new Kill(Math.random() * 600 - 300, Math.random() * c.height, 40, 25));
      }
    }

    kills.forEach(function (kill) {
      killCheck(kill);

      if (kill.countdown <= 0) {
        kills = [];
      }

      kill.update();
    });

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

    wanderingMines.forEach(function (wmine, index) {
      var colide = collisionDetection(wmine.x, wmine.y, wmine.r * 5, x, player.y, player.r);

      if (colide) {
        if (wmine.x > 0 - wmine.r && wmine.x < c.width + wmine.r) {
          mineExplode.currentTime = 0;
          mineExplode.play();

          for (var _i2 = 0; _i2 < 20; _i2++) {
            projectiles.push(new Projectile(wmine.x, wmine.y, 2, {
              x: (Math.random() - 0.5) * 20,
              y: (Math.random() - 0.5) * 20
            }, 25));
          }
        }

        wanderingMines.splice(index, 1);
      }

      if (wmine.countdown <= 0) {
        wanderingMines.splice(index, 1);
      }

      wmine.update();
    });
    wmmove = 10; //plant mine.

    if (controlLevel > 2) {
      minesToPlant = true;
    }

    if (minesToPlant) {
      var plantMine = Math.random();

      if (plantMine > minePlant) {
        mines.push(new Mine(Math.random() * 3000 + c.width, c.height - 20, 30, 25));
      }

      plantMine = Math.random();

      if (plantMine > minePlant) {
        mines.push(new Mine(Math.random() * -3000, c.height - 20, 30, 25));
      }
    }

    mines.forEach(function (mine, index) {
      var colide = collisionDetection(mine.x, mine.y, mine.r, x, player.y, player.r);

      if (colide) {
        if (!playerSheild) {
          playerAlive = false;
        } else {
          sheildHit.currentTime = 0;
          sheildHit.play();
          var points = Math.trunc(mine.x / 10 + (c.height - mine.y) / 10);
          score += points;

          if (player.y > c.height / 2) {
            texts.push(new Text(x, player.y, 0, -1, points, "bold 20px Arial", "yellow", 1, false));
          } else {
            texts.push(new Text(x, player.y, 0, 1, points, "bold 20px Arial", "yellow", 1, false));
          }
        }

        mines.splice(index, 1);
      } //countdown = 0


      if (mine.countdown <= 0) {
        if (mine.x > 0 - mine.r && mine.x < c.width + mine.r) {
          mineExplode.currentTime = 0;
          mineExplode.play();

          for (var _i3 = 0; _i3 < 10; _i3++) {
            projectiles.push(new Projectile(mine.x, mine.y, 2, {
              x: (Math.random() - 0.5) * 20,
              y: (Math.random() - 0.5) * 20
            }, 25, "white"));
          }
        }

        for (i = 0; i < 30; i++) {
          deaths.push(new Death(mine.x, mine.y - 30, Math.random() * 2, "red", {
            x: (Math.random() - 0.5) * 8,
            y: (Math.random() - 0.5) * 8
          }));
        }

        mines.splice(index, 1);
      }

      mine.update();
    }); //create bee.

    var enemyFire = Math.random();

    if (enemyFire > skillLevel) {
      beeBuzz.currentTime = 0;
      beeBuzz.play();
      var beeDirection = true;
      var setDirection = Math.random();

      if (setDirection > 0.5) {
        beeDirection = false;
      }

      enemies.push(new Enemy(Math.random() * c.width, -20, enemyVelocity, enemyVelocity, enemyRadius, beeDirection));
    }

    enemies.forEach(function (enemy, index) {
      var colide = collisionDetection(enemy.x, enemy.y, enemy.r, x, player.y, player.r);

      if (colide) {
        if (!playerSheild) {
          hit.currentTime = 0;
          hit.play(); //reduce player size/reset variables.

          if (player.r > 20) {
            player.r = 20;
          } else {
            player.r -= 2;
          }

          if (player.y > c.height / 2) {
            texts.push(new Text(x, player.y, 0, -1, "🤕", "bold 20px Arial", "yellow", 1, false));
          } else {
            texts.push(new Text(x, player.y, 0, 1, "🤕", "bold 20px Arial", "yellow", 1, false));
          }
        } else {
          var points = Math.trunc(enemy.x / 10 + (c.height - enemy.y) / 10);
          score += points;

          if (player.y > c.height / 2) {
            texts.push(new Text(x, player.y, 0, -1, points, "bold 20px Arial", "yellow", 1, false));
          } else {
            texts.push(new Text(x, player.y, 0, 1, points, "bold 20px Arial", "yellow", 1, false));
          }
        }

        reset();
        enemies.splice(index, 1);
      }

      if (player.r <= 14) {
        playerAlive = false;
      } //enemy falls off screen.


      if (enemy.y > c.height) enemies.splice(index, 1);
      enemy.update();
    });
    splats.forEach(function (splat, index) {
      splat.update();

      if (splat.ang > 0) {
        splats.splice(index, 1);
      }
    }); //fire guidedMissile.

    if (controlLevel > 4 || score > 50000) {
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

    guidedMissiles.forEach(function (gm, index) {
      var colide = collisionDetection(gm.x, gm.y, gm.r + 20, x, player.y, player.r);

      if (colide) {
        mineExplode.currentTime = 0;
        mineExplode.play();

        for (var _i4 = 0; _i4 < 10; _i4++) {
          projectiles.push(new Projectile(gm.x, gm.y, 2, {
            x: (Math.random() - 0.5) * 20,
            y: (Math.random() - 0.5) * 20
          }, 25, "white"));
        }

        guidedMissiles.splice(index, 1);
      }

      if (player.r <= 14) {
        playerAlive = false;
      } //countdown = 0 and missile still on screen.


      if (gm.countdown <= 0) {
        mineExplode.currentTime = 0;
        mineExplode.play();

        for (var _i5 = 0; _i5 < 10; _i5++) {
          projectiles.push(new Projectile(gm.x, gm.y, 2, {
            x: (Math.random() - 0.5) * 20,
            y: (Math.random() - 0.5) * 20
          }, 25, "yellow"));
        }

        guidedMissiles.splice(index, 1);
      } //guidedmissile falls off screen.


      if (gm.y > c.height || gm.countdown <= 0) {
        guidedMissiles.splice(index, 1);
      }

      gm.update();
    }); //create food.

    var createFood = Math.random();

    if (createFood > foodAmount) {
      food.currentTime = 0;
      food.play();
      foods.push(new Food(c.width, Math.random() * (c.height * 0.8 + c.height * 0.1), -foodVelocity, 0, c.height * 0.01));
    } //player eats food.


    foods.forEach(function (food, index) {
      var colide = collisionDetection(food.x, food.y, food.r, x, player.y, player.r);

      if (colide) {
        eatFood.currentTime = 0;
        eatFood.play(); //add to progress bar if size is greater than 20.

        if (player.r >= c.height * 0.02) {
          width += 10;
          elem.style.width = width + "%";
          fadeText = true;
          bppos.x = food.x;
          bppos.y = food.y;
          var points = Math.trunc(food.x / 10 + (c.height - food.y) / 10);
          score += points;

          if (player.y > c.height / 2) {
            texts.push(new Text(x, player.y, 0, -1, points + " 😃", "bold 20px Arial", "yellow", 1, false));
          } else {
            texts.push(new Text(x, player.y, 0, 1, points + " 😃", "bold 20px Arial", "yellow", 1, false));
          }
        } //increase player size/add to score.


        player.r += 1;
        glows.push(new Glow(x, player.y, player.r, 1.1));
        foods.splice(index, 1); //player gets next level of control + bonus score/update variables.

        if (player.r == 30) {
          levelJump();
        }
      } //food goes far left.


      if (food.x < -3000) foods.splice(index, 1);
      food.update();
    });
    glows.forEach(function (glow, index) {
      if (glow.alpha < 0.2) {
        glows.splice(index, 1);
      }

      glow.update();
    }); //create levelGain.

    var gainLevel = Math.random();

    if (gainLevel > 0.99999) {
      levelRelease.currentTime = 0;
      levelRelease.play();
      levelGains.push(new LevelGain(c.width, Math.random() * c.height / 2, -1, 0, 8));
    }

    levelGains.forEach(function (LG, index) {
      var colide = collisionDetection(LG.x, LG.y, LG.r, x, player.y, player.r);

      if (colide) {
        //player gains level.
        //player gets next level of control + bonus score/update variables.
        if (player.y > c.height / 2) {
          texts.push(new Text(x, player.y, 0, -1, "L+", "bold 25px Arial", "yellow", 1, false));
        } else {
          texts.push(new Text(x, player.y, 0, 1, "L+", "bold 25px Arial", "yellow", 1, false));
        }

        levelGains.splice(index, 1);
        levelJump();
      } //levelGain goes off screen.


      if (LG.x < -3000) levelGains.splice(index, 1);
      LG.update();
    }); //create bonusPoints.

    var bp = Math.random();

    if (bp > 0.9999) {
      bonusRelease.currentTime = 0;
      bonusRelease.play();
      bonusPoints.push(new BonusPoints(Math.random() * c.width, 0, 0, 1, 8));
    }

    bonusPoints.forEach(function (bonusPoint, index) {
      var colide = collisionDetection(bonusPoint.x, bonusPoint.y, bonusPoint.r, x, player.y, player.r);

      if (colide) {
        //player gets bonusPoints.
        bonusP.currentTime = 0;
        bonusP.play();
        bonus = Math.trunc(Math.random() * 500) + 300;

        if (player.y > c.height / 2) {
          texts.push(new Text(x, player.y, 0, -1, bonus, "bold 25px Arial ", "green", 1, false));
        } else {
          texts.push(new Text(x, player.y, 0, 1, bonus, "bold 25px Arial ", "green", 1, false));
        }

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
        text.opacity -= 0.002;
      }

      text.update();
    });
    projectiles.forEach(function (pro, index) {
      var colide = collisionDetection(pro.x, pro.y, pro.r, x, player.y, player.r);

      if (colide) {
        if (!playerSheild) {
          hit.currentTime = 0;
          hit.play(); //reduce player size/reset variables.

          if (player.r > 20) {
            player.r = 20;
          } else {
            player.r -= 2;
          }

          splats.push(new Splat(x, player.y, x1, y1, ang, player.r));
        } else {
          var points = Math.trunc(pro.x / 10 + (c.height - pro.y) / 10);
          score += points;

          if (player.y > c.height / 2) {
            texts.push(new Text(x, player.y, 0, -1, points, "bold 20px Arial", "yellow", 1, false));
          } else {
            texts.push(new Text(x, player.y, 0, 1, points, "bold 20px Arial", "yellow", 1, false));
          }
        }

        reset();
        projectiles.splice(index, 1);
      }

      if (player.r <= 14) {
        playerAlive = false;
      }

      if (_this.countdown <= 0) {
        projectiles.splice(index, 1);
      }

      pro.update();
    });
  } else {
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