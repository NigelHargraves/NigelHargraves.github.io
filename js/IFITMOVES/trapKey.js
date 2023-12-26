class TrapKey {
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.image = image;
        this.teleportTimer = 1;
        this.timer = 0;
    }
    draw() {
        if (this.timer == 0) {
            ctx.drawImage(teleportFlash, floor.x + this.x - 20, floor.y + this.y - 20, 40, 40);
            let playSound = collisionDetection(this.x, this.y, 20, 20, player.x - floor.x, player.y - floor.y, c.width / 2, c.height / 2);
            if (playSound) {
                trapKeyTeleport.play();
            }
        }
        ctx.drawImage(this.image, floor.x + this.x - 20, floor.y + this.y - 20, 40, 40);
    }
    update() {
        if (this.timer >= this.teleportTimer) {
            let x = 200 + Math.random() * ((playArea) - 400);
            let y = 200 + Math.random() * ((playArea) - 400);
            let wallNumber = 1;
            walls.forEach((wall) => {
                //only teleport when new location does not intersect a wall.
                let hit = collisionDetection(x + floor.x, y + floor.y, 100, 100, wall.x + floor.x, wall.y + floor.y, wall.width / 2, wall.height / 2);
                if (hit) {
                    return;
                }
                if (wallNumber == walls.length) {
                    let playSound = collisionDetection(this.x, this.y, 20, 20, player.x - floor.x, player.y - floor.y, c.width / 2, c.height / 2);
                    if (playSound) {
                        trapKeyTeleport.play();
                    }
                    ctx.drawImage(teleportFlash, floor.x + this.x - 20, floor.y + this.y - 20, 40, 40);
                    this.x = 40 + (Math.random() * ((playArea) - 80));
                    this.y = 40 + (Math.random() * ((playArea) - 80));
                }
                wallNumber += 1;
            });
            this.timer = 0;
            this.teleportTimer = Math.random() * 5000;
        }
        this.timer += 1;
        this.draw();
    }
}

function forTrapKey() {
    trapKeys.forEach((trapKey, index) => {
        let collect = collisionDetection(trapKey.x, trapKey.y, 10, 10, player.x - floor.x, player.y - floor.y, player.r / 2, player.r / 2);
        if (collect) {
            if (trapKey.image == greenTrapKey1) {
                gotGreenTrapKey1 = true;
                trapKeys.splice(index, 1);
                trapKeyCollected = true;
                backpackItems += 1;
            }
            if (trapKey.image == greenTrapKey2) {
                gotGreenTrapKey2 = true;
                trapKeys.splice(index, 1);
                trapKeyCollected = true;
                backpackItems += 1;
            }
            if (trapKey.image == greenTrapKey3) {
                gotGreenTrapKey3 = true;
                trapKeys.splice(index, 1);
                trapKeyCollected = true;
                backpackItems += 1;
            }
            if (trapKey.image == greenTrapKey4) {
                gotGreenTrapKey4 = true;
                trapKeys.splice(index, 1);
                trapKeyCollected = true;
                backpackItems += 1;
            }
            if (trapKey.image == orangeTrapKey1) {
                gotOrangeTrapKey1 = true;
                trapKeys.splice(index, 1);
                trapKeyCollected = true;
                backpackItems += 1;
            }
            if (trapKey.image == orangeTrapKey2) {
                gotOrangeTrapKey2 = true;
                trapKeys.splice(index, 1);
                trapKeyCollected = true;
                backpackItems += 1;
            }
            if (trapKey.image == orangeTrapKey3) {
                gotOrangeTrapKey3 = true;
                trapKeys.splice(index, 1);
                trapKeyCollected = true;
                backpackItems += 1;
            }
            if (trapKey.image == orangeTrapKey4) {
                gotOrangeTrapKey4 = true;
                trapKeys.splice(index, 1);
                trapKeyCollected = true;
                backpackItems += 1;
            }
            trapKeyCollect.currentTime = 0;
            trapKeyCollect.play();
        }
        trapKey.update();
    });
}