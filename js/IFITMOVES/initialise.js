function init() {
    playerAngle = 0, speed = 10, startCount = 0, backpackItems = 0, switchTimer = 0, materializeNumber = 0, binaryDoorTimer = 2000,
        guessNumber = Math.floor((Math.random() * 126) + 1), health = 300, bulletAmount = 0;
    floor = (new Floor(stoneFloor));
    player = new Player(c.width / 2, c.height / 2);



    //top rooms.
    walls.push(new Wall(500, 500, 20, 1000, false, false)); //vertical.
    walls.push(new Wall(990, 1010, 1000, 20, true, false)); //horizontal.
    walls.push(new Wall(1480, 450, 20, 900, false, false)); //vertical wall & door space.
    doors.push(new Door(1480, 900, false, keyHoleRed, "red")); //verticalDoor.
    walls.push(new Wall(1990, 1010, 1000, 20, true, false)); //horizontal.
    walls.push(new Wall(2480, 550, 20, 900, false, false)); //vertical wall & door space.
    doors.push(new Door(2480, 0, false, keyHoleYellow, "yellow")); //verticalDoor.
    walls.push(new Wall(2970, 500, 20, 1000, false, false)); //vertical.
    walls.push(new Wall(3380, 1010, 840, 20, true, false)); //horizontal wall & door space.
    doors.push(new Door(3802, 1010, true, keyHoleGreen, "green")); //horizonralDoor.
    walls.push(new Wall(3490, 610, 820, 20, true, false)); //horizontal wall & door space.
    doors.push(new Door(2980, 610, true, binaryDoorImage, "white")); //horizonralDoor.

    //create binary key pads.
    let number = 0;
    for (let i = 3100; i <= 3400; i += 50) {
        binaryKeys.push(new BinaryKey(i, 640, number));
        number += 1;
    }

    //bottom rooms.
    walls.push(new Wall(500, 2900, 1000, 20, true, false)); //horizontal.
    walls.push(new Wall(990, 3350, 20, 900, false, false)); //vertical wall & door space.
    doors.push(new Door(990, 3802, false, keyHoleTurquoise, "turquoise")); //verticalDoor.
    walls.push(new Wall(1500, 2900, 1000, 20, true, false)); //horizontal.
    walls.push(new Wall(1990, 3452, 20, 900, false, false)); //vertical wall & door space.
    doors.push(new Door(1990, 2910, false, keyHoleOrange, "orange")); //verticalDoor.
    walls.push(new Wall(2500, 2900, 1000, 20, true, false)); //horizontal.
    walls.push(new Wall(2990, 3350, 20, 900, false, false)); //vertical wall & door space.
    doors.push(new Door(2990, 3802, false, keyHolePink, "pink")); //verticalDoor.

    //center room.
    walls.push(new Wall(playArea / 2, playArea / 2, 200, 20, true, false)); //horizontal.
    walls.push(new Wall((playArea / 2) + 90, (playArea / 2) + 110, 20, 200, false, false)); //vertical.
    walls.push(new Wall(playArea / 2, (playArea / 2) + 210, 200, 20, true, false)); //horizontal.
    walls.push(new Wall((playArea / 2) - 90, (playArea / 2) + 50, 20, 100, false, false)); //vertical wall & door space.
    doors.push(new Door((playArea / 2) - 90, (playArea / 2) + 100, false, keyHoleFootpad, "blue")); //verticalDoor.

    //pushwall room.
    walls.push(new Wall(1200, 3300, 400, 20, true, true)); //horizontal.
    walls.push(new Wall(1390, 3100, 20, 380, false, true)); //vertical wall.
    doors.push(new Door(1000, 3010, true, binaryPad, "black")); //horizonralDoor.
    doors.push(new Door(1100, 2910, false, binaryPad, "black")); //verticalDoor.



    //keys.
    keys.push(new Key(42, (playArea - playArea / 4) + 30, redKey)); //red key.
    keys.push(new Key(1042, (playArea - playArea / 4) + 30, yellowKey)); //yellow key.
    keys.push(new Key(2242, (playArea) - 500, greenKey)); //green key.
    keys.push(new Key(1700, 220, turquoiseKey)); //turquoise key.
    keys.push(new Key((playArea) - 280, 220, orangeKey)); //orange key.  
    keys.push(new Key(playArea - playArea / 2, (playArea - playArea / 2) + 30, pinkKey)); //pink key.

    //traps
    traps.push(new Trap((playArea) - 280, 220, "orange")); //orange trap.
    traps.push(new Trap(2242, (playArea) - 500, "green")); //green trap.
    traps.push(new Trap(1700, 220, "turquoise")); //turquoise trap.

}