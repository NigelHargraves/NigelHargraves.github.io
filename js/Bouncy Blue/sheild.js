//create sheild class.
class Sheild {
    //construct sheild data.
    constructor(x, y, radius, countdown) {
        this.x = x;
        this.y = y;
        this.r = radius;
        this.countdown = countdown;
    }
    draw() {
        ctx.drawImage(sheild, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
    }
    update() {
        this.countdown -= 0.01;
        this.x += -player.velocity.x;
        this.draw();
    }
}

function forShield() {
    sheilds.forEach((sheild) => {
        let colide = collisionDetection(sheild.x, sheild.y, sheild.r, sheild.r, x, player.y, player.r, player.r);
        if (colide) {
            sheilds = [];
            playerSheild = true;
            sheildGain.currentTime = 0;
            sheildGain.play();
        }
        if (sheild.countdown <= 0) {
            sheilds = [];
        }
        sheild.update();
    });
}