//create bullet class.
class Bullet {
    //construct bullet data.
    constructor(x, y, velocity) {
        this.x = x;
        this.y = y;
        this.velocity = velocity;
    }



    //draw bullet.
    draw() {

        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();




    }


    //draw bullet.
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;



        this.draw();
    }


}