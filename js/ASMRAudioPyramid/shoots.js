class Shoot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocity = { x: 0, y: 0 };
        this.angle = 0;

    }
    draw() {

        ctx.beginPath();
        ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = "aqua";
        ctx.fill();

    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.angle = Math.atan2(center.y - this.y, center.x - this.x);
        this.velocity.x = Math.cos(this.angle) * 3;
        this.velocity.y = Math.sin(this.angle) * 3;
        this.draw();
    }
}

function forShoots() {

    shoots.forEach((shoot, index) => {
        let collide = collisionDetection(shoot.x, shoot.y, 1, 1, center.x, center.y, 2, 2);
        if (collide) {
            floatNotes.push(new FloatNote());
            shoots.splice(index, 1);
        }
        shoot.update();
    });

}