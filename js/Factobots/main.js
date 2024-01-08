// Set the canvas element to  variable.
const ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
let playArea = 10000;
let cameraCenter = { x: c.width / 2, y: c.height / 2 }
    //arrays.


//global variables.
let ground, mouseX, mouseY;

let groundX;
let groundY;

let cameraSpeed = 10,
    scale = 1;


let burn = { x: Math.random() * playArea, y: Math.random() * playArea },
    hardOre = { x: Math.random() * playArea, y: Math.random() * playArea },
    ouzeBase = { x: Math.random() * playArea, y: Math.random() * playArea },
    life = { x: Math.random() * playArea, y: Math.random() * playArea };


//booleans
let moveLeft = false,
    moveRight = false,
    moveUp = false,
    moveDown = false,
    moveFaster = false,
    zoom = false,
    resetZoom = false,
    openBuildMenu = false,
    displayOnce = false;




function animate() {
    //CLS.
    ctx.fillStyle = "rgb(0, 0, 0, 0.9)";
    ctx.fillRect(0, 0, c.width, c.height);



    ground.update();

    ctx.font = "bold 30px Arial";
    ctx.fillStyle = "white";





    if (openBuildMenu) {
        buildMenu.style.display = "block";
        buildMenu.style.left = c.width / 4 + "px";
        buildMenu.style.top = c.height / 8 + "px";
        buildMenu.style.width = c.width / 2 + "px";
        buildMenu.style.height = c.height / 1.5 + "px";


        if (!displayOnce) {

            buildMenu.innerText = 'BUILD MENU \n Empty';




            displayOnce = true;

        }

    } else {
        buildMenu.style.display = "none";
        displayOnce = false;
    }






    //call next frame.
    animationId = requestAnimationFrame(animate);
}


window.addEventListener("keydown", (e) => {
    if (e.keyCode == 37 || e.keyCode == 65) {
        moveLeft = true;
    }
    if (e.keyCode == 39 || e.keyCode == 68) {
        moveRight = true;
    }
    if (e.keyCode == 87 || e.keyCode == 38) {
        moveUp = true;
    }
    if (e.keyCode == 83 || e.keyCode == 40) {
        moveDown = true;
    }
    if (e.keyCode == 16) {
        moveFaster = true;
    }
    if (e.keyCode == 66) {
        openBuildMenu = true;
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
        moveUp = false;
    }
    if (e.keyCode == 83 || e.keyCode == 40) {
        moveDown = false;
    }
    if (e.keyCode == 16) {
        moveFaster = false;
    }
    if (e.keyCode == 27) {
        openBuildMenu = false;
    }
});


function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
        scale += c.height / 100000;
        zoom = true;
    } else {
        ctx.reset();
    }
}


function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}

window.addEventListener("wheel", checkScrollDirection);


window.addEventListener("mousemove", function(e) {
    mouseX = e.x;
    mouseY = e.y;
});














initialize();
animate();