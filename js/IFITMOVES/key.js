class Key {
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.image = image;
    }
    draw() {
        ctx.drawImage(this.image, floor.x + this.x - 20, floor.y + this.y - 20, 40, 20);
    }
    update() {
        this.draw();
    }
}

function forKey() {
    keys.forEach((key, index) => {

        let collectKey = collisionDetection(player.x, player.y, player.r / 2, player.r / 2, key.x + floor.x, key.y + floor.y, 20, 10);

        if (collectKey) {
            if (key.image == redKey) {
                gotRedKey = true;
            }
            if (key.image == yellowKey) {
                gotYellowKey = true;

            }
            if (key.image == greenKey) {
                gotGreenKey = true;

            }
            if (key.image == turquoiseKey) {
                gotTurquoiseKey = true;

            }
            if (key.image == orangeKey) {
                gotOrangeKey = true;

            }
            if (key.image == pinkKey) {
                gotPinkKey = true;

            }
            swipe.play();
            backpackItems += 1;
            keys.splice(index, 1);
        }

        key.update();
    });
}