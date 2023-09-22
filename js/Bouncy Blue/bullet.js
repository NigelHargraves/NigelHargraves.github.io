//create bullet class.
class Bullet {
    //construct bullet data.
    constructor(x, y, velocity, color) {
        this.x = x;
        this.y = y;
        this.v = velocity;
        this.color = color
    }

    //draw bullet.
    draw() {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + 10, this.y);
        ctx.lineWidth = 4;
        ctx.strokeStyle = this.color;
        ctx.filter = "blur(2px)";
        ctx.stroke();
        ctx.restore();
    }

    //update bullet.
    update() {
        this.x += this.v;
        this.x += -player.velocity.x;
        this.draw();
    }
}

function forBullet() {
    bullets.forEach((bullet, index) => {
        if (bullet.x <= -c.width || bullet.x >= c.width * 2) {
            bullets.splice(index, 1);
        } else {
            bulletCheck(bullet, index);
        }
        bullet.update();
    });
}