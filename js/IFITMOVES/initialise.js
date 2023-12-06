function init() {
    playerAngle = 0, speed = 10;
    floor = (new Floor(stoneFloor));
    player = new Player(c.width / 2, c.height / 2);



    walls.push(new Wall(500, 502, 20, 1000, false));
    walls.push(new Wall(990, 1010, 1000, 20, true));
    walls.push(new Wall(1480, 452, 20, 900, false));
    walls.push(new Wall(1990, 1010, 1000, 20, true));
    walls.push(new Wall(2480, 552, 20, 900, false));



    doors.push(new Door(1480, 902, false, keyHoleRed, "red"));
    doors.push(new Door(2480, 2, false, keyHoleYellow, "yellow"));
}