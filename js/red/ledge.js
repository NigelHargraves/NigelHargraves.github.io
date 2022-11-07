//create ledge class.
class Ledge {
    //construct ledge data.
    constructor(image, x, y) {
        this.image = image;
        this.x = x;
        this.y = y;
    }

    //draw ledge.
    draw() {



        ctx.drawImage(this.image, this.x, this.y + (groundPosition - player.y), 600, 20);


    }

    //update ledge.
    update() {
        this.x -= player.velocity.x * 1.25;


        this.draw();
    }
}