function handMine() {
    //mine burnium.
    let readyToMine = collisionDetection(((ground.x * -1) + mouse.x), ((ground.y * -1) + mouse.y), 100, 100, burn.x, burn.y, burn.resourceSize / 2, burn.resourceSize / 2);
    if (readyToMine) {
        pointerStyle.style.cursor = "grab";
        ctx.drawImage(pickAxe, mouse.x - c.height * 0.040 / 2, mouse.y - c.height * 0.040, c.height * 0.040, c.height * 0.040);
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