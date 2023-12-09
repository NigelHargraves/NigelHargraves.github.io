function init() {
    playerAngle = 0, speed = 10, startCount = 0, backpackItems = 0;
    floor = (new Floor(stoneFloor));
    player = new Player(c.width / 2, c.height / 2);


    //top rooms.
    walls.push(new Wall(500, 500, 20, 1000, false)); //vertical.
    walls.push(new Wall(990, 1010, 1000, 20, true)); //horizontal.
    walls.push(new Wall(1480, 450, 20, 900, false)); //vertical wall + door.
    doors.push(new Door(1480, 900, false, keyHoleRed, "red")); //verticalDoor.
    walls.push(new Wall(1990, 1010, 1000, 20, true)); //horizontal.
    walls.push(new Wall(2480, 550, 20, 900, false)); //vertical wall + door.
    doors.push(new Door(2480, 0, false, keyHoleYellow, "yellow")); //verticalDoor.
    walls.push(new Wall(2970, 500, 20, 1000, false)); //vertical.
    walls.push(new Wall(3380, 1010, 840, 20, true)); //horizontal wall + door.
    doors.push(new Door(3802, 1010, true, keyHoleGreen, "green")); //horizonralDoor.

    //bottom rooms.
    walls.push(new Wall(500, 2900, 1000, 20, true)); //horizontal.
    walls.push(new Wall(990, 3350, 20, 900, false)); //vertical wall + door.
    doors.push(new Door(990, 3802, false, keyHoleTurquoise, "turquoise")); //verticalDoor.
    walls.push(new Wall(1500, 2900, 1000, 20, true)); //horizontal.
    walls.push(new Wall(1990, 3452, 20, 900, false)); //vertical wall + door.
    doors.push(new Door(1990, 2910, false, keyHoleOrange, "orange")); //verticalDoor.
    walls.push(new Wall(2500, 2900, 1000, 20, true)); //horizontal.
    walls.push(new Wall(2990, 3350, 20, 900, false)); //vertical wall + door.
    doors.push(new Door(2990, 3802, false, keyHolePink, "pink")); //verticalDoor.



}