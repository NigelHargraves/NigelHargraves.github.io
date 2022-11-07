//create layer class.
class Layer {
    //construct layer data.
    constructor(image, x, y, height, speed) {
        this.x = x;
        this.y = y;
        this.width = 6000;
        this.height = height;
        this.x2 = this.width;
        this.image = image;
        this.speed = speed;
    }

    //draw layer.
    draw() {
        if (this.image == background1) {
            ctx.drawImage(
                this.image,
                this.x,
                this.y + (groundPosition - player.y),
                this.width,
                this.height
            );
            ctx.drawImage(
                this.image,
                this.x2,
                this.y + (groundPosition - player.y),
                this.width,
                this.height
            );
        } else {
            ctx2.drawImage(this.image, this.x, this.y, this.width, this.height);
            ctx2.drawImage(this.image, this.x2, this.y, this.width, this.height);
        }

        c2.style.top = 800 + 90 + (800 - player.y) + "px";


    }

    //update layer.
    update() {




        if (this.image == background1) {
            this.speed = player.velocity.x;
        } else {
            this.speed = player.velocity.x * 1.25;
        }

        if (player.velocity.x >= 0) {
            if (this.x <= -this.width) {
                this.x = this.width;
            }
            if (this.x2 <= -this.width) {
                this.x2 = this.width;
            }
        } else {
            if (this.x >= this.width) {
                this.x = -this.width;
            }
            if (this.x2 >= this.width) {
                this.x2 = -this.width;
            }
        }

        this.x -= this.speed;
        this.x2 -= this.speed;

        this.draw();
    }
}