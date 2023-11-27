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
        this.r = 20;

    }

    //draw player.
    draw() {

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
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

        if (!run) {
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
        } else {
            if (player.velocity.x > 2) {
                player.velocity.x = 2;
            }
            if (player.velocity.x < -2) {
                player.velocity.x = -2;
            }
            if (player.velocity.y > 2) {
                player.velocity.y = 2;
            }
            if (player.velocity.y < -2) {
                player.velocity.y = -2;
            }
        }

        if (player.velocity.x != 0 || player.velocity.y != 0) {
            if (!run) {
                running.currentTime = 0;
                running.paused;
                walking.play();
            } else {
                walking.currentTime = 0;
                walking.paused;
                running.play();
            }

        }





        if (player.velocity.x == 0 && player.velocity.y == 0) {
            walking.currentTime = 0;
            walking.paused;
            running.currentTime = 0;
            running.paused;

        }





        this.draw();
    }
}