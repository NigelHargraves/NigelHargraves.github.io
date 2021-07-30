let gunPos = 10;
let moveLeft = false;
let moveRight = false;

function checkKey(e) {
    if (e.keyCode == 37 || e.keyCode == 65) {
        moveLeft = true;
    } else if (e.keyCode == 39 || e.keyCode == 68) {
        moveRight = true;
    }
}

function movePlayer() {
    if (moveLeft == true && gunPos > 10) {
        gunPos -= 0.5;
        gun.style.left = gunPos + "%";
    } else if (gunPos < 10) {
        gunPos = 10;
    }
    if (moveRight == true && gunPos < 90) {
        gunPos += 0.5;
        gun.style.left = gunPos + "%";
    } else if (gunPos > 90) {
        gunPos = 90;
    }
}

function moveInvader() {}

function stopKey() {
    moveLeft = false;
    moveRight = false;
}

document.onkeydown = checkKey;
document.onkeyup = stopKey;
setInterval(movePlayer, 50);
setInterval(moveInvader, 50);