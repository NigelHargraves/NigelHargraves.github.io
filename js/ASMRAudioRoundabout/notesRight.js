class NoteRight {
    constructor(x, y, speed, note, color) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.note = note;
        this.color = color;
        this.lineWidth = 1;
        this.r = center.y / 4;
        this.angle = Math.PI / 2;
        this.point = { x: 0, y: 0 };
        this.onRoundabout = true;
        this.velocity = { x: 0, y: 0 };
        this.aim = { x: road.topRight.x, y: center.y };
        this.onRight = true;
        this.onRightLoop = false;
        this.onLeftLoop = false;
        this.toRoundabout = false;
        this.headingRight = true;
        this.slice = 0.8;
        this.delay = 0;
        this.render = true;
    }
    draw() {

        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        if (this.render) {
            if (this.onRoundabout) {
                ctx.beginPath();
                ctx.arc(this.x + this.point.x, this.y + this.point.y, 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(this.x + this.point.x, this.y + this.point.y, 10, 0, Math.PI * 2);
                ctx.lineWidth = this.lineWidth;
                ctx.stroke();
            } else {
                ctx.beginPath();
                ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
                ctx.lineWidth = this.lineWidth;
                ctx.stroke();
            }
        } else {
            this.render = true;
        }
        ctx.lineWidth = 1;
    }
    update() {

        if (this.delay > 0) {
            this.delay -= 1;
        }


        if (this.lineWidth > 1) {
            this.lineWidth -= 0.01;
        }

        if (this.onRoundabout) {
            this.point.x = this.r * Math.cos(this.angle);
            this.point.y = this.r * Math.sin(this.angle);
            this.angle += (Math.PI / 180) / this.speed;
            if (this.headingRight) {
                if (this.angle >= Math.PI * 2) {
                    this.speed -= 0.75;
                    this.onRoundabout = false;
                    this.x += center.y / 4;
                    this.onRightLoop = true;
                    this.onRight = true;
                    this.aim = { x: road.topRight.x, y: center.y };
                    this.toRoundabout = false;
                }
            } else {
                if (this.angle >= Math.PI) {
                    this.speed -= 0.75;
                    this.onRoundabout = false;
                    this.x -= center.y / 4;
                    this.onLeftLoop = true;
                    this.onLeft = true;
                    this.aim = { x: road.topLeft.x, y: center.y };
                    this.toRoundabout = false;
                }
            }
        } else {
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            this.angle = Math.atan2(this.aim.y - this.y, this.aim.x - this.x);
            this.velocity.x = Math.cos(this.angle) * this.speed;
            this.velocity.y = Math.sin(this.angle) * this.speed;
            if (this.onRight) {
                if (this.onRightLoop) {
                    if (this.x <= this.aim.x + this.slice && this.x >= this.aim.x - this.slice) {
                        this.aim.y = road.topRight.y;
                        this.onRightLoop = false;
                    }
                } else {
                    if (this.y <= this.aim.y + this.slice && this.y >= this.aim.y - this.slice) {
                        this.aim.x = center.x;
                        if (this.delay == 0) {
                            this.note.play();
                            this.lineWidth = 3;
                            road.bigSquare = this.color;
                            this.delay = 700;
                        }
                    }
                    if (this.x <= center.x + this.slice && this.x >= center.x - this.slice) {
                        this.aim.y = center.y - (center.y / 4);
                        this.toRoundabout = true;
                    }
                    if (this.y <= this.aim.y + this.slice && this.y >= this.aim.y - this.slice && this.toRoundabout) {
                        this.x = center.x;
                        this.y = center.y;
                        this.angle = -Math.PI / 2;
                        this.onRoundabout = true;
                        this.render = false;
                        this.note.play();
                        road.lineWidth = 3;
                        road.roundaboutColor = this.color;
                        road.topRoad = this.color;
                        this.lineWidth = 3;
                        this.speed += 0.75;
                        this.headingRight = false;
                        this.onRight = false;
                    }
                }
            } else {
                if (this.onLeftLoop) {
                    if (this.x <= this.aim.x + this.slice && this.x >= this.aim.x - this.slice) {
                        this.aim.y = road.bottomRight.y;
                        this.onLeftLoop = false;
                    }
                } else {
                    if (this.y <= this.aim.y + this.slice && this.y >= this.aim.y - this.slice) {
                        this.aim.x = center.x;
                        if (this.delay == 0) {
                            this.note.play();
                            this.lineWidth = 3;
                            road.bigSquare = this.color;
                            this.delay = 700;
                        }
                    }
                    if (this.x <= center.x + this.slice && this.x >= center.x - this.slice) {
                        this.aim.y = center.y + (center.y / 4);
                        this.toRoundabout = true;
                    }
                    if (this.y <= this.aim.y + this.slice && this.y >= this.aim.y - this.slice && this.toRoundabout) {
                        this.x = center.x;
                        this.y = center.y;
                        this.angle = Math.PI / 2;
                        this.onRoundabout = true;
                        this.render = false;
                        this.note.play();
                        road.lineWidth = 3;
                        road.roundaboutColor = this.color;
                        road.bottomRoad = this.color;
                        this.lineWidth = 3;
                        this.speed += 0.75;
                        this.headingRight = true;
                        this.onLeft = false;
                    }
                }
            }
        }
        this.draw();
    }
}

function forNotesRight() {
    notesRight.forEach((note, index) => {
        note.update();
    });
}