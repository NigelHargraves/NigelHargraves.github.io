//create ammo class.
class Ammo {
    //construct ammo data.
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.length = 50;
        this.height = 25;
    }

    //draw ammo.
    draw() {
        ctx.drawImage(ammoBox, this.x, this.y, this.length, this.height);
    }

    //update ammo.
    update() {
        this.x += -player.velocity.x * 1.25;
        this.draw();
    }
}

function forAmmo() {
    ammos.forEach((ammo, index) => {
        let colide = collisionDetection(ammo.x + (ammo.length / 2), ammo.y + (ammo.height / 2), ammo.length / 2, ammo.height / 2, x, player.y, player.r, player.r);
        if (colide) {
            texts.push(
                new Text(x, player.y, Math.random() - 0.5, -c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false)
            );
            let reloadSound = Math.floor(Math.random() * 3);
            if (reloadSound == 0) {
                reload1.currentTime = 0;
                reload1.play();
            } else if (reloadSound == 1) {
                reload2.currentTime = 0;
                reload2.play();
            } else {
                reload3.currentTime = 0;
                reload3.play();
            }
            ammoLeft = 100;
            ammos.splice(index, 1);
        }
        ammo.update();
    });
}