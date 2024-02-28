class YellowCell {
    constructor(x, y, cellNumber) {
        this.x = x;
        this.y = y;
        this.cellNumber = cellNumber;
        this.r = rangeYellow;
        this.velocity = { x: 0, y: 0 };
        this.angle = 0;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, celSize, 0, Math.PI * 2);
        ctx.fillStyle = 'yellow';
        ctx.fill();
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.draw();
    }
}

function forYellowCells() {


    yellowCells.forEach((YC1, index) => {
        yellowCells.forEach((YC2, index) => {
            if (YC1.cellNumber != YC2.cellNumber) {
                let collide = collisionDetection(YC1.x, YC1.y, cellImpactSize, YC2.x, YC2.y, cellImpactSize);
                if (collide) {
                    YC1.angle = Math.atan2(YC2.y - YC1.y, YC2.x - YC1.x);
                    YC1.velocity.x = -Math.cos(YC1.angle) * simulationSpeed;
                    YC1.velocity.y = -Math.sin(YC1.angle) * simulationSpeed;
                }
            }
        });
    });



    let repelRadius = 2;
    yellowCells.forEach((YC, index) => {
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
                let repel = collisionDetection(YC.x, YC.y, repelYellowRange, RC.x, RC.y, repelRedRange);
                if (!repel) {
                    YC.angle = Math.atan2(RC.y - YC.y, RC.x - YC.x);
                    YC.velocity.x = Math.cos(YC.angle) * simulationSpeed;
                    YC.velocity.y = Math.sin(YC.angle) * simulationSpeed;
                } else {
                    YC.angle = Math.atan2(RC.y - YC.y, RC.x - YC.x);
                    YC.velocity.x = -Math.cos(YC.angle) * simulationSpeed;
                    YC.velocity.y = -Math.sin(YC.angle) * simulationSpeed;
                }
            }
        });

        YC.update();
    });
}