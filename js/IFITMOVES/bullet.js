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
                splated.currentTime = 0;
                splated.play();
                spiderInView = false;
                spiderSplats.push(new SpiderSplat(spider.x, spider.y));
                bullets.splice(index1, 1);
                spiders.splice(index2, 1);
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