//Text class.
class Text {
    //construct Text data.
    constructor(x, y, velocityX, velocityY, text, size, color, opacity, still) {
            this.x = x;
            this.y = y;
            this.velocityX = velocityX;
            this.velocityY = velocityY;
            this.text = text;
            this.size = size;
            this.color = color;
            this.opacity = opacity;
            this.still = still;
        }
        //draw text.
    draw() {
            ctx.font = this.size;
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.fillText(this.text, this.x, this.y);
            ctx.globalAlpha = 1;
        }
        //update text.
    update() {
        if (!this.still) {
            this.x += this.velocityX;
            this.x += -player.velocity.x;
        }
        this.y += this.velocityY;
        this.draw();
    }
}

function forText() {
    texts.forEach((text, index) => {
        if (text.opacity < 0.1) {
            texts.splice(index, 1);
        } else {
            text.opacity -= 0.002;
        }
        text.update();
    });
}