// Set the canvas element to a variable.
const ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
const ctx2 = c2.getContext("2d");
c2.width = window.innerWidth;



let layers = [];
let KP = {}; //Keyspressed array
let KR = {}; //Keysreleased array

//boolean.
let moveLeft = false,
    moveRight = false,
    jump = false,
    sit = false,
    lookRight = true,
    standingStill = true;

let gravity,
    friction,
    velocityAmount,
    groundPosition,
    x, y, timerStand, timerSlide, timerRun;

let background1 = new Image();
background1.src = 'images/red/darkwood.png';

let background2 = new Image();
background2.src = 'images/red/grass.jpg';



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







//create layer class.
class Layer {
    //construct layer data.
    constructor(image, x, y, height, speed) {
        this.x = x;
        this.y = y;
        this.width = 6000;
        this.height = height;
        this.x2 = this.width;
        this.image = image;
        this.speed = speed;
    }

    //draw layer.
    draw() {
        if (this.image == background1) {
            ctx.drawImage(
                this.image,
                this.x,
                this.y + (groundPosition - player.y),
                this.width,
                this.height
            );
            ctx.drawImage(
                this.image,
                this.x2,
                this.y + (groundPosition - player.y),
                this.width,
                this.height
            );
        } else {
            ctx2.drawImage(this.image, this.x, this.y, this.width, this.height);
            ctx2.drawImage(this.image, this.x2, this.y, this.width, this.height);
        }

        c2.style.top = groundPosition + 90 + (groundPosition - player.y) + "px";
    }

    //update layer.
    update() {
        if (this.image == background1) {
            this.speed = player.velocity.x;
        } else {
            this.speed = player.velocity.x * 1.25;
        }

        if (player.velocity.x >= 0) {
            if (this.x <= -this.width) {
                this.x = this.width;
            }
            if (this.x2 <= -this.width) {
                this.x2 = this.width;
            }
        } else {
            if (this.x >= this.width) {
                this.x = -this.width;
            }
            if (this.x2 >= this.width) {
                this.x2 = -this.width;
            }
        }

        this.x -= this.speed;
        this.x2 -= this.speed;

        this.draw();
    }
}

//create player class.
class Player {
    //construct player data.
    constructor(x, y) {
            this.x = x;
            this.y = y;
            this.velocity = {
                x: 0,
                y: 0
            };
        }
        //draw player.
    draw() {


        if (!moveLeft && !moveRight && !sit && lookRight && groundPosition <= player.y && this.velocity.x > 0.1) {
            ctx.drawImage(SlideRight[Math.round(timerSlide)], x, y, 100, 100);
            this.velocity.x -= 0.1;
            timerSlide += 0.1;
            if (timerSlide >= 5.4) {
                timerSlide = 0.5;
            }
        }
        if (!moveLeft && !moveRight && !sit && !lookRight && groundPosition <= player.y && this.velocity.x < -0.1) {
            ctx.drawImage(SlideLeft[Math.round(timerSlide)], x, y, 100, 100);
            this.velocity.x += 0.1;
            timerSlide += 0.1;
            if (timerSlide >= 5.4) {
                timerSlide = 0.5;
            }
        }

        if (!moveLeft && !moveRight && !sit && lookRight && groundPosition <= player.y && player.velocity.x <= 0.1) {
            ctx.drawImage(IdleRight[Math.round(timerStand)], x, y, 100, 100);
            timerStand += 0.1;
            if (timerStand >= 10.4) {
                timerStand = 0.5;
            }
        }
        if (!moveLeft && !moveRight && !sit && !lookRight && groundPosition <= player.y && player.velocity.x >= -0.1) {
            ctx.drawImage(IdleLeft[Math.round(timerStand)], x, y, 100, 100);
            timerStand += 0.1;
            if (timerStand >= 10.4) {
                timerStand = 0.5;
            }
        }








        if (moveRight) {
            ctx.drawImage(RunRight[Math.round(timerRun)], x, y, 100, 100);
            timerRun += 0.1;
            if (timerRun >= 8.4) {
                timerRun = 0.5;
            }
        }
        if (moveLeft) {
            ctx.drawImage(RunLeft[Math.round(timerRun)], x, y, 100, 100);
            timerRun += 0.1;
            if (timerRun >= 8.4) {
                timerRun = 0.5;
            }
        }



    }
    update() {
        if (this.velocity.y > 0) {
            this.velocity.y -= friction;
        } else {
            this.velocity.y += friction;
        }
        if (this.velocity.x > 0) {
            this.velocity.x -= friction;
        } else {
            this.velocity.x += friction;
        }
        if (this.y > groundPosition - 1) {
            if (moveLeft) {
                this.velocity.x -= velocityAmount;
            }
            if (moveRight) {
                this.velocity.x += velocityAmount;
            }
        }
        if (jump) {
            if (this.y > groundPosition - 1) {
                this.velocity.y = -3;
            }
        }

        //update position.
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        //add gravity.
        if (this.y < groundPosition) {
            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
            this.y = groundPosition;
        }
        if (this.velocity.x >= 3) {
            this.velocity.x = 2.9;
        }
        if (this.velocity.x <= -3) {
            this.velocity.x = -2.9;
        }



        this.draw();
    }
}

function init() {
    gravity = 0.03,
        friction = 0.006,
        velocityAmount = 0.02,
        groundPosition = 800,
        x = c.width / 2,
        y = groundPosition, timerSlide = 0.5, timerStand = 0.5, timerRun = 0.5;

    player = new Player(x, y);
    layers.push(new Layer(background1, 0, -c.height, c.height * 2, 0));
    layers.push(new Layer(background2, 0, 0, c2.height, 0));
}

function animate() {
    //call next frame.
    animationId = requestAnimationFrame(animate);



    layers.forEach((layer, index) => {
        layer.update();
    });

    player.update();



    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("variable = " + player.velocity.x, 0, 20);
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
    if (e.keyCode == 32) {
        jump = false;
    }
});

init();
animate();