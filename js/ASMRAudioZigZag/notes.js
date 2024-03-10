class Note {
    constructor(x, y, speed, note, direction, yAim) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.note = note;
        this.down = direction;
        this.yAim = yAim;
        this.opacity = 1;
        this.lineWidth = 5;
        this.velocity = { x: 0, y: 0 };
        this.detectionTimer = 100;
        this.angle = 0;
        this.aim = { x: right, y: (canvas.height / 10) * this.yAim };
    }
    draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.strokeStyle = 'white';
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.restore();
    }
    update() {
        if (this.lineWidth > 1) {
            this.lineWidth -= 0.1;
        }

        if (this.opacity > 0.2) {
            this.opacity -= 0.01;
        }


        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.angle = Math.atan2(this.aim.y - this.y, this.aim.x - this.x);
        this.velocity.x = Math.cos(this.angle) * this.speed;
        this.velocity.y = Math.sin(this.angle) * this.speed;

        if (this.detectionTimer > 0) {
            this.detectionTimer -= 1;
        }


        if (this.x >= left - 1 && this.x <= left + 1 && this.detectionTimer == 0) {
            zz.leftLineWidth = 5;
            this.note.play();
            this.lineWidth = 5;
            this.opacity = 1;
            if (this.down) {
                this.yAim++;
            } else {
                this.yAim--;
            }
            if (this.yAim == 10) {
                this.yAim = 9;
                this.down = false;
            }
            this.aim = { x: right, y: (canvas.height / 10) * this.yAim };
            this.detectionTimer = 100;
            this.x = left;
        } else if (this.x >= right - 1 && this.x <= right + 1 && this.detectionTimer == 0) {
            zz.rightLineWidth = 5;
            this.note.play();
            this.lineWidth = 5;
            this.opacity = 1;

            if (this.down) {
                this.yAim++;
            } else {
                this.yAim--;
            }

            if (this.yAim == 0) {
                this.yAim = 1;
                this.down = true;
            }

            this.aim = { x: left, y: (canvas.height / 10) * this.yAim };
            this.detectionTimer = 100;
            this.x = right;
        }

        if (this.x >= center.x - 1 && this.x <= center.x + 1 && this.detectionTimer == 0) {
            zz.middleLineWidth = 5;
            this.note.play();
            this.lineWidth = 5;
            this.opacity = 1;
            this.detectionTimer = 100;
        }

        this.draw();
    }
}

function forNotes() {
    notes.forEach((note, index) => {
        note.update();
    });
}