// Set the canvas elements to  var.
const ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
const ctx2 = c2.getContext("2d");
c2.width = window.innerWidth;

//backgrounds to var.
let background1 = new Image();
background1.src = 'images/forest.jpg';
let background2 = new Image();
background2.src = 'images/grass1.jpg';


//arrays to var.
let enemies = [];
let foods = [];
let bonusPoints = [];
let texts = [];
let guidedMissiles = [];
let deaths = [];
let levelGains = [];
let layers = [];
let glows = [];
let splats = [];
let mines = [];
let wanderingMines = [];
let projectiles = [];
let kills = [];
let flowers = [];
let sheilds = [];


//audio to var.animationId
let bounce = document.getElementById("audio1");
let levelUp = document.getElementById("audio2");
let hit = document.getElementById("audio3");
let food = document.getElementById("audio4");
let eatFood = document.getElementById("audio5");
let misFire = document.getElementById("audio6");
let bombDrop = document.getElementById("audio7");
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

let KP = {}; //Keyspressed array.
//elements to vars.
let elem = document.getElementById("myBar");
let button = document.getElementById("button");
let textName = document.getElementById("display");

//vars.
let gravity = 0.03,
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
    sheildTime = 30;



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
    playerSheild = false;

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

    layers.forEach((layer, index) => {
        layer.update();
    });

    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Control LV: " + controlLevel, 0, 20);
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

        player.update();
        //blink eyes.
        let blink = Math.random();
        if (blink > 0.998 && countBlink == 100) {
            eyesBlink = true;
        }

        //create sheild icon.
        if (!playerSheild && controlLevel > 5) {
            let createSheild = Math.random();
            if (createSheild > 0.991) {
                sheilds.push(new Sheild(Math.random() * 6000 - 3000, Math.random() * c.height, 8, 25))
            }
        }

        sheilds.forEach((sheild, index) => {
            if (
                sheild.x - sheild.r < x + player.r &&
                sheild.x + sheild.r > x - player.r &&
                sheild.y - sheild.r < player.y + player.r &&
                sheild.y + sheild.r > player.y - player.r
            ) {
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
        }



        //create flower.
        if (controlLevel > 5) {
            let createFlower = Math.random();
            if (createFlower > 0.999) {
                flowers.push(new Flower(c.width + 100 + (Math.random() * c.width), c.height - 200, 20, 25));
            }

            createFlower = Math.random();
            if (createFlower > 0.999) {
                flowers.push(new Flower(-100 - (Math.random() * c.width), c.height - 200, 20, 25));
            }
        }

        flowers.forEach((flower, index) => {
            if (
                flower.x - (flower.r * 10) < x + player.r &&
                flower.x + (flower.r * 10) > x - player.r &&
                flower.y - (flower.r * 10) < player.y + player.r &&
                flower.y + (flower.r * 10) > player.y - player.r
            ) {
                flowerFire.currentTime = 0;
                flowerFire.play();
                const startPos = flower.x;
                const angles = Math.atan2(player.y - flower.y, x - startPos);
                const velocity = {
                    x: Math.cos(angles) * 5,
                    y: Math.sin(angles) * 5
                };
                guidedMissiles.push(
                    new GuidedMissile(startPos, flower.y, velocity.x, velocity.y, 4, false)
                );
                flowers.splice(index, 1);
            }
            if (flower.countdown <= 0) {
                if (flower.x > 0 - flower.r && flower.x < c.width + flower.r) {
                    mineExplode.currentTime = 0;
                    mineExplode.play();
                    for (let i = 0; i < 10; i++) {
                        projectiles.push(new Projectile(flower.x, flower.y, 2, { x: (Math.random() - 0.5) * 20, y: (Math.random() - 0.5) * 20 }, 25));
                    }
                }
                flowers.splice(index, 1);
            }
            flower.update();
        });

        //kill all.
        if (controlLevel > 5) {
            let killAll = Math.random();
            if (killAll > 0.9991) {
                kills.push(new Kill(Math.random() * 6000 - 3000, Math.random() * c.height, 8, 25))
            }

            kills.forEach((kill, index) => {
                if (
                    kill.x - kill.r < x + player.r &&
                    kill.x + kill.r > x - player.r &&
                    kill.y - kill.r < player.y + player.r &&
                    kill.y + kill.r > player.y - player.r
                ) {
                    kills = [];
                    killEverything.currentTime = 0;
                    killEverything.play();

                    enemies.forEach((enemy, index) => {
                        ctx.beginPath();
                        ctx.moveTo(x, player.y);
                        ctx.lineTo(enemy.x, enemy.y);
                        ctx.strokeStyle = "white";
                        ctx.stroke();
                    });

                    mines.forEach((mine, index) => {
                        ctx.beginPath();
                        ctx.moveTo(x, player.y);
                        ctx.lineTo(mine.x, mine.y);
                        ctx.strokeStyle = "white";
                        ctx.stroke();
                    });

                    wanderingMines.forEach((wm, index) => {
                        ctx.beginPath();
                        ctx.moveTo(x, player.y);
                        ctx.lineTo(wm.x, wm.y);
                        ctx.strokeStyle = "white";
                        ctx.stroke();
                    });

                    flowers.forEach((flower, index) => {
                        ctx.beginPath();
                        ctx.moveTo(x, player.y);
                        ctx.lineTo(flower.x, flower.y);
                        ctx.strokeStyle = "white";
                        ctx.stroke();
                    });

                    guidedMissiles.forEach((gm, index) => {
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
        }

        //create wandering mine.
        if (controlLevel > 6) {
            let wm = Math.random();
            if (wm > 0.999) {
                wanderingMines.push(new WanderingMine(c.width + 100, Math.random() * c.height, 10, { x: -1, y: Math.random() - 0.5 }, 25));
            }

            wm = Math.random();
            if (wm > 0.999) {
                wanderingMines.push(new WanderingMine(-100, Math.random() * c.height, 10, { x: -1, y: Math.random() - 0.5 }, 25));
            }
        }

        wanderingMines.forEach((wmine, index) => {
            if (
                wmine.x - (wmine.r * 10) < x + player.r &&
                wmine.x + (wmine.r * 10) > x - player.r &&
                wmine.y - (wmine.r * 10) < player.y + player.r &&
                wmine.y + (wmine.r * 10) > player.y - player.r
            ) {
                if (wmine.x > 0 - wmine.r && wmine.x < c.width + wmine.r) {
                    mineExplode.currentTime = 0;
                    mineExplode.play();
                    for (let i = 0; i < 20; i++) {
                        projectiles.push(new Projectile(wmine.x, wmine.y, 2, { x: (Math.random() - 0.5) * 20, y: (Math.random() - 0.5) * 20 }, 25));
                    }
                }
                wanderingMines.splice(index, 1);
            }
            if (wmine.countdown <= 0) {
                wanderingMines.splice(index, 1);
            }

            wmine.update();
        });



        //plant mine.
        if (controlLevel > 3) {
            minesToPlant = true;
        }

        if (minesToPlant) {
            let plantMine = Math.random();
            if (plantMine > minePlant) {
                mines.push(new Mine(Math.random() * 3000 + c.width, c.height, 30, 25));
            }

            plantMine = Math.random();
            if (plantMine > minePlant) {
                mines.push(new Mine(Math.random() * -3000, c.height, 30, 25));
            }



        }
        mines.forEach((mine, index) => {
            //player hits mine.
            if (
                x + player.r > mine.x - mine.r &&
                x - player.r < mine.x + mine.r &&
                player.y + player.r > mine.y - mine.r &&
                player.y - player.r < mine.y + mine.r
            ) {
                if (!playerSheild) {
                    playerAlive = false;
                } else {
                    sheildHit.currentTime = 0;
                    sheildHit.play();
                    let points = Math.trunc(mine.x / 10 + (c.height - mine.y) / 10);
                    score += points;
                    if (player.y > c.height / 2) {
                        texts.push(
                            new Text(x, player.y, 0, -1, points, "bold 20px Arial", "yellow", 1)
                        );
                    } else {
                        texts.push(
                            new Text(x, player.y, 0, 1, points, "bold 20px Arial", "yellow", 1)
                        );
                    }
                }
                mines.splice(index, 1);
            }
            //countdown = 0
            if (mine.countdown <= 0) {
                if (mine.x > 0 - mine.r && mine.x < c.width + mine.r) {
                    mineExplode.currentTime = 0;
                    mineExplode.play();
                    for (let i = 0; i < 10; i++) {
                        projectiles.push(new Projectile(mine.x, mine.y, 2, { x: (Math.random() - 0.5) * 20, y: (Math.random() - 0.5) * 20 }, 25, "white"));
                    }
                }
                for (i = 0; i < 30; i++) {
                    deaths.push(
                        new Death(mine.x, mine.y - 30, Math.random() * 2, "red", {
                            x: (Math.random() - 0.5) * 8,
                            y: (Math.random() - 0.5) * 8
                        })
                    );
                }

                mines.splice(index, 1);
            }
            mine.update();
        });



        //fire enemy.
        let enemyFire = Math.random();
        if (enemyFire > skillLevel) {
            bombDrop.currentTime = 0;
            bombDrop.play();
            enemies.push(
                new Enemy(Math.random() * c.width, -20, 0, enemyVelocity, enemyRadius)
            );
        }

        enemies.forEach((enemy, index) => {
            //bullet hits player.
            if (
                enemy.x - enemy.r < x + player.r &&
                enemy.x + enemy.r > x - player.r &&
                enemy.y - enemy.r < player.y + player.r &&
                enemy.y + enemy.r > player.y - player.r
            ) {
                if (!playerSheild) {
                    hit.currentTime = 0;
                    hit.play();
                    //reduce player size/reset variables.
                    if (player.r > 20) {
                        player.r = 20;
                    } else {
                        player.r -= 2;
                    }

                } else {


                    let points = Math.trunc(enemy.x / 10 + (c.height - enemy.y) / 10);
                    score += points;
                    if (player.y > c.height / 2) {
                        texts.push(
                            new Text(x, player.y, 0, -1, points, "bold 20px Arial", "yellow", 1)
                        );
                    } else {
                        texts.push(
                            new Text(x, player.y, 0, 1, points, "bold 20px Arial", "yellow", 1)
                        );
                    }
                }
                reset();
                enemies.splice(index, 1);

            }
            if (player.r <= 14) {
                playerAlive = false;
            }

            //enemy falls off screen.
            if (enemy.y > c.height) enemies.splice(index, 1);
            enemy.update();
        });

        splats.forEach((splat, index) => {
            splat.update();
            if (splat.ang > 0) {
                splats.splice(index, 1);
            }
        });


        //fire guidedMissile.
        if (controlLevel > 4 || score > 50000) {
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
                    new GuidedMissile(startPos, 0, velocity.x, velocity.y, 4, true)
                );
            }
        }

        guidedMissiles.forEach((gm, index) => {
            //guidedmissile hits player.
            if (
                gm.x - (gm.r + 40) < x + player.r &&
                gm.x + (gm.r + 40) > x - player.r &&
                gm.y - (gm.r + 40) < player.y + player.r &&
                gm.y + (gm.r + 40) > player.y - player.r
            ) {
                mineExplode.currentTime = 0;
                mineExplode.play();
                for (let i = 0; i < 10; i++) {
                    projectiles.push(new Projectile(gm.x, gm.y, 2, { x: (Math.random() - 0.5) * 20, y: (Math.random() - 0.5) * 20 }, 25, "white"));
                }
                guidedMissiles.splice(index, 1);
            }
            if (player.r <= 14) {
                playerAlive = false;
            }

            //countdown = 0 and missile still on screen.
            if (gm.countdown <= 0) {
                mineExplode.currentTime = 0;
                mineExplode.play();
                for (let i = 0; i < 10; i++) {
                    projectiles.push(new Projectile(gm.x, gm.y, 2, { x: (Math.random() - 0.5) * 20, y: (Math.random() - 0.5) * 20 }, 25, "yellow"));
                }
                guidedMissiles.splice(index, 1);
            }

            //guidedmissile falls off screen.
            if (gm.y > c.height || gm.countdown <= 0) {
                guidedMissiles.splice(index, 1);
            }
            gm.update();
        });

        //create food.
        let createFood = Math.random();
        if (createFood > foodAmount) {
            food.currentTime = 0;
            food.play();
            foods.push(
                new Food(c.width, Math.random() * (c.height - 40) + 20, -foodVelocity, 0, 4)
            );
        }

        //player eats food.
        foods.forEach((food, index) => {
            if (
                food.x - food.r < x + player.r &&
                food.x + food.r > x - player.r &&
                food.y - food.r < player.y + player.r &&
                food.y + food.r > player.y - player.r
            ) {
                eatFood.currentTime = 0;
                eatFood.play();
                //add to progress bar if size is greater than 20.
                if (player.r >= 20) {
                    width += 10;
                    elem.style.width = width + "%";
                    fadeText = true;
                    bppos.x = food.x;
                    bppos.y = food.y;
                    let points = Math.trunc(food.x / 10 + (c.height - food.y) / 10);
                    score += points;
                    if (player.y > c.height / 2) {
                        texts.push(
                            new Text(x, player.y, 0, -1, points, "bold 20px Arial", "yellow", 1)
                        );
                    } else {
                        texts.push(
                            new Text(x, player.y, 0, 1, points, "bold 20px Arial", "yellow", 1)
                        );
                    }

                }
                //increase player size/add to score.

                player.r += 1;
                glows.push(new Glow(x, player.y, player.r, 1.1));
                foods.splice(index, 1);
                //player gets next level of control + bonus score/update variables.
                if (player.r == 30) {
                    levelJump();
                }
            }

            //food goes far left.
            if (food.x < -3000) foods.splice(index, 1);
            food.update();
        });

        glows.forEach((glow, index) => {
            if (glow.alpha < 0.2) {
                glows.splice(index, 1);
            }
            glow.update();
        });

        //create levelGain.
        let gainLevel = Math.random();
        if (gainLevel > 0.9999) {
            levelRelease.currentTime = 0;
            levelRelease.play();
            levelGains.push(
                new LevelGain(c.width, (Math.random() * c.height) / 2, -1, 0, 8)
            );
        }

        levelGains.forEach((LG, index) => {
            //player gains level.
            if (
                LG.x - LG.r < x + player.r &&
                LG.x + LG.r > x - player.r &&
                LG.y - LG.r < player.y + player.r &&
                LG.y + LG.r > player.y - player.r
            ) {
                //player gets next level of control + bonus score/update variables.
                if (player.y > c.height / 2) {
                    texts.push(new Text(x, player.y, 0, -1, "L+", "bold 25px Arial", "yellow", 1));
                } else {
                    texts.push(new Text(x, player.y, 0, 1, "L+", "bold 25px Arial", "yellow", 1));
                }

                levelGains.splice(index, 1);
                levelJump();
            }

            //levelGain goes off screen.
            if (LG.x < -3000) levelGains.splice(index, 1);
            LG.update();
        });

        //create bonusPoints.
        let bp = Math.random();
        if (bp > 0.9999) {
            bonusRelease.currentTime = 0;
            bonusRelease.play();
            bonusPoints.push(new BonusPoints(Math.random() * c.width, 0, 0, 1, 8));
        }

        bonusPoints.forEach((bonusPoint, index) => {
            //player gets bonusPoints.
            if (
                bonusPoint.x - bonusPoint.r < x + player.r &&
                bonusPoint.x + bonusPoint.r > x - player.r &&
                bonusPoint.y - bonusPoint.r < player.y + player.r &&
                bonusPoint.y + bonusPoint.r > player.y - player.r
            ) {
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
            }
            //bonusPoints goes far left.
            if (bonusPoint.y > c.height) bonusPoints.splice(index, 1);
            bonusPoint.update();
        });

        texts.forEach((text, index) => {
            if (text.opacity < 0.1) {
                texts.splice(index, 1);
            } else {
                text.opacity -= 0.002;
            }

            text.update();
        });


        projectiles.forEach((pro, index) => {
            if (
                pro.x - pro.r < x + player.r &&
                pro.x + pro.r > x - player.r &&
                pro.y - pro.r < player.y + player.r &&
                pro.y + pro.r > player.y - player.r
            ) {
                if (!playerSheild) {
                    hit.currentTime = 0;
                    hit.play();
                    //reduce player size/reset variables.
                    if (player.r > 20) {
                        player.r = 20;
                    } else {
                        player.r -= 2;
                    }
                    splats.push(new Splat(x, player.y, x1, y1, ang, player.r));
                } else {
                    let points = Math.trunc(pro.x / 10 + (c.height - pro.y) / 10);
                    score += points;
                    if (player.y > c.height / 2) {
                        texts.push(
                            new Text(x, player.y, 0, -1, points, "bold 20px Arial", "yellow", 1)
                        );
                    } else {
                        texts.push(
                            new Text(x, player.y, 0, 1, points, "bold 20px Arial", "yellow", 1)
                        );
                    }
                }
                reset();
                projectiles.splice(index, 1);

            }
            if (player.r <= 14) {
                playerAlive = false;
            }
            if (this.countdown <= 0) {
                projectiles.splice(index, 1);
            }
            pro.update();
        });








    } else {




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

onkeydown = onkeyup = function(e) {
    e = e || event; // to deal with IE
    KP[e.keyCode] = e.type == "keydown";
    /* insert conditional here */
    if (KP[37] || KP[65]) {
        moveLeft = true;
    } else if (KP[39] || KP[68]) {
        moveRight = true;
    } else if (KP[87] || (KP[38] && controlLevel != 1)) {
        moveUp = true;
    } else if (KP[83] || (KP[40] && controlLevel != 1)) {
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
};

//adjust canvas on screen resize.
window.addEventListener("resize", function() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    init();
});

init();
animate();