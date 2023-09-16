"use strict";

function bulletCheck(bullet, index1) {
  enemies.forEach(function (enemy, index2) {
    var colide = collisionDetection(bullet.x + 5, bullet.y, 10, enemy.x, enemy.y, enemy.r);

    if (colide) {
      splat.currentTime = 0;
      pain.currentTime = 0;
      splat.play();
      pain.play();

      for (i = 0; i < Math.random() * 30 + 30; i++) {
        bloodSplats.push(new BloodSplat(enemy.x, enemy.y, Math.random() * 2, {
          x: (Math.random() - 0.5) * (Math.random() * 6),
          y: (Math.random() - 0.5) * (Math.random() * 6)
        }, "yellow"));
      }

      var points = Math.trunc(enemy.x / 10 + (c.height - enemy.y) / 10);
      score += points;

      if (enemy.y > c.height / 2) {
        texts.push(new Text(enemy.x, enemy.y, 0, -1, points + " 😃", "bold 20px Arial", "yellow", 1, false));
      } else {
        texts.push(new Text(enemy.x, enemy.y, 0, 1, points + " 😃", "bold 20px Arial", "yellow", 1, false));
      }

      enemies.splice(index2, 1);
      bullets.splice(index1, 1);
    }
  });
  wanderingMines.forEach(function (wmine, index2) {
    var colide = collisionDetection(bullet.x + 5, bullet.y, 10, wmine.x, wmine.y, wmine.r);

    if (colide) {
      splat.currentTime = 0;
      pain.currentTime = 0;
      splat.play();
      pain.play();

      for (i = 0; i < Math.random() * 30 + 30; i++) {
        bloodSplats.push(new BloodSplat(wmine.x, wmine.y, Math.random() * 2, {
          x: (Math.random() - 0.5) * (Math.random() * 6),
          y: (Math.random() - 0.5) * (Math.random() * 6)
        }, "yellow"));
      }

      var points = Math.trunc(wmine.x / 10 + (c.height - wmine.y) / 10) * 10;
      score += points;

      if (wmine.y > c.height / 2) {
        texts.push(new Text(wmine.x, wmine.y, 0, -1, points + " 😃", "bold 20px Arial", "yellow", 1, false));
      } else {
        texts.push(new Text(wmine.x, wmine.y, 0, 1, points + " 😃", "bold 20px Arial", "yellow", 1, false));
      }

      wanderingMines.splice(index2, 1);
      bullets.splice(index1, 1);
    }
  });
  foods.forEach(function (food, index2) {
    var colide = collisionDetection(bullet.x + 5, bullet.y, 10, food.x, food.y, food.r);

    if (colide) {
      splat.currentTime = 0;
      splat.play();

      for (i = 0; i < Math.random() * 30 + 30; i++) {
        bloodSplats.push(new BloodSplat(food.x, food.y, Math.random() * 2, {
          x: (Math.random() - 0.5) * (Math.random() * 6),
          y: (Math.random() - 0.5) * (Math.random() * 6)
        }, "blue"));
      }

      if (!playerSheild) {
        if (width > 0) {
          width -= 10;
          elem.style.width = width + "%";
        }

        player.r -= 1;
        splats.push(new Splat(x, player.y, x1, y1, ang, player.r));
      }

      if (player.y > c.height / 2) {
        texts.push(new Text(x, player.y, 0, -1, "🤕", "bold 20px Arial", "yellow", 1, false));
      } else {
        texts.push(new Text(x, player.y, 0, 1, "🤕", "bold 20px Arial", "yellow", 1, false));
      }

      foods.splice(index2, 1);
      bullets.splice(index1, 1);
    }
  });
  flowers.forEach(function (flower, index2) {
    var colide = collisionDetection(bullet.x + 5, bullet.y, 10, flower.x, flower.y, flower.r);

    if (colide) {
      splat.currentTime = 0;
      splat.play();

      for (i = 0; i < Math.random() * 30 + 30; i++) {
        bloodSplats.push(new BloodSplat(flower.x, flower.y, Math.random() * 2, {
          x: (Math.random() - 0.5) * (Math.random() * 6),
          y: (Math.random() - 0.5) * (Math.random() * 6)
        }, "yellow"));
      }

      for (i = 0; i < Math.random() * 30 + 30; i++) {
        bloodSplats.push(new BloodSplat(flower.x, flower.y + flower.r * 2, Math.random() * 2, {
          x: (Math.random() - 0.5) * (Math.random() * 6),
          y: (Math.random() - 0.5) * (Math.random() * 6)
        }, "green"));
      }

      var points = 100;
      score += points;
      texts.push(new Text(flower.x, flower.y, 0, -1, points + " 😃", "bold 20px Arial", "yellow", 1, false));
      flowers.splice(index2, 1);
      bullets.splice(index1, 1);
    }
  });
  mushrooms.forEach(function (mroom, index2) {
    var colide = collisionDetection(bullet.x + 5, bullet.y, 10, mroom.x + mushroomSize / 2, mroom.y + mushroomSize / 2, mushroomSize / 2 + 10);

    if (colide) {
      splat.currentTime = 0;
      splat.play();

      for (i = 0; i < Math.random() * 30 + 30; i++) {
        bloodSplats.push(new BloodSplat(mroom.x + mushroomSize / 2, mroom.y + mushroomSize / 2, Math.random() * 2, {
          x: (Math.random() - 0.5) * (Math.random() * 6),
          y: (Math.random() - 0.5) * (Math.random() * 6)
        }, "white"));
      }

      if (mushroomCount > 0) {
        mushroomCount -= 1;
      }

      if (player.y > c.height / 2) {
        texts.push(new Text(x, player.y, 0, -1, "😞", "bold 20px Arial", "yellow", 1, false));
      } else {
        texts.push(new Text(x, player.y, 0, 1, "😞", "bold 20px Arial", "yellow", 1, false));
      }

      mushrooms.splice(index2, 1);
      bullets.splice(index1, 1);
    }
  });
}