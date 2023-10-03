//sparks class.
class Spark {
    //construct sparks data.
    constructor(x, y, radius) {
            this.x = x;
            this.y = y;
            this.velocityX = Math.random() - 0.5;
            this.velocityY = Math.random() - 0.5;
            this.r = radius;
            this.alpha = 1;
        }
        //draw sparks.
    draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.drawImage(starMissile, this.x - this.r * 4, this.y - this.r * 4, this.r * 8, this.r * 8)
            ctx.restore();
        }
        //update sparks.
    update() {
        this.alpha -= 0.01;
        this.x += -player.velocity.x * 1.25;
        this.y += this.velocityY;
        this.draw();
    }
}

function forSpark() {
    sparks.forEach((spark, index) => {
        if (spark.alpha <= 0) {
            sparks.splice(index, 1);
        }
        spark.update();
    });
}