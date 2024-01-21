function handMine() {
    //mine burnium.
    let readyToMine = collisionDetection(((ground.x * -1) + mouse.x), ((ground.y * -1) + mouse.y), 10, 10, burn.x, burn.y, burn.resourceSize / 2, burn.resourceSize / 2);
    if (readyToMine) {
        pointerStyle.style.cursor = "grab";
        if (startHandMine) {
            pointerStyle.style.cursor = "grabbing";
            ctx.save();
            ctx.translate(mouse.x, mouse.y);
            ctx.rotate(mineAngle);
            ctx.drawImage(pickAxe, 0 - c.height * 0.040 / 2, 0 - c.height * 0.040 / 2, c.height * 0.040, c.height * 0.040);
            ctx.restore();
            if (swingDown) {
                mineAngle -= 0.05;
            } else {
                mineAngle += 0.05;
            }
            if (mineAngle >= 0) {
                swingDown = true;
            }
            if (mineAngle <= -2) {
                ctx.beginPath();
                ctx.moveTo(mouse.x, mouse.y);
                ctx.lineTo(mouse.x, mouse.y - 30);
                ctx.moveTo(mouse.x, mouse.y);
                ctx.lineTo(mouse.x + 30, mouse.y);
                ctx.moveTo(mouse.x, mouse.y);
                ctx.lineTo(mouse.x, mouse.y + 30);
                ctx.moveTo(mouse.x, mouse.y);
                ctx.lineTo(mouse.x - 30, mouse.y);
                ctx.strokeStyle = "white";
                ctx.stroke();

                inventryItems += 1;
                burniumOreAmount += 1;
                displayInventOnce = false;
                pickAxeAudio.currentTime = 0;
                pickAxeAudio.play();
                swingDown = false;
            }
        } else {
            mineAngle = 0;
            ctx.drawImage(pickAxe, mouse.x - c.height * 0.040 / 2, mouse.y - c.height * 0.040 / 2, c.height * 0.040, c.height * 0.040);
        }

        return;
    }

    readyToMine = false;
    //mine hardium ore.
    readyToMine = collisionDetection(((ground.x * -1) + mouse.x), ((ground.y * -1) + mouse.y), 100, 100, hardOre.x, hardOre.y, hardOre.resourceSize / 2, hardOre.resourceSize / 2);
    if (readyToMine) {
        pointerStyle.style.cursor = "grab";
        ctx.drawImage(pickAxe, mouse.x - c.height * 0.040 / 2, mouse.y - c.height * 0.040, c.height * 0.040, c.height * 0.040);
        return;
    }

    pointerStyle.style.cursor = "context-menu";
}