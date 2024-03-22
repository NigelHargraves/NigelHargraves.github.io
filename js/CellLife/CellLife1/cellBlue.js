class BlueCell {
    constructor(x, y, cellNumber) {
        this.x = x;
        this.y = y;
        this.cellNumber = cellNumber;
        this.r = rangeBlue;
        this.velocity = { x: 0, y: 0 };
        this.angle = 0;
        this.cellLife = 1000 + Math.random() * 1000;
        this.kill = false;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, celSize, 0, Math.PI * 2);
        ctx.fillStyle = 'cyan';
        ctx.fill();
    }
    update() {
        blueCells.forEach((BC, index) => {
            let opp = 0,
                adj = 0,
                hyp = 0;
            if (this.cellNumber != BC.cellNumber) {
                let collide = collisionDetection(this.x, this.y, cellImpactSize, BC.x, BC.y, cellImpactSize);
                if (collide) {
                    opp = Math.pow(this.x - BC.x, 2);
                    adj = Math.pow(this.y - BC.y, 2);
                    if (opp < 0) opp *= -1;
                    if (adj < 0) adj *= -1;
                    hyp = Math.sqrt(opp + adj) / 10;
                    this.angle = Math.atan2(BC.y - this.y, BC.x - this.x);
                    this.velocity.x += -Math.cos(this.angle) * hyp;
                    this.velocity.y += -Math.sin(this.angle) * hyp;
                }
            }
        });
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        //mutate cell
        this.cellLife -= 1;
        if (this.cellLife < 0) {
            let mutate = Math.random();
            if (mutate > 0.999999) {
                let changePerameter = Math.random();
                let changeUp = Math.random();
                if (changePerameter > 0.5) {
                    if (changeUp > 0.5) {
                        rangeBlue += 1;
                    } else {
                        rangeBlue -= 1;
                    }
                } else {
                    if (changeUp > 0.5) {
                        repelBlueRange += 1;
                    } else {
                        repelBlueRange -= 1;
                    }
                }
            }
            this.kill = true;
            if (repelBlueRange < 5) {
                repelBlueRange = 5;
            }
            if (rangeBlue < repelBlueRange + 1) {
                rangeBlue = repelBlueRange + 1;
            }
        }

        this.draw();
    }
}

function forBlueCells() {
    blueCells.forEach((BC, index) => {
        if (BC.kill) {
            let newNumber = BC.cellNumber;
            let newx = BC.x;
            let newy = BC.y;
            blueCells.splice(index, 1);
            blueCells.push(new BlueCell(newx, newy, newNumber));
        }
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
                let repel = collisionDetection(BC.x, BC.y, repelBlueRange, RC.x, RC.y, repelRedRange);
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
            let repel = collisionDetection(BC.x, BC.y, repelBlueRange, YC.x, YC.y, repelYellowRange);
            if (repel) {
                BC.angle = Math.atan2(YC.y - BC.y, YC.x - BC.x);
                BC.velocity.x = -Math.cos(BC.angle) * simulationSpeed;
                BC.velocity.y = -Math.sin(BC.angle) * simulationSpeed;
            }
        });
        BC.update();
    });
}