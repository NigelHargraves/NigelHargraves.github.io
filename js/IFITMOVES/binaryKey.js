class BinaryKey {
    constructor(x, y, number) {
        this.x = x;
        this.y = y;
        this.number = number;
        this.opacity = 0;
        this.materialize = false;
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(binaryPad, floor.x + this.x - 20, floor.y + this.y - 20, 40, 40);
        ctx.restore();
    }
    update() {
        if (materialize) {
            if (this.materialize) {
                if (materializeNumber == this.number) {
                    this.opacity += 0.005;
                }
            }
            if (this.opacity >= 1 && this.materialize) {
                binaryFade.currentTime = 0;
                binaryFade.pause();
                this.materialize = false;
                this.firstNumber += 1;
                materializeNumber += 1;
            }
        }
        this.draw();
    }
}

function forBinaryKey() {



    binaryKeys.forEach((key, index) => {


        if (floor.x + 2980 < player.x && floor.y + 1010 > player.y && materializeNumber < 8) {
            materialize = true;
            if (key.number == materializeNumber) {
                if (materializeNumber < 8) {
                    binaryFade.play();
                }

                key.materialize = true;
            }
        } else {
            materialize = false;
        }


        key.update();
    });
}