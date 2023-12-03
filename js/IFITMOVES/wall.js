//create wall class.
class Wall {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 500;
    }

    draw() {
        ctx.drawImage(obstacleBlock, this.x + floor.x - this.width / 2, this.y + floor.y - this.height / 2, this.width, this.height);
    }

    update() {






        this.draw();
    }
}

function forWall() {
    walls.forEach((wall) => {
        let hit = collisionDetection(player.x, player.y, player.r / 2, player.r / 2, wall.x + floor.x, wall.y + floor.y, wall.width / 2, wall.height / 2);
        if (hit) {

            if (player.x > (wall.x + floor.x)) {
                floor.x -= 2;

            } else if (player.x < (wall.x + floor.x)) {
                floor.x += 2;

            }
        }
    });
}