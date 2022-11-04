// Set the canvas element to a variable.
const ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
const ctx2 = c2.getContext("2d");
c2.width = window.innerWidth;



let layers = [];
let KP = {}; //Keyspressed array
let KR = {}; //Keysreleased array
let moveLeft = false,
    moveRight = false,
    jump = false,
    sit = false;

let gravity = 0.03,
    friction = 0.006,
    velocityAmount = 0.02,
    groundPosition = 677;

let background1 = new Image();
background1.src = "https://img.freepik.com/free-vector/cartoon-nature-landscape-with-mountain-forest-deciduous-trees-trunks-clearance_107791-3706.jpg?w=1380&t=st=1664548409~exp=1664549009~hmac=1db2c723702f96a80b9fca1dbb0063bdbc4b05541455b5950ff9d2e649ceee37";

let background2 = new Image();
background2.src =
    "https://img.freepik.com/free-photo/top-view-bright-green-grass-texture-background_93675-134844.jpg?w=1380&t=st=1664550289~exp=1664550889~hmac=44ed39c3e4ec6343139f783c716acaf925366e8e8871506a4fcdf7cba28fd09b";

let playerImage = new Image();
playerImage.src = 'images/red/player/Idle1.png';

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

        c2.style.top = groundPosition + 100 + (groundPosition - player.y) + "px";
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
        ctx.drawImage(playerImage, this.x, this.y, 100, 100);

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
            } else if (moveRight) {
                this.velocity.x += velocityAmount;
            }
        }
        if (jump) {
            if (this.y > groundPosition - 1) {
                this.velocity.y = -2;
            }
        } else if (sit) {
            if (this.y > groundPosition - 1) {
                if (this.velocity.x > 0.3 || this.velocity.x < -0.3) {
                    if (this.velocity.x < 0) {
                        this.velocity.x += 0.1;
                    } else {
                        this.velocity.x -= 0.1;
                    }
                } else {
                    this.velocity.x = 0;
                }

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
        this.draw();
    }
}

function init() {
    player = new Player(c.width / 2, c.height - 100);
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
    ctx.fillText("This.y = " + player.y, 0, 20);
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
    }
    if (e.keyCode == 39 || e.keyCode == 68) {
        moveRight = true;
    }
    if (e.keyCode == 83 || e.keyCode == 40) {
        sit = true;
    }
    if (e.keyCode == 87 || e.keyCode == 38) {
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
        player.style.background = "red";
    }
    if (e.keyCode == 87 || e.keyCode == 38) {
        jump = false;
    }
});

init();
animate();