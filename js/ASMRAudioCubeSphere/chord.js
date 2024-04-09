class Chord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.z = 400;
        this.size = 300;
        this.zoom = 100;
        this.directX = (Math.random() - 0.5) * 0.005;
        this.directY = (Math.random() - 0.5) * 0.005;
        this.edges = new SphubeEdge(this.x, this.y, this.z, this.size);
        this.radius = { x: 600, y: 150 };
        this.point = { x: 0, y: 0 };
        this.angle = 0;
        this.lineWidth = 5;
    }
    draw() {


        ctx.lineWidth = this.lineWidth;

        //horizontal line.
        ctx.beginPath();
        ctx.moveTo(0, center.y);
        ctx.lineTo(canvas.width, center.y);
        ctx.stroke();

        //ellipse
        ctx.beginPath();
        ctx.ellipse(center.x, center.y, this.radius.x, this.radius.y, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'white';
        ctx.stroke();


        let vertices = sphubeProject(this.edges.vertices, canvas.width, canvas.height, this.zoom);

        ctx.save();
        ctx.translate(this.point.x, this.point.y);
        //draw sphube.
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
        ctx.beginPath();
        ctx.arc(center.x, center.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'White';
        ctx.fill();
        ctx.restore();

        ctx.lineWidth = 1;

    }
    update() {

        if (this.lineWidth > 0.2) {
            this.lineWidth -= 0.01;
        }


        this.point.x = this.radius.x * Math.cos(this.angle);
        this.point.y = this.radius.y * Math.sin(this.angle);

        this.angle += (Math.PI / 180) / 10;

        if (this.angle >= Math.PI * 2) {
            this.angle = 0;
            this.lineWidth = 5;
        }

        if (this.angle <= Math.PI + 0.001 && this.angle >= Math.PI - 0.001) {
            this.lineWidth = 5;
        }



        this.edges.rotateX(this.directX);
        this.edges.rotateY(this.directY);

        this.draw();
    }
}