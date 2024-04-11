class AntiNote {
    constructor(x, y, z, size, speed, note, color) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.size = size;
        this.speed = speed;
        this.note = note;
        this.color = color;
        this.zoomAmount = 0.2 / this.speed;
        this.lineWidth = 3;
        this.zoom = 10;
        this.directX = (Math.random() - 0.5) * 0.02;
        this.directY = (Math.random() - 0.5) * 0.02;
        this.edges = new SphubeEdge(this.x, this.y, this.z, this.size);
        this.angle = Math.PI + (Math.PI / 2);
        this.point = { x: 0, y: 0 };
        this.yPoint = canvas.height / 8;
        this.delay = 100;
        this.r = canvas.height / 8;
        this.down = true;
    }
    draw() {



        let vertices = sphubeProject(this.edges.vertices, canvas.width, canvas.height, this.zoom);

        if (this.delay == 100) {} else {
            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = this.color;
            ctx.save();
            ctx.translate(this.point.x, 0 - center.y + this.yPoint + this.point.y);
            //draw small sphube.
            for (let i = this.edges.faces.length - 1; i > -1; --i) {
                let face = this.edges.faces[i];
                ctx.beginPath();
                ctx.moveTo(vertices[face[0]].x, vertices[face[0]].y);
                ctx.lineTo(vertices[face[1]].x, vertices[face[1]].y);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(vertices[face[1]].x, vertices[face[1]].y);
                ctx.lineTo(vertices[face[2]].x, vertices[face[2]].y);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(vertices[face[2]].x, vertices[face[2]].y);
                ctx.lineTo(vertices[face[3]].x, vertices[face[3]].y);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(vertices[face[3]].x, vertices[face[3]].y);
                ctx.lineTo(vertices[face[0]].x, vertices[face[0]].y);
                ctx.stroke();
            }
        }
        ctx.restore();
        //draw center point.
        if (this.delay == 100) {} else {
            ctx.beginPath();
            ctx.arc(center.x + this.point.x, this.yPoint + this.point.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        //lines to center.
        ctx.beginPath();
        ctx.moveTo(center.x + this.point.x, this.yPoint + this.point.y);
        ctx.lineTo(center.x, center.y);
        ctx.stroke();
    }
    update() {

        if (this.lineWidth > 0.2) {
            this.lineWidth -= 0.02;
        }

        if (this.delay > 0) {
            this.delay -= 1;
        }


        if (this.point.x <= 0.1 && this.point.x >= -0.1) {
            this.lineWidth = 3;
            this.note.play();
        }







        if (this.down) {
            if (((this.angle >= Math.PI + (Math.PI / 2) - 0.001 && this.angle <= Math.PI + (Math.PI / 2) + 0.001) ||
                    (this.angle >= (Math.PI / 2) - 0.001 && this.angle <= (Math.PI / 2) + 0.001)) && this.delay == 0) {

                if (this.yPoint >= canvas.height - (canvas.height / 8) * 2) {
                    this.down = false;
                    this.zoom = 10;
                } else {
                    this.yPoint += (canvas.height / 8) * 2;
                    this.directX = (Math.random() - 0.5) * 0.02;
                    this.directY = (Math.random() - 0.5) * 0.02;
                }

                this.delay = 100;
            }
        } else {
            if (((this.angle >= Math.PI + (Math.PI / 2) - 0.001 && this.angle <= Math.PI + (Math.PI / 2) + 0.001) ||
                    (this.angle >= (Math.PI / 2) - 0.001 && this.angle <= (Math.PI / 2) + 0.001)) && this.delay == 0) {

                if (this.yPoint <= (canvas.height / 8) * 2) {
                    this.down = true;
                    this.zoom = 10;
                } else {
                    this.yPoint -= (canvas.height / 8) * 2;
                    this.directX = (Math.random() - 0.5) * 0.02;
                    this.directY = (Math.random() - 0.5) * 0.02;
                }
                this.delay = 100;
            }
        }




        if (this.down) {
            if (this.angle >= Math.PI + (Math.PI / 2) || this.angle <= Math.PI / 2) {
                this.point.x = this.r * Math.cos(this.angle);
                this.point.y = this.r * Math.sin(this.angle);
                this.zoom += this.zoomAmount;
            } else {
                this.point.x = this.r * Math.cos(this.angle);
                this.point.y = this.r * -Math.sin(this.angle);
                this.zoom -= this.zoomAmount;
            }
        } else {
            if (this.angle >= Math.PI + (Math.PI / 2) || this.angle <= Math.PI / 2) {
                this.point.x = this.r * Math.cos(this.angle);
                this.point.y = this.r * -Math.sin(this.angle);
                this.zoom += this.zoomAmount;
            } else {
                this.point.x = this.r * Math.cos(this.angle);
                this.point.y = this.r * Math.sin(this.angle);
                this.zoom -= this.zoomAmount;
            }
        }




        this.angle += (Math.PI / 180) / this.speed;



        if (this.angle >= Math.PI * 2) {
            this.angle = 0;
        }

        if (this.angle < 0) {
            this.angle = Math.PI * 2;
        }


        this.edges.rotateX(this.directX);
        this.edges.rotateY(this.directY);

        this.draw();
    }
}

function forAntiNotes() {
    antiNotes.forEach((anote, index) => {
        anote.update();
    });
}