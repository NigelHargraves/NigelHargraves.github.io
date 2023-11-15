function reset() {
    if (!playerSheild) {
        splats.push(new Splat(x, player.y, x1, y1, ang, player.r));
        if (velocityAmount > 0.02) {
            velocityAmount -= 0.02;
        }
        levelBonus = 8000;
        if (controlLevel > 1) {
            controlLevel -= 1;
            largeTexts = [];
            largeTexts.push(
                new LargeText(x, c.height / 2)
            );
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
        minesToPlant = false;
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
        foodAmount -= 0.0001
        minePlant -= 0.0001;
    }
    if (controlLevel > 3) {
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
    largeTexts = [];

    largeTexts.push(
        new LargeText(x, c.height / 2)
    );
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
    largeTexts = [];
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
    bullets = [];
    bloodSplats = [];
    bombs = [];
    explodes = [];
    sparks = [];
    flourSacks = [];
    milkBottles = [];
    sugars = [];
    chickenEggs = [];
    particles = [];
    ammos = [];

    gravity = 0.03,
        friction = 0.002,
        controlLevel = 1,
        velocityAmount = 0.02,
        width = 0,
        score = 0,
        levelBonus = 8000,
        skillLevel = 0.998,
        missileFire = 0.9999,
        minePlant = 0.9999,
        enemyVelocity = 1,
        foodAmount = 0.998,
        enemyRadius = c.height * 0.008,
        stalkSize = c.height * 0.01,
        textFade = 1,
        bonus = 0,
        x = c.width / 2,
        ang = 0,
        x1 = 0,
        y1 = 0,
        sheildTime = 30,
        mushroomCount = 0,
        mushroomSize = c.height * 0.05,
        blink = 4,
        squint = 2,
        boltCount = 5,
        fireRate = 10,
        fireRateCount = 0,
        bombRate = 100,
        bombRateCount = 0,
        flourSackCount = 0,
        milkBottleCount = 0,
        sugarCount = 0,
        eggCount = 0,
        cakeCount = 0,
        millX = 0 - c.height * 0.200,
        mx = x,
        my = 0,
        timeLeft = 900,
        ammoLeft = 100;

    moveLeft = false,
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
        collectedFlowerSacks = false,
        collectedMilkBottles = false,
        collectedSugars = false,
        collectedEggs = false,
        cooking = false,
        cakeReady = false,
        returnIngredients = false;

    width = 0;
    elem.style.width = width + "%";
    player = new Player(c.width / 2, c.height / 2, 20);
    forestSounds.currentTime = 0;
    forestSounds.play();
    layers.push(new Layer(background4, 0, c.height, 0));
    layers.push(new Layer(background3, 0, c.height, 0));
    layers.push(new Layer(background1, 0, c.height, 0));
    layers.push(new Layer(background2, 0, c2.height, 0));
    largeTexts.push(
        new LargeText(x, c.height / 2)
    );
}



function store(name, score) {
    const thisScore = {
        name: name,
        score: score,
    }
    localStorage.setItem('bestScore', JSON.stringify(thisScore));

}