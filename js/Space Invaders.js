const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const file = document.getElementById("fileupload");
let alienMove = document.getElementById("audio1");
let playerShoot = document.getElementById("audio2");
let alienExplode = document.getElementById("audio3");
let winner = document.getElementById("audio4");
let loser = document.getElementById("audio5");

let aliens = [];
let waitTime = 1;
let numberOfAliens = 10;
let alienNumber = 0;
let score = 0;
let gameSpeed = 0.5;
let gunPos = 10;
let blastX = 0;
let level = 1;
let blastY = canvas.height - 40;
let moveLeft = false;
let moveRight = false;
let shoot = false;
let fired = false;
let hit = false;
let levelTF = false;
let changeImage = 0;
let alienVictory = false;
let playerWin = false;
let alienImage1 = new Image();
alienImage1.src = 'images/si1.png';
let alienImage2 = new Image();
alienImage2.src = 'images/si2.png';
let background = new Image();
background.src =
    "https://wonderfulengineering.com/wp-content/uploads/2014/07/universe-backgrounds-141-610x343.jpg";




class alien {
    //construct alien.
    constructor() {
            this.x = Math.random() * (canvas.width / 2) + 200;
            this.y = -50;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * gameSpeed;
            this.alien = alienNumber;
            alienNumber += 1;
        }
        //draw alien.
    draw() {
            if (changeImage < 25) {
                ctx.drawImage(alienImage1, this.x, this.y, 50, 50);
            } else {
                ctx.drawImage(alienImage2, this.x, this.y, 50, 50);
            }
        }
        //move alien.
    update() {
        alienMove.play();
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width - 150 || this.x < 100) {
            this.speedX = -this.speedX;
        }
        if (this.y + 50 >= canvas.height) alienVictory = true;
        this.draw(); //call draw function to draw in new position.
    }

}

//fill array with alien data.
function init() {
    for (i = 0; i < numberOfAliens; i++) {
        aliens.push(new alien());
    }

}

function animateAliens() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    if (levelTF == false) {
        waitTime -= 0.002;
        ctx.font = "900 100px Arial";
        ctx.fillStyle = "rgba(233, 212, 96," + waitTime + ")";
        ctx.textAlign = "center";
        ctx.fillText("level - " + level, canvas.width / 2, canvas.height / 2);
        if (waitTime < 0) {
            levelTF = true;
        }
    }
    for (i = 0; i < aliens.length; i++) {
        aliens[i].update();
    }
    if (changeImage > 50) {
        changeImage = 0;
    } else {
        changeImage += 1;
    }
    if (aliens.length < 1) playerWin = true;
    if (alienVictory == true || playerWin == true) {
        if (alienVictory == true) {
            loser.play();
            shoot = false;
            ctx.font = "900 100px Arial";
            ctx.fillStyle = "red";
            ctx.textAlign = "center";
            ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);
        } else {
            winner.play();
            ctx.font = "900 100px Arial";
            ctx.fillStyle = "green";
            ctx.textAlign = "center";
            ctx.fillText("Level - " + level + " Cleared", canvas.width / 2, canvas.height / 2);
            level += 1;
            waitTime = 1;
            levelTF = false;
            playerWin = false;
            numberOfAliens += 2;
            alienNumber = 0;
            gameSpeed += 0.1;
            init();
            animateAliens();
        }
    } else {
        requestAnimationFrame(animateAliens); //adjust to screen refresh rate and call next frame.
    }
}

init();
animateAliens();

function checkKey(e) {
    if (e.keyCode == 37 || e.keyCode == 65) {
        moveLeft = true;
    } else if (e.keyCode == 39 || e.keyCode == 68) {
        moveRight = true;
    }
    if (e.keyCode == 32 && shoot == false) {
        fired = true;
        shoot = true;
        let elem = document.querySelector("div");
        let rect = elem.getBoundingClientRect();
        blastX = rect.x + 37;
    }
}

function movePlayer() {

    if (moveLeft == true && gunPos > 10) {
        gunPos -= 1;
        gun.style.left = gunPos + "%";
    } else if (gunPos < 10) {
        gunPos = 10;
    }
    if (moveRight == true && gunPos < 90) {
        gunPos += 1;
        gun.style.left = gunPos + "%";
    } else if (gunPos > 90) {
        gunPos = 90;
    }
    if (fired === true) {
        fired = false;
        playerShoot.play();
        laserBlast();
    }
}

function laserBlast() {
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(blastX, blastY);
    ctx.lineTo(blastX, blastY - 20);
    ctx.stroke();
    blastY -= 8;

    //check for alien hit.
    for (let i = 0; i < aliens.length; i++) {
        if (
            blastX > aliens[i].x + 50 ||
            blastX < aliens[i].x ||
            blastY > aliens[i].y + 50 ||
            blastY < aliens[i].y
        ) {
            //no hit.
        } else {
            //hit
            score += (aliens[i].y / 2);
            score = Math.floor(score);
            document.getElementById("scoreBoard").innerHTML = 'SCORE:' + score;
            alienExplode.play();
            aliens.splice(i, 1);
            shoot = false;
            blastY = canvas.height - 40;
        }
    }

    if (blastY <= 0) {
        shoot = false;
        blastY = canvas.height - 40;
    }
    if (shoot == true) {
        requestAnimationFrame(laserBlast);
    }
}

function stopKey() {
    moveLeft = false;
    moveRight = false;
}

window.addEventListener("resize", function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});

document.onkeydown = checkKey;
document.onkeyup = stopKey;

setInterval(movePlayer, 50);