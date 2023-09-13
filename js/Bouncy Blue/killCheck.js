function killCheck(kill) {
    let colide = collisionDetection(kill.x, kill.y, kill.r, x, player.y, player.r);
    if (colide) {
        LBall = true;
        kills = [];
        killEverything.currentTime = 0;
        killEverything.play();
        enemies.forEach((enemy) => {
            ctx.beginPath();
            ctx.moveTo(x, player.y);
            ctx.lineTo(enemy.x, enemy.y);
            ctx.strokeStyle = "white";
            ctx.stroke();
        });
        mines.forEach((mine) => {
            ctx.beginPath();
            ctx.moveTo(x, player.y);
            ctx.lineTo(mine.x, mine.y);
            ctx.strokeStyle = "white";
            ctx.stroke();
        });
        wanderingMines.forEach((wm) => {
            ctx.beginPath();
            ctx.moveTo(x, player.y);
            ctx.lineTo(wm.x, wm.y);
            ctx.strokeStyle = "white";
            ctx.stroke();
        });
        flowers.forEach((flower) => {
            ctx.beginPath();
            ctx.moveTo(x, player.y);
            ctx.lineTo(flower.x, flower.y);
            ctx.strokeStyle = "white";
            ctx.stroke();
        });
        guidedMissiles.forEach((gm) => {
            ctx.beginPath();
            ctx.moveTo(x, player.y);
            ctx.lineTo(gm.x, gm.y);
            ctx.strokeStyle = "white";
            ctx.stroke();
        });
        enemies = [];
        mines = [];
        wanderingMines = [];
        flowers = [];
        guidedMissiles = [];
    }













}