//create bullet class.
class Bullet {
    //construct bullet data.
    constructor(x, y, velocity) {
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.r = 2;
    }



    //draw bullet.
    draw() {

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();




    }


    //draw bullet.
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;




        this.draw();
    }


}



function forBullet() {
    bullets.forEach((bullet, index1) => {
        spiders.forEach((spider, index2) => {
            let hit = collisionDetection(bullet.x, bullet.y, bullet.r, bullet.r, spider.x + floor.x, spider.y + floor.y, spider.r / 4, spider.r / 4);
            //kill spider.
            if (hit) {
                //only play splat sound when in view.
                let playSound = collisionDetection(spider.x, spider.y, spider.r / 2, spider.r / 2, player.x - floor.x, player.y - floor.y, c.width / 2, c.height / 2);
                if (playSound) {
                    splated.currentTime = 0;
                    splated.play();
                }
                spiderInView = false;
                spiderSplats.push(new SpiderSplat(spider.x, spider.y));
                bullets.splice(index1, 1);
                spiders.splice(index2, 1);
            }
        });
        drones.forEach((drone, index2) => {
            let hit = collisionDetection(bullet.x, bullet.y, bullet.r, bullet.r, drone.dronex + floor.x, drone.droney + floor.y, drone.size / 2, drone.size / 2);
            //kill spider.
            if (hit) {
                //only play splat sound when in view.
                let playSound = collisionDetection(drone.dronex, drone.droney, drone.size / 2, drone.size / 2, player.x - floor.x, player.y - floor.y, c.width / 2, c.height / 2);
                if (playSound) {
                    droneImpact.currentTime = 0;
                    droneImpact.play();
                }


                if (drone.damage <= 10) {
                    droneInView = false;
                    drones.splice(index2, 1);
                } else {
                    drone.damage -= 10;
                    drone.showDamage = true;
                    bullets.splice(index1, 1);
                }

            }
        });
        walls.forEach((wall) => {
            let hit = collisionDetection(bullet.x, bullet.y, bullet.r, bullet.r, wall.x + floor.x, wall.y + floor.y, wall.width / 2, wall.height / 2);
            //hit wall.
            if (hit) {
                bullets.splice(index1, 1);
            }
        });
        //hit edge.
        if ((bullet.x - bullet.r / 2) <= floor.x + 20 || (bullet.x + bullet.r / 2) - floor.x >= floor.width - 20 ||
            (bullet.y - bullet.r / 2) <= floor.y + 20 || (bullet.y + bullet.r / 2) - floor.y >= floor.height - 20) {
            bullets.splice(index1, 1);
        }
        bullet.update();
    });
}