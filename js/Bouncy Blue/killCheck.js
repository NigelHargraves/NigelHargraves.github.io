function killCheck(kill, killScore) {
    let colide = collisionDetection(kill.x, kill.y, kill.r, kill.r, x, player.y, player.r, player.r);
    if (colide) {
        let killScore = 0;
        LBall = true;
        kills = [];
        killEverything.currentTime = 0;
        killEverything.play();
        enemies.forEach((enemy) => {
            killScore += 100;
            ctx.beginPath();
            ctx.moveTo(x, player.y);
            ctx.lineTo(enemy.x, enemy.y);
            ctx.strokeStyle = "white";
            ctx.stroke();
        });
        mines.forEach((mine) => {
            killScore += 100;
            ctx.beginPath();
            ctx.moveTo(x, player.y);
            ctx.lineTo(mine.x, mine.y);
            ctx.strokeStyle = "white";
            ctx.stroke();
        });
        wanderingMines.forEach((wm) => {
            killScore += 100;
            ctx.beginPath();
            ctx.moveTo(x, player.y);
            ctx.lineTo(wm.x, wm.y);
            ctx.strokeStyle = "white";
            ctx.stroke();
        });
        flowers.forEach((flower) => {
            killScore += 100;
            ctx.beginPath();
            ctx.moveTo(x, player.y);
            ctx.lineTo(flower.x, flower.y);
            ctx.strokeStyle = "white";
            ctx.stroke();
        });
        guidedMissiles.forEach((gm) => {
            killScore += 100;
            ctx.beginPath();
            ctx.moveTo(x, player.y);
            ctx.lineTo(gm.x, gm.y);
            ctx.strokeStyle = "white";
            ctx.stroke();
        });

        score += killScore;
        if (player.y > c.height / 2) {
            texts.push(
                new Text(x, player.y, 0, -1, killScore, "bold 40px Arial", "red", 1)
            );
        } else {
            texts.push(
                new Text(x, player.y, 0, 1, killScore, "bold 40px Arial", "red", 1)
            );
        }

        enemies = [];
        mines = [];
        wanderingMines = [];
        flowers = [];
        guidedMissiles = [];
    }













}