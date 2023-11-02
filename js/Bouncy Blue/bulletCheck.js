function bulletCheck(bullet, index1) {
    enemies.forEach((enemy, index2) => {
        let colide = collisionDetection(bullet.x + 5, bullet.y, bullet.s, bullet.s, enemy.x, enemy.y, enemy.r, enemy.r);
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
            let points = Math.trunc(enemy.x / 10 + (c.height - enemy.y) / 10);
            score += points;
            if (enemy.y > c.height / 2) {
                texts.push(
                    new Text(enemy.x, enemy.y, Math.random() - 0.5, -c.height * 0.001, points, "bold 20px Arial", "yellow", 1, false)
                );
                texts.push(
                    new Text(enemy.x, enemy.y, Math.random() - 0.5, -c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false)
                );
            } else {
                texts.push(
                    new Text(enemy.x, enemy.y, Math.random() - 0.5, c.height * 0.001, points, "bold 20px Arial", "yellow", 1, false)
                );
                texts.push(
                    new Text(enemy.x, enemy.y, Math.random() - 0.5, c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false)
                );
            }
            enemies.splice(index2, 1);
            bullets.splice(index1, 1);

        }
    });
    wanderingMines.forEach((wmine, index2) => {
        let colide = collisionDetection(bullet.x + 5, bullet.y, bullet.s, bullet.s, wmine.x, wmine.y, wmine.r, wmine.r);
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
            let points = Math.trunc(wmine.x / 10 + (c.height - wmine.y) / 10) * 10;
            score += points;
            if (wmine.y > c.height / 2) {
                texts.push(
                    new Text(wmine.x, wmine.y, Math.random() - 0.5, -c.height * 0.001, points, "bold 20px Arial", "yellow", 1, false)
                );
                texts.push(
                    new Text(wmine.x, wmine.y, Math.random() - 0.5, -c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false)
                );
            } else {
                texts.push(
                    new Text(wmine.x, wmine.y, Math.random() - 0.5, c.height * 0.001, points, "bold 20px Arial", "yellow", 1, false)
                );
                texts.push(
                    new Text(wmine.x, wmine.y, Math.random() - 0.5, c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false)
                );
            }
            wanderingMines.splice(index2, 1);
            bullets.splice(index1, 1);
        }
    });
    foods.forEach((food, index2) => {
        let colide = collisionDetection(bullet.x + 5, bullet.y, bullet.s, bullet.s, food.x, food.y, food.r, food.r * 1.5);
        if (colide) {
            splat.currentTime = 0;
            splat.play();
            for (i = 0; i < Math.random() * 30 + 30; i++) {
                bloodSplats.push(new BloodSplat(food.x, food.y, Math.random() * 2, {
                    x: (Math.random() - 0.5) * (Math.random() * 6),
                    y: (Math.random() - 0.5) * (Math.random() * 6)
                }, "blue"));
            }
            if (width > 0) {
                width -= 10;
                elem.style.width = width + "%";
            }
            player.r -= 1;
            splats.push(new Splat(x, player.y, x1, y1, ang, player.r));

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
            bullets.splice(index1, 1);
        }
    });
    flowers.forEach((flower, index2) => {
        let colide = collisionDetection(bullet.x + 5, bullet.y, bullet.s, bullet.s, flower.x, flower.y, flower.r, flower.r);
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
            let points = 1000;
            score += points;
            texts.push(
                new Text(flower.x, flower.y, Math.random() - 0.5, -c.height * 0.001, points, "bold 20px Arial", "yellow", 1, false)
            );
            texts.push(
                new Text(flower.x, flower.y, Math.random() - 0.5, -c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false)
            );
            if (!collectedFlowerSacks) {
                flourSacks.push(
                    new FlourSack(flower.x, flower.y, c.height * 0.001)
                );
            }
            flowers.splice(index2, 1);
            bullets.splice(index1, 1);
        }
    });
    mushrooms.forEach((mroom, index2) => {
        let colide = collisionDetection(bullet.x + 5, bullet.y, bullet.s, bullet.s, mroom.x + (mushroomSize / 2), mroom.y + (mushroomSize / 2), mushroomSize, mushroomSize);
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
            texts.push(
                new Text(mroom.x, mroom.y, Math.random() - 0.5, -c.height * 0.001, "😞", "bold 20px Arial", "yellow", 1, false)
            );
            mushrooms.splice(index2, 1);
            bullets.splice(index1, 1);
        }
    });
}