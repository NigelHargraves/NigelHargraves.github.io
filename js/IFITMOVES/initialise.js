function init() {
    playerAngle = -Math.PI / 2, speed = 10;
    floor = (new Floor(stoneFloor));
    player = new Player(c.width / 2, c.height / 2);
    spiders.push(new Spider(spiderWalk0, 600, 600));
}