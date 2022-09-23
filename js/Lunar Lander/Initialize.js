function init() {
    ctx2.clearRect(0, 0, c2.width, c2.height);
    messageBoard.style.visibility = "hidden";
    button1.style.visibility = "hidden";
    button2.style.visibility = "hidden";
    landingZones = [];
    moonZones = [];
    fuel = 100;
    fuelLeft.style.width = "100%";
    if (!lemAlive) {
        score = 0;
    }
    lemAlive = true;
    rotation = 0;
    thrustForce = 0;
    rotateLeft = false;
    rotateRight = false;
    thrustUp = false;
    thrustDown = false;
    overlz = false;
    lem.style.top = "40px";
    lem.style.left = "10px";
    lemX = lem.offsetLeft + landerSize / 2;
    lemY = lem.offsetTop + landerSize / 2;
    lander = new Lander(lemX, lemY);
    let spaced = c.width / 5;
    let length = 0,
        oldLength = 0;
    let level = c.height / 2 + (Math.random() * c.height) / 2 - 100,
        oldLevel;

    //create zones.
    for (let i = 0; i < 4; i++) {
        oldLevel = level;
        level = c.height / 2 + (Math.random() * c.height) / 2 - 100;

        moonZones.push(
            new MZ(spaced - c.width / 5 + length, oldLevel, spaced, level, "white")
        );

        oldLength = length;
        length = Math.random() * skillLevel + 30;
        let point = Math.abs(Math.round(150 - length));
        landingZones.push(
            new LZ(spaced, level, length, "green", point, false, "green")
        );

        lzcords[i] = new Array(spaced, level, spaced + length, point);

        spaced += c.width / 5;
    }

    //create last moon zone corodinate.
    moonZones.push(
        new MZ(
            spaced - c.width / 5 + length,
            level,
            spaced,
            c.height / 2 + (Math.random() * c.height) / 2,
            "white"
        )
    );

    //draw moon zones.
    moonZones.forEach((mz, index) => {
        mz.draw();
    });

    lem.style.transform = "rotate(" + rotation + "deg)";
    lem.style.visibility = "visible";
}