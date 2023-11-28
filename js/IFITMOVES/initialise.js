function init() {
    playerAngle = 0, speed = 10;
    floors.push(new Floor(stoneFloor, 0, 0));
    player = new Player(c.width / 2, c.height / 2);

}