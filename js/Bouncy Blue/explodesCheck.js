function explodesCheck(exp) {
    let colide = collisionDetection(exp.x, exp.y, exp.s / 4, x, player.y, player.r);
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
    mines.forEach((mine, index2) => {
        let colide = collisionDetection(exp.x, exp.y, exp.s / 4, mine.x, mine.y, mine.r);
        if (colide) {
            for (i = 0; i < Math.random() * 100 + 30; i++) {
                bloodSplats.push(new BloodSplat(mine.x, mine.y, Math.random() * 2, {
                    x: (Math.random() - 0.5) * (Math.random() * 6),
                    y: (Math.random() - 1) * (Math.random() * 20)
                }, "silver"));
            }
            let points = 100;
            score += points;
            texts.push(
                new Text(mine.x, mine.y, Math.random() - 0.5, -1, points, "bold 20px Arial", "white", 1)
            );
            texts.push(
                new Text(mine.x, mine.y, Math.random() - 0.5, -c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false)
            );
            mines.splice(index2, 1);
        }
    });
    enemies.forEach((enemy, index2) => {
        let colide = collisionDetection(exp.x, exp.y, exp.s / 2, enemy.x, enemy.y, enemy.r);
        if (colide) {
            splat.currentTime = 0;
            pain.currentTime = 0;
            splat.play();
            pain.play();
            for (i = 0; i < Math.random() * 100 + 30; i++) {
                bloodSplats.push(new BloodSplat(enemy.x, enemy.y, Math.random() * 2, {
                    x: (Math.random() - 0.5) * (Math.random() * 6),
                    y: (Math.random() - 1) * (Math.random() * 20)
                }, "yellow"));
            }
            let points = Math.trunc(enemy.x / 10 + (c.height - enemy.y) / 10);
            score += points;
            texts.push(
                new Text(enemy.x, enemy.y, Math.random() - 0.5, -1, points, "bold 20px Arial", "white", 1)
            );
            texts.push(
                new Text(enemy.x, enemy.y, Math.random() - 0.5, -c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false)
            );
            enemies.splice(index2, 1);
        }
    });
    mushrooms.forEach((mroom, index2) => {
        let colide = collisionDetection(exp.x, exp.y, exp.s / 4, mroom.x + mushroomSize / 2, mroom.y + mushroomSize / 2, mushroomSize);
        if (colide) {
            splat.currentTime = 0;
            splat.play();
            for (i = 0; i < Math.random() * 30 + 30; i++) {
                bloodSplats.push(new BloodSplat(mroom.x, mroom.y, Math.random() * 2, {
                    x: (Math.random() - 0.5) * (Math.random() * 6),
                    y: (Math.random() - 1) * (Math.random() * 10)
                }, "white"));
            }
            if (mushroomCount > 0) {
                mushroomCount -= 1;
            }
            texts.push(
                new Text(mroom.x, mroom.y, Math.random() - 0.5, -c.height * 0.001, "😞", "bold 20px Arial", "yellow", 1, false)
            );
            mushrooms.splice(index2, 1);
        }
    });
    foods.forEach((food, index2) => {
        let colide = collisionDetection(exp.x, exp.y, exp.s / 2, food.x, food.y, food.r);
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
                texts.push(
                    new Text(x, player.y, Math.random() - 0.5, -c.height * 0.001, "🤕", "bold 20px Arial", "yellow", 1, false)
                );
            } else {
                texts.push(
                    new Text(x, player.y, Math.random() - 0.5, c.height * 0.001, "🤕", "bold 20px Arial", "yellow", 1, false)
                );
            }
            foods.splice(index2, 1);
        }
    });
    flowers.forEach((flower, index2) => {
        let colide = collisionDetection(exp.x, exp.y, exp.s / 2, flower.x, flower.y, flower.r);
        if (colide) {
            splat.currentTime = 0;
            splat.play();
            for (i = 0; i < Math.random() * 100 + 30; i++) {
                bloodSplats.push(new BloodSplat(flower.x, flower.y, Math.random() * 2, {
                    x: (Math.random() - 0.5) * (Math.random() * 6),
                    y: (Math.random() - 1) * (Math.random() * 20)
                }, "yellow"));
            }
            for (i = 0; i < Math.random() * 100 + 30; i++) {
                bloodSplats.push(new BloodSplat(flower.x, flower.y + flower.r * 2, Math.random() * 2, {
                    x: (Math.random() - 0.5) * (Math.random() * 6),
                    y: (Math.random() - 1) * (Math.random() * 20)
                }, "LimeGreen"));
            }
            let points = 1000;
            score += points;
            texts.push(
                new Text(flower.x, flower.y, Math.random() - 0.5, -1, points, "bold 20px Arial", "white", 1)
            );
            texts.push(
                new Text(flower.x, flower.y, Math.random() - 0.5, -c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false)
            );
            flourSacks.push(
                new FlourSack(flower.x, flower.y, c.height * 0.001)
            );
            flowers.splice(index2, 1);
        }
    });
}