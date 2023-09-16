"use strict";

function reset() {
  if (!playerSheild) {
    splats.push(new Splat(x, player.y, x1, y1, ang, player.r));

    if (velocityAmount > 0.02) {
      velocityAmount -= 0.02;
    }

    levelBonus = 8000;

    if (controlLevel > 1) {
      controlLevel -= 1;
      texts.push(new Text(x - c.height * 0.330, c.height / 2, 0, 0, clText + controlLevel, "bold 80px Arial", "white", 1, true));
    }

    if (controlLevel == 1) {
      gravity = 0.03;
    } else {
      gravity = 0;
    }

    if (controlLevel == 2) {
      friction = 0;
    } else {
      friction = 0.002;
    }

    width = 0;
    elem.style.width = width + "%";
  } else {
    sheildHit.currentTime = 0;
    sheildHit.play();
  }
}

function levelJump() {
  levelUp.currentTime = 0;
  levelUp.play();

  if (controlLevel > 2) {
    velocityAmount += 0.02;
  }

  if (controlLevel > 4) {
    foodVelocity += 0.1;
    foodAmount -= 0.0001;
    minePlant -= 0.0005;
  }

  if (controlLevel > 2) {
    missileFire -= 0.0001;
    enemyRadius += 1;
  }

  player.r = 20;
  gravity = 0;

  if (controlLevel == 1) {
    player.velocity.x /= 2;
    player.velocity.y /= 2;
  }

  controlLevel += 1;

  if (controlLevel == 2) {
    friction = 0;
  } else {
    friction = 0.002;
  }

  texts.push(new Text(x - c.height * 0.330, c.height / 2, 0, 0, clText + controlLevel, "bold 80px Arial", "white", 1, true));
  width = 0;
  elem.style.width = width + "%";
  score += levelBonus;
  levelBonus = 8000;
  skillLevel -= 0.0001;
  enemyVelocity += 0.1;
}

function init() {
  topScore = JSON.parse(localStorage.getItem("bestScore"));
  display.style.visibility = "hidden";
  button.style.visibility = "hidden";
  enemies = [];
  foods = [];
  bonusPoints = [];
  texts = [];
  guidedMissiles = [];
  deaths = [];
  levelGains = [];
  layers = [];
  glows = [];
  splats = [];
  mines = [];
  wanderingMines = [];
  projectiles = [];
  kills = [];
  flowers = [];
  sheilds = [];
  mushrooms = [];
  gravity = 0.03, friction = 0.002, controlLevel = 1, velocityAmount = 0.02, width = 0, score = 0, levelBonus = 8000, skillLevel = 0.998, missileFire = 0.999, minePlant = 0.9999, enemyVelocity = 1, foodVelocity = 1, foodAmount = 0.998, enemyRadius = c.height * 0.008, stalkSize = c.height * 0.01, textFade = 1, bonus = 0, x = c.width / 2, ang = 0, x1 = 0, y1 = 0, sheildTime = 30, mushroomCount = 0, mushroomSize = c.height * 0.05, blink = 4, squint = 2, boltCount = 5, fireRate = 10, fireRateCount = 0, bombRate = 100, bombRateCount = 0;
  moveLeft = false, moveRight = false, moveUp = false, moveDown = false, eyesBlink = false, eyesSquint = false, increaseBounce = false, fadeText = false, missile = false, playerAlive = true, minesToPlant = false, endGameSound = false, playerSheild = false, LBall = false;
  width = 0;
  elem.style.width = width + "%";
  player = new Player(c.width / 2, c.height / 2, 20);
  enemies.push(new Enemy(Math.random() * c.width, 0, 0, 1, c.height * 0.008));
  beeBuzz.play();
  foods.push(new Food(c.width, Math.random() * (c.height - 40) + 20, -foodVelocity, 0, c.height * 0.01));
  food.currentTime = 0;
  food.play();
  forestSounds.currentTime = 0;
  forestSounds.play();
  layers.push(new Layer(background1, 0, c.height, 0));
  layers.push(new Layer(background2, 0, c2.height, 0));
  texts.push(new Text(x - c.height * 0.330, c.height / 2, 0, 0, clText + controlLevel, "bold 80px Arial", "white", 1, true));
}

function store(name, score) {
  var thisScore = {
    name: name,
    score: score
  };
  localStorage.setItem('bestScore', JSON.stringify(thisScore));
}