//create sugars class.
class Sugar {
    //construct sugars data.
    constructor(x, y) {
            this.x = x;
            this.y = y;
            this.r = 50;
        }
        //draw sugars.
    draw() {
            ctx.drawImage(sugar, this.x, this.y, this.r * 1.5, this.r);
        }
        //update sugars.
    update() {
        this.x += -player.velocity.x * 1.25;
        this.draw();
    }
}

function forSugars() {
    sugars.forEach((sug, index) => {
        let colide = collisionDetection(sug.x + sug.r / 1.5, sug.y + sug.r, sug.r, sug.r, x, player.y, player.r, player.r);
        if (colide) {
            texts.push(
                new Text(x, player.y, Math.random() - 0.5, -c.height * 0.001, "100", "bold 20px Arial", "yellow", 1, false)
            );
            texts.push(
                new Text(x, player.y, Math.random() - 0.5, -c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false)
            );
            score += 100;
            gain.currentTime = 0;
            gain.play();
            if (sugarCount < 20) {
                sugarCount += 1;
            }
            if (sugarCount == 20) {
                collectedSugars = true;
                sugars = [];
            }
            sugars.splice(index, 1);
        }
        sug.update();
    });
}