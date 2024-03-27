//create Star class.
class Star {
    //construct Star data.
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        ctx.save();
        ctx.translate(center.x, center.y);
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.restore();
    }

    //update Star.
    update() {
        this.x *= 1.001;
        this.y *= 1.001;
        this.draw();
    }
}

function forStars() {
    stars.forEach((star, index) => {
        if (star.x > canvas.width / 2 || star.x < -canvas.width / 2) {
            stars.splice(index, 1);
        }
        if (star.y > canvas.height / 2 || star.y < -canvas.height / 2) {
            stars.splice(index, 1);
        }
        star.update();
    });
}