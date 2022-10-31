"use strict";

// Set the canvas elements to  var.
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
var ctx2 = c2.getContext("2d");
c2.width = window.innerWidth; //backgrounds to var.

var background1 = new Image();
background1.src = 'images/forest.jpg';
var background2 = new Image();
background2.src = 'images/grass1.jpg';
var mushroomImage = new Image();
mushroomImage.src = 'images/mushroom.png';
var faceForward = new Image();
faceForward.src = 'images/faceForward.png';
var faceLeft = new Image();
faceLeft.src = 'images/faceLeft.png';
var faceRight = new Image();
faceRight.src = 'images/faceRight.png';
var faceUp = new Image();
faceUp.src = 'images/faceUp.png';
var faceDown = new Image();
faceDown.src = 'images/faceDown.png'; //arrays to var.

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
var mushrooms = []; //audio to var.animationId

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
var mineExplode = document.getElementById("audio12");
var killEverything = document.getElementById("audio13");
var flowerFire = document.getElementById("audio14");
var sheildHit = document.getElementById("audio15");
var sheildGain = document.getElementById("audio16");
var sheildLoss = document.getElementById("audio17");
var mushroomEat = document.getElementById("audio18");
var cheer = document.getElementById("audio19");
var KP = {}; //Keyspressed array.
//elements to vars.

var elem = document.getElementById("myBar");
var button = document.getElementById("button");
var textName = document.getElementById("display"); //vars.

var gravity = 0.03,
    friction = 0.002,
    controlLevel = 1,
    velocityAmount = 0.02,
    width = 0,
    score = 0,
    levelBonus = 8000,
    skillLevel = 0.998,
    missileFire = 0.999,
    minePlant = 0.999,
    enemyVelocity = 1,
    foodVelocity = 1,
    foodAmount = 0.998,
    enemyRadius = 4,
    textFade = 1,
    bonus = 0,
    x = c.width / 2,
    ang = 0,
    x1 = 0,
    y1 = 0,
    sheildTime = 30,
    mushroomCount = 0,
    mushroomSize = 50; //boolean vars.

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
    playerSheild = false;
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
  layers.forEach(function (layer, index) {
    layer.update();
  });
  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("Control LV: " + controlLevel, 0, 20);
  ctx.drawImage(mushroomImage, c.width / 8, 0, 20, 20);
  ctx.fillText("= " + mushroomCount, c.width / 7.3, 20);
  ctx.fillText("LV Bonus: " + levelBonus, c.width / 4, 20);

  if (levelBonus <= 0) {
    levelBonus = 1;
  }

  levelBonus -= 1;
  ctx.fillText("Score: " + score + "          Top Score: " + topScore.name + ": " + topScore.score, c.width - c.width / 4, 20);

  if (playerAlive) {
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Player size: " + player.r, c.width / 2, 20);
    player.update(); //create mushroom.

    if (controlLevel > 2) {
      var createMushroom = Math.random();

      if (createMushroom > 0.9991) {
        mushrooms.push(new Mushroom(Math.random() * 3000 + c.width, c.height - (mushroomSize + 20)));
      }

      createMushroom = Math.random();

      if (createMushroom > 0.9991) {
        mushrooms.push(new Mushroom(Math.random() * -3000, c.height - (mushroomSize + 20)));
      }
    }

    mushrooms.forEach(function (mroom, index) {
      if (mroom.x < x + player.r && mroom.x + mushroomSize > x - player.r && mroom.y < player.y + player.r && mroom.y + mushroomSize > player.y - player.r) {
        mushroomEat.currentTime = 0;
        mushroomEat.play();
        score += 100;
        mushroomCount += 1;
        texts.push(new Text(x, player.y, 0, -1, 100, "bold 20px Arial", "yellow", 1));
        mushrooms.splice(index, 1);
      }

      if (mushroomCount >= 20) {
        cheer.currentTime = 0;
        cheer.play();
        score += 10000;
        texts.push(new Text(x, player.y, 0, -1, 10000, "bold 50px Arial", "yellow", 1));
        mushrooms = [];
        mushroomCount = 0;
      }

      mroom.update();
    }); //create sheild icon.

    if (!playerSheild && controlLevel > 5) {
      var createSheild = Math.random();

      if (createSheild > 0.9991) {
        sheilds.push(new Sheild(Math.random() * 6000 - 3000, Math.random() * c.height, 8, 25));
      }
    }

    sheilds.forEach(function (sheild, index) {
      var colide = collisionDetection(sheild.x, sheild.y, sheild.r);

      if (colide) {
        sheilds = [];
        playerSheild = true;
        sheildGain.currentTime = 0;
        sheildGain.play();
      }

      if (sheild.countdown <= 0) {
        sheilds.splice(index, 1);
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
        flowers.push(new Flower(c.width + 100 + Math.random() * c.width, c.height - 200, 20, 25));
      }

      createFlower = Math.random();

      if (createFlower > 0.999) {
        flowers.push(new Flower(-100 - Math.random() * c.width, c.height - 200, 20, 25));
      }
    }

    flowers.forEach(function (flower, index) {
      var colide = collisionDetection(flower.x, flower.y, flower.r * 10);

      if (colide) {
        flowerFire.currentTime = 0;
        flowerFire.play();
        var startPos = flower.x;
        var angles = Math.atan2(player.y - flower.y, x - startPos);
        var velocity = {
          x: Math.cos(angles) * 5,
          y: Math.sin(angles) * 5
        };
        guidedMissiles.push(new GuidedMissile(startPos, flower.y, velocity.x, velocity.y, 4, false));
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

    if (controlLevel > 5) {
      var killAll = Math.random();

      if (killAll > 0.9991) {
        kills.push(new Kill(Math.random() * 6000 - 3000, Math.random() * c.height, 8, 25));
      }

      kills.forEach(function (kill, index) {
        var colide = collisionDetection(kill.x, kill.y, kill.r);

        if (colide) {
          kills = [];
          killEverything.currentTime = 0;
          killEverything.play();
          enemies.forEach(function (enemy, index) {
            ctx.beginPath();
            ctx.moveTo(x, player.y);
            ctx.lineTo(enemy.x, enemy.y);
            ctx.strokeStyle = "white";
            ctx.stroke();
          });
          mines.forEach(function (mine, index) {
            ctx.beginPath();
            ctx.moveTo(x, player.y);
            ctx.lineTo(mine.x, mine.y);
            ctx.strokeStyle = "white";
            ctx.stroke();
          });
          wanderingMines.forEach(function (wm, index) {
            ctx.beginPath();
            ctx.moveTo(x, player.y);
            ctx.lineTo(wm.x, wm.y);
            ctx.strokeStyle = "white";
            ctx.stroke();
          });
          flowers.forEach(function (flower, index) {
            ctx.beginPath();
            ctx.moveTo(x, player.y);
            ctx.lineTo(flower.x, flower.y);
            ctx.strokeStyle = "white";
            ctx.stroke();
          });
          guidedMissiles.forEach(function (gm, index) {
            ctx.beginPath();
            ctx.moveTo(x, player.y);
            ctx.lineTo(gm.x, gm.y);
            ctx.strokeStyle = "white";
            ctx.stroke();
          });
          enemies = [];
          mines = [];
          wanderingMines = [];
          flowers = [];
          guidedMissiles = [];
        }

        if (kill.countdown <= 0) {
          kills.splice(index, 1);
        }

        kill.update();
      });
    } //create wandering mine.


    if (controlLevel > 6) {
      var wm = Math.random();

      if (wm > 0.999) {
        wanderingMines.push(new WanderingMine(c.width + 100, Math.random() * c.height, 10, {
          x: -1,
          y: Math.random() - 0.5
        }, 25));
      }

      wm = Math.random();

      if (wm > 0.999) {
        wanderingMines.push(new WanderingMine(-100, Math.random() * c.height, 10, {
          x: -1,
          y: Math.random() - 0.5
        }, 25));
      }
    }

    wanderingMines.forEach(function (wmine, index) {
      var colide = collisionDetection(wmine.x, wmine.y, wmine.r * 10);

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
    }); //plant mine.

    if (controlLevel > 3) {
      minesToPlant = true;
    }

    if (minesToPlant) {
      var plantMine = Math.random();

      if (plantMine > minePlant) {
        mines.push(new Mine(Math.random() * 3000 + c.width, c.height, 30, 25));
      }

      plantMine = Math.random();

      if (plantMine > minePlant) {
        mines.push(new Mine(Math.random() * -3000, c.height, 30, 25));
      }
    }

    mines.forEach(function (mine, index) {
      var colide = collisionDetection(mine.x, mine.y, mine.r);

      if (colide) {
        if (!playerSheild) {
          playerAlive = false;
        } else {
          sheildHit.currentTime = 0;
          sheildHit.play();
          var points = Math.trunc(mine.x / 10 + (c.height - mine.y) / 10);
          score += points;

          if (player.y > c.height / 2) {
            texts.push(new Text(x, player.y, 0, -1, points, "bold 20px Arial", "yellow", 1));
          } else {
            texts.push(new Text(x, player.y, 0, 1, points, "bold 20px Arial", "yellow", 1));
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
    }); //enemy fires.

    var enemyFire = Math.random();

    if (enemyFire > skillLevel) {
      bombDrop.currentTime = 0;
      bombDrop.play();
      enemies.push(new Enemy(Math.random() * c.width, -20, 0, enemyVelocity, enemyRadius));
    }

    enemies.forEach(function (enemy, index) {
      var colide = collisionDetection(enemy.x, enemy.y, enemy.r);

      if (colide) {
        if (!playerSheild) {
          hit.currentTime = 0;
          hit.play(); //reduce player size/reset variables.

          if (player.r > 20) {
            player.r = 20;
          } else {
            player.r -= 2;
          }
        } else {
          var points = Math.trunc(enemy.x / 10 + (c.height - enemy.y) / 10);
          score += points;

          if (player.y > c.height / 2) {
            texts.push(new Text(x, player.y, 0, -1, points, "bold 20px Arial", "yellow", 1));
          } else {
            texts.push(new Text(x, player.y, 0, 1, points, "bold 20px Arial", "yellow", 1));
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
        guidedMissiles.push(new GuidedMissile(startPos, 0, velocity.x, velocity.y, 4, true));
      }
    }

    guidedMissiles.forEach(function (gm, index) {
      var colide = collisionDetection(gm.x, gm.y, gm.r + 40);

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
      foods.push(new Food(c.width, Math.random() * (c.height - 40) + 20, -foodVelocity, 0, 4));
    } //player eats food.


    foods.forEach(function (food, index) {
      var colide = collisionDetection(food.x, food.y, food.r);

      if (colide) {
        eatFood.currentTime = 0;
        eatFood.play(); //add to progress bar if size is greater than 20.

        if (player.r >= 20) {
          width += 10;
          elem.style.width = width + "%";
          fadeText = true;
          bppos.x = food.x;
          bppos.y = food.y;
          var points = Math.trunc(food.x / 10 + (c.height - food.y) / 10);
          score += points;

          if (player.y > c.height / 2) {
            texts.push(new Text(x, player.y, 0, -1, points, "bold 20px Arial", "yellow", 1));
          } else {
            texts.push(new Text(x, player.y, 0, 1, points, "bold 20px Arial", "yellow", 1));
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

    if (gainLevel > 0.9999) {
      levelRelease.currentTime = 0;
      levelRelease.play();
      levelGains.push(new LevelGain(c.width, Math.random() * c.height / 2, -1, 0, 8));
    }

    levelGains.forEach(function (LG, index) {
      var colide = collisionDetection(LG.x, LG.y, LG.r);

      if (colide) {
        //player gains level.
        //player gets next level of control + bonus score/update variables.
        if (player.y > c.height / 2) {
          texts.push(new Text(x, player.y, 0, -1, "L+", "bold 25px Arial", "yellow", 1));
        } else {
          texts.push(new Text(x, player.y, 0, 1, "L+", "bold 25px Arial", "yellow", 1));
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
      var colide = collisionDetection(bonusPoint.x, bonusPoint.y, bonusPoint.r);

      if (colide) {
        //player gets bonusPoints.
        bonusP.currentTime = 0;
        bonusP.play();
        bonus = Math.trunc(Math.random() * 500) + 300;

        if (player.y > c.height / 2) {
          texts.push(new Text(x, player.y, 0, -1, bonus, "bold 25px Arial ", "green", 1));
        } else {
          texts.push(new Text(x, player.y, 0, 1, bonus, "bold 25px Arial ", "green", 1));
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
      var colide = collisionDetection(pro.x, pro.y, pro.r);

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
            texts.push(new Text(x, player.y, 0, -1, points, "bold 20px Arial", "yellow", 1));
          } else {
            texts.push(new Text(x, player.y, 0, 1, points, "bold 20px Arial", "yellow", 1));
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
  }

  if (e.keyCode == 39 || e.keyCode == 68) {
    moveRight = true;
  }

  if (e.keyCode == 83 || e.keyCode == 40 && controlLevel > 1) {
    moveDown = true;
  }

  if (e.keyCode == 87 || e.keyCode == 38 && controlLevel > 1) {
    moveUp = true;
  }

  if (e.keyCode == 32) {
    increaseBounce = true;
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
  }

  if (e.keyCode == 87 || e.keyCode == 38) {
    moveUp = false;
  }

  if (e.keyCode == 32) {
    increaseBounce = false;
  }
});
init();
animate();