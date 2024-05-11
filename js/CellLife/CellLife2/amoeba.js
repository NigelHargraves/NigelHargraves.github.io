class Amoeba {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.lifeSpan = 10000;
        this.amoebaSpeed = 0.1;
        this.size = 1;
        this.r = 3;
        this.radius = 8;
        this.velocity = { x: 0, y: 0 };
        this.angle = 0;
        this.angleOpp = 0;
        this.point = { x: 0, y: 0 };
        this.paddle = 0;
        this.paddleUp = true;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size / 4, 0, Math.PI * 2);
        ctx.fillStyle = 'cyan';
        ctx.fill();
        ctx.arc(this.x + this.point.x, this.y + this.point.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = 'aquamarine';
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.point.x, this.y + this.point.y);
        ctx.strokeStyle = 'aquamarine';
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = 'yellow';
        ctx.stroke();
    }
    update() {

        //avoid amoeba collision.
        amoebas.forEach((am, index) => {
            let opp = 0,
                adj = 0,
                hyp = 0;

            let collide = collisionDetection(this.x, this.y, this.r, am.x, am.y, am.r);
            if (collide) {
                opp = Math.pow(this.x - am.x, 2);
                adj = Math.pow(this.y - am.y, 2);
                if (opp < 0) opp *= -1;
                if (adj < 0) adj *= -1;
                hyp = Math.sqrt(opp + adj) / 100;
                this.angle = Math.atan2(am.y - this.y, am.x - this.x);
                am.angle = Math.atan2(this.y - am.y, this.x - am.x);
                this.velocity.x += -Math.cos(this.angle) * hyp;
                this.velocity.y += -Math.sin(this.angle) * hyp;
                am.velocity.x += -Math.cos(am.angle) * hyp;
                am.velocity.y += -Math.sin(am.angle) * hyp;
            }

        });

        this.x += this.velocity.x;
        this.y += this.velocity.y;



        if (this.velocity.x > 0) {
            this.velocity.x -= friction;
        } else {
            this.velocity.x += friction;
        }



        if (this.velocity.y > 0) {
            this.velocity.y -= friction;
        } else {
            this.velocity.y += friction;
        }

        if (this.lifeSpan > 0) {
            this.lifeSpan -= 1;
        }

        this.draw();
    }
}

function forAmoebas() {
    amoebas.forEach((am, amIndex) => {
        //rap around.
        if (am.x < 0) {
            am.x = canvas.width;
        }
        if (am.x > canvas.width) {
            am.x = 0;
        }
        if (am.y < 0) {
            am.y = canvas.height;
        }
        if (am.y > canvas.height) {
            am.y = 0;
        }

        //hunt red cell.
        redCells.forEach((RC, redIndex) => {
            let attract = collisionDetection(am.x, am.y, am.r + 10, RC.x, RC.y, RC.r + 10);
            if (attract) {
                am.angle = Math.atan2(RC.y - am.y, RC.x - am.x);
                if (am.paddleUp) {
                    am.paddle += 0.02;
                } else {
                    am.paddle -= 0.02;
                }
                if (am.paddle >= 0.2) {
                    am.paddleUp = false;
                }
                if (am.paddle <= -0.2) {
                    am.paddleUp = true;
                }
                am.angleOpp = am.angle + (Math.PI + am.paddle);
                am.velocity.x = Math.cos(am.angle) * (simulationSpeed + am.amoebaSpeed);
                am.velocity.y = Math.sin(am.angle) * (simulationSpeed + am.amoebaSpeed);
                am.point.x = am.radius * Math.cos(am.angleOpp);
                am.point.y = am.radius * Math.sin(am.angleOpp);
            }
            //eat red cell.
            let collide = collisionDetection(RC.x, RC.y, 1, am.x, am.y, am.r);
            if (collide) {
                redCells.splice(redIndex, 1);
                am.size += 1;
                am.r = am.size + 3;
                am.amoebaSpeed += 0.1;
                am.lifeSpan -= 100;
                am.radius = am.r * 2;
            }
        });

        //hunt yellow cell.
        yellowCells.forEach((YC, yellowIndex) => {
            let attract = collisionDetection(am.x, am.y, am.r + 10, YC.x, YC.y, YC.r + 10);
            if (attract) {
                am.angle = Math.atan2(YC.y - am.y, YC.x - am.x);
                if (am.paddleUp) {
                    am.paddle += 0.02;
                } else {
                    am.paddle -= 0.02;
                }
                if (am.paddle >= 0.2) {
                    am.paddleUp = false;
                }
                if (am.paddle <= -0.2) {
                    am.paddleUp = true;
                }
                am.angleOpp = am.angle + (Math.PI + am.paddle);
                am.velocity.x = Math.cos(am.angle) * (simulationSpeed + am.amoebaSpeed);
                am.velocity.y = Math.sin(am.angle) * (simulationSpeed + am.amoebaSpeed);
                am.point.x = am.radius * Math.cos(am.angleOpp);
                am.point.y = am.radius * Math.sin(am.angleOpp);
            }
            //eat yellow cell.
            let collide = collisionDetection(YC.x, YC.y, 1, am.x, am.y, am.r);
            if (collide) {
                yellowCells.splice(yellowIndex, 1);
                am.size += 1;
                am.r = am.size + 3;
                am.amoebaSpeed += 0.1;
                am.lifeSpan -= 100;
                am.radius = am.r * 2;
            }
        });

        //end life.
        if (am.lifeSpan <= 0) {
            if (redCells.length < yellowCells.length) {
                for (let i = 0; i < am.r / 2; i++) {
                    let x = (Math.random() - 0.5) * (am.r * 2);
                    let y = (Math.random() - 0.5) * (am.r * 2);
                    redCells.push(new RedCell(am.x + x, am.y + y));
                }
            } else {
                for (let i = 0; i < am.r / 2; i++) {
                    let x = (Math.random() - 0.5) * (am.r * 2);
                    let y = (Math.random() - 0.5) * (am.r * 2);
                    yellowCells.push(new YellowCell(am.x + x, am.y + y));
                }
            }
            amoebas.splice(amIndex, 1)
        }



        am.update();
    });
}