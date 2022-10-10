//flower class.
class Flower {
    //construct flower data.
    constructor(x, y, radius, countdown) {
            this.x = x;
            this.y = y;
            this.r = radius;
            this.x1 = 0;
            this.y1 = 0;
            this.ang = 0;
            this.countdown = countdown;
            this.wind1 = false;
            this.wind2 = false;
            this.sway1 = 80;
            this.sway2 = 20;

        }
        //draw flower.
    draw() {

            //storke.
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.bezierCurveTo(this.x + this.sway2, this.y + 40, this.x - this.sway1, this.y + 40, this.x, this.y + 200);
            ctx.strokeStyle = "green";
            ctx.lineWidth = 6;
            ctx.stroke();
            ctx.lineWidth = 1;




            //create pettels.
            for (let i = 0; i < 360; i += 60) {
                ctx.beginPath();
                ctx.fillStyle = "yellow";
                ctx.arc((this.x + this.sway2) + this.x1, this.y + this.y1, this.r / 2, 0, Math.PI * 2);
                ctx.fill();
                //increment angle by PI/180.
                this.ang += (Math.PI / 180) * 60;
                this.x1 = this.r * Math.cos(this.ang);
                this.y1 = this.r * Math.sin(this.ang);
            }


            //create centre.
            ctx.beginPath();
            ctx.fillStyle = "red";
            ctx.arc(this.x + this.sway2, this.y, this.r, 0, Math.PI * 2);
            ctx.fill();



        }
        //update flower.
    update() {
        if (this.sway1 <= -80) {
            this.wind1 = true;
        }
        if (this.sway1 >= 80) {
            this.wind1 = false;
        }
        if (this.wind1) {
            this.sway1 += 0.5;
        } else {
            this.sway1 -= 0.5;
        }

        if (this.sway2 <= -20) {
            this.wind2 = true;
        }
        if (this.sway2 >= 20) {
            this.wind2 = false;
        }
        if (this.wind2) {
            this.sway2 += 0.25;
        } else {
            this.sway2 -= 0.25;
        }

        this.countdown -= 0.01;
        this.x += -player.velocity.x * 1.25;
        this.draw();
    }
}