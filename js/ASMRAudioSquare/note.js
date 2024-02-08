class Note {
    constructor(x, y, speed, note) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.note = note;
        this.opacity = 0.2;
        this.r = 10;
        this.lineWidth = 5;
        this.xDirection = false;
        this.yDirection = false;
        this.left = false;
        this.up = false;
        this.range = 0.5;
    }
    draw() {
        ctx.save();
        ctx.translate(square.x, square.y);
        ctx.rotate(square.rotateAngle);
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x - canvas.width / 2, this.y - canvas.height / 2, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = "darkorchid";
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.2;
        ctx.restore();
    }
    update() {



        if (this.x <= squareCorners.topLeft.x + this.range && this.x >= squareCorners.topLeft.x - this.range &&
            this.y <= squareCorners.topLeft.y + this.range && this.y >= squareCorners.topLeft.y - this.range) {
            this.xDirection = true;
            this.yDirection = false;
            this.left = false;
            this.lineWidth = 5;
            this.opacity = 1;
            this.note.currentTime = 0.1;
            this.note.play();
            square.opacity = 1;
            square.lineWidth = 2;
            createTails(this.x, this.y)
            shoots.push(new Shoot(this.x, this.y));
        }
        if (this.x <= squareCorners.topRight.x + this.range && this.x >= squareCorners.topRight.x - this.range &&
            this.y <= squareCorners.topRight.y + this.range && this.y >= squareCorners.topRight.y - this.range) {
            this.xDirection = false;
            this.yDirection = true;
            this.up = false;
            this.lineWidth = 5;
            this.opacity = 1;
            this.note.currentTime = 0.1;
            this.note.play();
            square.opacity = 1;
            square.lineWidth = 2;
            createTails(this.x, this.y)
            shoots.push(new Shoot(this.x, this.y));

        }
        if (this.x <= squareCorners.bottomRight.x + this.range && this.x >= squareCorners.bottomRight.x - this.range &&
            this.y <= squareCorners.bottomRight.y + this.range && this.y >= squareCorners.bottomRight.y - this.range) {
            this.xDirection = true;
            this.yDirection = false;
            this.left = true;
            this.lineWidth = 5;
            this.opacity = 1;
            this.note.currentTime = 0.1;
            this.note.play();
            square.opacity = 1;
            square.lineWidth = 2;
            createTails(this.x, this.y)
            shoots.push(new Shoot(this.x, this.y));
        }
        if (this.x <= squareCorners.bottomLeft.x + this.range && this.x >= squareCorners.bottomLeft.x - this.range &&
            this.y <= squareCorners.bottomLeft.y + this.range && this.y >= squareCorners.bottomLeft.y - this.range) {
            this.xDirection = false;
            this.yDirection = true;
            this.up = true;
            this.lineWidth = 5;
            this.opacity = 1;
            this.note.currentTime = 0.1;
            this.note.play();
            square.opacity = 1;
            square.lineWidth = 2;
            createTails(this.x, this.y)
            shoots.push(new Shoot(this.x, this.y));
        }

        if (this.lineWidth > 1) {
            this.lineWidth -= 0.1;
        }

        if (this.opacity > 0.2) {
            this.opacity -= 0.01;
        }







        if (this.xDirection) {
            if (this.left) {
                this.x -= this.speed;
            } else {
                this.x += this.speed;
            }

        }
        if (this.yDirection) {
            if (this.up) {
                this.y -= this.speed;
            } else {
                this.y += this.speed;
            }

        }
        this.draw();
    }
}

function createTails(x, y) {
    for (let i = 0; i < 5; i++) {
        tails.push(new Tail(x, y))
    }
}

function forNote() {

    notes.forEach((note, index) => {




        note.update();
    });
}