class Door {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.horizontal = direction;
        this.on = true;
    }
    draw() {
        if (!this.horizontal) {
            ctx.drawImage(keyHoleRed, floor.x + this.x, floor.y + this.y, 100, 100);
            ctx.beginPath();
            ctx.moveTo(floor.x + this.x, floor.y + this.y);
            for (let i = 10; i <= 100; i += 10) {
                ctx.lineTo(this.x - 10 + Math.random() * 20 + floor.x, this.y + i + floor.y);
            }
            ctx.strokeStyle = "white";
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(floor.x + this.x, floor.y + this.y);
            for (let i = 10; i <= 100; i += 10) {
                ctx.lineTo(this.x - 10 + Math.random() * 20 + floor.x, this.y + i + floor.y);
            }
            ctx.strokeStyle = "white";
            ctx.stroke();
        }

    }
    update() {

        this.draw();
    }
}