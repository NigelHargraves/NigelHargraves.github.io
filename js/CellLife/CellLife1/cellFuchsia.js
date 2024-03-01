class FuchsiaCell {
    constructor(x, y, cellNumber) {
        this.x = x;
        this.y = y;
        this.cellNumber = cellNumber;
        this.r = rangeFuchsia;
        this.velocity = { x: 0, y: 0 };
        this.angle = 0;
        this.cellLife = 1000 + Math.random() * 10000;
        this.kill = false;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, celSize, 0, Math.PI * 2);
        ctx.fillStyle = 'fuchsia';
        ctx.fill();
    }
    update() {
        fuchsiaCells.forEach((FC, index) => {
            let opp = 0,
                adj = 0,
                hyp = 0;
            if (this.cellNumber != FC.cellNumber) {
                let collide = collisionDetection(this.x, this.y, cellImpactSize, FC.x, FC.y, cellImpactSize);
                if (collide) {
                    opp = Math.pow(this.x - FC.x, 2);
                    adj = Math.pow(this.y - FC.y, 2);
                    if (opp < 0) opp *= -1;
                    if (adj < 0) adj *= -1;
                    hyp = Math.sqrt(opp + adj) / 10;
                    this.angle = Math.atan2(FC.y - this.y, FC.x - this.x);
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
                        rangeFuchsia += 0.5;
                    } else {
                        rangeFuchsia -= 0.5;
                    }
                    if (rangeFuchsia < repelFuchsiaRange + 1) {
                        rangeFuchsia = repelFuchsiaRange + 1;
                    }
                } else {
                    if (changeUp > 0.5) {
                        repelFuchsiaRange += 0.5;
                    } else {
                        repelFuchsiaRange -= 0.5;
                    }
                    if (repelFuchsiaRange < 5) {
                        repelFuchsiaRange = 5;
                    }
                }
            }
            this.kill = true;
        }

        this.draw();
    }
}

function forFuchsiaCells() {
    fuchsiaCells.forEach((FC, index) => {
        if (FC.kill) {
            let newNumber = FC.cellNumber;
            fuchsiaCells.splice(index, 1);
            fuchsiaCells.push(new FuchsiaCell(Math.random() * canvas.width, Math.random() * canvas.height, newNumber));
        }
        if (FC.x < 0) {
            FC.x = canvas.width;
        }
        if (FC.x > canvas.width) {
            FC.x = 0;
        }
        if (FC.y < 0) {
            FC.y = canvas.height;
        }
        if (FC.y > canvas.height) {
            FC.y = 0;
        }
        redCells.forEach((RC, index) => {
            let attract = collisionDetection(FC.x, FC.y, FC.r, RC.x, RC.y, RC.r);
            if (attract) {
                let repel = collisionDetection(FC.x, FC.y, repelFuchsiaRange, RC.x, RC.y, repelBlueRange);
                if (!repel) {
                    FC.angle = Math.atan2(RC.y - FC.y, RC.x - FC.x);
                    FC.velocity.x = Math.cos(FC.angle) * simulationSpeed;
                    FC.velocity.y = Math.sin(FC.angle) * simulationSpeed;
                } else {
                    FC.angle = Math.atan2(RC.y - FC.y, RC.x - FC.x);
                    FC.velocity.x = -Math.cos(FC.angle) * simulationSpeed;
                    FC.velocity.y = -Math.sin(FC.angle) * simulationSpeed;
                }
            }
        });

        FC.update();
    });
}