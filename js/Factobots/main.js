// Set the canvas element to  variable.
const ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
let pointerStyle = document.getElementById("c");
let playArea = 10000;
let cameraCenter = { x: c.width / 2, y: c.height / 2 },
    mouse = { x: 0, y: 0 };








//arrays.


//global variables.
let ground;

let groundX;
let groundY;

let cameraSpeed = 10,
    scale = 1,
    mineAngle = 0,
    inventryItems = 50,
    burniumOreAmount = 0,
    hardiumOreAmount = 0,
    hardiumBilletAmount = 50;


let burn = { x: Math.random() * playArea, y: Math.random() * playArea, resourceSize: c.height * 0.050 },
    hardOre = { x: Math.random() * playArea, y: Math.random() * playArea, resourceSize: c.height * 0.050 },
    ouzeBase = { x: Math.random() * playArea, y: Math.random() * playArea, resourceSize: c.height * 0.050 },
    life = { x: Math.random() * playArea, y: Math.random() * playArea, resourceSize: c.height * 0.050 };


//booleans
let moveLeft = false,
    moveRight = false,
    moveUp = false,
    moveDown = false,
    moveFaster = false,
    zoom = false,
    resetZoom = false,
    openBuildMenu = false,
    openInventMenu = false,
    displayBuildOnce = false,
    displayInventOnce = false,
    startHandMine = false,
    swingDown = false;




function animate() {
    //CLS.
    ctx.fillStyle = "rgb(0, 0, 0, 0.9)";
    ctx.fillRect(0, 0, c.width, c.height);



    ground.update();

    ctx.font = "bold 30px Arial";
    ctx.fillStyle = "white";
    /*
    ctx.fillText("Burnium.x = " + burn.x, (c.width / 2), c.height * 0.040);
    ctx.fillText("Burnium.y = " + burn.y, (c.width / 2), c.height * 0.080);
    ctx.fillText("mouse.x = " + ((ground.x * -1) + mouse.x), (c.width / 2), c.height * 0.120);
    ctx.fillText("mouse.y = " + ((ground.y * -1) + mouse.y), (c.width / 2), c.height * 0.160);
    */

    handMine();


    build();

    inventryUpdate();




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
        if (!openBuildMenu) {
            openBuildMenu = true;
        } else {
            openBuildMenu = false;
        }
    }
    if (e.keyCode == 73) {
        if (!openInventMenu) {
            openInventMenu = true;
        } else {
            openInventMenu = false;
        }
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
        openInventMenu = false;
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
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener("mousedown", function(e) {
    startHandMine = true;
});

window.addEventListener("mouseup", function(e) {
    startHandMine = false;
});

buildMenu.addEventListener("onmouseover", function(e) {
    pointerStyle.style.cursor = "grab";
});









initialize();
animate();