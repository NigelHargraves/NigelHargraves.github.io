class Ground {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = playArea;
    }
    draw() {



        ctx.scale(scaleX, scaleY);




        ctx.drawImage(grass, this.x, this.y, this.size, this.size);
        ctx.drawImage(burnium, this.x + burn.x, this.y + burn.y, 10, 10);
        ctx.drawImage(hardiumOre, this.x + hardOre.x, this.y + hardOre.y, 10, 10);
        ctx.drawImage(ouzeidBase, this.x + ouzeBase.x, this.y + ouzeBase.y, 10, 10);
        ctx.drawImage(lifeid, this.x + life.x, this.y + life.y, 10, 10);
    }
    update() {

        if (moveFaster) {
            cameraSpeed = 10;
        } else {
            cameraSpeed = 5;
        }

        if (moveUp) {
            this.y += cameraSpeed;
        }
        if (moveDown) {
            this.y -= cameraSpeed;
        }
        if (moveLeft) {
            this.x += cameraSpeed;
        }
        if (moveRight) {
            this.x -= cameraSpeed;
        }



        //camera limit area edge.
        if (!moveFaster) {
            if (this.x >= cameraCenter.x) {
                this.x -= 5;
            }
            if (this.x + this.size <= cameraCenter.x) {
                this.x += 5;
            }
            if (this.y >= cameraCenter.y) {
                this.y -= 5;
            }
            if (this.y + this.size <= cameraCenter.y) {
                this.y += 5;
            }
        } else {
            if (this.x >= cameraCenter.x) {
                this.x -= 10;
            }
            if (this.x + this.size <= cameraCenter.x) {
                this.x += 10;
            }
            if (this.y >= cameraCenter.y) {
                this.y -= 10;
            }
            if (this.y + this.size <= cameraCenter.y) {
                this.y += 10;
            }
        }

        this.draw();
    }
}