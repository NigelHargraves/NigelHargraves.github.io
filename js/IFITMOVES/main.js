// Set the canvas element to  variable.
const ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;

//arrays.
let floors = [],
    bullets = [];

//variables.
let player, playerAngle, speed;

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

//audio to variables.
let walking = document.getElementById("audio1");
let running = document.getElementById("audio2");
let shot = document.getElementById("audio3");


function animate() {

    //CLS.
    ctx.fillStyle = "rgb(0, 100, 0,1)";
    ctx.fillRect(0, 0, c.width, c.height);





    floors.forEach((floor) => {
        floor.update();
    });

    bullets.forEach((bullet) => {
        bullet.update();
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