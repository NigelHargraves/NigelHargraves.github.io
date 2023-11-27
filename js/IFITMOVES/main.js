// Set the canvas element to  variable.
const ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;

let floors = [];

let player;

let moveLeft = false,
    moveRight = false,
    moveUp = false,
    moveDown = false;


//backgrounds to variables.
let stoneFloor = new Image();
stoneFloor.src = 'images/IFITMOVES/stoneFloorBackground.png';



function init() {

    floors.push(new Floor(stoneFloor, 0, 0));
    player = new Player(c.width / 2, c.height / 2);

}


function animate() {







    floors.forEach((floor) => {



        floor.update();

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
    if (e.keyCode == 83 || e.keyCode == 40) {
        moveDown = true;
    }
    if (e.keyCode == 87 || e.keyCode == 38) {
        moveUp = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 37 || e.keyCode == 65) {
        moveLeft = false;
        player.velocity.x = 0;
    }
    if (e.keyCode == 39 || e.keyCode == 68) {
        moveRight = false;
        player.velocity.x = 0;
    }
    if (e.keyCode == 83 || e.keyCode == 40) {
        moveDown = false;
        player.velocity.y = 0;
    }
    if (e.keyCode == 87 || e.keyCode == 38) {
        moveUp = false;
        player.velocity.y = 0;
    }
});