class Drone {
    constructor(dronex, droney, shadowx, shadowy) {
        this.dronex = dronex;
        this.droney = droney;
        this.shadowx = shadowx;
        this.shadowy = shadowy;
        this.size = 100;
        this.rotorAngle = 0;
        this.droneAngle = Math.PI / 2;
        this.turn = false;
        this.turnRight = false;
        this.turnTime = 200;
        this.rotorAimx = 0;
        this.rotorAimy = 0;
        this.droneAimx = 0;
        this.droneAimy = 0;
        this.speedLimit = 0;
        this.speed = 60;
        this.changeSpeed = false;
        this.speedTimer = 400;
        this.fire = false;
        this.damage = 110;
        this.damageTimer = 100;
        this.showDamage = false;
    }
    draw() {




        ctx.save();
        ctx.globalAlpha = 0.4;
        ctx.translate(floor.x + this.shadowx, floor.y + this.shadowy);
        ctx.rotate(this.droneAngle + Math.PI / 2);
        ctx.drawImage(droneShadow, 0 - this.size / 2, 0 - this.size / 2, this.size, this.size);
        ctx.restore();


        if (this.fire) {
            ctx.save();
            ctx.globalAlpha = Math.random();
            ctx.filter = "blur(1px)";
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "red";
            ctx.moveTo(this.dronex + floor.x, this.droney + floor.y);
            ctx.lineTo(player.x, player.y);
            ctx.stroke();
            ctx.restore();
        }




        ctx.save();
        ctx.translate(floor.x + this.dronex, floor.y + this.droney);
        ctx.rotate(this.droneAngle + Math.PI / 2);
        ctx.drawImage(drone, 0 - this.size / 2, 0 - this.size / 2, this.size, this.size);
        ctx.beginPath();
        ctx.strokeStyle = "darkred";
        ctx.moveTo(-21, -21);
        ctx.lineTo(-20 + this.rotorAimx, -20 + this.rotorAimy);
        ctx.moveTo(21, -21);
        ctx.lineTo(20 + this.rotorAimx, -20 + this.rotorAimy);
        ctx.moveTo(21, 21);
        ctx.lineTo(20 + this.rotorAimx, 20 + this.rotorAimy);
        ctx.moveTo(-21, 21);
        ctx.lineTo(-20 + this.rotorAimx, 20 + this.rotorAimy);
        ctx.stroke();



        ctx.restore();

        if (this.showDamage) {
            ctx.fillStyle = "red";
            ctx.fillRect(floor.x + this.dronex - this.size / 2, floor.y + this.droney - this.size / 2, this.damage, 10);

            this.damageTimer -= 1;
        }

        if (this.damageTimer <= 0) {
            this.showDamage = false;
            this.damageTimer = 100;
        }

    }
    update() {



        let speedChange = Math.random();
        if (speedChange > 0.999 && !this.changeSpeed) {
            this.changeSpeed = true;
            this.speedLimit = (Math.random() * 10) + 10;
        }

        if (this.changeSpeed) {
            this.speedTimer -= 1;
        }

        if (this.speedTimer <= 0) {
            this.changeSpeed = false;
            this.speedTimer = 400;
            this.speedLimit = (Math.random() * 30) + 30;
        }

        if (this.speed != this.speedLimit) {
            if (this.speed < this.speedLimit) {
                this.speed += 0.1;
            } else {
                this.speed -= 0.1;
            }
        }






        let droneTurn = Math.random();
        if (droneTurn > 0.999 && !this.turn) {
            this.turn = true;
            let droneDirection = Math.random();
            if (droneDirection >= 0.5) {
                this.turnRight = true;

            } else {
                this.turnRight = false;

            }
        }

        if (this.turn) {
            this.turnTime -= 1;
            if (this.turnRight) {
                this.droneAngle += 0.01;
            } else {
                this.droneAngle -= 0.01;
            }
            if (this.turnTime <= 0) {
                this.turn = false;
                this.turnTime = 200;
            }
        }





        //calculate rotor draw point.
        this.rotorAimx = this.size * Math.cos(this.rotorAngle) / 8;
        this.rotorAimy = this.size * Math.sin(this.rotorAngle) / 8;
        this.rotorAngle += 2;
        if (this.rotorAngle >= Math.PI * 2) {
            this.rotorAngle = 0;
        }

        //calculate drone aim point.
        this.droneAimx = this.size * Math.cos(this.droneAngle) / 2;
        this.droneAimy = this.size * Math.sin(this.droneAngle) / 2;



        this.dronex -= this.droneAimx / this.speed;
        this.droney -= this.droneAimy / this.speed;
        this.shadowx -= this.droneAimx / this.speed;
        this.shadowy -= this.droneAimy / this.speed;


        //drone flies out of range return to opposite.
        if (this.dronex <= 0 - c.height) {
            this.dronex = 0 + playArea + c.height;
            this.shadowx = 0 + playArea + c.height;
        }
        if (this.dronex > playArea + c.height) {
            this.dronex = 0 - c.height;
            this.shadowx = 0 - c.height;
        }
        if (this.droney <= 0 - c.height) {
            this.droney = 0 + playArea + c.height;
            this.shadowy = 0 + playArea + c.height + 50;
        }
        if (this.droney > playArea + c.height) {
            this.droney = 0 - c.height;
            this.shadowy = 0 - c.height + 50;
        }




        this.draw();
    }
}

function forDrone() {
    let laserNotFired = 0;
    drones.forEach((drone, index) => {
        let collide = collisionDetection(player.x - floor.x, player.y - floor.y, player.r, player.r, drone.dronex, drone.droney, 200, 200);
        if (collide && playerVisible) {
            laserSound.play();
            drone.fire = true;
            laserFlash = true;
            health -= 0.1;
        } else {
            drone.fire = false;
            laserNotFired += 1;
        }
        if (laserNotFired == drones.length) {
            laserSound.currentTime = 0;
            laserSound.pause();
        }
        drone.update();
    });

    //cut drone sound if none in view.
    let droneCount = 0;
    drones.forEach((drone) => {
        let playSound = collisionDetection(drone.dronex, drone.droney, drone.size / 2, drone.size / 2, player.x - floor.x, player.y - floor.y, c.width / 2, c.height / 2);
        if (playSound) {
            droneInView = true;
            return;
        }
        droneCount += 1;
        if (droneCount == drones.length) {
            droneInView = false;
        }
    });

    if (droneInView) {
        droneNoise.play();
    } else {
        droneNoise.currentTime = 0;
        droneNoise.pause();
    }
}