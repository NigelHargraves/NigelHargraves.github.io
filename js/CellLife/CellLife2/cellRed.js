class RedCell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = rangeRed;
        this.velocity = { x: (Math.random() - 0.5) * 0.5, y: (Math.random() - 0.5) * 0.5 };
        this.angle = 0;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, celSize, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();
    }
    update() {

        redCells.forEach((RC, index) => {
            let opp = 0,
                adj = 0,
                hyp = 0;

            let collide = collisionDetection(this.x, this.y, cellImpactSize, RC.x, RC.y, cellImpactSize);
            if (collide) {
                opp = Math.pow(this.x - RC.x, 2);
                adj = Math.pow(this.y - RC.y, 2);
                if (opp < 0) opp *= -1;
                if (adj < 0) adj *= -1;
                hyp = Math.sqrt(opp + adj) / 10;
                this.angle = Math.atan2(RC.y - this.y, RC.x - this.x);
                this.velocity.x += -Math.cos(this.angle) * hyp;
                this.velocity.y += -Math.sin(this.angle) * hyp;
            }

        });
        this.x += this.velocity.x;
        this.y += this.velocity.y;




        this.draw();
    }
}

function forRedCells() {
    redCells.forEach((RC, redIndex) => {
        //rap around.
        if (RC.x < 0) {
            RC.x = canvas.width;
        }
        if (RC.x > canvas.width) {
            RC.x = 0;
        }
        if (RC.y < 0) {
            RC.y = canvas.height;
        }
        if (RC.y > canvas.height) {
            RC.y = 0;
        }
        yellowCells.forEach((YC, yellowIndex) => {
            let attract = collisionDetection(RC.x, RC.y, RC.r, YC.x, YC.y, YC.r);
            if (attract) {
                RC.angle = Math.atan2(YC.y - RC.y, YC.x - RC.x);
                RC.velocity.x = Math.cos(RC.angle) * simulationSpeed;
                RC.velocity.y = Math.sin(RC.angle) * simulationSpeed;
            }
            let collide = collisionDetection(RC.x, RC.y, 1, YC.x, YC.y, 1);
            if (collide) {
                amoebas.push(new Amoeba(RC.x, RC.y));
                redCells.splice(redIndex, 1);
                yellowCells.splice(yellowIndex, 1);
            }
        });

        RC.update();
    });
}