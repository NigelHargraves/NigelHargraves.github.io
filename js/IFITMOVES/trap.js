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
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.filter = "blur(4px)";
        ctx.drawImage(trapImage, floor.x + this.x - this.size / 2, floor.y + this.y - this.size / 2, this.size, this.size);
        ctx.restore();
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

    }
    update() {
        if (this.pulseUp) {
            this.opacity += 0.006;
        } else {
            this.opacity -= 0.006;
        }
        if (this.opacity <= 0.2) {
            if (trapInView) {
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
    traps.forEach((trap, index) => {

        trap.update();
    });
}