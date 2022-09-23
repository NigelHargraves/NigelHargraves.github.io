class MZ {
    //construct moon zone data.
    constructor(x, y, MZX, MZY, color) {
        this.x = x;
        this.y = y;
        this.mzx = MZX;
        this.mzy = MZY;
        this.color = color;
    }

    //draw moon zone.
    draw() {
        ctx2.beginPath();
        ctx2.moveTo(this.x, this.y);
        let ysize = Math.abs(this.y - this.mzy);
        for (
            let i = (this.mzx - this.x) / 20; i <= this.mzx - this.x; i += (this.mzx - this.x) / 20
        ) {
            if (this.y < this.mzy) {
                ctx2.lineTo(
                    i + this.x,
                    Math.random() * moonScapeSize + (this.y += ysize / 20)
                );
            } else {
                ctx2.lineTo(
                    i + this.x,
                    Math.random() * moonScapeSize + (this.y -= ysize / 20)
                );
            }
        }

        ctx2.lineTo(this.mzx, this.mzy);

        ctx2.strokeStyle = this.color;
        ctx2.stroke();
    }
}