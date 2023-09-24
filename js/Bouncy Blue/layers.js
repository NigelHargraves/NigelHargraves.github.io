//create layer class.
class Layer {
    //construct layer data.
    constructor(image, y, height, speed) {
        this.x = 0;
        this.y = y;
        this.width = 3000;
        this.height = height;
        this.x2 = this.width;
        this.image = image;
        this.speed = speed;
    }

    //draw layer.
    draw() {
        if (this.image == background4) {
            ctx4.drawImage(this.image, this.x, this.y, this.width, this.height);
            ctx4.drawImage(this.image, this.x2, this.y, this.width, this.height);
        } else if (this.image == background1) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
        } else if (this.image == background3) {
            ctx3.drawImage(this.image, this.x, this.y, this.width, this.height);
            ctx3.drawImage(this.image, this.x2, this.y, this.width, this.height);
        } else {
            ctx2.drawImage(this.image, this.x, this.y, this.width, this.height);
            ctx2.drawImage(this.image, this.x2, this.y, this.width, this.height);
        }
    }

    //update layer.
    update() {
        if (this.image == background4) {
            this.speed = player.velocity.x * 0.5;
        } else if (this.image == background3) {
            this.speed = player.velocity.x * 0.75;
        } else if (this.image == background1) {
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