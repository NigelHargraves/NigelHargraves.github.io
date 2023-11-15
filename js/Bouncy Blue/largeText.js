//largeText class.
class LargeText {
    //construct largeText data.
    constructor(x, y) {
            this.x = x;
            this.y = y;
            this.opacity = 1;
        }
        //draw largeText.
    draw() {
            ctx.font = "bold 80px Arial";
            ctx.fillStyle = "white";
            ctx.globalAlpha = this.opacity;
            ctx.fillText(clText + controlLevel, this.x - 330, this.y);
            ctx.globalAlpha = 1;
        }
        //update largeText.
    update() {
        this.draw();
    }
}

function forLargeText() {
    largeTexts.forEach((lt, index) => {
        if (lt.opacity < 0.1) {
            largeTexts = [];
        } else {
            lt.opacity -= 0.002;
        }
        lt.update();
    });
}