//create floor class.
class Floor {
    //construct floor data.
    constructor(image) {
        this.x = c.width / 2.2;
        this.y = c.height / 2.3;
        this.width = playArea;
        this.height = playArea;
        this.image = image;
    }

    //draw floor.
    draw() {
        //walls.push(new Wall(2970, 500, 20, 1000, false)); //vertical.
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(telepad, this.x + (c.width * 0.02), this.y + (c.height * 0.02), 100, 100);
        if (switchDoorOn) {
            ctx.drawImage(footpadSwitchOff, this.x + 2860, this.y + 2, 100, 100);
        } else {
            ctx.drawImage(footpadSwitchOn, this.x + 2860, this.y + 2, 100, 100);
        }


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

            //player walk into area edge.
            if (!run) {
                if (this.x + 4 >= player.x - player.r / 2) {
                    this.x -= 1;
                } else if ((this.x - 4) + this.width <= player.x + player.r / 2) {
                    this.x += 1;
                } else if (this.y + 4 >= player.y - player.r / 2) {
                    this.y -= 1;
                } else if ((this.y - 4) + this.height <= player.y + player.r / 2) {
                    this.y += 1;
                }
            } else {
                //player run into area edge.
                if (this.x + 4 >= player.x - player.r / 2) {
                    this.x -= 2;
                } else if ((this.x - 4) + this.width <= player.x + player.r / 2) {
                    this.x += 2;
                } else if (this.y + 4 >= player.y - player.r / 2) {
                    this.y -= 2;
                } else if ((this.y - 4) + this.height <= player.y + player.r / 2) {
                    this.y += 2;
                }
            }
        }
        this.draw();
    }
}