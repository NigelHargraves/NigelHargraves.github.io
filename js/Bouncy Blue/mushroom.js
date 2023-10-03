//mushroom class.
class Mushroom {
    //construct mushroom data.
    constructor(x, y) {
            this.x = x;
            this.y = y;

        }
        //draw mushroom.
    draw() {
            ctx.drawImage(mushroomImage, this.x, this.y, mushroomSize, mushroomSize);

        }
        //update mushroom.
    update() {
        this.x += -player.velocity.x * 1.25;
        this.draw();
    }
}

function forMushroom() {
    mushrooms.forEach((mroom, index) => {
        let colide = collisionDetection(mroom.x + (mushroomSize / 2), mroom.y + (mushroomSize / 2), mushroomSize, mushroomSize, x, player.y, player.r, player.r);
        if (colide) {
            mushroomEat.currentTime = 0;
            mushroomEat.play();
            score += 100;
            mushroomCount += 1;
            texts.push(
                new Text(x, player.y, Math.random() - 0.5, -c.height * 0.001, "100", "bold 20px Arial", "yellow", 1, false)
            );
            texts.push(
                new Text(x, player.y, Math.random() - 0.5, -c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false)
            );
            mushrooms.splice(index, 1);
        }

        if (mushroomCount >= 20) {
            cheer.currentTime = 0;
            cheer.play();
            score += 10000;
            texts.push(
                new Text(x, player.y, Math.random() - 0.5, -c.height * 0.001, "10000", "bold 50px Arial", "yellow", 1, false)
            );
            texts.push(
                new Text(x, player.y, Math.random() - 0.5, -c.height * 0.002, "😎", "bold 50px Arial", "yellow", 1, false)
            );
            mushroomCount = 0;
        }
        mroom.update();
    });
}