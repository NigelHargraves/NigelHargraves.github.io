"use strict";

// Set the canvas element to  variable.
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
var playArea = 10000;
var cameraCenter = {
  x: c.width / 2,
  y: c.height / 2
}; //arrays.
//global variables.

var ground, mouseX, mouseY;
var groundX;
var groundY;
var cameraSpeed = 10,
    scale = 1;
var burn = {
  x: Math.random() * playArea,
  y: Math.random() * playArea,
  resourceSize: c.height * 0.050
},
    hardOre = {
  x: Math.random() * playArea,
  y: Math.random() * playArea,
  resourceSize: c.height * 0.050
},
    ouzeBase = {
  x: Math.random() * playArea,
  y: Math.random() * playArea,
  resourceSize: c.height * 0.050
},
    life = {
  x: Math.random() * playArea,
  y: Math.random() * playArea,
  resourceSize: c.height * 0.050
}; //booleans

var moveLeft = false,
    moveRight = false,
    moveUp = false,
    moveDown = false,
    moveFaster = false,
    zoom = false,
    resetZoom = false,
    openBuildMenu = false,
    openInventMenu = false,
    displayBuildOnce = false,
    displayInventOnce = false;

function animate() {
  //CLS.
  ctx.fillStyle = "rgb(0, 0, 0, 0.9)";
  ctx.fillRect(0, 0, c.width, c.height);
  ground.update();
  ctx.font = "bold 30px Arial";
  ctx.fillStyle = "white"; //mine burnium.

  var readyToMine = collisionDetection(ground.x + mouseX, ground.y + mouseY, 100, 100, ground.x + burn.x, ground.y + burn.y, burn.resourceSize / 2, burn.resourceSize / 2);

  if (readyToMine) {
    ctx.drawImage(buildHammer, mouse.x, mouse.y, c.height * 0.200, c.height * 0.200);
  }

  readyToMine = false; //mine hardium ore.

  readyToMine = collisionDetection(ground.x + mouseX, ground.y + mouseY, 100, 100, ground.x + hardOre.x, ground.y + hardOre.y, hardOre.resourceSize / 2, hardOre.resourceSize / 2);

  if (readyToMine) {
    ctx.drawImage(buildHammer, mouse.x, mouse.y, c.height * 0.200, c.height * 0.200);
  }

  if (openBuildMenu) {
    buildMenu.style.display = "block";
    buildMenu.style.left = c.width / 4 + "px";
    buildMenu.style.top = c.height / 8 + "px";
    buildMenu.style.width = c.width / 2 + "px";
    buildMenu.style.height = c.height / 1.5 + "px";

    if (!displayBuildOnce) {
      buildMenu.innerText = 'BUILD MENU \n Empty';
      displayBuildOnce = true;
    }
  } else {
    buildMenu.style.display = "none";
    displayBuildOnce = false;
  }

  if (openInventMenu) {
    inventMenu.style.display = "block";
    inventMenu.style.right = c.width / 20 + "px";
    inventMenu.style.top = c.height / 8 + "px";
    inventMenu.style.width = c.width / 8 + "px";
    inventMenu.style.height = c.height / 1.5 + "px";

    if (!displayInventOnce) {
      inventMenu.innerText = 'Inventry \n Empty';
      displayInventOnce = true;
    }
  } else {
    inventMenu.style.display = "none";
    displayInventOnce = false;
  } //call next frame.


  animationId = requestAnimationFrame(animate);
}

window.addEventListener("keydown", function (e) {
  if (e.keyCode == 37 || e.keyCode == 65) {
    moveLeft = true;
  }

  if (e.keyCode == 39 || e.keyCode == 68) {
    moveRight = true;
  }

  if (e.keyCode == 87 || e.keyCode == 38) {
    moveUp = true;
  }

  if (e.keyCode == 83 || e.keyCode == 40) {
    moveDown = true;
  }

  if (e.keyCode == 16) {
    moveFaster = true;
  }

  if (e.keyCode == 66) {
    if (!openBuildMenu) {
      openBuildMenu = true;
    } else {
      openBuildMenu = false;
    }
  }

  if (e.keyCode == 73) {
    if (!openInventMenu) {
      openInventMenu = true;
    } else {
      openInventMenu = false;
    }
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
    moveUp = false;
  }

  if (e.keyCode == 83 || e.keyCode == 40) {
    moveDown = false;
  }

  if (e.keyCode == 16) {
    moveFaster = false;
  }

  if (e.keyCode == 27) {
    openBuildMenu = false;
    openInventMenu = false;
  }
});

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    scale += c.height / 100000;
    zoom = true;
  } else {
    ctx.reset();
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }

  return event.deltaY < 0;
}

window.addEventListener("wheel", checkScrollDirection);
window.addEventListener("mousemove", function (e) {
  mouseX = e.x;
  mouseY = e.y;
});
initialize();
animate();