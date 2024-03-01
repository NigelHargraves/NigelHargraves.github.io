class YellowCell {
    constructor(x, y, cellNumber) {
        this.x = x;
        this.y = y;
        this.cellNumber = cellNumber;
        this.r = rangeYellow;
        this.velocity = { x: 0, y: 0 };
        this.angle = 0;
        this.cellLife = 1000 + Math.random() * 10000;
        this.kill = false;
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
            if (this.cellNumber != YC.cellNumber) {
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
                        rangeYellow += 0.5;
                    } else {
                        rangeYellow -= 0.5;
                    }
                    if (rangeYellow < repelYellowRange + 1) {
                        rangeYellow = repelYellowRange + 1;
                    }
                } else {
                    if (changeUp > 0.5) {
                        repelYellowRange += 0.5;
                    } else {
                        repelYellowRange -= 0.5;
                    }
                    if (repelYellowRange < 5) {
                        repelYellowRange = 5;
                    }
                }
            }
            this.kill = true;
        }

        this.draw();
    }
}

function forYellowCells() {
    yellowCells.forEach((YC, index) => {
        if (YC.kill) {
            let newNumber = YC.cellNumber;
            yellowCells.splice(index, 1);
            yellowCells.push(new YellowCell(Math.random() * canvas.width, Math.random() * canvas.height, newNumber));
        }
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