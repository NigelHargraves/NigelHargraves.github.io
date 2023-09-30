"use strict";

function killCheck(kill, killScore) {
  var colide = collisionDetection(kill.x, kill.y, kill.r, kill.r, x, player.y, player.r, player.r);

  if (colide) {
    var _killScore = 0;
    LBall = true;
    kills = [];
    killEverything.currentTime = 0;
    killEverything.play();
    enemies.forEach(function (enemy) {
      _killScore += 100;
      ctx.beginPath();
      ctx.moveTo(x, player.y);
      ctx.lineTo(enemy.x, enemy.y);
      ctx.strokeStyle = "white";
      ctx.stroke();
    });
    mines.forEach(function (mine) {
      _killScore += 100;
      ctx.beginPath();
      ctx.moveTo(x, player.y);
      ctx.lineTo(mine.x, mine.y);
      ctx.strokeStyle = "white";
      ctx.stroke();
    });
    wanderingMines.forEach(function (wm) {
      _killScore += 100;
      ctx.beginPath();
      ctx.moveTo(x, player.y);
      ctx.lineTo(wm.x, wm.y);
      ctx.strokeStyle = "white";
      ctx.stroke();
    });
    flowers.forEach(function (flower) {
      _killScore += 100;
      ctx.beginPath();
      ctx.moveTo(x, player.y);
      ctx.lineTo(flower.x, flower.y);
      ctx.strokeStyle = "white";
      ctx.stroke();
    });
    guidedMissiles.forEach(function (gm) {
      _killScore += 100;
      ctx.beginPath();
      ctx.moveTo(x, player.y);
      ctx.lineTo(gm.x, gm.y);
      ctx.strokeStyle = "white";
      ctx.stroke();
    });
    score += _killScore;

    if (player.y > c.height / 2) {
      texts.push(new Text(x, player.y, 0, -1, _killScore, "bold 40px Arial", "red", 1));
    } else {
      texts.push(new Text(x, player.y, 0, 1, _killScore, "bold 40px Arial", "red", 1));
    }

    enemies = [];
    mines = [];
    wanderingMines = [];
    flowers = [];
    guidedMissiles = [];
  }
}