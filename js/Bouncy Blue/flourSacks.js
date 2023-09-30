//create flourSacks class.
class FlourSack {
    //construct flourSacks data.
    constructor(x, y, radius) {
            this.x = x;
            this.y = y;
            this.r = radius;
            this.direction = Math.random() * 2 - 1;
        }
        //draw flourSacks.
    draw() {
            ctx.drawImage(flourSackOnBalloon, this.x - this.r, this.y - this.r * 2.25, this.r * 2.25, this.r * 4.5);
        }
        //update flourSacks.
    update() {
        if (this.r <= c.height * 0.02) {
            this.r += c.height * 0.0001
        }
        this.x += this.direction;
        this.x += -player.velocity.x;
        this.y -= 0.5;
        this.draw();
    }
}

function forFlourSacks() {
    flourSacks.forEach((sack, index) => {
        let colide = collisionDetection(sack.x, sack.y, sack.r, sack.r * 2.25, x, player.y, player.r, player.r);
        if (colide) {
            gain.currentTime = 0;
            gain.play();
            flourSackCount += 1;
            flourSacks.splice(index, 1);
        }

        if (sack.y <= 0 - sack.r * 4.5) {
            flourSacks.splice(index, 1);
        }
        sack.update();
    });
}