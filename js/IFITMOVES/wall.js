//create wall class.
class Wall {
    constructor(x, y, width, height, direction) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.horizontal = direction;
    }

    draw() {
        ctx.drawImage(stoneWall, this.x + floor.x - this.width / 2, this.y + floor.y - this.height / 2, this.width, this.height);
    }

    update() {
        this.draw();
    }
}

function forWall() {
    walls.forEach((wall) => {
        let hit = collisionDetection(player.x, player.y, player.r / 2, player.r / 2, wall.x + floor.x, wall.y + floor.y, wall.width / 2, wall.height / 2);
        if (hit) {
            if (!wall.horizontal) {
                if (player.x > (wall.x + floor.x)) {
                    floor.x -= 2;

                } else if (player.x < (wall.x + floor.x)) {
                    floor.x += 2;

                }
            } else {
                if (player.y > (wall.y + floor.y)) {
                    floor.y -= 2;
                } else if (player.y < (wall.y + floor.y)) {
                    floor.y += 2;
                }
            }
        }
        spiders.forEach((spider) => {
            hit = collisionDetection(spider.x + floor.x, spider.y + floor.y, spider.r / 4, spider.r / 4, wall.x + floor.x, wall.y + floor.y, wall.width / 2, wall.height / 2);
            if (hit) {
                //increase angle to go 90 or 180 degrees.
                if (spider.imageAngle == 360 || spider.imageAngle == 90 || spider.imageAngle == 180 || spider.imageAngle == 270) {
                    spider.imageAngle += 180;
                    spider.spiderAngle += (Math.PI / 180) * 180;
                } else {
                    spider.imageAngle += 90;
                    spider.spiderAngle += (Math.PI / 180) * 90;
                }
                if (spider.imageAngle > 360) {
                    spider.imageAngle -= 360;
                }
                if (spider.imageAngle < 0) {
                    spider.imageAngle += 360;
                }
            }
        });
    });
}