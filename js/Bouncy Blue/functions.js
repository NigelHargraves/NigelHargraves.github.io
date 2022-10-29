function reset() {
    if (!playerSheild) {
        splats.push(new Splat(x, player.y, x1, y1, ang, player.r));
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
    } else {
        sheildHit.currentTime = 0;
        sheildHit.play();
    }
}

function collisionDetection(objectX, objectY, radius) {
    if (
        objectX - radius < x + player.r &&
        objectX + radius > x - player.r &&
        objectY - radius < player.y + player.r &&
        objectY + radius > player.y - player.r
    ) {
        return true;
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
        foodAmount -= 0.0001
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
    minesToPlant = false;
    gravity = 0.03,
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
        mushroomCount = 0;
    playerAlive = true;
    player = new Player(c.width / 2, c.height / 2, 20, "blue");
    enemies.push(new Enemy(Math.random() * c.width, 0, 0, 1, 4));
    bombDrop.currentTime = 0;
    bombDrop.play();
    foods.push(new Food(c.width, Math.random() * (c.height - 40) + 20, -foodVelocity, 0, 4));
    food.currentTime = 0;
    food.play();
    layers.push(new Layer(background1, 0, c.height, 0));
    layers.push(new Layer(background2, 0, c2.height, 0));
}



function store(name, score) {
    const thisScore = {
        name: name,
        score: score,
    }
    localStorage.setItem('bestScore', JSON.stringify(thisScore));

}