class Drone {
    constructor(dronex, droney, shadowx, shadowy) {
        this.dronex = dronex;
        this.droney = droney;
        this.shadowx = shadowx;
        this.shadowy = shadowy;
        this.size = 100;
        this.rotorAngle = 0;
        this.aimx = 0;
        this.aimy = 0;
    }
    draw() {

        ctx.save();
        ctx.globalAlpha = 0.4;
        ctx.translate(floor.x + this.shadowx, floor.y + this.shadowy);
        ctx.rotate(playerAngle + Math.PI / 2);
        ctx.drawImage(droneShadow, 0 - this.size / 2, 0 - this.size / 2, this.size, this.size);
        ctx.restore();


        ctx.save();
        ctx.translate(floor.x + this.dronex, floor.y + this.droney);
        ctx.rotate(playerAngle + Math.PI / 2);
        ctx.drawImage(drone, 0 - this.size / 2, 0 - this.size / 2, this.size, this.size);
        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.moveTo(-21, -21);
        ctx.lineTo(-20 + this.aimx, -20 + this.aimy);
        ctx.moveTo(21, -21);
        ctx.lineTo(20 + this.aimx, -20 + this.aimy);
        ctx.moveTo(21, 21);
        ctx.lineTo(20 + this.aimx, 20 + this.aimy);
        ctx.moveTo(-21, 21);
        ctx.lineTo(-20 + this.aimx, 20 + this.aimy);
        ctx.stroke()



        ctx.restore();


    }
    update() {
        //calculate aim point.
        this.aimx = this.size * Math.cos(this.rotorAngle) / 8;
        this.aimy = this.size * Math.sin(this.rotorAngle) / 8;
        this.rotorAngle += 2;
        if (this.rotorAngle >= Math.PI * 2) {
            this.rotorAngle = 0;
        }

        this.draw();
    }
}

function forDrone() {
    drones.forEach((drone, index) => {





        drone.update();
    });
}