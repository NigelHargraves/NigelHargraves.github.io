//create player class.
class Player {
    //construct player data.
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocity = {
            x: 0,
            y: 0
        };

    }

    //draw player.
    draw() {

        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, Math.PI * 2);
        ctx.fillStyle = "White";
        ctx.fill();



    }

    //update player.
    update() {
        let velocityAmount = 0.1;

        if (moveLeft) {
            this.velocity.x -= velocityAmount;
        }
        if (moveRight) {
            this.velocity.x += velocityAmount;
        }
        if (moveUp) {
            this.velocity.y -= velocityAmount;
        }
        if (moveDown) {
            this.velocity.y += velocityAmount;
        }

        if (player.velocity.x > 1) {
            player.velocity.x = 1;
        }
        if (player.velocity.x < -1) {
            player.velocity.x = -1;
        }
        if (player.velocity.y > 1) {
            player.velocity.y = 1;
        }
        if (player.velocity.y < -1) {
            player.velocity.y = -1;
        }




        this.draw();
    }
}