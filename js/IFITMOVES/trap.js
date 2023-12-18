class Trap {
    constructor(x, y, trapColor) {
        this.x = x;
        this.y = y;
        this.trapColor = trapColor;
        this.size = 200;
        this.opacity = 1;
        this.pulseUp = false;
        this.on = true;
    }
    draw() {
        if (this.trapColor == "green") {
            ctx.drawImage(greenTrapBaseImage, floor.x + this.x - this.size / 2, floor.y + this.y - this.size / 2, this.size, this.size);
        }
        if (this.trapColor == "orange") {
            ctx.drawImage(orangeTrapBaseImage, floor.x + this.x - this.size / 2, floor.y + this.y - this.size / 2, this.size, this.size);
        }
        if (this.on) {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.filter = "blur(2px)";
            ctx.drawImage(trapImage, floor.x + this.x - this.size / 2, floor.y + this.y - this.size / 2, this.size, this.size);
            ctx.restore();
        }
        if (this.trapColor == "green") {
            if (!greenTrapKey1Placed) {
                ctx.drawImage(greenTrapKeyHole1Empty, floor.x + this.x - (this.size / 2) - 20, floor.y + this.y - (this.size / 2) - 20, 40, 40);
            } else {
                ctx.drawImage(greenTrapKeyHole1Filled, floor.x + this.x - (this.size / 2) - 20, floor.y + this.y - (this.size / 2) - 20, 40, 40);
            }
            if (!greenTrapKey2Placed) {
                ctx.drawImage(greenTrapKeyHole2Empty, floor.x + this.x + (this.size / 2) - 20, floor.y + this.y - (this.size / 2) - 20, 40, 40);
            } else {
                ctx.drawImage(greenTrapKeyHole2Filled, floor.x + this.x + (this.size / 2) - 20, floor.y + this.y - (this.size / 2) - 20, 40, 40);
            }
            if (!greenTrapKey3Placed) {
                ctx.drawImage(greenTrapKeyHole3Empty, floor.x + this.x - (this.size / 2) - 20, floor.y + this.y + (this.size / 2) - 20, 40, 40);
            } else {
                ctx.drawImage(greenTrapKeyHole3Filled, floor.x + this.x - (this.size / 2) - 20, floor.y + this.y + (this.size / 2) - 20, 40, 40);
            }
            if (!greenTrapKey4Placed) {
                ctx.drawImage(greenTrapKeyHole4Empty, floor.x + this.x + (this.size / 2) - 20, floor.y + this.y + (this.size / 2) - 20, 40, 40);
            } else {
                ctx.drawImage(greenTrapKeyHole4Filled, floor.x + this.x + (this.size / 2) - 20, floor.y + this.y + (this.size / 2) - 20, 40, 40);
            }
        }
        if (this.trapColor == "orange") {
            if (!orangeTrapKey1Placed) {
                ctx.drawImage(orangeTrapKeyHole1Empty, floor.x + this.x - (this.size / 2) - 20, floor.y + this.y - (this.size / 2) - 20, 40, 40);
            } else {
                ctx.drawImage(orangeTrapKeyHole1Filled, floor.x + this.x - (this.size / 2) - 20, floor.y + this.y - (this.size / 2) - 20, 40, 40);
            }
            if (!orangeTrapKey2Placed) {
                ctx.drawImage(orangeTrapKeyHole2Empty, floor.x + this.x + (this.size / 2) - 20, floor.y + this.y - (this.size / 2) - 20, 40, 40);
            } else {
                ctx.drawImage(orangeTrapKeyHole2Filled, floor.x + this.x + (this.size / 2) - 20, floor.y + this.y - (this.size / 2) - 20, 40, 40);
            }
            if (!orangeTrapKey3Placed) {
                ctx.drawImage(orangeTrapKeyHole3Empty, floor.x + this.x - (this.size / 2) - 20, floor.y + this.y + (this.size / 2) - 20, 40, 40);
            } else {
                ctx.drawImage(orangeTrapKeyHole3Filled, floor.x + this.x - (this.size / 2) - 20, floor.y + this.y + (this.size / 2) - 20, 40, 40);
            }
            if (!orangeTrapKey4Placed) {
                ctx.drawImage(orangeTrapKeyHole4Empty, floor.x + this.x + (this.size / 2) - 20, floor.y + this.y + (this.size / 2) - 20, 40, 40);
            } else {
                ctx.drawImage(orangeTrapKeyHole4Filled, floor.x + this.x + (this.size / 2) - 20, floor.y + this.y + (this.size / 2) - 20, 40, 40);
            }
        }

    }
    update() {
        if (this.pulseUp) {
            this.opacity += 0.006;
        } else {
            this.opacity -= 0.006;
        }
        if (this.opacity <= 0.2) {
            if (trapInView && this.on) {
                pulseSound.play();
            } else {
                pulseSound.currentTime = 0;
                pulseSound.pause();
            }
            this.pulseUp = true;
        }
        if (this.opacity >= 1) {
            this.pulseUp = false;
        }
        this.draw();
    }
}

function forTrap() {
    traps.forEach((trap, index1) => {

        if (trap.trapColor == "green") {
            let keyPlace1 = collisionDetection(player.x, player.y, player.r / 2, player.r / 2, (trap.x + floor.x) - trap.size / 2, (trap.y + floor.y) - trap.size / 2, trap.size / 8, trap.size / 8);
            let keyPlace2 = collisionDetection(player.x, player.y, player.r / 2, player.r / 2, (trap.x + floor.x) + trap.size / 2, (trap.y + floor.y) - trap.size / 2, trap.size / 8, trap.size / 8);
            let keyPlace3 = collisionDetection(player.x, player.y, player.r / 2, player.r / 2, (trap.x + floor.x) - trap.size / 2, (trap.y + floor.y) + trap.size / 2, trap.size / 8, trap.size / 8);
            let keyPlace4 = collisionDetection(player.x, player.y, player.r / 2, player.r / 2, (trap.x + floor.x) + trap.size / 2, (trap.y + floor.y) + trap.size / 2, trap.size / 8, trap.size / 8);

            if (keyPlace1 && gotGreenTrapKey1) {
                trapKeyFit.play();
                greenTrapKey1Placed = true;
                gotGreenTrapKey1 = false;
                backpackItems -= 1;
            }
            if (keyPlace2 && gotGreenTrapKey2) {
                trapKeyFit.play();
                greenTrapKey2Placed = true;
                gotGreenTrapKey2 = false;
                backpackItems -= 1;
            }
            if (keyPlace3 && gotGreenTrapKey3) {
                trapKeyFit.play();
                greenTrapKey3Placed = true;
                gotGreenTrapKey3 = false;
                backpackItems -= 1;
            }
            if (keyPlace4 && gotGreenTrapKey4) {
                trapKeyFit.play();
                greenTrapKey4Placed = true;
                gotGreenTrapKey4 = false;
                backpackItems -= 1;
            }
        }

        if (trap.trapColor == "orange") {
            let keyPlace1 = collisionDetection(player.x, player.y, player.r / 2, player.r / 2, (trap.x + floor.x) - trap.size / 2, (trap.y + floor.y) - trap.size / 2, trap.size / 8, trap.size / 8);
            let keyPlace2 = collisionDetection(player.x, player.y, player.r / 2, player.r / 2, (trap.x + floor.x) + trap.size / 2, (trap.y + floor.y) - trap.size / 2, trap.size / 8, trap.size / 8);
            let keyPlace3 = collisionDetection(player.x, player.y, player.r / 2, player.r / 2, (trap.x + floor.x) - trap.size / 2, (trap.y + floor.y) + trap.size / 2, trap.size / 8, trap.size / 8);
            let keyPlace4 = collisionDetection(player.x, player.y, player.r / 2, player.r / 2, (trap.x + floor.x) + trap.size / 2, (trap.y + floor.y) + trap.size / 2, trap.size / 8, trap.size / 8);

            if (keyPlace1 && gotOrangeTrapKey1) {
                trapKeyFit.play();
                orangeTrapKey1Placed = true;
                gotOrangeTrapKey1 = false;
                backpackItems -= 1;
            }
            if (keyPlace2 && gotOrangeTrapKey2) {
                trapKeyFit.play();
                orangeTrapKey2Placed = true;
                gotOrangeTrapKey2 = false;
                backpackItems -= 1;
            }
            if (keyPlace3 && gotOrangeTrapKey3) {
                trapKeyFit.play();
                orangeTrapKey3Placed = true;
                gotOrangeTrapKey3 = false;
                backpackItems -= 1;
            }
            if (keyPlace4 && gotOrangeTrapKey4) {
                trapKeyFit.play();
                orangeTrapKey4Placed = true;
                gotOrangeTrapKey4 = false;
                backpackItems -= 1;
            }
        }


        if (trap.trapColor == "green") {
            if (greenTrapKey1Placed && greenTrapKey2Placed && greenTrapKey3Placed && greenTrapKey4Placed && trap.on) {
                shutdown.play();
                trap.on = false;
                trapKeyCollected = false;
            }
        }

        if (trap.trapColor == "orange") {
            if (orangeTrapKey1Placed && orangeTrapKey2Placed && orangeTrapKey3Placed && orangeTrapKey4Placed && trap.on) {
                shutdown.play();
                trap.on = false;
                trapKeyCollected = false;
            }
        }




        let inTrap = collisionDetection(player.x, player.y, player.r / 2, player.r / 2, trap.x + floor.x, trap.y + floor.y, trap.size / 4, trap.size / 4);
        let walkInTrap = collisionDetection(player.x, player.y, player.r / 2, player.r / 2, trap.x + floor.x, trap.y + floor.y, trap.size / 3, trap.size / 3);
        if (!inTrap) {
            if (walkInTrap && trap.on) {
                let taper = 1;
                for (let i = 1; i >= 0.1; i -= 0.1) {
                    ctx.globalAlpha = i;
                    ctx.beginPath();
                    ctx.arc(player.x, player.y, 20 + (20 * taper), 0, Math.PI * 2);
                    ctx.fillStyle = "white";
                    ctx.fill();
                    taper += 0.1;
                }
                teleport.play();
                ctx.globalAlpha = 1;
                floor.x = player.x - trap.x;
                floor.y = player.y - trap.y;
            }
        }
        spiders.forEach((spider, index2) => {
            let hit = collisionDetection(trap.x + floor.x, trap.y + floor.y, trap.size / 2, trap.size / 2, spider.x + floor.x, spider.y + floor.y, spider.r / 4, spider.r / 4);
            //kill spider if trap active.
            if (hit && trap.on) {
                //only play splat sound when in view.
                let playSound = collisionDetection(spider.x, spider.y, spider.r / 2, spider.r / 2, player.x - floor.x, player.y - floor.y, c.width / 2, c.height / 2);
                if (playSound) {
                    splated.currentTime = 0;
                    splated.play();
                }
                spiderInView = false;
                spiderSplats.push(new SpiderSplat(spider.x, spider.y));
                spiders.splice(index2, 1);
            }


        });
        trap.update();
    });
    //cut trap sound if none in view or trap is off.
    let trapCount = 0;
    traps.forEach((trap) => {
        let playSound = collisionDetection(trap.x, trap.y, trap.size / 2, trap.size / 2, player.x - floor.x, player.y - floor.y, c.width / 2, c.height / 2);
        if (playSound && trap.on) {
            trapInView = true;
            return;
        } else {
            trapCount += 1;
        }
        if (trapCount == traps.length) {
            trapInView = false;
        }
    });








}