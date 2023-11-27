//create floor class.
class Floor {
    //construct floor data.
    constructor(image, y, speed) {
        this.x = 0;
        this.y = y;
        this.width = c.width * 4;
        this.height = c.height * 4;
        this.image = image;
        this.speed = speed;
    }

    //draw floor.
    draw() {

        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);



    }

    //update floor.
    update() {
        this.x -= player.velocity.x;
        this.y -= player.velocity.y;

        if (this.x + 4 >= player.x - player.r) {
            player.velocity.x = 0;
            this.x -= 2;
        }

        if ((this.x - 4) + this.width <= player.x + player.r) {
            player.velocity.x = 0;
            this.x += 2;
        }




        if (this.y + 4 >= player.y - player.r) {
            player.velocity.y = 0;
            this.y -= 2;
        }

        if ((this.y - 4) + this.height <= player.y + player.r) {
            player.velocity.y = 0;
            this.y += 2;
        }

        this.draw();
    }
}