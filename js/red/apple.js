//create apple class.
class Apple {
    //construct apple data.
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = 20;
    }


    draw() {

        if (this.color == "red") {
            ctx.drawImage(redApple, this.x, this.y + (groundPosition - player.y), this.size, this.size);
        } else {
            ctx.drawImage(greenApple, this.x, this.y + (groundPosition - player.y), this.size, this.size);
        }
    }





    update() {

        this.x -= player.velocity.x * 1.25;


        this.draw();

    }






}