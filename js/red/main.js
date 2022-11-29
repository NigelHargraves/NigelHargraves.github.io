// Set the canvas element to a variable.
const ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
const ctx2 = c2.getContext("2d");
c2.width = window.innerWidth;



let layers = [],
    ledges = [],
    nasties = [];

let KP = {}; //Keyspressed array
let KR = {}; //Keysreleased array

//declare boolean.
let moveLeft = false,
    moveRight = false,
    jump = false,
    sit = false,
    lookRight = true,
    fall = true,
    playerAlive = true,
    onLedge = false;

//declare variable.
let gravity,
    friction,
    velocityAmount,
    groundPosition,
    playerPosition,
    x, y,
    timerStand,
    timerSlide,
    timerRun,
    timerJump,
    timerDead,
    farRight,
    farLeft;










let background1 = new Image();
background1.src = 'images/red/darkwood.png';

let background2 = new Image();
background2.src = 'images/red/grass.jpg';

let ledgeImage = new Image();
ledgeImage.src = 'images/red/ledge.png';

let greenApple = new Image();
greenApple.src = 'images/red/greenApple.png';

let redApple = new Image();
redApple.src = 'images/red/redApple.png';

let nastyImage = new Image();
nastyImage.src = 'images/red/nasty.png';

let whiteBrickWall = new Image();
whiteBrickWall.src = 'images/red/whiteBrickWall.png';



let IdleRight = [];
for (let i = 1; i < 11; i++) {
    IdleRight[i] = new Image();
    IdleRight[i].src = 'images/red/player/IdleRight' + i + '.png';
}
let IdleLeft = [];
for (let i = 1; i < 11; i++) {
    IdleLeft[i] = new Image();
    IdleLeft[i].src = 'images/red/player/IdleLeft' + i + '.png';
}
let RunRight = [];
for (let i = 1; i < 9; i++) {
    RunRight[i] = new Image();
    RunRight[i].src = 'images/red/player/RunRight' + i + '.png';
}
let RunLeft = [];
for (let i = 1; i < 9; i++) {
    RunLeft[i] = new Image();
    RunLeft[i].src = 'images/red/player/RunLeft' + i + '.png';
}
let SlideRight = [];
for (let i = 1; i < 6; i++) {
    SlideRight[i] = new Image();
    SlideRight[i].src = 'images/red/player/SlideRight' + i + '.png';
}
let SlideLeft = [];
for (let i = 1; i < 6; i++) {
    SlideLeft[i] = new Image();
    SlideLeft[i].src = 'images/red/player/SlideLeft' + i + '.png';
}
let JumpRight = [];
for (let i = 1; i < 10; i++) {
    JumpRight[i] = new Image();
    JumpRight[i].src = 'images/red/player/JumpRight' + i + '.png';
}
let JumpLeft = [];
for (let i = 1; i < 10; i++) {
    JumpLeft[i] = new Image();
    JumpLeft[i].src = 'images/red/player/JumpLeft' + i + '.png';
}
let DeadRight = [];
for (let i = 1; i < 11; i++) {
    DeadRight[i] = new Image();
    DeadRight[i].src = 'images/red/player/DeadRight' + i + '.png';
}
let DeadLeft = [];
for (let i = 1; i < 11; i++) {
    DeadLeft[i] = new Image();
    DeadLeft[i].src = 'images/red/player/DeadLeft' + i + '.png';
}


function animate() {
    //call next frame.
    animationId = requestAnimationFrame(animate);




    layers.forEach((layer, index) => {
        layer.update();
    });

    //draw containing walls.
    ctx.drawImage(whiteBrickWall, farRight -= player.velocity.x * 1.25, (0 - c.height) + (groundPosition - player.y), 50, c.height * 2);
    ctx.drawImage(whiteBrickWall, farLeft -= player.velocity.x * 1.25, (0 - c.height) + (groundPosition - player.y), 50, c.height * 2);




    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("variable = " + farRight + "      " + x, 0, 20);


    for (let ledge of ledges) {
        if (lookRight) {
            if (x + 70 >= ledge.x && x + 50 <= ledge.x + ledge.width && player.y + 85 >= ledge.y && player.y <= ledge.y + 20) {
                player.velocity.y = 2;
                break;
            }
            if (x + 70 >= ledge.x && x + 50 <= ledge.x + ledge.width && player.y + 70 <= ledge.y && player.y >= ledge.y - 100) {
                playerPosition = ledge.y - 85;
                onLedge = true;
                break;
            }
        } else {
            if (x + 50 >= ledge.x && x + 30 <= ledge.x + ledge.width && player.y + 85 >= ledge.y && player.y <= ledge.y + 20) {
                player.velocity.y = 2;
                onLedge = true;
                break;
            }
            if (x + 50 >= ledge.x && x + 50 <= ledge.x + ledge.width && player.y + 70 <= ledge.y && player.y >= ledge.y - 100) {
                playerPosition = ledge.y - 85;
                break;
            }
        }
        if (ledge.number == ledges.length) {
            playerPosition = groundPosition;
        }
    }


    ledges.forEach((ledge, index) => {
        ledge.update();
    });

    let createNasty = Math.random();
    let nastyDirection = Math.random();
    if (createNasty >= 0.999) {
        if (nastyDirection >= 0.5) {
            nasties.push(new Nasty((Math.random() * 10000) + c.width, groundPosition, 250, true));
        } else {
            nasties.push(new Nasty((Math.random() * 10000) + c.width, groundPosition, 250, false));
        }
    }

    createNasty = Math.random();
    nastyDirection = Math.random();
    if (createNasty >= 0.999) {
        if (nastyDirection >= 0.5) {
            nasties.push(new Nasty((Math.random() * -10000) - 100, groundPosition, 250, true));
        } else {
            nasties.push(new Nasty((Math.random() * -10000) - 100, groundPosition, 250, false));
        }
    }




    nasties.forEach((nasty, index) => {

        nasty.update();
    });




    if (farLeft + 30 >= x) {
        player.velocity.x = 1;
    }
    if (farRight - 80 <= x) {
        player.velocity.x = -1;
    }


    player.update();


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
        lookRight = false;
    }
    if (e.keyCode == 39 || e.keyCode == 68) {
        moveRight = true;
        lookRight = true;
    }
    if (e.keyCode == 83 || e.keyCode == 40) {
        sit = true;
    }
    if (e.keyCode == 32) {
        jump = true;
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
        sit = false;
    }
});

init();
animate();