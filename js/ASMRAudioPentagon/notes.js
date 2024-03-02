class Notes {
    constructor(x, y, speed, number, note) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.number = number;
        this.note = note
        this.opacity = 1;
        this.lineWidth = 5;
        this.r = 400;
        this.adj = 0;
        this.opp = 0;
        this.radiusDistance = 0;
        this.velocity = { x: 0, y: 0 };
        this.angle = 0;
        if (this.number < 14) {
            this.corner = 2;
        } else {
            this.corner = 3;
        }
        this.aim = { x: center.x + this.r * Math.cos(((Math.PI * 2) / 5) * 2), y: center.y + this.r * Math.sin(((Math.PI * 2) / 5) * 2) };
    }
    draw() {
        ctx.save();
        ctx.translate(pentagon.x, pentagon.y);
        ctx.rotate(pentagon.rotateAngle);
        ctx.beginPath();
        ctx.arc(this.x - center.x, this.y - center.y, 10, 0, Math.PI * 2);
        ctx.strokeStyle = 'white';
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
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


        this.opp = Math.pow(center.x - this.x, 2);
        if (this.opp < 0) this.opp *= -1;
        this.adj = Math.pow(center.y - this.y, 2);
        if (this.adj < 0) this.adj *= -1;

        this.radiusDistance = Math.floor(Math.sqrt(this.opp + this.adj));



        if (this.radiusDistance >= 400) {
            this.note.play();
            this.lineWidth = 5;
            this.opacity = 1;
            this.aim.x = center.x + this.r * Math.cos(((Math.PI * 2) / 5) * this.corner);
            this.aim.y = center.y + this.r * Math.sin(((Math.PI * 2) / 5) * this.corner);
            this.corner += 2
            if (this.corner == 12) {
                this.corner = 2;
            }
            if (this.corner == 11) {
                this.corner = 1;
            }
        }









        this.draw();
    }
}

function forNotes() {
    notes.forEach((note, index) => {
        note.update();
    });
}