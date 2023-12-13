class TrapKey {
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.image = image;
        this.teleportTimer = Math.random() * 5000;
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
            let playSound = collisionDetection(this.x, this.y, 20, 20, player.x - floor.x, player.y - floor.y, c.width / 2, c.height / 2);
            if (playSound) {
                trapKeyTeleport.play();
            }
            ctx.drawImage(teleportFlash, floor.x + this.x - 20, floor.y + this.y - 20, 40, 40);
            this.x = 40 + (Math.random() * ((c.height * 4) - 80));
            this.y = 40 + (Math.random() * ((c.height * 4) - 80));
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
                nextKeySet = true;
                backpackItems += 1;
            }
            if (trapKey.image == greenTrapKey2) {
                gotGreenTrapKey2 = true;
                trapKeys.splice(index, 1);
                nextKeySet = true;
                backpackItems += 1;
            }
            if (trapKey.image == greenTrapKey3) {
                gotGreenTrapKey3 = true;
                trapKeys.splice(index, 1);
                nextKeySet = true;
                backpackItems += 1;
            }
            if (trapKey.image == greenTrapKey4) {
                gotGreenTrapKey4 = true;
                trapKeys.splice(index, 1);
                nextKeySet = true;
                backpackItems += 1;
            }
            trapKeyCollect.play();
        }
        trapKey.update();
    });
}