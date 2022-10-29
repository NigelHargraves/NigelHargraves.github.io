//mushroom class.
class Mushroom {
    //construct mushroom data.
    constructor(x, y) {
            this.x = x;
            this.y = y;

        }
        //draw mushroom.
    draw() {
            ctx.drawImage(mushroomImage, this.x, this.y, mushroomSize, mushroomSize);

        }
        //update mushroom.
    update() {
        this.x += -player.velocity.x * 1.25;
        this.draw();
    }
}