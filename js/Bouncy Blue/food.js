//Food class.
class Food {
    //construct food data.
    constructor(x, y, velocityX, velocityY, radius) {
            this.x = x;
            this.y = y;
            this.velocityX = velocityX;
            this.velocityY = velocityY;
            this.r = radius;
            this.swingAngle = 0;
            this.changeAngle = true;
        }
        //draw food.
    draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.swingAngle * Math.PI / 180);
            ctx.drawImage(blueberry, 0 - this.r, 0 - this.r * 1.5, this.r * 2, this.r * 3);
            ctx.restore();
        }
        //update food.
    update() {
        if (this.swingAngle <= -10) {
            this.changeAngle = true;
        }
        if (this.swingAngle >= 10) {
            this.changeAngle = false;
        }
        if (this.changeAngle) {
            this.swingAngle += Math.random() / 5;
        } else {
            this.swingAngle -= Math.random() / 5;
        }
        this.x += -player.velocity.x * 1.25;
        this.y += this.velocityY;
        this.draw();
    }
}

function forFood() {
    foods.forEach((food, index) => {
        let colide = collisionDetection(food.x, food.y, food.r, food.r * 1.5, x, player.y, player.r, player.r);
        if (colide) {
            eatFood.currentTime = 0;
            eatFood.play();
            //add to progress bar if size is greater than 20.
            if (player.r >= c.height * 0.02) {
                width += 10;
                elem.style.width = width + "%";
                fadeText = true;
                bppos.x = food.x;
                bppos.y = food.y;
                let points = Math.trunc(food.x / 10 + (c.height - food.y) / 10);
                score += points;
                if (player.y > c.height / 2) {
                    texts.push(
                        new Text(x, player.y, Math.random() - 0.5, -c.height * 0.001, points, "bold 20px Arial", "yellow", 1, false)
                    );
                    texts.push(
                        new Text(x, player.y, Math.random() - 0.5, -c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false)
                    );
                } else {
                    texts.push(
                        new Text(x, player.y, Math.random() - 0.5, c.height * 0.001, points, "bold 20px Arial", "yellow", 1, false)
                    );
                    texts.push(
                        new Text(x, player.y, Math.random() - 0.5, c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false)
                    );
                }
            }
            //increase player size/add to score.
            player.r += 1;
            glows.push(new Glow(x, player.y, player.r, 1.1));
            foods.splice(index, 1);
            //player gets next level of control + bonus score/update variables.
            if (player.r == 30) {
                levelJump();
            }
        }
        //food hits ground.
        if (food.y > c.height - (c.height * 0.055)) {
            splat.currentTime = 0;
            splat.play();
            for (i = 0; i < Math.random() * 60 + 30; i++) {
                bloodSplats.push(new BloodSplat(food.x, food.y, Math.random() * 2, {
                    x: (Math.random() - 0.5) * (Math.random() * 6),
                    y: (Math.random() - 1) * (Math.random() * 10)
                }, "blue"));
            }
            if (controlLevel >= 3 && !collectedMilkBottles) {
                milkBottles.push(new MilkBottle(food.x, food.y + 50));
            }
            if (controlLevel > 3 && collectedMilkBottles && !collectedEggs) {
                chickenEggs.push(new Egg(food.x - c.height * 0.02, food.y));
            }
            foods.splice(index, 1);
        }
        food.update();
    });
}