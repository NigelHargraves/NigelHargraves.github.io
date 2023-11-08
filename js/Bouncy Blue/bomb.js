//create bomb class.
class Bomb {
    //construct bomb data.
    constructor(x, y, velocity) {
        this.x = x;
        this.y = y;
        this.v = velocity;
        this.sizex = 0;
        this.sizey = 0;
    }

    //draw bomb.
    draw() {

            ctx.drawImage(bombImage, this.x, this.y, c.height * this.sizex, c.height * this.sizey);

        }
        //update bomb.
    update() {
        gravity = 0.03;
        this.v += gravity;
        this.y += this.v;
        this.x += -player.velocity.x * 1.25;
        this.draw();
        if (controlLevel < 2) {
            gravity = 0.03;
        } else {
            gravity = 0;
        }
        if (this.sizex < 0.02) {
            this.sizex += 0.001;
        }
        if (this.sizey < 0.04) {
            this.sizey += 0.002;
        }

    }
}

function forBomb() {
    bombs.forEach((bomb, index1) => {
        if (bomb.y >= c.height - c.height * 0.06) {
            if (!dropBomb.paused) {
                dropBomb.pause();
                dropBomb.currentTime = 0;
            }
            bombExplode.currentTime = 0;
            bombExplode.play();
            explodes.push(new Explode(bomb.x + c.height * 0.01, bomb.y + c.height * 0.02, 5, 1));
            bombs.splice(index1, 1);
        }
        bomb.update();
    });
}