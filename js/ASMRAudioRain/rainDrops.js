class RainDrop {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.gravity = 0.01;
        this.velocity = 0;
    }
    draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(this.x - 5, this.y + 5, this.x - 5, this.y + 10, this.x, this.y + 10);
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(this.x + 5, this.y + 5, this.x + 5, this.y + 10, this.x, this.y + 10);
        ctx.fillStyle = 'DeepSkyBlue';
        ctx.fill();
        ctx.strokeStyle = 'DeepSkyBlue';
        ctx.stroke();
    }
    update() {
        this.y += this.velocity;
        this.velocity += this.gravity;
        this.draw();
    }
}

function forRainDrops() {
    rainDrops.forEach((rd, index) => {
        if (rd.y + 8 >= canvas.height) {
            for (let i = 0; i < 6; i++) {
                splashes.push(new Splash(rd.x, rd.y, 'DeepSkyBlue', { x: Math.random() - 0.5, y: Math.random() - 1 }));
            }
            notesToPlay();
            noteToPlay++;
            if (noteToPlay == 13) {
                noteToPlay = 1;
            }
            rainDrops.splice(index, 1);
        }
        rd.update();
    });
}