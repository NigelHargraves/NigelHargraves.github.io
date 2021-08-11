//get and set canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const file = document.getElementById("fileupload");
let alienMove = document.getElementById("audio1");
let laser1 = document.getElementById("audio2");
let alienExplode = document.getElementById("audio3");
let winner = document.getElementById("audio4");
let loser = document.getElementById("audio5");
let death = document.getElementById("audio6");
let dead = document.getElementById("audio7");
let laser2 = document.getElementById("audio8");
let alienLaser = document.createElement("div");
let alienBoom = document.createElement("div");

let aliens = []; //alien array.

//set variables.
let numberOfAliens = 10,
    alienStartPosition = -50,
    alienNumber = 0,
    alienDestroyedX = 0,
    alienDestroyedY = 0,
    alienBlastX = 0,
    alienBlastY = 0,
    alienShooting = 0,
    expandBoom = 0,
    changeImage = 0;
let score = 0,
    waitTime = 1,
    lives = 3,
    gameSpeed = 0.5,
    gunPosX = 50,
    gunPosY = canvas.height - 40,
    blastX = 0,
    blastY = canvas.height - 40,
    level = 1,
    gunSpeed = 8;

let alienDestroyed = false,
    boomExpand = false,
    alienFired = false,
    alienVictory = false,
    stopGame = false,
    moveLeft = false,
    moveRight = false,
    mobileLeft = false,
    mobileRight = false,
    fired = false,
    hit = false,
    levelTF = false,
    playerWin = false,
    shoot = false;

//set images.
let boom = new Image();
boom.src = 'images/boom.png';
let boom2 = new Image();
boom2.src = 'images/boom2.png';
let alienImage1 = new Image();
alienImage1.src = 'images/alien ship 1.png';
let alienImage2 = new Image();
alienImage2.src = 'images/alien ship 2.png';
let background = new Image();
background.src =
    "https://wonderfulengineering.com/wp-content/uploads/2014/07/universe-backgrounds-141-610x343.jpg";




class alien {
    //construct alien.
    constructor() {
            this.x = Math.random() * (canvas.width / 2) + 200;
            this.y = alienStartPosition;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * gameSpeed;
            this.alien = alienNumber;
            alienNumber += 1;
        }
        //draw alien.
    draw() {
            if (changeImage < 25) {
                ctx.drawImage(alienImage1, this.x, this.y, 50, 25);
            } else {
                ctx.drawImage(alienImage2, this.x, this.y, 50, 25);
            }
        }
        //move alien.
    update() {

        if (alienFired == false) {
            alienShooting = Math.random() * 100;

            if (alienShooting > 99.9) {
                laser1.play();
                alienFired = true;
                alienBlastX = this.x + 25;
                alienBlastY = this.y + 25;
                alienLaser.style.width = "3px";
                alienLaser.style.height = "20px";
                alienLaser.style.background = "white";
                alienLaser.style.position = "absolute";
                alienLaser.style.left = alienBlastX + "px";
                alienLaser.style.top = alienBlastY + "px";
                document.body.appendChild(alienLaser);
                alienShoot();
            }
        }

        alienMove.play();
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width - 150 || this.x < 100) {
            this.speedX = -this.speedX;
        }
        if (this.y + 25 >= canvas.height) alienVictory = true;
        this.draw(); //call draw function to draw in new position.
    }

}

//fill array with alien data.
function init() {
    for (i = 0; i < numberOfAliens; i++) {
        aliens.push(new alien());
    }

}

function alienShoot() {
    alienLaser.style.top = alienBlastY + "px";
    if (
        alienBlastX > gunPosX + 75 ||
        alienBlastX < gunPosX ||
        alienBlastY + 20 < gunPosY

    ) {
        //no hit.
    } else {
        //hit

        alienBlastY = 0;
        alienFired = false;
        lives -= 1
        dead.play();
        gun.style.backgroundImage = "url('images/boom2.png')";
        document.getElementById("lives").innerHTML = 'LIVES: ' + lives;
        alienLaser.remove();
        alienDestroyed = true;
        alienDestroyedX = gunPosX + 37;
        alienDestroyedY = gunPosY + 20;
        boomExpand = true;
        document.body.appendChild(alienLaser);
        clearInterval(playerMove);
        gun.style.zIndex = -10;
        if (lives == 0) {
            alienVictory = true;
        } else {
            setTimeout(() => {
                gun.style.backgroundImage = "url('images/laserhouse.png')";
                playerMove = setInterval(movePlayer, 50);
                gun.style.zIndex = 1;
            }, 500);
        }
    }

    alienBlastY += 10;
    if (alienBlastY > canvas.height) {
        alienLaser.remove();
        alienFired = false;

    }
    if (alienFired == true) {

        requestAnimationFrame(alienShoot);
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

    if (alienDestroyed == true) {
        if (boomExpand == true) {
            alienBoom.style.width = expandBoom + "px";
            alienBoom.style.height = expandBoom + "px";
            alienBoom.style.background = "radial-gradient(red,orange,#9198e5)";
            alienBoom.style.position = "absolute";
            alienBoom.style.left = (alienDestroyedX - (expandBoom / 2)) + "px";
            alienBoom.style.top = (alienDestroyedY - (expandBoom / 2)) + "px";
            alienBoom.style.borderRadius = "50%";
            document.body.appendChild(alienBoom);
            expandBoom += 4;
            if (expandBoom > 50) boomExpand = false;
        }
        if (boomExpand == false) {
            alienBoom.style.width = expandBoom + "px";
            alienBoom.style.height = expandBoom + "px";
            alienBoom.style.background = "radial-gradient(red,orange,#9198e5)";
            alienBoom.style.position = "absolute";
            alienBoom.style.left = (alienDestroyedX - (expandBoom / 2)) + "px";
            alienBoom.style.top = (alienDestroyedY - (expandBoom / 2)) + "px";
            alienBoom.style.borderRadius = "50%";
            document.body.appendChild(alienBoom);
            expandBoom -= 4;
            if (expandBoom <= 0) {
                alienBoom.remove();
                alienDestroyed = false;
            }

        }
    }
    if (aliens.length < 1) playerWin = true;
    if (alienVictory == true || playerWin == true) {
        if (alienVictory == true) {
            death.play();
            gun.style.backgroundImage = "url('images/boom2.png')";
            clearInterval(playerMove);
            loser.play();
            shoot = false;
            ctx.font = "900 100px Arial";
            ctx.fillStyle = "red";
            ctx.textAlign = "center";
            ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);
            lives = 0;
            document.getElementById("lives").innerHTML = 'LIVES: ' + lives;
        } else {
            gunSpeed += 1;
            winner.play();
            level += 1;
            waitTime = 1;
            levelTF = false;
            playerWin = false;
            numberOfAliens += 1;
            alienStartPosition += 3;
            alienNumber = 0;
            gameSpeed += 0.05;
            init();
            animateAliens();
        }
    } else if (stopGame == false) {
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
    if (moveLeft == true && gunPosX > 10) {
        gunPosX -= gunSpeed;
        gun.style.left = gunPosX + "px";
    }
    if (gunPosX <= 50) {
        gunPosX = 50;
    }
    if (moveRight == true && gunPosX < canvas.width - 125) {
        gunPosX += gunSpeed;
        gun.style.left = gunPosX + "px";
    }
    if (gunPosX >= canvas.width - 125) {
        gunPosX = canvas.width - 125;
    }
    if (fired == true) {
        fired = false;
        laser2.play();
        laserBlast();
    }
}

function laserBlast() { //laser fired.
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
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
            ctx.drawImage(boom, aliens[i].x, aliens[i].y, 50, 50);
            alienDestroyed = true;
            alienDestroyedX = aliens[i].x + 25;
            alienDestroyedY = aliens[i].y + 12.5;
            boomExpand = true;
            document.body.appendChild(alienLaser);
            score += ((canvas.height - aliens[i].y) / 8);
            score = Math.floor(score);
            document.getElementById("scoreBoard").innerHTML = 'SCORE: ' + score;
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


buttonL.addEventListener("mousedown", function() {
    moveLeft = true;
})
buttonR.addEventListener("mousedown", function() {
    moveRight = true;
})


buttonL.addEventListener("mouseup", function() {
    moveLeft = false;
})
buttonR.addEventListener("mouseup", function() {
    moveRight = false;
})

canvas.addEventListener("click", function() {
    if (shoot == false) {
        fired = true;
        shoot = true;
        let elem = document.querySelector("div");
        let rect = elem.getBoundingClientRect();
        blastX = rect.x + 37;
    }

})
document.onkeydown = checkKey;
document.onkeyup = stopKey;

let playerMove = setInterval(movePlayer, 50);