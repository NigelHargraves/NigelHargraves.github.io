"use strict";

function explodesCheck(exp) {
  var colide = collisionDetection(exp.x, exp.y, exp.s / 4, x, player.y, player.r);

  if (colide) {
    if (!playerSheild) {
      hit.currentTime = 0;
      hit.play();

      if (player.r > 20) {
        player.r = 20;
        width = 0;
        elem.style.width = width + "%";
      }

      if (controlLevel > 1) {
        controlLevel -= 1;
      }
    }
  }

  mines.forEach(function (mine, index2) {
    var colide = collisionDetection(exp.x, exp.y, exp.s / 4, mine.x, mine.y, mine.r);

    if (colide) {
      for (i = 0; i < Math.random() * 100 + 30; i++) {
        bloodSplats.push(new BloodSplat(mine.x, mine.y, Math.random() * 2, {
          x: (Math.random() - 0.5) * (Math.random() * 6),
          y: (Math.random() - 1) * (Math.random() * 20)
        }, "silver"));
      }

      var points = 100;
      score += points;
      texts.push(new Text(mine.x, mine.y, 0, -1, points, "bold 20px Arial", "white", 1));
      mines.splice(index2, 1);
    }
  });
  mushrooms.forEach(function (mroom, index2) {
    var colide = collisionDetection(exp.x, exp.y, exp.s / 4, mroom.x + mushroomSize / 2, mroom.y + mushroomSize / 2, mushroomSize);

    if (colide) {
      for (i = 0; i < Math.random() * 30 + 30; i++) {
        bloodSplats.push(new BloodSplat(mroom.x, mroom.y, Math.random() * 2, {
          x: (Math.random() - 0.5) * (Math.random() * 6),
          y: (Math.random() - 1) * (Math.random() * 10)
        }, "white"));
      }

      if (mushroomCount > 0) {
        mushroomCount -= 1;
      }

      mushrooms.splice(index2, 1);
    }
  });
}