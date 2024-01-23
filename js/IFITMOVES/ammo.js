class Ammo {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.countDown = 1000;
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
    if (makeAmmo > 0.99) {
        munitions.push(new Ammo(40 + (Math.random() * ((playArea) - 80)), 40 + (Math.random() * ((playArea) - 80))));
    }
    munitions.forEach((ammo, index) => {
        let collectAmmo = collisionDetection(player.x, player.y, player.r / 2, player.r / 2, ammo.x + floor.x, ammo.y + floor.y, 40, 20);
        if (collectAmmo) {
            bulletAmount += 1;
            reload.currentTime = 0;
            reload.play();
            munitions.splice(index, 1);
        }
        if (ammo.countDown <= 0) munitions.splice(index, 1);
        ammo.update();
    });
}