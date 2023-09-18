//splat class.
class Splat {
    //construct splat data.
    constructor(x, y, x1, y1, ang, radius) {
            this.x = x;
            this.y = y;
            this.x1 = x1;
            this.y1 = y1;
            this.ang = ang;
            this.r = radius;
        }
        //draw splat.
    draw() {
            for (let i = 0; i < 360; i += 20) {
                ctx.beginPath();
                ctx.moveTo(this.x + this.x1, this.y + this.y1);
                this.x1 = (this.r + 10) * Math.cos(this.ang);
                this.y1 = (this.r + 10) * Math.sin(this.ang);
                ctx.lineTo(this.x + this.x1, this.y + this.y1);
                ctx.strokeStyle = "blue";
                ctx.lineWidth = 6;
                ctx.stroke();
                //increment angle by PI/180.
                this.ang += (Math.PI / 180) * 20;
                this.x1 = this.r * Math.cos(this.ang);
                this.y1 = this.r * Math.sin(this.ang);
            }
            ctx.lineWidth = 1;
        }
        //update splat.
    update() {
        this.x = x;
        this.y = player.y;
        this.draw();
    }
}