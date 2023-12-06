class Door {
    constructor(x, y, direction, key, color) {
        this.x = x;
        this.y = y;
        this.horizontal = direction;
        this.image = key;
        this.color = color;
        this.on = true;
        this.size = 100;
    }
    draw() {
        if (!this.horizontal) {

            ctx.drawImage(this.image, floor.x + this.x - this.size / 2, floor.y + this.y, this.size, this.size);
            ctx.beginPath();
            ctx.moveTo(floor.x + this.x + (Math.random() - 0.5) * 20, floor.y + this.y);
            for (let i = 10; i <= 100; i += 10) {
                ctx.lineTo(this.x - 10 + Math.random() * 20 + floor.x, this.y + i + floor.y);
            }
            ctx.lineWidth = 1;
            ctx.strokeStyle = "white";
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(floor.x + this.x + (Math.random() - 0.5) * 20, floor.y + this.y);
            for (let i = 10; i <= 100; i += 10) {
                ctx.lineTo(this.x - 10 + Math.random() * 20 + floor.x, this.y + i + floor.y);
            }
            ctx.strokeStyle = "white";
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(floor.x + this.x - 10, floor.y + this.y);
            ctx.lineTo(this.x + 10 + floor.x, floor.y + this.y);
            ctx.moveTo(floor.x + this.x - 10, floor.y + this.y + 100);
            ctx.lineTo(this.x + 10 + floor.x, floor.y + this.y + 100);
            ctx.lineWidth = 3;
            ctx.strokeStyle = this.color;
            ctx.stroke();
        }

    }
    update() {


        this.draw();
    }
}

function forDoor() {

    doors.forEach((door) => {
        let hit = collisionDetection(player.x, player.y, player.r / 2, player.r / 2, door.x + floor.x, door.y + 50 + floor.y, 10, 50);
        if (hit && door.on) {
            let taper = 1;
            for (let i = 1; i >= 0.1; i -= 0.1) {
                ctx.globalAlpha = i;
                ctx.beginPath();
                ctx.arc(player.x, player.y, 20 + (20 * taper), 0, Math.PI * 2);
                ctx.fillStyle = "white";
                ctx.fill();
                taper += 0.1;
            }
            teleport.play();
            ctx.globalAlpha = 1;
            floor.x = c.width / 2.2;
            floor.y = c.height / 2.3;
        }
        spiders.forEach((spider, index) => {
            hit = collisionDetection(spider.x + floor.x, spider.y + floor.y, spider.r / 4, spider.r / 4, door.x + floor.x, door.y + 50 + floor.y, 10, 50);
            //kill spider.
            if (hit) {
                splated.currentTime = 0;
                splated.play();
                spiderInView = false;
                spiderSplats.push(new SpiderSplat(spider.x, spider.y));
                spiders.splice(index, 1);
            }
        });
    });











}