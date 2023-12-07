function init() {
    playerAngle = 0, speed = 10;
    floor = (new Floor(stoneFloor));
    player = new Player(c.width / 2, c.height / 2);


    //top rooms.
    walls.push(new Wall(500, 500, 20, 1000, false));
    walls.push(new Wall(990, 1010, 1000, 20, true));
    walls.push(new Wall(1480, 450, 20, 900, false)); //door wall.
    doors.push(new Door(1480, 900, false, keyHoleRed, "red"));
    walls.push(new Wall(1990, 1010, 1000, 20, true));
    walls.push(new Wall(2480, 550, 20, 900, false)); //door wall.
    doors.push(new Door(2480, 0, false, keyHoleYellow, "yellow"));
    walls.push(new Wall(2970, 500, 20, 1000, false));
    walls.push(new Wall(3380, 1010, 840, 20, true)); //door wall.
    doors.push(new Door(3800, 1010, true, keyHoleGreen, "green"));

    //bottom rooms.
    walls.push(new Wall(500, 2900, 1000, 20, true));
    walls.push(new Wall(990, 3350, 20, 900, false)); //door wall.
    doors.push(new Door(990, 3800, false, keyHoleBlue, "blue"));







}