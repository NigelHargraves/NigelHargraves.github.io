//create floor class.
class Floor {
    //construct floor data.
    constructor(image) {
        this.x = 0;
        this.y = 0;
        this.width = c.width * 4;
        this.height = c.height * 4;
        this.image = image;
    }

    //draw floor.
    draw() {

        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);



    }

    //update floor.
    update() {


        if (moveForward) {
            if (run) {
                speed = 5;
            } else {
                speed = 10;
            }
            this.x -= player.aimx / speed;
            this.y -= player.aimy / speed;


            if (this.x + 4 >= player.x - player.r) {
                this.x -= 2;
            }

            if ((this.x - 4) + this.width <= player.x + player.r) {
                this.x += 2;
            }




            if (this.y + 4 >= player.y - player.r) {
                this.y -= 2;
            }

            if ((this.y - 4) + this.height <= player.y + player.r) {
                this.y += 2;
            }
        }
        this.draw();
    }
}