//create ledge class.
class Ledge {
    //construct ledge data.
    constructor(image, x, y, width) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
    }

    //draw ledge.
    draw() {



        ctx.drawImage(this.image, this.x, this.y + (groundPosition - player.y), this.width, 20);


    }

    //update ledge.
    update() {
        this.x -= player.velocity.x * 1.25;


        this.draw();
    }
}