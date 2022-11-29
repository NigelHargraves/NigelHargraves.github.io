//create nasty class.
class Nasty {
    //construct nasty data.
    constructor(x, y, countdown, direction) {
        this.x = x;
        this.y = y;
        this.countdown = countdown;
        this.direction = direction;
        this.size = 100;
    }


    draw() {
        ctx.drawImage(nastyImage, this.x, this.y + (groundPosition - player.y), this.size, this.size);
    }





    update() {

        this.x -= player.velocity.x * 1.25;
        if (this.direction) {
            this.x -= 0.5;
        } else {
            this.x += 0.5;
        }
        this.countdown -= 0.1;


        this.draw();

    }






}