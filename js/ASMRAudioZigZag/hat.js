class Hat {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.pole = { x: this.x, y: this.y - cTop };
        this.lineWidth = 4;
    }
    draw() {


        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.pole.x, this.pole.y);
        ctx.moveTo(this.pole.x, this.pole.y);
        ctx.lineTo(this.pole.x - cTop, this.pole.y + (cTop / 4));
        ctx.moveTo(this.pole.x - cTop, this.pole.y + (cTop / 4));
        ctx.lineTo(this.pole.x + cTop, this.pole.y + (cTop / 4));
        ctx.moveTo(this.pole.x + cTop, this.pole.y + (cTop / 4));
        ctx.lineTo(this.pole.x, this.pole.y);
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = 'skyblue';
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(this.x - cTop, (this.y - (cTop / 4) * 3) + 1);
        ctx.lineTo(this.x + cTop, (this.y - (cTop / 4) * 3) + 1);
        ctx.stroke();
        ctx.lineWidth = 1;
    }
    update() {
        if (this.lineWidth > 1) {
            this.lineWidth -= 0.2;
        }
        this.draw();
    }
}