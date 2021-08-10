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
let aliens = [];
let alienLaser = document.createElement("div");
let waitTime = 1;
let numberOfAliens = 10;
let alienStartPosition = -50;
let alienNumber = 0;
let score = 0;
let lives = 3;
let gameSpeed = 0.5;
let gunPosX = (canvas.width / 2) + 37;
let gunPosY = canvas.height - 40;
let level = 1;
let alienBlastX = 0;
let alienBlastY = 0;
let blastX = 0;
let blastY = canvas.height - 40;
let stopGame = false;
let moveLeft = false;
let moveRight = false;
let mobileLeft = false;
let mobileRight = false;
let shoot = false;
let alienShooting = 0;
let alienFired = false;
let fired = false;
let hit = false;
let levelTF = false;
let changeImage = 0;
let alienVictory = false;
let playerWin = false;
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
                alienBlastY = this.y + 50;

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

        clearInterval(playerMove);
        if (lives == 0) {
            alienVictory = true;
        } else {
            setTimeout(() => {
                gun.style.backgroundImage = "url('images/laserhouse.png')";
                playerMove = setInterval(movePlayer, 50);
            }, 2000);
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
        gunPosX -= 10;
        gun.style.left = gunPosX + "px";
    }
    if (gunPosX <= 50) {
        gunPosX = 50;
    }
    if (moveRight == true && gunPosX < canvas.width - 100) {
        gunPosX += 10;
        gun.style.left = gunPosX + "px";
    }
    if (gunPosX >= canvas.width - 125) {
        gunPosX = canvas.width - 15;
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