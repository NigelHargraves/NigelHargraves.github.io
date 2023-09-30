//Enemy class.
class Enemy {
    //construct enemy data.
    constructor(x, y, velocityX, velocityY, radius, beeDirection) {
            this.x = x;
            this.y = y;
            this.velocityX = velocityX;
            this.velocityY = velocityY;
            this.r = radius;
            this.beeDirection = beeDirection;
        }
        //draw enemy.
    draw() {
            if (this.beeDirection) {
                ctx.drawImage(beeRight, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
            } else {
                ctx.drawImage(beeLeft, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
            }
        }
        //update enemy.
    update() {
        let changeDirection = Math.random();
        if (changeDirection > 0.99) {
            if (this.beeDirection) {
                this.beeDirection = false;
            } else {
                this.beeDirection = true;
            }
        }
        if (this.beeDirection) {
            this.x += enemyVelocity - 0.4;
        } else {
            this.x -= enemyVelocity - 0.4;
        }
        this.x += -player.velocity.x;
        changeDirection = Math.random();
        if (changeDirection > 0.7) {
            this.y -= this.velocityY;
        } else {
            this.y += this.velocityY;
        }
        this.draw();
    }
}

function forEnemy() {
    enemies.forEach((enemy, index) => {
        let colide = collisionDetection(enemy.x, enemy.y, enemy.r, enemy.r, x, player.y, player.r, player.r);
        if (colide) {
            if (!playerSheild) {
                hit.currentTime = 0;
                hit.play();
                no.currentTime = 0;
                no.play();
                //reduce player size/reset variables.
                if (player.r > 20) {
                    player.r = 20;
                } else {
                    player.r -= 2;
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
            } else {
                let points = Math.trunc(enemy.x / 10 + (c.height - enemy.y) / 10);
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
            reset();
            enemies.splice(index, 1);
        }

        //enemy falls off screen.
        if (enemy.y > c.height) {
            enemies.splice(index, 1);
        }
        enemy.update();
    });
}