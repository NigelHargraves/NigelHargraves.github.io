class YellowCell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = rangeYellow;
        this.velocity = { x: (Math.random() - 0.5) * 0.5, y: (Math.random() - 0.5) * 0.5 };
        this.angle = 0;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, celSize, 0, Math.PI * 2);
        ctx.fillStyle = 'yellow';
        ctx.fill();
    }
    update() {
        yellowCells.forEach((YC, index) => {
            let opp = 0,
                adj = 0,
                hyp = 0;

            let collide = collisionDetection(this.x, this.y, cellImpactSize, YC.x, YC.y, cellImpactSize);
            if (collide) {
                opp = Math.pow(this.x - YC.x, 2);
                adj = Math.pow(this.y - YC.y, 2);
                if (opp < 0) opp *= -1;
                if (adj < 0) adj *= -1;
                hyp = Math.sqrt(opp + adj) / 10;
                this.angle = Math.atan2(YC.y - this.y, YC.x - this.x);
                this.velocity.x += -Math.cos(this.angle) * hyp;
                this.velocity.y += -Math.sin(this.angle) * hyp;
            }

        });
        this.x += this.velocity.x;
        this.y += this.velocity.y;



        this.draw();
    }
}

function forYellowCells() {
    yellowCells.forEach((YC, index) => {
        //rap around.
        if (YC.x < 0) {
            YC.x = canvas.width;
        }
        if (YC.x > canvas.width) {
            YC.x = 0;
        }
        if (YC.y < 0) {
            YC.y = canvas.height;
        }
        if (YC.y > canvas.height) {
            YC.y = 0;
        }
        redCells.forEach((RC, index) => {
            let attract = collisionDetection(YC.x, YC.y, YC.r, RC.x, RC.y, RC.r);
            if (attract) {
                YC.angle = Math.atan2(RC.y - YC.y, RC.x - YC.x);
                YC.velocity.x = Math.cos(YC.angle) * simulationSpeed;
                YC.velocity.y = Math.sin(YC.angle) * simulationSpeed;
            }
        });

        YC.update();
    });
}