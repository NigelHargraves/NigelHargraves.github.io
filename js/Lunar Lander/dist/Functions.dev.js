"use strict";

function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

function landerOverLZ() {
  for (var i = 0; i < 4; i++) {
    if (lander.x > lzcords[i][0] && lander.x + landerSize / 2 < lzcords[i][2]) {
      overlz = true;
      break;
    } else {
      overlz = false;
    }
  }
}

function crash() {
  for (var i = 0; i < 200; i++) {
    particles.push(new Particle(lander.x + 10, lander.y + 10, Math.random() * 2, "white", {
      x: (Math.random() - 0.5) * (Math.random() * 6),
      y: (Math.random() - 0.5) * (Math.random() * 6)
    }));
  }
}

function landerPosition() {
  if (lemAlive) {
    for (var i = 0; i <= landerSize; i++) {
      var data = ctx2.getImageData(lander.x - landerSize / 2 + i, lander.y + landerSize / 2, 1, 1);

      if ((data.data[0] != 0 || data.data[1] != 0 || data.data[2] != 0) && !overlz) {
        lemEngine.pause();
        lemEngine.currentTime = 0;
        lunarImpact.play();
        thrusters.pause();
        thrusters.currentTime = 0;
        messageBoard.textContent = "Ooops! you crashed!";
        messageBoard.style.visibility = "visible";
        button1.style.visibility = "visible";
        lemAlive = false;
        lem.style.visibility = "hidden";
        rotation = 0;
        lander.velocity.x = 0;
        lander.velocity.y = 0;
        thrustForce = 0;
        crash();
        break;
      }
    }
  }
}

function landCheck() {
  if (lemAlive) {
    for (var i = 0; i < 4; i++) {
      if (lander.x > lzcords[i][0] && lander.x + landerSize / 2 < lzcords[i][2] && lander.y + landerSize / 2 > lzcords[i][1] && lander.velocity.y * 100 <= 10 && lander.velocity.x * 10 > -0.2 && rotation > -3 && rotation < 3 && lander.velocity.x * 10 < 0.2) {
        thrusters.pause();
        thrusters.currentTime = 0;
        lander.y = lzcords[i][1] - landerSize / 2;
        rotation = 0;
        lander.velocity.x = 0;
        lander.velocity.y = 0;
        thrustForce = 0;

        if (!landingZones[i].used) {
          score += lzcords[i][3];
          fuel += landingZones[i].points;
          if (fuel > 100) fuel = 100;
        }

        fuelLeft.style.width = fuel + "%";
        landingZones[i].used = true;
        scoreBoard.textContent = "Score: " + score;
        messageBoard.textContent = "The Eagle has Landed";
        eagleLanded.play();
        messageBoard.style.visibility = "visible";
        button2.style.visibility = "visible";
        cancelAnimationFrame(animationId);
        break;
      } else if (lander.x > lzcords[i][0] && lander.x + landerSize / 2 < lzcords[i][2] && lander.y + landerSize / 2 > lzcords[i][1] && (lander.velocity.y * 100 > 10 || lander.velocity.x * 10 < -0.2 || rotation > 3 || rotation < -3 || lander.velocity.x * 10 > 0.2)) {
        lemEngine.pause();
        lemEngine.currentTime = 0;
        thrusters.pause();
        thrusters.currentTime = 0;
        lunarImpact.play();
        messageBoard.textContent = "Ooops! you crashed!";
        messageBoard.style.visibility = "visible";
        button1.style.visibility = "visible";
        lemAlive = false;
        lem.style.visibility = "hidden";
        rotation = 0;
        lander.velocity.x = 0;
        lander.velocity.y = 0;
        thrustForce = 0;
        crash();
        break;
      }
    }
  }
}

function launch() {
  if (landingZones[0].used == true && landingZones[1].used == true && landingZones[2].used == true && landingZones[3].used == true) {
    skillLevel -= 1;
    init();
  } else {
    messageBoard.style.visibility = "hidden";
    button2.style.visibility = "hidden";
    lander.y -= 1;
    thrustForce = 0.002;
    liftOff.play();
  }

  animate();
}

onkeydown = onkeyup = function onkeyup(e) {
  e = e || event; // to deal with IE

  KP[e.keyCode] = e.type == "keydown";
  /* insert conditional here */

  if (KP[37] || KP[65]) {
    rotateLeft = true;
  } else if (KP[39] || KP[68]) {
    rotateRight = true;
  } else if (KP[87] || KP[38]) {
    if (fuel > 0) {
      thrustUp = true;
    }
  } else if (KP[83] || KP[40]) {
    thrustDown = true;
  } else if (KP[32]) {
    thrustForce = 0;
  } else {
    rotateLeft = false;
    rotateRight = false;

    if (thrustForce > 0) {
      lem.style.backgroundImage = "url('images/Lunar Lander engine on')";
    } else {
      lem.style.backgroundImage = "url('images/Lunar Lander engine off')";
    }

    thrustUp = false;
    thrustDown = false;
  }

  if (KP[82]) {
    rotation = 0;
    lem.style.transform = "rotate(" + rotation + "deg)";
  }
}; //adjust canvas on screen resize.


window.addEventListener("resize", function () {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  c2.width = window.innerWidth;
  c2.height = window.innerHeight;
  landingZones = [];
  moonZones = [];
  ctx.clearRect(0, 0, c.width, c.height);
  ctx2.clearRect(0, 0, c2.width, c2.height);
  init();
});

function reset() {
  init();
}