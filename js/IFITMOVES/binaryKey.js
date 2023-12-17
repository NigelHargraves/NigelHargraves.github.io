class BinaryKey {
    constructor(x, y, number) {
        this.x = x;
        this.y = y;
        this.number = number;
        this.opacity = 0;
        this.materialize = false;
        this.numberOpacity = 0.001;
        this.on = false;
        this.color = "red";
        this.switched = false;
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(binaryPad, floor.x + this.x - 20, floor.y + this.y - 20, 40, 40);
        if (this.on) {
            this.color = "green";
        } else {
            this.color = "red";
        }
        ctx.beginPath();
        ctx.arc(floor.x + this.x, floor.y + this.y, 10, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
        if (materializeNumber > 6) {
            ctx.save();
            ctx.globalAlpha = this.numberOpacity;
            ctx.font = "bold 30px Arial";
            ctx.fillStyle = "lime";
            if (guessNumber > 99) {
                ctx.fillText(guessNumber, floor.x + 3005, floor.y + 620);
            } else if (guessNumber < 100 && guessNumber > 9) {
                ctx.fillText(guessNumber, floor.x + 3014, floor.y + 620);
            } else {
                ctx.fillText(guessNumber, floor.x + 3022, floor.y + 620);
            }

            ctx.restore();
            if (this.numberOpacity < 1) {
                this.numberOpacity += 0.001;
            }
        }
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

        numberFromArray = "";
        if (this.on) {
            numberOut[this.number] = "1";
        } else {
            numberOut[this.number] = "0";
        }

        for (let i = 0; i < numberOut.length; i++) {
            numberFromArray += numberOut[i];
        }




        if (numberFromArray == binaryNumber) {
            binaryDoorOn = false;
        } else {
            binaryDoorOn = true;
        }


        this.draw();
    }
}

function forBinaryKey() {



    binaryKeys.forEach((key, index) => {
        //walk on key pads.
        let touchPad = collisionDetection(key.x, key.y, 10, 10, player.x - floor.x, player.y - floor.y, player.r / 5, player.r / 5);
        if (touchPad) {
            if (!key.switched) {
                if (!key.on) {
                    binarySwitchGreen.currentTime = 0;
                    binarySwitchGreen.play();
                    key.on = true;
                    key.switched = true;
                } else {
                    binarySwitchRed.currentTime = 0;
                    binarySwitchRed.play();
                    key.on = false;
                    key.switched = true;
                }
            }
        } else {
            key.switched = false;
        }






        //materialize key pads.
        if (floor.x + 2980 < player.x && floor.y + 1010 > player.y && materializeNumber < 7) {
            materialize = true;
            if (key.number == materializeNumber) {
                if (materializeNumber < 7) {
                    binaryFade.play();
                }

                key.materialize = true;
            }
        } else if (materializeNumber == 7) {
            decimalNumber = guessNumber;
            for (let i = 1; i <= 1000; i++) {
                if (decimalNumber % 2 != 0) {
                    binaryNumber += "1";
                } else {
                    binaryNumber += "0";
                }
                if (decimalNumber < 2) {
                    decimalNumber = decimalNumber / 2;
                } else {
                    decimalNumber = Math.floor(decimalNumber / 2);
                }

                if (decimalNumber < 1) {
                    break;
                }
            }
            binaryNumber = binaryNumber.split("").reverse().join("")
            materializeNumber += 1;
            materialize = false;
            if (guessNumber < 2) {
                let text = binaryNumber;
                binaryNumber = "000000" + text;
            }
            if (guessNumber >= 2 && guessNumber < 4) {
                let text = binaryNumber;
                binaryNumber = "00000" + text;
            }
            if (guessNumber >= 4 && guessNumber < 8) {
                let text = binaryNumber;
                binaryNumber = "0000" + text;
            }
            if (guessNumber >= 8 && guessNumber < 16) {
                let text = binaryNumber;
                binaryNumber = "000" + text;
            }
            if (guessNumber >= 16 && guessNumber < 32) {
                let text = binaryNumber;
                binaryNumber = "00" + text;
            }
            if (guessNumber >= 32 && guessNumber < 64) {
                let text = binaryNumber;
                binaryNumber = "0" + text;
            }
        }


        key.update();
    });
}