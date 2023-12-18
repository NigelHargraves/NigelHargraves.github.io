"use strict";

// Set the canvas element to  variable.
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight; //arrays.

var bullets = [],
    spiders = [],
    spiderSplats = [],
    walls = [],
    spiderPortals = [],
    doors = [],
    keys = [],
    traps = [],
    trapKeys = [],
    binaryKeys = []; //variables.

var player, floor, playerAngle, speed, startCount, mx, my, backpackItems, switchTimer, materializeNumber, decimalNumber, guessNumber, binaryDoorTimer, health;
var binaryNumber = "",
    numberFromArray = "";
var numberOut = ["0", "0", "0", "0", "0", "0", "0"]; //booleans.

var moveLeft = false,
    moveRight = false,
    moveForward = false,
    run = false,
    fire = false,
    spiderInView = false,
    hitWall = false,
    doorInView = false,
    playerVisible = false,
    gotRedKey = false,
    gotYellowKey = false,
    gotGreenKey = false,
    gotTurquoiseKey = false,
    gotOrangeKey = false,
    gotPinkKey = false,
    displayOnce = false,
    switchDoorOn = true,
    trapInView = false,
    trapKeyCollected = false,
    gotGreenTrapKey1 = false,
    gotGreenTrapKey2 = false,
    gotGreenTrapKey3 = false,
    gotGreenTrapKey4 = false,
    greenTrapKey1Placed = false,
    greenTrapKey2Placed = false,
    greenTrapKey3Placed = false,
    greenTrapKey4Placed = false,
    gotOrangeTrapKey1 = false,
    gotOrangeTrapKey2 = false,
    gotOrangeTrapKey3 = false,
    gotOrangeTrapKey4 = false,
    orangeTrapKey1Placed = false,
    orangeTrapKey2Placed = false,
    orangeTrapKey3Placed = false,
    orangeTrapKey4Placed = false,
    nextKeySet = false,
    openBackpack = false,
    materialize = false,
    binaryDoorOn = true,
    binaryDoorPlaySoundOpen = true; //backgrounds to variables.

var stoneFloor = new Image();
stoneFloor.src = 'images/IFITMOVES/stoneFloorBackground.png';
var playerImage = new Image();
playerImage.src = 'images/IFITMOVES/sprite_sheet_man_shooting.png';
var spiderWalk0 = new Image();
spiderWalk0.src = 'images/IFITMOVES/spiderWalk/Walk_Body_0.png';
var spiderWalk30 = new Image();
spiderWalk30.src = 'images/IFITMOVES/spiderWalk/Walk_Body_030.png';
var spiderWalk45 = new Image();
spiderWalk45.src = 'images/IFITMOVES/spiderWalk/Walk_Body_045.png';
var spiderWalk60 = new Image();
spiderWalk60.src = 'images/IFITMOVES/spiderWalk/Walk_Body_060.png';
var spiderWalk90 = new Image();
spiderWalk90.src = 'images/IFITMOVES/spiderWalk/Walk_Body_090.png';
var spiderWalk120 = new Image();
spiderWalk120.src = 'images/IFITMOVES/spiderWalk/Walk_Body_120.png';
var spiderWalk135 = new Image();
spiderWalk135.src = 'images/IFITMOVES/spiderWalk/Walk_Body_135.png';
var spiderWalk150 = new Image();
spiderWalk150.src = 'images/IFITMOVES/spiderWalk/Walk_Body_150.png';
var spiderWalk180 = new Image();
spiderWalk180.src = 'images/IFITMOVES/spiderWalk/Walk_Body_180.png';
var spiderWalk210 = new Image();
spiderWalk210.src = 'images/IFITMOVES/spiderWalk/Walk_Body_210.png';
var spiderWalk225 = new Image();
spiderWalk225.src = 'images/IFITMOVES/spiderWalk/Walk_Body_225.png';
var spiderWalk240 = new Image();
spiderWalk240.src = 'images/IFITMOVES/spiderWalk/Walk_Body_240.png';
var spiderWalk270 = new Image();
spiderWalk270.src = 'images/IFITMOVES/spiderWalk/Walk_Body_270.png';
var spiderWalk300 = new Image();
spiderWalk300.src = 'images/IFITMOVES/spiderWalk/Walk_Body_300.png';
var spiderWalk315 = new Image();
spiderWalk315.src = 'images/IFITMOVES/spiderWalk/Walk_Body_315.png';
var spiderWalk330 = new Image();
spiderWalk330.src = 'images/IFITMOVES/spiderWalk/Walk_Body_330.png';
var spiderWalkShadow0 = new Image();
spiderWalkShadow0.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_0.png';
var spiderWalkShadow30 = new Image();
spiderWalkShadow30.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_030.png';
var spiderWalkShadow45 = new Image();
spiderWalkShadow45.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_045.png';
var spiderWalkShadow60 = new Image();
spiderWalkShadow60.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_060.png';
var spiderWalkShadow90 = new Image();
spiderWalkShadow90.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_090.png';
var spiderWalkShadow120 = new Image();
spiderWalkShadow120.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_120.png';
var spiderWalkShadow135 = new Image();
spiderWalkShadow135.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_135.png';
var spiderWalkShadow150 = new Image();
spiderWalkShadow150.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_150.png';
var spiderWalkShadow180 = new Image();
spiderWalkShadow180.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_180.png';
var spiderWalkShadow210 = new Image();
spiderWalkShadow210.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_210.png';
var spiderWalkShadow225 = new Image();
spiderWalkShadow225.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_225.png';
var spiderWalkShadow240 = new Image();
spiderWalkShadow240.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_240.png';
var spiderWalkShadow270 = new Image();
spiderWalkShadow270.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_270.png';
var spiderWalkShadow300 = new Image();
spiderWalkShadow300.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_300.png';
var spiderWalkShadow315 = new Image();
spiderWalkShadow315.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_315.png';
var spiderWalkShadow330 = new Image();
spiderWalkShadow330.src = 'images/IFITMOVES/spiderWalk/Walk_Shadow_330.png';
var Nervous0 = new Image();
Nervous0.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_0.png';
var Nervous30 = new Image();
Nervous30.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_030.png';
var Nervous45 = new Image();
Nervous45.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_045.png';
var Nervous60 = new Image();
Nervous60.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_060.png';
var Nervous90 = new Image();
Nervous90.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_090.png';
var Nervous120 = new Image();
Nervous120.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_120.png';
var Nervous135 = new Image();
Nervous135.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_135.png';
var Nervous150 = new Image();
Nervous150.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_150.png';
var Nervous180 = new Image();
Nervous180.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_180.png';
var Nervous210 = new Image();
Nervous210.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_210.png';
var Nervous225 = new Image();
Nervous225.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_225.png';
var Nervous240 = new Image();
Nervous240.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_240.png';
var Nervous270 = new Image();
Nervous270.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_270.png';
var Nervous300 = new Image();
Nervous300.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_300.png';
var Nervous315 = new Image();
Nervous315.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_315.png';
var Nervous330 = new Image();
Nervous330.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Body_330.png';
var NervousShadow0 = new Image();
NervousShadow0.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_0.png';
var NervousShadow30 = new Image();
NervousShadow30.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_030.png';
var NervousShadow45 = new Image();
NervousShadow45.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_045.png';
var NervousShadow60 = new Image();
NervousShadow60.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_060.png';
var NervousShadow90 = new Image();
NervousShadow90.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_090.png';
var NervousShadow120 = new Image();
NervousShadow120.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_120.png';
var NervousShadow135 = new Image();
NervousShadow135.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_135.png';
var NervousShadow150 = new Image();
NervousShadow150.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_150.png';
var NervousShadow180 = new Image();
NervousShadow180.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_180.png';
var NervousShadow210 = new Image();
NervousShadow210.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_210.png';
var NervousShadow225 = new Image();
NervousShadow225.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_225.png';
var NervousShadow240 = new Image();
NervousShadow240.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_240.png';
var NervousShadow270 = new Image();
NervousShadow270.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_270.png';
var NervousShadow300 = new Image();
NervousShadow300.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_300.png';
var NervousShadow315 = new Image();
NervousShadow315.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_315.png';
var NervousShadow330 = new Image();
NervousShadow330.src = 'images/IFITMOVES/spider_Idle_Nervous/Idle_Nervous_Shadow_330.png';
var splat = new Image();
splat.src = 'images/IFITMOVES/spiderWalk/spiderSplat.png';
var spiderDead = new Image();
spiderDead.src = 'images/IFITMOVES/spiderWalk/spiderDead.png';
var spiderDeadShadow = new Image();
spiderDeadShadow.src = 'images/IFITMOVES/spiderWalk/spiderDeadShadow.png';
var playerShadow = new Image();
playerShadow.src = 'images/IFITMOVES/playerShadow.png';
var stoneWall = new Image();
stoneWall.src = 'images/IFITMOVES/wall.png';
var telepad = new Image();
telepad.src = 'images/IFITMOVES/telePad.png';
var keyHoleRed = new Image();
keyHoleRed.src = 'images/IFITMOVES/keyHoleRed.png';
var keyHoleYellow = new Image();
keyHoleYellow.src = 'images/IFITMOVES/keyHoleYellow.png';
var keyHoleGreen = new Image();
keyHoleGreen.src = 'images/IFITMOVES/keyHoleGreen.png';
var keyHoleTurquoise = new Image();
keyHoleTurquoise.src = 'images/IFITMOVES/keyHoleTurquoise.png';
var keyHoleBlack = new Image();
keyHoleBlack.src = 'images/IFITMOVES/keyHoleBlack.png';
var keyHoleOrange = new Image();
keyHoleOrange.src = 'images/IFITMOVES/keyHoleOrange.png';
var keyHolePink = new Image();
keyHolePink.src = 'images/IFITMOVES/keyHoleRose.png';
var redKey = new Image();
redKey.src = 'images/IFITMOVES/redKey.png';
var yellowKey = new Image();
yellowKey.src = 'images/IFITMOVES/yellowKey.png';
var greenKey = new Image();
greenKey.src = 'images/IFITMOVES/greenKey.png';
var turquoiseKey = new Image();
turquoiseKey.src = 'images/IFITMOVES/turquoiseKey.png';
var orangeKey = new Image();
orangeKey.src = 'images/IFITMOVES/orangeKey.png';
var pinkKey = new Image();
pinkKey.src = 'images/IFITMOVES/pinkKey.png';
var backpack = new Image();
backpack.src = 'images/IFITMOVES/backpack.png';
var footpadSwitchOff = new Image();
footpadSwitchOff.src = 'images/IFITMOVES/footpadSwitchOff.png';
var footpadSwitchOn = new Image();
footpadSwitchOn.src = 'images/IFITMOVES/footpadSwitchOn.png';
var keyHolefootpad = new Image();
keyHolefootpad.src = 'images/IFITMOVES/keyHoleFootpad.png';
var keyHolefootpadOpen = new Image();
keyHolefootpadOpen.src = 'images/IFITMOVES/keyHoleFootpadOpen.png';
var greenTrapBaseImage = new Image();
greenTrapBaseImage.src = 'images/IFITMOVES/greenTrapBaseImage.png';
var orangeTrapBaseImage = new Image();
orangeTrapBaseImage.src = 'images/IFITMOVES/orangeTrapBaseImage.png';
var trapImage = new Image();
trapImage.src = 'images/IFITMOVES/trapImage.png';
var greenTrapKey1 = new Image();
greenTrapKey1.src = 'images/IFITMOVES/greenTrapKey1.png';
var greenTrapKey2 = new Image();
greenTrapKey2.src = 'images/IFITMOVES/greenTrapKey2.png';
var greenTrapKey3 = new Image();
greenTrapKey3.src = 'images/IFITMOVES/greenTrapKey3.png';
var greenTrapKey4 = new Image();
greenTrapKey4.src = 'images/IFITMOVES/greenTrapKey4.png';
var greenTrapKeyHole1Filled = new Image();
greenTrapKeyHole1Filled.src = 'images/IFITMOVES/greenTrapKeyHole1Filled.png';
var greenTrapKeyHole1Empty = new Image();
greenTrapKeyHole1Empty.src = 'images/IFITMOVES/greenTrapKeyHole1Empty.png';
var greenTrapKeyHole2Filled = new Image();
greenTrapKeyHole2Filled.src = 'images/IFITMOVES/greenTrapKeyHole2Filled.png';
var greenTrapKeyHole2Empty = new Image();
greenTrapKeyHole2Empty.src = 'images/IFITMOVES/greenTrapKeyHole2Empty.png';
var greenTrapKeyHole3Filled = new Image();
greenTrapKeyHole3Filled.src = 'images/IFITMOVES/greenTrapKeyHole3Filled.png';
var greenTrapKeyHole3Empty = new Image();
greenTrapKeyHole3Empty.src = 'images/IFITMOVES/greenTrapKeyHole3Empty.png';
var greenTrapKeyHole4Filled = new Image();
greenTrapKeyHole4Filled.src = 'images/IFITMOVES/greenTrapKeyHole4Filled.png';
var greenTrapKeyHole4Empty = new Image();
greenTrapKeyHole4Empty.src = 'images/IFITMOVES/greenTrapKeyHole4Empty.png';
var teleportFlash = new Image();
teleportFlash.src = 'images/IFITMOVES/teleportFlash.png';
var orangeTrapKey1 = new Image();
orangeTrapKey1.src = 'images/IFITMOVES/orangeTrapKey1.png';
var orangeTrapKey2 = new Image();
orangeTrapKey2.src = 'images/IFITMOVES/orangeTrapKey2.png';
var orangeTrapKey3 = new Image();
orangeTrapKey3.src = 'images/IFITMOVES/orangeTrapKey3.png';
var orangeTrapKey4 = new Image();
orangeTrapKey4.src = 'images/IFITMOVES/orangeTrapKey4.png';
var orangeTrapKeyHole1Filled = new Image();
orangeTrapKeyHole1Filled.src = 'images/IFITMOVES/orangeTrapKeyHole1Filled.png';
var orangeTrapKeyHole1Empty = new Image();
orangeTrapKeyHole1Empty.src = 'images/IFITMOVES/orangeTrapKeyHole1Empty.png';
var orangeTrapKeyHole2Filled = new Image();
orangeTrapKeyHole2Filled.src = 'images/IFITMOVES/orangeTrapKeyHole2Filled.png';
var orangeTrapKeyHole2Empty = new Image();
orangeTrapKeyHole2Empty.src = 'images/IFITMOVES/orangeTrapKeyHole2Empty.png';
var orangeTrapKeyHole3Filled = new Image();
orangeTrapKeyHole3Filled.src = 'images/IFITMOVES/orangeTrapKeyHole3Filled.png';
var orangeTrapKeyHole3Empty = new Image();
orangeTrapKeyHole3Empty.src = 'images/IFITMOVES/orangeTrapKeyHole3Empty.png';
var orangeTrapKeyHole4Filled = new Image();
orangeTrapKeyHole4Filled.src = 'images/IFITMOVES/orangeTrapKeyHole4Filled.png';
var orangeTrapKeyHole4Empty = new Image();
orangeTrapKeyHole4Empty.src = 'images/IFITMOVES/orangeTrapKeyHole4Empty.png';
var binaryDoorImage = new Image();
binaryDoorImage.src = 'images/IFITMOVES/binaryDoorImage.png';
var binaryPad = new Image();
binaryPad.src = 'images/IFITMOVES/binaryPad.png';
var backpackContents = document.getElementById("backpack");
var newLineKeys = document.createElement('br');
var newLineTrapKeys = document.createElement('br');
var redKeyBackpack = document.createElement("IMG");
redKeyBackpack.setAttribute("src", "images/IFITMOVES/redKey.png");
redKeyBackpack.setAttribute("width", "40");
redKeyBackpack.setAttribute("height", "20");
var yellowKeyBackpack = document.createElement("IMG");
yellowKeyBackpack.setAttribute("src", "images/IFITMOVES/yellowKey.png");
yellowKeyBackpack.setAttribute("width", "40");
yellowKeyBackpack.setAttribute("height", "20");
var greenKeyBackpack = document.createElement("IMG");
greenKeyBackpack.setAttribute("src", "images/IFITMOVES/greenKey.png");
greenKeyBackpack.setAttribute("width", "40");
greenKeyBackpack.setAttribute("height", "20");
var turquoiseKeyBackpack = document.createElement("IMG");
turquoiseKeyBackpack.setAttribute("src", "images/IFITMOVES/turquoiseKey.png");
turquoiseKeyBackpack.setAttribute("width", "40");
turquoiseKeyBackpack.setAttribute("height", "20");
var orangeKeyBackpack = document.createElement("IMG");
orangeKeyBackpack.setAttribute("src", "images/IFITMOVES/orangeKey.png");
orangeKeyBackpack.setAttribute("width", "40");
orangeKeyBackpack.setAttribute("height", "20");
var pinkKeyBackpack = document.createElement("IMG");
pinkKeyBackpack.setAttribute("src", "images/IFITMOVES/pinkKey.png");
pinkKeyBackpack.setAttribute("width", "40");
pinkKeyBackpack.setAttribute("height", "20");
var greenTrapKey1Backpack = document.createElement("IMG");
greenTrapKey1Backpack.setAttribute("src", "images/IFITMOVES/greenTrapKey1.png");
greenTrapKey1Backpack.setAttribute("width", "40");
greenTrapKey1Backpack.setAttribute("height", "40");
var greenTrapKey2Backpack = document.createElement("IMG");
greenTrapKey2Backpack.setAttribute("src", "images/IFITMOVES/greenTrapKey2.png");
greenTrapKey2Backpack.setAttribute("width", "40");
greenTrapKey2Backpack.setAttribute("height", "40");
var greenTrapKey3Backpack = document.createElement("IMG");
greenTrapKey3Backpack.setAttribute("src", "images/IFITMOVES/greenTrapKey3.png");
greenTrapKey3Backpack.setAttribute("width", "40");
greenTrapKey3Backpack.setAttribute("height", "40");
var greenTrapKey4Backpack = document.createElement("IMG");
greenTrapKey4Backpack.setAttribute("src", "images/IFITMOVES/greenTrapKey4.png");
greenTrapKey4Backpack.setAttribute("width", "40");
greenTrapKey4Backpack.setAttribute("height", "40");
var orangeTrapKey1Backpack = document.createElement("IMG");
orangeTrapKey1Backpack.setAttribute("src", "images/IFITMOVES/orangeTrapKey1.png");
orangeTrapKey1Backpack.setAttribute("width", "40");
orangeTrapKey1Backpack.setAttribute("height", "40");
var orangeTrapKey2Backpack = document.createElement("IMG");
orangeTrapKey2Backpack.setAttribute("src", "images/IFITMOVES/orangeTrapKey2.png");
orangeTrapKey2Backpack.setAttribute("width", "40");
orangeTrapKey2Backpack.setAttribute("height", "40");
var orangeTrapKey3Backpack = document.createElement("IMG");
orangeTrapKey3Backpack.setAttribute("src", "images/IFITMOVES/orangeTrapKey3.png");
orangeTrapKey3Backpack.setAttribute("width", "40");
orangeTrapKey3Backpack.setAttribute("height", "40");
var orangeTrapKey4Backpack = document.createElement("IMG");
orangeTrapKey4Backpack.setAttribute("src", "images/IFITMOVES/orangeTrapKey4.png");
orangeTrapKey4Backpack.setAttribute("width", "40");
orangeTrapKey4Backpack.setAttribute("height", "40"); //audio to variables.

var walking = document.getElementById("audio1");
var running = document.getElementById("audio2");
var shot = document.getElementById("audio3");
var spiderWalking = document.getElementById("audio4");
var splated = document.getElementById("audio5");
var rotateStep = document.getElementById("audio6");
var portalOpen = document.getElementById("audio7");
var portalBuzz = document.getElementById("audio8");
var teleport = document.getElementById("audio9");
var doorBuzz = document.getElementById("audio10");
var swipe = document.getElementById("audio11");
var switchIsOn = document.getElementById("audio12");
var pulseSound = document.getElementById("audio13");
var trapKeyTeleport = document.getElementById("audio14");
var trapKeyCollect = document.getElementById("audio15");
var trapKeyFit = document.getElementById("audio16");
var keyCollect = document.getElementById("audio17");
var shutdown = document.getElementById("audio18");
var binaryFade = document.getElementById("audio19");
var binarySwitchRed = document.getElementById("audio20");
var binarySwitchGreen = document.getElementById("audio21");
var binaryDoorCorrect = document.getElementById("audio22");
var binaryDoorSwitchOn = document.getElementById("audio23");

function animate() {
  //CLS.
  ctx.fillStyle = "rgb(0, 100, 0)";
  ctx.fillRect(0, 0, c.width, c.height);
  floor.update();
  forTrap();
  doors.forEach(function (door) {
    door.update();
  });
  forSplats();
  forBinaryKey();
  forKey();
  forTrapKey();
  forWall();
  forBullet(); //create spider.

  var createSpider = Math.random();

  if (createSpider > 0.997 && portalBuzz.paused) {
    var x = 200 + Math.random() * (c.height * 4 - 400);
    var y = 200 + Math.random() * (c.height * 4 - 400);
    var wallNumber = 1;
    walls.forEach(function (wall) {
      //only open portal when portal does not intersect a wall.
      var hit = collisionDetection(x + floor.x, y + floor.y, 200, 200, wall.x + floor.x, wall.y + floor.y, wall.width / 2, wall.height / 2);

      if (hit) {
        return;
      }

      if (wallNumber == walls.length) {
        var playSound = collisionDetection(x, y, 40, 40, player.x - floor.x, player.y - floor.y, c.width / 2, c.height / 2);

        if (playSound) {
          portalBuzz.play();
        }

        spiderPortals.push(new SpiderPortal(x, y));
      }

      wallNumber += 1;
    });
  }

  spiderPortals.forEach(function (portal, index) {
    if (portal.r < 2) {
      spiderPortals.splice(index, 1);
    }

    portal.update();
  });
  forSpider();
  player.update();
  forDoor();

  if (startCount < 100) {
    startCount += 1;
  } //delay show player.


  if (startCount == 100) {
    var taper = 1;

    for (var i = 1; i >= 0.1; i -= 0.1) {
      ctx.globalAlpha = i;
      ctx.beginPath();
      ctx.arc(player.x, player.y, 20 + 20 * taper, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
      taper += 0.1;
    }

    ctx.globalAlpha = 1;
    teleport.play();
    playerVisible = true;
    startCount += 1;
  } //show backpack contents.


  if (mx <= 70 && my <= 70 || openBackpack) {
    backpackContents.style.display = "block";
    backpackContents.style.left = "70px";
    backpackContents.style.top = "70px";

    if (!displayOnce) {
      if (backpackItems == 0) {
        backpackContents.innerText = 'BACKPACK CONTENTS \n Empty';
      }

      var backpackText = "BACKPACK CONTENTS\n";

      if (backpackItems >= 1) {
        backpackContents.innerText = backpackText;

        if (gotRedKey) {
          backpackContents.appendChild(redKeyBackpack);
        }

        if (gotYellowKey) {
          backpackContents.appendChild(yellowKeyBackpack);
        }

        if (gotGreenKey) {
          backpackContents.appendChild(greenKeyBackpack);
        }

        if (gotTurquoiseKey) {
          backpackContents.appendChild(turquoiseKeyBackpack);
        }

        if (gotOrangeKey) {
          backpackContents.appendChild(orangeKeyBackpack);
        }

        if (gotPinkKey) {
          backpackContents.appendChild(pinkKeyBackpack);
        }

        backpackContents.appendChild(newLineKeys);

        if (gotGreenTrapKey1) {
          backpackContents.appendChild(greenTrapKey1Backpack);
        }

        if (gotGreenTrapKey2) {
          backpackContents.appendChild(greenTrapKey2Backpack);
        }

        if (gotGreenTrapKey3) {
          backpackContents.appendChild(greenTrapKey3Backpack);
        }

        if (gotGreenTrapKey4) {
          backpackContents.appendChild(greenTrapKey4Backpack);
        }

        if (gotOrangeTrapKey1) {
          backpackContents.appendChild(orangeTrapKey1Backpack);
        }

        if (gotOrangeTrapKey2) {
          backpackContents.appendChild(orangeTrapKey2Backpack);
        }

        if (gotOrangeTrapKey3) {
          backpackContents.appendChild(orangeTrapKey3Backpack);
        }

        if (gotOrangeTrapKey4) {
          backpackContents.appendChild(orangeTrapKey4Backpack);
        }

        backpackContents.appendChild(newLineTrapKeys);
      }

      displayOnce = true;
      var size = 100;

      if (backpackItems <= 1) {
        backpackContents.style.height = size + "px";
      }

      if (trapKeyCollected) {
        nextKeySet = true;
      } else {
        nextKeySet = false;
      }

      if (nextKeySet) {
        size += 40;
        backpackContents.style.height = size + "px";
      }
    }
  } else {
    backpackContents.style.display = "none";
    displayOnce = false;
  } //hud.


  ctx.drawImage(backpack, 0, 0, 70, 70);
  ctx.font = "bold 30px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Spiders Alive = " + spiders.length, c.width / 2 - 200, 40);

  if (health > 50) {
    ctx.fillText("❤️️: ", c.width / 2 + 200, 40);
  } else if (health > 0 && health < 50) {
    ctx.fillText("💔: ", c.width / 2 + 200, 40);
  } else if (health <= 0) {
    ctx.fillText("💀️: ", c.width / 2 + 200, 40);
    cancelAnimationFrame(animationID);
  }

  ctx.fillStyle = "red";
  ctx.fillRect(c.width / 2 + 260, 20, health, 25);
  /*
      ctx.fillText("height = " + c.height, (c.width / 2) - 200, 80); //976
      ctx.fillText("width = " + c.width, (c.width / 2) - 200, 120); //1872
  */
  //call next frame.

  animationId = requestAnimationFrame(animate);
}

init();
animate();
window.addEventListener("keydown", function (e) {
  if (e.keyCode == 37 || e.keyCode == 65) {
    moveLeft = true;
  }

  if (e.keyCode == 39 || e.keyCode == 68) {
    moveRight = true;
  }

  if (e.keyCode == 87 || e.keyCode == 38) {
    moveForward = true;
  }

  if (e.keyCode == 16) {
    run = true;
  }

  if (e.keyCode == 66) {
    openBackpack = true;
  }

  if (e.keyCode == 32 && !fire && player.fire == 10) {
    fire = true;
  }
});
window.addEventListener("keyup", function (e) {
  if (e.keyCode == 37 || e.keyCode == 65) {
    moveLeft = false;
  }

  if (e.keyCode == 39 || e.keyCode == 68) {
    moveRight = false;
  }

  if (e.keyCode == 87 || e.keyCode == 38) {
    moveForward = false;
  }

  if (e.keyCode == 16) {
    run = false;
  }

  if (e.keyCode == 66) {
    openBackpack = false;
  }
});
window.addEventListener("mousemove", function (e) {
  mx = e.x;
  my = e.y;
});