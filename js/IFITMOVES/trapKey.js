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
            this.x = Math.random() * ((c.height * 4) - 80) + 40;
            this.y = Math.random() * ((c.height * 4) - 80) + 40;
            this.timer = 0;
            this.teleportTimer = Math.random() * 5000;
        }
        this.timer += 1;
        this.draw();
    }
}

function forTrapKey() {

}