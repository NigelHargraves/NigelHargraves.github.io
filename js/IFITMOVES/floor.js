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

        this.draw();
    }
}