function reset() {
    if (velocityAmount > 0.02) {
        velocityAmount -= 0.02;
    }
    levelBonus = 8000;
    if (controlLevel > 1) {
        controlLevel -= 1;
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
}

function levelJump() {
    levelUp.currentTime = 0;
    levelUp.play();
    if (controlLevel > 2) {
        velocityAmount += 0.02;
    }
    if (controlLevel > 4) {
        foodVelocity += 0.1;
        minePlant -= 0.0005;
    }
    if (controlLevel > 5) {
        missileFire -= 0.0001;
        enemyRadius += 0.5;
    }
    player.r = 20;
    gravity = 0;
    controlLevel += 1;
    if (controlLevel == 2) {
        friction = 0;
    } else {
        friction = 0.002;
    }
    width = 0;
    elem.style.width = width + "%";
    score += levelBonus;
    levelBonus = 8000;
    skillLevel -= 0.0005;
    enemyVelocity += 0.1;
}

function init() {
    enemies = [];
    foods = [];
    bonusPoints = [];
    controlLevel = 1;
    levelBonus = 8000;
    score = 0;
    gravity = 0.03;
    player = new Player(c.width / 2, c.height / 2, 20, "blue");
    enemies.push(new Enemy(Math.random() * c.width, 0, 0, 1, 4));
    foods.push(new Food(c.width, Math.random() * (c.height - 40) + 20, -foodVelocity, 0, 4));
    food.currentTime = 0;
    food.play();
    layers.push(new Layer(background1, 0, c.height, 0));
    layers.push(new Layer(background2, 0, c2.height, 0));
}