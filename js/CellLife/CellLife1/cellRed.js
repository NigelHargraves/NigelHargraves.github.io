class RedCell {
    constructor(x, y, cellNumber) {
        this.x = x;
        this.y = y;
        this.cellNumber = cellNumber;
        this.r = rangeRed;
        this.velocity = { x: 0, y: 0 };
        this.angle = 0;
        this.cellLife = 1000 + Math.random() * 1000;
        this.kill = false;
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
            if (this.cellNumber != RC.cellNumber) {
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
            }
        });
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        //mutate cell
        this.cellLife -= 1;
        if (this.cellLife < 0) {
            let mutate = Math.random();
            if (mutate > 0.999) {
                let changePerameter = Math.random();
                let changeUp = Math.random();
                if (changePerameter > 0.5) {
                    if (changeUp > 0.5) {
                        rangeRed += 1;
                    } else {
                        rangeRed -= 1;
                    }
                } else {
                    if (changeUp > 0.5) {
                        repelRedRange += 1;
                    } else {
                        repelRedRange -= 1;
                    }
                }
            }
            this.kill = true;
            if (repelRedRange < 5) {
                repelRedRange = 5;
            }
            if (rangeRed < repelRedRange + 1) {
                rangeRed = repelRedRange + 1;
            }
        }

        this.draw();
    }
}

function forRedCells() {
    redCells.forEach((RC, index) => {
        if (RC.kill) {
            let newNumber = RC.cellNumber;
            let newx = RC.x;
            let newy = RC.y;
            redCells.splice(index, 1);
            redCells.push(new RedCell(newx, newy, newNumber));
        }
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