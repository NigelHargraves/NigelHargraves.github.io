//Text class.
class Text {
    //construct Text data.
    constructor(x, y, velocityX, velocityY, points, size, color, opacity) {
            this.x = x;
            this.y = y;
            this.velocityX = velocityX;
            this.velocityY = velocityY;
            this.points = points;
            this.size = size;
            this.color = color;
            this.opacity = opacity;
        }
        //draw text.
    draw() {
            ctx.font = this.size;
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.fillText(this.points, this.x, this.y);
            ctx.globalAlpha = 1;
        }
        //update text.
    update() {
        this.x += -player.velocity.x;
        this.y += this.velocityY;
        this.draw();
    }
}