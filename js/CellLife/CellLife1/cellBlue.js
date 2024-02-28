class BlueCell {
    constructor(x, y, cellNumber) {
        this.x = x;
        this.y = y;
        this.cellNumber = cellNumber;
        this.r = rangeBlue;
        this.velocity = { x: 0, y: 0 };
        this.angle = 0;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, celSize, 0, Math.PI * 2);
        ctx.fillStyle = 'cyan';
        ctx.fill();
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.draw();
    }
}

function forBlueCells() {


    blueCells.forEach((BC1, index) => {
        blueCells.forEach((BC2, index) => {
            if (BC1.cellNumber != BC2.cellNumber) {
                let collide = collisionDetection(BC1.x, BC1.y, cellImpactSize, BC2.x, BC2.y, cellImpactSize);
                if (collide) {
                    BC1.angle = Math.atan2(BC2.y - BC1.y, BC2.x - BC1.x);
                    BC1.velocity.x = -Math.cos(BC1.angle) * simulationSpeed;
                    BC1.velocity.y = -Math.sin(BC1.angle) * simulationSpeed;
                }
            }
        });
    });



    blueCells.forEach((BC, index) => {
        if (BC.x < 0) {
            BC.x = canvas.width;
        }
        if (BC.x > canvas.width) {
            BC.x = 0;
        }
        if (BC.y < 0) {
            BC.y = canvas.height;
        }
        if (BC.y > canvas.height) {
            BC.y = 0;
        }
        redCells.forEach((RC, index) => {
            let attract = collisionDetection(BC.x, BC.y, BC.r, RC.x, RC.y, RC.r);
            if (attract) {
                let repel = collisionDetection(BC.x, BC.y, repelBlueRange, RC.x, RC.y, repelYellowRange);
                if (!repel) {
                    BC.angle = Math.atan2(RC.y - BC.y, RC.x - BC.x);
                    BC.velocity.x = Math.cos(BC.angle) * simulationSpeed;
                    BC.velocity.y = Math.sin(BC.angle) * simulationSpeed;
                } else {
                    BC.angle = Math.atan2(RC.y - BC.y, RC.x - BC.x);
                    BC.velocity.x = -Math.cos(BC.angle) * simulationSpeed;
                    BC.velocity.y = -Math.sin(BC.angle) * simulationSpeed;
                }
            }
        });
        yellowCells.forEach((YC, index) => {
            let repel = collisionDetection(BC.x, BC.y, repelRedRange, YC.x, YC.y, repelBlueRange);
            if (repel) {
                BC.angle = Math.atan2(YC.y - BC.y, YC.x - BC.x);
                BC.velocity.x = -Math.cos(BC.angle) * simulationSpeed;
                BC.velocity.y = -Math.sin(BC.angle) * simulationSpeed;
            }
        });
        BC.update();
    });
}