// Set the canvas element to  variable.
const ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
let playArea = 3904;
//arrays.
let bullets = [],
    spiders = [],
    spiderSplats = [],
    walls = [],
    spiderPortals = [],
    doors = [],
    keys = [],
    traps = [],
    trapKeys = [],
    binaryKeys = [],
    drones = [];

//Global Variables.
let player, floor, playerAngle, speed, startCount, mx,
    my, backpackItems, switchTimer, materializeNumber, decimalNumber, guessNumber, binaryDoorTimer, health;


let binaryNumber = "",
    numberFromArray = "";


let numberOut = ["0", "0", "0", "0", "0", "0", "0"];

//booleans.
let moveLeft = false,
    moveRight = false,
    moveForward = false,
    run = false,
    fire = false,
    spiderInView = false,
    hitWall = false,
    doorInView = false,
    playerVisible = false,
    gotRedKey = false,
    gotYellowKey = false,
    gotGreenKey = false,
    gotTurquoiseKey = false,
    gotOrangeKey = false,
    gotPinkKey = false,
    displayOnce = false,
    switchDoorOn = true,
    trapInView = false,
    trapKeyCollected = false,
    gotGreenTrapKey1 = false,
    gotGreenTrapKey2 = false,
    gotGreenTrapKey3 = false,
    gotGreenTrapKey4 = false,
    greenTrapKey1Placed = false,
    greenTrapKey2Placed = false,
    greenTrapKey3Placed = false,
    greenTrapKey4Placed = false,
    gotOrangeTrapKey1 = false,
    gotOrangeTrapKey2 = false,
    gotOrangeTrapKey3 = false,
    gotOrangeTrapKey4 = false,
    orangeTrapKey1Placed = false,
    orangeTrapKey2Placed = false,
    orangeTrapKey3Placed = false,
    orangeTrapKey4Placed = false,
    openBackpack = false,
    materialize = false,
    binaryDoorOn = true,
    binaryDoorPlaySoundOpen = true,
    droneInView = false,
    laserFlash = false;

function animate() {
    //CLS.
    ctx.fillStyle = "rgb(0, 100, 0)";
    ctx.fillRect(0, 0, c.width, c.height);

    floor.update();

    forTrap();

    doors.forEach((door) => {
        door.update();
    });

    forSplats();

    forBinaryKey();

    forKey();

    forTrapKey();

    forWall();

    forBullet();

    //create spider.
    let createSpider = Math.random();
    if (createSpider > 0.997 && portalBuzz.paused) {
        let x = 200 + Math.random() * ((c.height * 4) - 400);
        let y = 200 + Math.random() * ((c.height * 4) - 400);
        let wallNumber = 1;
        walls.forEach((wall) => {
            //only open portal when portal does not intersect a wall.
            let hit = collisionDetection(x + floor.x, y + floor.y, 200, 200, wall.x + floor.x, wall.y + floor.y, wall.width / 2, wall.height / 2);
            if (hit) {
                return;
            }
            if (wallNumber == walls.length) {
                let playSound = collisionDetection(x, y, 40, 40, player.x - floor.x, player.y - floor.y, c.width / 2, c.height / 2);
                if (playSound) {
                    portalBuzz.play();
                }
                spiderPortals.push(new SpiderPortal(x, y));
            }
            wallNumber += 1;
        });
    }

    spiderPortals.forEach((portal, index) => {
        if (portal.r < 2) {
            spiderPortals.splice(index, 1);
        }
        portal.update();
    });

    forSpider();

    player.update();


    forDoor();

    forDrone();

    if (startCount < 100) {
        startCount += 1;
    }

    //delay show player.
    if (startCount == 100) {
        let taper = 1;
        for (let i = 1; i >= 0.1; i -= 0.1) {
            ctx.globalAlpha = i;
            ctx.beginPath();
            ctx.arc(player.x, player.y, 20 + (20 * taper), 0, Math.PI * 2);
            ctx.fillStyle = "white";
            ctx.fill();
            taper += 0.1;
        }
        ctx.globalAlpha = 1;
        teleport.play();
        playerVisible = true;
        startCount += 1;
    }

    //show backpack contents.
    if (mx <= 70 && my <= 70 || openBackpack) {
        backpackContents.style.display = "block";
        backpackContents.style.left = "70px";
        backpackContents.style.top = "70px";
        if (!displayOnce) {
            if (backpackItems == 0) {
                backpackContents.innerText = 'BACKPACK CONTENTS \n Empty';
            }
            let backpackText = "BACKPACK CONTENTS\n";
            if (backpackItems >= 1) {
                backpackContents.innerText = backpackText;
                if (gotRedKey) {
                    backpackContents.appendChild(redKeyBackpack);
                }
                if (gotYellowKey) {
                    backpackContents.appendChild(yellowKeyBackpack);
                }
                if (gotGreenKey) {
                    backpackContents.appendChild(greenKeyBackpack);
                }
                if (gotTurquoiseKey) {
                    backpackContents.appendChild(turquoiseKeyBackpack);
                }
                if (gotOrangeKey) {
                    backpackContents.appendChild(orangeKeyBackpack);
                }
                if (gotPinkKey) {
                    backpackContents.appendChild(pinkKeyBackpack);
                }
                backpackContents.appendChild(newLineKeys);
                if (gotGreenTrapKey1) {
                    backpackContents.appendChild(greenTrapKey1Backpack);
                }
                if (gotGreenTrapKey2) {
                    backpackContents.appendChild(greenTrapKey2Backpack);
                }
                if (gotGreenTrapKey3) {
                    backpackContents.appendChild(greenTrapKey3Backpack);
                }
                if (gotGreenTrapKey4) {
                    backpackContents.appendChild(greenTrapKey4Backpack);
                }
                if (gotOrangeTrapKey1) {
                    backpackContents.appendChild(orangeTrapKey1Backpack);
                }
                if (gotOrangeTrapKey2) {
                    backpackContents.appendChild(orangeTrapKey2Backpack);
                }
                if (gotOrangeTrapKey3) {
                    backpackContents.appendChild(orangeTrapKey3Backpack);
                }
                if (gotOrangeTrapKey4) {
                    backpackContents.appendChild(orangeTrapKey4Backpack);
                }
                backpackContents.appendChild(newLineTrapKeys);
            }
            displayOnce = true;
            let size = 100;
            if (backpackItems <= 1) {
                backpackContents.style.height = size + "px";
            }
            if (trapKeyCollected) {
                size += 40;
                backpackContents.style.height = size + "px";
            }
        }
    } else {
        backpackContents.style.display = "none";
        displayOnce = false;
    }

    //hud.
    ctx.drawImage(backpack, 0, 0, 70, 70);
    ctx.font = "bold 30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Spiders Alive = " + spiders.length, (c.width / 2) - 200, 40);
    if (health > 50) {
        ctx.fillText("❤️️: ", (c.width / 2) + 200, 40);
    } else if (health > 0 && health < 50) {
        ctx.fillText("💔: ", (c.width / 2) + 200, 40);
    } else if (health <= 0) {
        ctx.fillText("💀️: ", (c.width / 2) + 200, 40);
        cancelAnimationFrame(animationID);
    }
    ctx.fillStyle = "red";
    ctx.fillRect((c.width / 2) + 260, 20, health, 25);


    /*
        ctx.fillText("height = " + c.height, (c.width / 2) - 200, 80); //976
        ctx.fillText("width = " + c.width, (c.width / 2) - 200, 120); //1872
    */

    //call next frame.
    animationId = requestAnimationFrame(animate);

}

init();
animate();




window.addEventListener("keydown", (e) => {
    if (e.keyCode == 37 || e.keyCode == 65) {
        moveLeft = true;
    }
    if (e.keyCode == 39 || e.keyCode == 68) {
        moveRight = true;
    }
    if (e.keyCode == 87 || e.keyCode == 38) {
        moveForward = true;
    }
    if (e.keyCode == 16) {
        run = true;
    }
    if (e.keyCode == 66) {
        openBackpack = true;
    }
    if (e.keyCode == 32 && !fire && player.fire == 10) {
        fire = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 37 || e.keyCode == 65) {
        moveLeft = false;
    }
    if (e.keyCode == 39 || e.keyCode == 68) {
        moveRight = false;
    }
    if (e.keyCode == 87 || e.keyCode == 38) {
        moveForward = false;
    }
    if (e.keyCode == 16) {
        run = false;
    }
    if (e.keyCode == 66) {
        openBackpack = false;
    }
});


window.addEventListener("mousemove", function(e) {
    mx = e.x;
    my = e.y;
});