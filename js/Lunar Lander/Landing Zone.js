class LZ {
    //construct landing zone data.
    constructor(x, y, length, color, points, used, textColor) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.color = color;
        this.points = points;
        this.used = used;
        this.textColor = textColor;
    }

    //draw landing zone.
    draw() {
        ctx2.beginPath();
        ctx2.moveTo(this.x, this.y);
        ctx2.lineTo(this.x + this.length, this.y);
        ctx2.strokeStyle = this.color;
        ctx2.stroke();
        ctx2.font = "20px Arial";
        //cover text after landing.
        if (this.used) {
            this.textColor = "black";
        }
        ctx2.fillStyle = this.textColor;
        ctx2.fillText(this.points, this.x + this.length / 4, this.y + 25);
    }
}