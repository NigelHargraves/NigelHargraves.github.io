class RedCell {
    constructor(x, y, cellNumber) {
        this.x = x;
        this.y = y;
        this.cellNumber = cellNumber;
        this.r = rangeRed;
        this.velocity = { x: 0, y: 0 };
        this.angle = 0;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, celSize, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.draw();
    }
}

function forRedCells() {


    redCells.forEach((RC1, index) => {
        redCells.forEach((RC2, index) => {
            if (RC1.cellNumber != RC2.cellNumber) {
                let collide = collisionDetection(RC1.x, RC1.y, cellImpactSize, RC2.x, RC2.y, cellImpactSize);
                if (collide) {
                    RC1.angle = Math.atan2(RC2.y - RC1.y, RC2.x - RC1.x);
                    RC1.velocity.x = -Math.cos(RC1.angle) * simulationSpeed;
                    RC1.velocity.y = -Math.sin(RC1.angle) * simulationSpeed;
                }
            }
        });
    });


    let repelRadius = 2;
    redCells.forEach((RC, index) => {
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
        yellowCells.forEach((YC, index) => {
            let attract = collisionDetection(RC.x, RC.y, RC.r, YC.x, YC.y, YC.r);
            if (attract) {
                let repel = collisionDetection(RC.x, RC.y, repelRedRange, YC.x, YC.y, repelYellowRange);
                if (!repel) {
                    RC.angle = Math.atan2(YC.y - RC.y, YC.x - RC.x);
                    RC.velocity.x = Math.cos(RC.angle) * simulationSpeed;
                    RC.velocity.y = Math.sin(RC.angle) * simulationSpeed;
                } else {
                    RC.angle = Math.atan2(YC.y - RC.y, YC.x - RC.x);
                    RC.velocity.x = -Math.cos(RC.angle) * simulationSpeed;
                    RC.velocity.y = -Math.sin(RC.angle) * simulationSpeed;
                }
            }
        });

        RC.update();
    });
}