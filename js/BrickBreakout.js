// Set the canvas element to a variable.
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let paddle, ball;
let moveLeft = false,
    moveRight = false,
    ballExists = true,
    ballHitPaddle = false;
let bricks = [];
brickX = 50;

let miss = document.getElementById("audio1");
let wallBounce = document.getElementById("audio2");
let brickHit = document.getElementById("audio3");
let slice = document.getElementById("audio4");

//create Paddle class.
class Paddle {
    //construct paddle data.
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.c = color;
    }

    //draw paddle.
    draw() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = this.c;
        ctx.fill();
    }

    //update paddle.
    update() {
        //stop at walls.
        if (this.x + this.w > canvas.width) {
            this.x = canvas.width - this.w;
        }
        if (this.x < 0) {
            this.x = 0;
        }

        this.draw(); //call draw function to draw in new position.
    }
}

//create Ball class.
class Ball {
    //construct ball data.
    constructor(x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.r = radius;
            this.c = color;
            this.velocity = {
                x: 3,
                y: -3
            };
        }
        //draw ball.
    draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = this.c;
            ctx.fill();
        }
        //move ball.
    update() {
        //update position.
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        //bounce off walls.
        if (this.x + this.r > canvas.width) {
            this.x = canvas.width - this.r;
            this.velocity.x = -this.velocity.x;
            ballHitPaddle = false;
            wallBounce.currentTime = 0;
            wallBounce.play();
        }
        if (this.x - this.r < 0) {
            this.x = 0 + this.r;
            this.velocity.x = -this.velocity.x;
            ballHitPaddle = false;
            wallBounce.currentTime = 0;
            wallBounce.play();
        }
        if (this.y + this.r > canvas.height) {
            miss.play();
            ballExists = false;

        }

        if (this.y - this.r < 0) {
            this.y = 0 + this.r;
            this.velocity.y = -this.velocity.y;
            ballHitPaddle = false;
            wallBounce.currentTime = 0;
            wallBounce.play();
        }

        this.draw(); //call draw function to draw in new position.
    }
}

//create Brick class.
class Brick {
    //construct brick data.
    constructor(x, y, width, height, color, exists) {
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.c = color;
        this.exists = exists;
    }

    //draw brick.
    draw() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = this.c;
        ctx.fill();
    }

    //update brick.
    update() {
        this.draw(); //call draw function to draw in new position.
    }
}

function animate() {
    let animateID = requestAnimationFrame(animate); //call next frame.
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    paddle.update();
    if (!ballExists) {
        cancelAnimationFrame(animateID);
        ctx.font = "900 100px Arial";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);
    }
    if (bricks.length < 1) {
        cancelAnimationFrame(animateID);
        ctx.font = "900 100px Arial";
        ctx.fillStyle = "green";
        ctx.textAlign = "center";
        ctx.fillText("Winner!!!!", canvas.width / 2, canvas.height / 2);
    }
    if (ballExists) ball.update();


    //check ball hits brick.
    bricks.forEach((brick, index) => {
        if (
            ball.x - ball.r > brick.x + brick.w ||
            ball.x + ball.r < brick.x ||
            ball.y - ball.r > brick.y + brick.h ||
            ball.y + ball.r < brick.y
        ) {
            //miss
        } else {
            //hit
            //check if ball hits brick edge.
            ballHitPaddle = false;
            if (ball.y < brick.y + brick.h && ball.y > brick.y) {
                ball.velocity.x = -ball.velocity.x;
            } else {
                ball.velocity.y = -ball.velocity.y;
            }
            brickHit.currentTime = 0;
            brickHit.play();
            bricks.splice(index, 1); //remove brick.
        }
        brick.update();
    });

    //check if ball hits paddle.
    if (
        ball.x - ball.r > paddle.x &&
        ball.x + ball.r < paddle.x + paddle.w &&
        ball.y + ball.r > paddle.y &&
        !ballHitPaddle
    ) {
        //hit.
        //check if user wants to slice.
        if (!ballHitPaddle) {
            if (moveLeft || moveRight) {
                slice.currentTime = 0;
                slice.play();
                ballHitPaddle = true;
                if (ball.velocity.y > 1) {
                    ball.velocity.y -= 0.5;
                }
            } else {
                wallBounce.currentTime = 0;
                wallBounce.play();
                ballHitPaddle = true;
                if (ball.velocity.y < 3) {
                    ball.velocity.y += 0.5;
                }
            }
        }

        ball.velocity.y = -ball.velocity.y;
    }
}

function init() {
    paddle = new Paddle(
        canvas.width / 2 - 50,
        canvas.height - 40,
        100,
        10,
        "white"
    );
    paddle.update();

    ball = new Ball(
        Math.random() * canvas.width,
        canvas.height - 100,
        8,
        "green"
    );
    ball.update();

    let count = 0;
    let brickColor;
    for (let j = 50; j <= 110; j += 40) {
        for (let i = 0; i < canvas.width; i += canvas.width / 20) {
            if (count % 2 == 0) brickColor = "blue";
            else brickColor = "red";
            bricks.push(new Brick(i, j, canvas.width / 20, 20, brickColor, true));
            count++;
        }

        count = 0;
        for (let i = 0; i < canvas.width; i += canvas.width / 20) {
            if (count % 2 == 0) brickColor = "yellow";
            else brickColor = "purple";
            bricks.push(
                new Brick(i, j + 20, canvas.width / 20, 20, brickColor, true)
            );
            count++;
        }
        count = 0;
    }
}

function movePaddle() {
    if (moveLeft == true) {
        paddle.x -= 10;
    } else if (moveRight == true) {
        paddle.x += 10;
    }
    paddle.update();
}

function checkKey(e) {
    if (e.keyCode == 37 || e.keyCode == 65) {
        moveLeft = true;
    } else if (e.keyCode == 39 || e.keyCode == 68) {
        moveRight = true;
    }
}

document.onkeydown = checkKey;
document.onkeyup = stopKey;

function stopKey() {
    moveLeft = false;
    moveRight = false;
}

//adjust canvas on screen resize.
window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});




init();
setTimeout(animate, 500);

setInterval(movePaddle, 50);