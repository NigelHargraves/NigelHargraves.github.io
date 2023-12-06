// Set the canvas element to  variable.
const ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;

//arrays.
let bullets = [],
    spiders = [],
    spiderSplats = [],
    walls = [],
    spiderPortals = [],
    doors = [];

//variables.
let player, floor, playerAngle, speed;

//booleans.
let moveLeft = false,
    moveRight = false,
    moveForward = false,
    run = false,
    fire = false,
    spiderInView = false,
    hitWall = false,
    doorInView = false;












//backgrounds to variables.
let stoneFloor = new Image();
stoneFloor.src = 'images/IFITMOVES/stoneFloorBackground.png';
let playerImage = new Image();
playerImage.src = 'images/IFITMOVES/sprite_sheet_man_shooting.png';
let spiderWalk0 = new Image();
spiderWalk0.src = 'images/IFITMOVES/spiderWalk/Walk_Body_0.png';
let spiderWalk30 = new Image();
spiderWalk30.src = 'images/IFITMOVES/spiderWalk/Walk_Body_030.png';
let spiderWalk45 = new Image();
spiderWalk45.src = 'images/IFITMOVES/spiderWalk/Walk_Body_045.png';
let spiderWalk60 = new Image();
spiderWalk60.src = 'images/IFITMOVES/spiderWalk/Walk_Body_060.png';
let spiderWalk90 = new Image();
spiderWalk90.src = 'images/IFITMOVES/spiderWalk/Walk_Body_090.png';
let spiderWalk120 = new Image();
spiderWalk120.src = 'images/IFITMOVES/spiderWalk/Walk_Body_120.png';
let spiderWalk135 = new Image();
spiderWalk135.src = 'images/IFITMOVES/spiderWalk/Walk_Body_135.png';
let spiderWalk150 = new Image();
spiderWalk150.src = 'images/IFITMOVES/spiderWalk/Walk_Body_150.png';
let spiderWalk180 = new Image();
spiderWalk180.src = 'images/IFITMOVES/spiderWalk/Walk_Body_180.png';
let spiderWalk210 = new Image();
spiderWalk210.src = 'images/IFITMOVES/spiderWalk/Walk_Body_210.png';
let spiderWalk225 = new Image();
spiderWalk225.src = 'images/IFITMOVES/spiderWalk/Walk_Body_225.png';
let spiderWalk240 = new Image();
spiderWalk240.src = 'images/IFITMOVES/spiderWalk/Walk_Body_240.png';
let spiderWalk270 = new Image();
spiderWalk270.src = 'images/IFITMOVES/spiderWalk/Walk_Body_270.png';
let spiderWalk300 = new Image();
spiderWalk300.src = 'images/IFITMOVES/spiderWalk/Walk_Body_300.png';
let spiderWalk315 = new Image();
spiderWalk315.src = 'images/IFITMOVES/spiderWalk/Walk_Body_315.png';
let spiderWalk330 = new Image();
spiderWalk330.src = 'images/IFITMOVES/spiderWalk/Walk_Body_330.png';
let spiderWalkShadow0 = new Image();
spiderWalkShadow0.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_0.png';
let spiderWalkShadow30 = new Image();
spiderWalkShadow30.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_030.png';
let spiderWalkShadow45 = new Image();
spiderWalkShadow45.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_045.png';
let spiderWalkShadow60 = new Image();
spiderWalkShadow60.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_060.png';
let spiderWalkShadow90 = new Image();
spiderWalkShadow90.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_090.png';
let spiderWalkShadow120 = new Image();
spiderWalkShadow120.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_120.png';
let spiderWalkShadow135 = new Image();
spiderWalkShadow135.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_135.png';
let spiderWalkShadow150 = new Image();
spiderWalkShadow150.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_150.png';
let spiderWalkShadow180 = new Image();
spiderWalkShadow180.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_180.png';
let spiderWalkShadow210 = new Image();
spiderWalkShadow210.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_210.png';
let spiderWalkShadow225 = new Image();
spiderWalkShadow225.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_225.png';
let spiderWalkShadow240 = new Image();
spiderWalkShadow240.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_240.png';
let spiderWalkShadow270 = new Image();
spiderWalkShadow270.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_270.png';
let spiderWalkShadow300 = new Image();
spiderWalkShadow300.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_300.png';
let spiderWalkShadow315 = new Image();
spiderWalkShadow315.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_315.png';
let spiderWalkShadow330 = new Image();
spiderWalkShadow330.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_330.png';



let Nervous0 = new Image();
Nervous0.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_0.png';
let Nervous30 = new Image();
Nervous30.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_030.png';
let Nervous45 = new Image();
Nervous45.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_045.png';
let Nervous60 = new Image();
Nervous60.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_060.png';
let Nervous90 = new Image();
Nervous90.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_090.png';
let Nervous120 = new Image();
Nervous120.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_120.png';
let Nervous135 = new Image();
Nervous135.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_135.png';
let Nervous150 = new Image();
Nervous150.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_150.png';
let Nervous180 = new Image();
Nervous180.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_180.png';
let Nervous210 = new Image();
Nervous210.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_210.png';
let Nervous225 = new Image();
Nervous225.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_225.png';
let Nervous240 = new Image();
Nervous240.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_240.png';
let Nervous270 = new Image();
Nervous270.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_270.png';
let Nervous300 = new Image();
Nervous300.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_300.png';
let Nervous315 = new Image();
Nervous315.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_315.png';
let Nervous330 = new Image();
Nervous330.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_330.png';


let NervousShadow0 = new Image();
NervousShadow0.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_0.png';
let NervousShadow30 = new Image();
NervousShadow30.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_030.png';
let NervousShadow45 = new Image();
NervousShadow45.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_045.png';
let NervousShadow60 = new Image();
NervousShadow60.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_060.png';
let NervousShadow90 = new Image();
NervousShadow90.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_090.png';
let NervousShadow120 = new Image();
NervousShadow120.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_120.png';
let NervousShadow135 = new Image();
NervousShadow135.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_135.png';
let NervousShadow150 = new Image();
NervousShadow150.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_150.png';
let NervousShadow180 = new Image();
NervousShadow180.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_180.png';
let NervousShadow210 = new Image();
NervousShadow210.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_210.png';
let NervousShadow225 = new Image();
NervousShadow225.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_225.png';
let NervousShadow240 = new Image();
NervousShadow240.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_240.png';
let NervousShadow270 = new Image();
NervousShadow270.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_270.png';
let NervousShadow300 = new Image();
NervousShadow300.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_300.png';
let NervousShadow315 = new Image();
NervousShadow315.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_315.png';
let NervousShadow330 = new Image();
NervousShadow330.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_330.png';









let splat = new Image();
splat.src = 'images/IFITMOVES/spiderWalk/spiderSplat.png';
let spiderDead = new Image();
spiderDead.src = 'images/IFITMOVES/spiderWalk/spiderDead.png';
let spiderDeadShadow = new Image();
spiderDeadShadow.src = 'images/IFITMOVES/spiderWalk/spiderDeadShadow.png';
let playerShadow = new Image();
playerShadow.src = 'images/IFITMOVES/playerShadow.png';
let stoneWall = new Image();
stoneWall.src = 'images/IFITMOVES/wall.png';
let telepad = new Image();
telepad.src = 'images/IFITMOVES/telepad.png';
let keyHoleRed = new Image();
keyHoleRed.src = 'images/IFITMOVES/keyHoleRed.png';
let keyHoleYellow = new Image();
keyHoleYellow.src = 'images/IFITMOVES/keyHoleYellow.png';
let keyHoleGreen = new Image();
keyHoleGreen.src = 'images/IFITMOVES/keyHoleGreen.png';
let keyHoleBlue = new Image();
keyHoleBlue.src = 'images/IFITMOVES/keyHoleBlue.png';
let keyHoleBlack = new Image();
keyHoleBlack.src = 'images/IFITMOVES/keyHoleBlack.png';

//audio to variables.
let walking = document.getElementById("audio1");
let running = document.getElementById("audio2");
let shot = document.getElementById("audio3");
let spiderWalking = document.getElementById("audio4");
let splated = document.getElementById("audio5");
let rotateStep = document.getElementById("audio6");
let portalOpen = document.getElementById("audio7");
let portalBuzz = document.getElementById("audio8");
let teleport = document.getElementById("audio9");
let doorBuzz = document.getElementById("audio10");

function animate() {

    //CLS.
    ctx.fillStyle = "rgb(0, 100, 0,1)";
    ctx.fillRect(0, 0, c.width, c.height);






    floor.update();








    if (bullets.length > 0) {
        forBullet();
    }








    spiderSplats.forEach((splat, index) => {
        if (splat.opacity <= 0.1) {
            spiderSplats.splice(index, 1)
        }
        splat.update();
    });

    //create spider.
    let createSpider = Math.random();
    if (createSpider > 0.999 && portalBuzz.paused) {

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
                portalBuzz.play();
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

    let spiderCount = 0;
    spiders.forEach((spider) => {
        if (spider.x < ((player.x - floor.x) + c.width / 2) && spider.x > ((player.x - floor.x) - c.width / 2) &&
            spider.y < ((player.y - floor.y) + c.height / 2) && spider.y > ((player.y - floor.y) - c.height / 2) && !spiderInView) {
            spiderInView = true;
            return;
        } else {
            spiderCount += 1;
        }
        if (spiderCount == spiders.length) {
            spiderInView = false;
        }
    });



    spiders.forEach((spider) => {
        spider.update();
    });


    if (spiderInView) {
        spiderWalking.play();
    } else {
        spiderInView.currentTime = 0;
        spiderWalking.pause();
    }

    if (doorInView) {
        doorBuzz.play();
    } else {
        doorBuzz.currentTime = 0;
        doorBuzz.pause();
    }


    forWall();






    walls.forEach((wall) => {
        wall.update();
    });

    //cut door sound if none in view.
    let doorCount = 0;
    doors.forEach((door) => {
        if (door.x - 10 < ((player.x - floor.x) + c.width / 2) && door.x + 10 > ((player.x - floor.x) - c.width / 2) &&
            door.y - 100 < ((player.y - floor.y) + c.height / 2) && door.y + 100 > ((player.y - floor.y) - c.height / 2) && door.on) {
            doorInView = true;
            return;
        } else {
            doorCount += 1;
        }
        if (doorCount == doors.length) {
            doorInView = false;
        }
    });




    doors.forEach((door) => {
        door.update();
    });



    player.update();
    forDoor();
    ctx.font = "bold 40px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Spiders Alive = " + spiders.length, (c.width / 2) - 200, 40);


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

});