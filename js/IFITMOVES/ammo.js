class Ammo {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.countDown = 5000;
    }
    draw() {
        ctx.drawImage(bullet, floor.x + this.x, floor.y + this.y, 40, 20);
    }
    update() {
        this.countDown -= 1;
        this.draw();
    }
}

function createAmmo() {
    let makeAmmo = Math.random();
    if (makeAmmo > 0.995) {
        let x = 40 + (Math.random() * ((playArea) - 80));
        let y = 40 + (Math.random() * ((playArea) - 80));
        let wallCount = 1;
        walls.forEach((wall) => {
            //only create ammo when location does not intersect a wall.
            let hit = collisionDetection(x + floor.x, y + floor.y, 100, 100, wall.x + floor.x, wall.y + floor.y, wall.width / 2, wall.height / 2);
            if (hit) {
                return;
            }
            if (wallCount == walls.length) {
                munitions.push(new Ammo(x, y));
            }
            wallCount++;
        });
    }
}

function forAmmo() {
    munitions.forEach((ammo, index) => {
        let collectAmmo = collisionDetection(player.x, player.y, player.r / 4, player.r / 4, (ammo.x + 20) + floor.x, (ammo.y + 10) + floor.y, 40, 20);
        if (collectAmmo) {
            bulletAmount += 1;
            reload.currentTime = 0;
            reload.play();
            munitions.splice(index, 1);
        }

        if (ammo.countDown <= 0) {
            let playSound = collisionDetection(ammo.x + 20, ammo.y + 10, 40, 20, player.x - floor.x, player.y - floor.y, c.width / 2, c.height / 2);
            if (playSound) {
                trapKeyTeleport.play();
            }
            ctx.drawImage(teleportFlash, floor.x + ammo.x, floor.y + ammo.y - 10, 40, 40);
            munitions.splice(index, 1);
        }
        ammo.update();
    });
}