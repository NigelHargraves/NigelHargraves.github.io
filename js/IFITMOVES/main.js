// Set the canvas element to  variable.
const ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;

//arrays.
let bullets = [],
    spiders = [];

//variables.
let player, floor, playerAngle, speed;

//booleans.
let moveLeft = false,
    moveRight = false,
    moveForward = false,
    run = false,
    fire = false;


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




//audio to variables.
let walking = document.getElementById("audio1");
let running = document.getElementById("audio2");
let shot = document.getElementById("audio3");


function animate() {

    //CLS.
    ctx.fillStyle = "rgb(0, 100, 0,1)";
    ctx.fillRect(0, 0, c.width, c.height);






    floor.update();







    bullets.forEach((bullet) => {
        bullet.update();
    });

    spiders.forEach((spider) => {
        spider.update();
    });



    player.update();


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