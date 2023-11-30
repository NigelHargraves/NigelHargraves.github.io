//create spider class.
class Spider {
    //construct spider data.
    constructor(image, x, y, velocity) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.spriteLength = 256;
        this.r = this.spriteLength;
        this.walkX = 0;
        this.walkY = 0;
        this.frameCount = 0;
    }



    //draw spider.
    draw() {

        ctx.drawImage(this.image, this.walkX, this.walkY, this.spriteLength, this.spriteLength,
            this.x - this.r / 2, this.y - this.r / 2, this.r, this.r);



        if (this.frameCount >= 5) {

            if (this.walkX == this.spriteLength * 3) {
                this.walkX = 0;
                this.walkY += this.spriteLength;
            } else {
                this.walkX += this.spriteLength;

            }


            if (this.walkY == this.spriteLength * 4) {
                this.frameCount = 0;
                this.walkY = 0;
            }



            this.frameCount = 0;
        } else {
            this.frameCount += 1;
        }
    }


    //draw spider.
    update() {

        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (moveForward && !moveBugs) {
            this.x -= player.aimx / speed;
            this.y -= player.aimy / speed;
        }

        this.draw();
    }


}