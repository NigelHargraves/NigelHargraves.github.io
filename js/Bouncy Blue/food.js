//Food class.
class Food {
    //construct food data.
    constructor(x, y, velocityX, velocityY, radius) {
            this.x = x;
            this.y = y;
            this.velocityX = velocityX;
            this.velocityY = velocityY;
            this.r = radius;
        }
        //draw food.
    draw() {

            ctx.drawImage(blueberry, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);




            /*ctx.beginPath();
            ctx.arc(this.x, this.y, this.r + 2, 0, Math.PI * 2);
            ctx.strokeStyle = "#FDFEFF";
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = "darkblue";
            ctx.fill();*/
        }
        //update food.
    update() {
        this.x += -player.velocity.x + this.velocityX;
        this.y += this.velocityY;
        this.draw();
    }
}