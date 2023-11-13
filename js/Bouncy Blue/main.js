// Set the canvas elements to  var.
const ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
const ctx2 = c2.getContext("2d");
c2.width = window.innerWidth;
const ctx3 = c3.getContext("2d");
c3.width = window.innerWidth;
c3.height = window.innerHeight;
const ctx4 = c4.getContext("2d");
c4.width = window.innerWidth;
c4.height = window.innerHeight;

//backgrounds to var.
let background1 = new Image();
background1.src = 'images/BB/background1.png';
let background2 = new Image();
background2.src = 'images/BB/grass1.jpg';
let background3 = new Image();
background3.src = 'images/BB/background3.png';
let background4 = new Image();
background4.src = 'images/BB/background4.png';
let mushroomImage = new Image();
mushroomImage.src = 'images/BB/mushroom.png';
let blueberry = new Image();
blueberry.src = 'images/BB/blueberryOnParachute.png';
let beeLeft = new Image();
beeLeft.src = 'images/BB/beeLeft.png';
let beeRight = new Image();
beeRight.src = 'images/BB/beeRight.png';
let faceForward = new Image();
faceForward.src = 'images/BB/faceForward.png';
let faceLeft = new Image();
faceLeft.src = 'images/BB/faceLeft.png';
let faceRight = new Image();
faceRight.src = 'images/BB/faceRight.png';
let faceUp = new Image();
faceUp.src = 'images/BB/faceUp.png';
let lookDown = new Image();
lookDown.src = 'images/BB/lookDown.png';
let faceDownLeft = new Image();
faceDownLeft.src = 'images/BB/faceDownLeft.png';
let faceDownRight = new Image();
faceDownRight.src = 'images/BB/faceDownRight.png';
let faceUpLeft = new Image();
faceUpLeft.src = 'images/BB/faceUpLeft.png';
let faceUpRight = new Image();
faceUpRight.src = 'images/BB/faceUpRight.png';
let faceBlink = new Image();
faceBlink.src = 'images/BB/faceBlink.png';
let faceSquint = new Image();
faceSquint.src = 'images/BB/faceSquint.png';
let faceBlank = new Image();
faceBlank.src = 'images/BB/faceBlank.png';
let starMissile = new Image();
starMissile.src = 'images/BB/missile.png';
let starMissile2 = new Image();
starMissile2.src = 'images/BB/missile2.png';
let landmine = new Image();
landmine.src = 'images/BB/landmine.png';
let sunflower = new Image();
sunflower.src = 'images/BB/sunflower.png';
let flowerStalk = new Image();
flowerStalk.src = 'images/BB/flowerstalk.jpg';
let drone = new Image();
drone.src = 'images/BB/drone.png';
let sheild = new Image();
sheild.src = 'images/BB/sheild.png';
let lightningBolt = new Image();
lightningBolt.src = 'images/BB/lightningBolt.png';
let lightningBall = new Image();
lightningBall.src = 'images/BB/lightningBall.png';
let bombImage = new Image();
bombImage.src = 'images/BB/bomb.png';
let explode = new Image();
explode.src = 'images/BB/explode.png';
let stalkRight = new Image();
stalkRight.src = 'images/BB/stalkRight.png';
let stalkLeft = new Image();
stalkLeft.src = 'images/BB/stalkLeft.png';
let pOnParachute = new Image();
pOnParachute.src = 'images/BB/pOnParachute.png';
let lOnParachute = new Image();
lOnParachute.src = 'images/BB/lOnParachute.png';
let flourSackOnBalloon = new Image();
flourSackOnBalloon.src = 'images/BB/flourSackOnBalloon.png';
let flourSack = new Image();
flourSack.src = 'images/BB/flourSack.png';
let waterMill = new Image();
waterMill.src = 'images/BB/waterMill.png';
let river = new Image();
river.src = 'images/BB/river.png';
let oven = new Image();
oven.src = 'images/BB/oven.png';
let ovenOff = new Image();
ovenOff.src = 'images/BB/ovenOff.png';
let milkBottle = new Image();
milkBottle.src = 'images/BB/milkBottle.png';
let sugar = new Image();
sugar.src = 'images/BB/sugar.png';
let chickenEgg = new Image();
chickenEgg.src = 'images/BB/chickenEgg.png';
let blueberryCake = new Image();
blueberryCake.src = 'images/BB/blueberryCake.png';
let ammoBox = new Image();
ammoBox.src = 'images/BB/ammoBox.png';

//declare array names.
let enemies, foods, bonusPoints, texts, guidedMissiles, deaths, levelGains, layers, glows, splats, mines, wanderingMines, projectiles, kills,
    flowers, sheilds, mushrooms, bullets, bloodSplats, bombs, explodes, sparks, flourSacks, milkBottles, sugars, particles, chickenEggs, ammos;

//audio to var.
let bounce = document.getElementById("audio1");
let levelUp = document.getElementById("audio2");
let hit = document.getElementById("audio3");
let food = document.getElementById("audio4");
let eatFood = document.getElementById("audio5");
let misFire = document.getElementById("audio6");
let beeBuzz = document.getElementById("audio7");
let bonusP = document.getElementById("audio8");
let bonusRelease = document.getElementById("audio9");
let losingBeep = document.getElementById("audio10");
let levelRelease = document.getElementById("audio11");
let mineExplode = document.getElementById("audio12");
let killEverything = document.getElementById("audio13");
let flowerFire = document.getElementById("audio14");
let sheildHit = document.getElementById("audio15");
let sheildGain = document.getElementById("audio16");
let sheildLoss = document.getElementById("audio17");
let mushroomEat = document.getElementById("audio18");
let cheer = document.getElementById("audio19");
let bigBeeBuzz = document.getElementById("audio20");
let forestSounds = document.getElementById("audio21");
let laserShot = document.getElementById("audio22");
let splat = document.getElementById("audio23");
let pain = document.getElementById("audio24");
let dropBomb = document.getElementById("audio25");
let bombExplode = document.getElementById("audio26");
let gain = document.getElementById("audio27");
let no = document.getElementById("audio28");
let fart1 = document.getElementById("audio29");
let fart2 = document.getElementById("audio30");
let fart3 = document.getElementById("audio31");
let fart4 = document.getElementById("audio32");
let reload1 = document.getElementById("audio33");
let reload2 = document.getElementById("audio34");
let reload3 = document.getElementById("audio35");

let KP = {}; //Keyspressed array.

//elements to vars.
let elem = document.getElementById("myBar");
let button = document.getElementById("button");
let textName = document.getElementById("display");

//vars.
let gravity,
    friction,
    controlLevel,
    velocityAmount,
    width,
    score,
    levelBonus,
    skillLevel,
    missileFire,
    minePlant,
    enemyVelocity,
    foodAmount,
    enemyRadius,
    stalkSize,
    textFade,
    bonus,
    x,
    ang,
    x1,
    y1,
    sheildTime,
    mushroomCount,
    mushroomSize,
    blink,
    squint,
    boltCount,
    fireRate,
    fireRateCount,
    bombRate,
    bombRateCount,
    flourSackCount,
    milkBottleCount,
    sugarCount,
    eggCount,
    cakeCount,
    millX,
    info = "",
    timeLeft,
    ammoLeft;



//var texts.
let clText = "Control Level "


//boolean vars.
let moveLeft = false,
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
    bombDropGap = false,
    collectedFlowerSacks = false,
    collectedMilkBottles = false,
    collectedSugars = false,
    collectedEggs = false,
    cooking = false,
    cakeReady = false;

let leftEye = { x: 8, y: 7 },
    rightEye = { x: 8, y: 7 },
    bppos = { x: 0, y: 0 },
    countBlink = 100,
    countSquint = 100;

let topScore;


if (localStorage.getItem("bestScore")) {
    topScore = JSON.parse(localStorage.getItem("bestScore"));
} else {
    topScore = { name: "", score: 0 };
    localStorage.setItem('bestScore', JSON.stringify(topScore));
}




function animate() {
    //call next frame.
    animationId = requestAnimationFrame(animate);

    ctx.clearRect(0, 0, c.width, c.height);
    ctx3.clearRect(0, 0, c.width, c.height);

    layers.forEach((layer) => {
        layer.update();
    });

    if (playerAlive) {

        if (forestSounds.paused) {
            forestSounds.play();
        }

        if (bombs.length > 0) {
            forBomb();
        }

        player.update();

        //cooking smoke.
        if (cooking) {
            let velocity = { x: Math.random() * 2, y: -Math.random() * 2 },
                alpha = 0.9;
            particles.push(new Particle(millX + c.height * 0.27 + c.height * 0.08 / 2, c.height - c.height * 0.1, 4, velocity, "grey", alpha));
            particles.forEach((particle, index) => {
                if (particle.a <= 0.1) {
                    particles.splice(index, 1);
                } else {
                    particle.update();
                }
            });
        }


        ctx.font = "bold 20px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("Control LV: " + controlLevel, 0, c.height * 0.02);
        ctx.drawImage(mushroomImage, c.width / 8, 0, c.height * 0.02, c.height * 0.02);
        ctx.fillText("= " + mushroomCount, c.width / 7.3, c.height * 0.02);


        ctx.fillText("LV Bonus: " + levelBonus, c.width / 4, c.height * 0.02);


        ctx.drawImage(waterMill, c.width / 2.4, 0, c.height * 0.02, c.height * 0.02);
        if (millX + c.height * 0.400 + c.width / 2 < x) {
            ctx.fillText("⇦", c.width / 2.5, c.height * 0.02);
        } else if (millX - c.width / 2 > x) {
            ctx.fillText("⇨", c.width / 2.3, c.height * 0.02);
        } else {
            ctx.fillText("✅", c.width / 2.3, c.height * 0.02);
        }

        //collectables
        ctx.drawImage(flourSack, 0, c.height * 0.03, c.height * 0.02, c.height * 0.02);
        ctx.fillText("= " + flourSackCount, c.height * 0.03, c.height * 0.05);
        if (collectedFlowerSacks) {
            ctx.fillText("✅", c.height * 0.07, c.height * 0.05);
        }
        ctx.drawImage(milkBottle, 0, c.height * 0.06, c.height * 0.02, c.height * 0.02);
        ctx.fillText("= " + milkBottleCount, c.height * 0.03, c.height * 0.08);
        if (collectedMilkBottles) {
            ctx.fillText("✅", c.height * 0.07, c.height * 0.08);
        }
        ctx.drawImage(sugar, 0, c.height * 0.09, c.height * 0.02, c.height * 0.02);
        ctx.fillText("= " + sugarCount, c.height * 0.03, c.height * 0.11);
        if (collectedSugars) {
            ctx.fillText("✅", c.height * 0.07, c.height * 0.11);
        }
        ctx.drawImage(chickenEgg, 0, c.height * 0.12, c.height * 0.02, c.height * 0.02);
        ctx.fillText("= " + eggCount, c.height * 0.03, c.height * 0.14);
        if (collectedEggs) {
            ctx.fillText("✅", c.height * 0.07, c.height * 0.14);
        }


        if (cooking) {
            ctx.fillText("cooking = ✅", 0, c.height * 0.17);
        } else {
            ctx.fillText("cooking = ❌", 0, c.height * 0.17);
        }

        ctx.drawImage(blueberryCake, 0, c.height * 0.18, c.height * 0.02, c.height * 0.02);
        ctx.fillText("= " + cakeCount, c.height * 0.03, c.height * 0.20);





        //cooking the cake.
        if (cooking) {
            ctx.fillStyle = "white";
            if (timeLeft == 900) {
                ctx.fillText(timeLeft / 60 + ":00", millX + (c.height * 0.565) / 2,
                    c.height - c.height * 0.04);
            } else {
                if (timeLeft % 60 < 10) {
                    ctx.fillText(
                        "0" + Math.floor(timeLeft / 60) + ":0" + Math.floor(timeLeft % 60),
                        millX + (c.height * 0.565) / 2,
                        c.height - c.height * 0.04
                    );
                } else {
                    ctx.fillText(
                        Math.floor(timeLeft / 60) + ":" + Math.floor(timeLeft % 60),
                        millX + (c.height * 0.565) / 2,
                        c.height - c.height * 0.04
                    );
                }
            }
            timeLeft -= 0.02;
            if (timeLeft <= 0) {
                cooking = false;
                timeLeft = 900;
                cakeReady = true;
            }
        }

        if (cakeReady) {
            ctx.drawImage(blueberryCake, millX + (c.height * 0.565) / 2,
                c.height - c.height * 0.07, c.height * 0.05, c.height * 0.05);
        }




        if (levelBonus <= 0) {
            levelBonus = 1;
        }

        levelBonus -= 1;

        ctx.fillStyle = "black";
        ctx.fillText("Score: " + score + "          Top Score: " + topScore.name + ": " + topScore.score, c.width - c.width / 4, c.height * 0.02);
        ctx.fillText("Player size: " + Math.round(player.r), c.width / 2, c.height * 0.02);
        ctx.fillText("Ammo: " + ammoLeft, c.width / 2 + c.width * 0.1, c.height * 0.02);



        let blinkEyes = Math.random()
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

        //direction arrow.
        ctx.font = " bold 80px Arial";
        ctx.fillStyle = "white";
        if (player.y < 0 && player.velocity.y < 0) {
            ctx.fillText("⬆", c.width / 2, c.height / 2);
        } else if (player.y < 0 && player.velocity.y > 0) {
            ctx.fillText("⬇", c.width / 2, c.height / 2);
        }

        //bring ingredients back home.
        if (!cooking && collectedFlowerSacks && collectedMilkBottles && collectedSugars && collectedEggs && x >= millX && x <= millX + c.height * 0.400 && player.y >= c.height - c.height * 0.1) {
            cooking = true;
            collectedFlowerSacks = false;
            collectedMilkBottles = false;
            collectedSugars = false;
            collectedEggs = false;
        }

        //return home for cake.
        if (cakeReady && x >= millX && x <= millX + c.height * 0.400 && player.y >= c.height - c.height * 0.1) {
            cakeCount += 1;
            cakeReady = false;
            flourSacks = [];
            milkBottles = [];
            sugars = [];
            chickenEggs = [];
            flourSackCount = 0;
            milkBottleCount = 0;
            sugarCount = 0;
            eggCount = 0;
        }

        //create bomb.
        if (bombDrop && bombRateCount == 0 && player.r > 20) {
            let fartSound = Math.random();
            if (fartSound > 0 && fartSound < 0.25) {
                fart1.currentTime = 0;
                fart1.play();
            } else if (fartSound > 0.25 && fartSound < 0.5) {
                fart2.currentTime = 0;
                fart2.play();
            } else if (fartSound > 0.5 && fartSound < 0.75) {
                fart3.currentTime = 0;
                fart3.play();
            } else {
                fart4.currentTime = 0;
                fart4.play();
            }
            player.r -= 1;
            //update progress bar if required.
            if (player.r >= c.height * 0.02) {
                width -= 10;
                elem.style.width = width + "%";
            }
            bombDropGap = true;
            bombs.push(new Bomb(x - c.height * 0.01, player.y, 0, ));
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



        if (explodes.length > 0) {
            forExplode();
        }

        //create bullet.
        if (fire && fireRateCount == 0 && ammoLeft > 0) {
            fireGap = true;
            if (fireRight) {
                bullets.push(new Bullet(x, player.y - player.r - stalkSize, 10, player.velocity.x + c.height * 0.01, "greenyellow"));
                ammoLeft -= 1;
            } else {
                bullets.push(new Bullet(x, player.y - player.r - stalkSize, 10, player.velocity.x + -c.height * 0.01, "greenyellow"));
                ammoLeft -= 1;
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
        }

        //create ammo box.
        let makeAmmo = Math.random();
        if (makeAmmo > 0.9999 && ammoLeft <= 20) {
            ammos.push(new Ammo(Math.random() * c.width, c.height - 45));
        }

        if (ammos.length > 0) {
            forAmmo();
        }


        //create mushroom.
        if (controlLevel > 1) {
            let createMushroom = Math.random();
            if (createMushroom > 0.999) {
                mushrooms.push(new Mushroom((Math.random() * c.width * 2) + c.width, c.height - (mushroomSize + c.height * 0.02)))
                mushrooms.push(new Mushroom(0 - Math.random() * (c.width * 2), c.height - (mushroomSize + c.height * 0.02)))
            }
        }

        if (mushrooms.length > 0) {
            forMushroom();
        }

        //create sheild icon.
        if (!playerSheild && controlLevel > 5 && sheilds.length == 0) {
            let createSheild = Math.random();
            if (createSheild > 0.99999) {
                sheilds.push(new Sheild(Math.random() * (c.height * 6 - c.height * 3), Math.random() * (c.height - c.height * 0.02), c.height * 0.02, 25))
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
        }

        //create flower.
        if (controlLevel > 3) {
            let createFlower = Math.random();
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
        }

        if (milkBottles.length > 0) {
            forMilkBottles();
        }

        if (sugars.length > 0) {
            forSugars();
        }

        if (chickenEggs.length > 0) {
            forEggs();
        }

        //kill all.
        if (controlLevel > 6 && kills.length == 0) {
            let killAll = Math.random();
            if (killAll > 0.99999) {
                kills.push(new Kill(Math.random() * 600 - 300, Math.random() * c.height, 40, 25))
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
        }

        //create wandering mine.
        if (controlLevel > 8) {
            let wm = Math.random();
            if (wm > 0.999) {
                bigBeeBuzz.currentTime = 0;
                bigBeeBuzz.play();
                wanderingMines.push(new WanderingMine(c.width + 100, Math.random() * c.height / 2, 20, { x: -1, y: Math.random() - 0.5 }, 25));
            }
            wm = Math.random();
            if (wm > 0.999) {
                wanderingMines.push(new WanderingMine(-100, Math.random() * c.height / 2, 20, { x: -1, y: Math.random() - 0.5 }, 25));
            }
        }

        if (wanderingMines.length > 0) {
            forWanderingMine();
        }

        //plant mine.
        if (controlLevel > 2) {
            minesToPlant = true;
        }
        if (minesToPlant) {
            let plantMine = Math.random();
            if (plantMine > minePlant) {
                mines.push(new Mine(Math.random() * (c.width * 2) + c.width, c.height - 20, 30, 25));
            }
            plantMine = Math.random();
            if (plantMine > minePlant) {
                mines.push(new Mine(0 - Math.random() * (c.width * 2), c.height - 20, 30, 25));
            }
        }

        if (mines.length > 0) {
            forMine();
        }

        //create bee.
        let enemyFire = Math.random();
        if (enemyFire > skillLevel) {
            beeBuzz.currentTime = 0;
            beeBuzz.play();
            let beeDirection;
            let setDirection = Math.random();
            if (setDirection >= 0.5) {
                beeDirection = false;
            } else {
                beeDirection = true;
            }
            enemies.push(
                new Enemy(Math.random() * (c.width * 3) - c.width, 0, enemyVelocity, enemyVelocity, enemyRadius, beeDirection)
            );
        }

        if (enemies.length > 0) {
            forEnemy();
        }

        if (player.r <= 14) {
            playerAlive = false;
        }

        if (splats.length > 0) {
            forSplat();
        }

        //fire guidedMissile.
        if (controlLevel > 4) {
            let fireMissile = Math.random();
            if (fireMissile > missileFire) {
                misFire.currentTime = 0;
                misFire.play();
                const startPos = Math.random() * c.width;
                const angles = Math.atan2(player.y, x - startPos);
                const velocity = {
                    x: Math.cos(angles) * 5,
                    y: Math.sin(angles) * 5
                };
                guidedMissiles.push(
                    new GuidedMissile(startPos, 0, velocity.x, velocity.y, 50, true)
                );
            }
        }

        if (guidedMissiles.length > 0) {
            forGM();
        }

        if (sparks.length > 0) {
            forSpark();
        }

        //create food.
        let createFood = Math.random();
        if (createFood > foodAmount) {
            food.currentTime = 0;
            food.play();
            foods.push(
                new Food(Math.random() * (c.width * 3) - c.width, -c.height * 0.05, Math.random() - 0.5, Math.random() + 0.1, c.height * 0.02)
            );
        }

        if (foods.length > 0) {
            forFood();
        }

        if (glows.length > 0) {
            forGlow();
        }

        //create levelGain.
        let gainLevel = Math.random();
        if (gainLevel > 0.99999) {
            levelRelease.currentTime = 0;
            levelRelease.play();
            levelGains.push(
                new LevelGain(Math.random() * (c.width * 3) - c.width, -50, Math.random() - 0.5, Math.random() + 0.1, c.height * 0.02)
            );
        }

        if (levelGains.length > 0) {
            forLG();
        }

        //create bonusPoints.
        let bp = Math.random();
        if (bp > 0.9999) {
            bonusRelease.currentTime = 0;
            bonusRelease.play();
            bonusPoints.push(
                new BonusPoints(Math.random() * (c.width * 3) - c.width, -50, Math.random() - 0.5, Math.random() + 0.1, c.height * 0.02)
            );
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
            let name = textName.value;
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
        let str = "OH NO IT'S GAME OVER";
        let width = ctx.measureText(str).width;
        ctx.fillText(str, c.width / 2 - width / 2, c.height / 2);
        ctx.fillStyle = "rgb(0, 0, 0,0.1)";
        ctx.fillRect(0, 0, c.width, c.height);
        let colour = "blue";
        for (i = 0; i < 3; i++) {
            deaths.push(
                new Death(x, player.y, Math.random() * 2, colour, {
                    x: (Math.random() - 0.5) * (Math.random() * 6),
                    y: (Math.random() - 0.5) * (Math.random() * 6)
                })
            );
            if (colour == "white") {
                colour = "red";
            }
            if (colour == "blue") {
                colour = "white";
            }
        }
        deaths.forEach((death, index) => {
            if (death.alpha <= 0.01) {
                deaths.splice(index, 1);
            } else {
                death.update();
            }
        });
    }
}


//adjust canvas on screen resize.
window.addEventListener("resize", function() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    init();
});

window.addEventListener("keydown", (e) => {
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

window.addEventListener("keyup", (e) => {
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

window.addEventListener("mousemove", (e) => {
    if (e.x > c.width / 2) {
        fireRight = true;
    } else {
        fireRight = false;
    }
});

window.addEventListener("mousedown", (e) => {
    info = e.which;
    if (e.which == 1) {
        increaseBounce = true;
        if (e.x < c.width / 2 - c.width * 0.1) {
            moveLeft = true;
        }
        if (e.x > c.width / 2 + c.width * 0.1) {
            moveRight = true;
        }
        if (e.x < c.width / 2) {
            fireRight = false;
        }
        if (e.x > c.width / 2) {
            fireRight = true;
        }
    }
    if (e.y < c.height / 2 - c.height * 0.1) {
        moveUp = true;
    }
    if (e.y > c.height / 2 + c.height * 0.1) {
        moveDown = true;
    }

    if (e.which == 2) {
        bombDrop = true;
    }

    if (e.which == 3) {
        fire = true;
    }
});
window.addEventListener("mouseup", (e) => {
    moveLeft = false;
    moveRight = false;
    increaseBounce = false;
    fire = false;
    moveUp = false;
    moveDown = false;
    bombDrop = false;
});

init();
animate();