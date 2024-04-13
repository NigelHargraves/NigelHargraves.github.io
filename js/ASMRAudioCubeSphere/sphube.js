class Sphube {
    constructor(x, y, z, size) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.size = size;
        this.lineWidth = 5;
        this.zoom = 1000;
        this.directX = (Math.random() - 0.5) * 0.002;
        this.directY = (Math.random() - 0.5) * 0.002;
        this.edges = new SphubeEdge(this.x, this.y, this.z, this.size);
    }
    draw() {


        let vertices = sphubeProject(this.edges.vertices, canvas.width, canvas.height, this.zoom);



        ctx.strokeStyle = 'white';
        ctx.lineWidth = 0.2;
        //vertical line.
        ctx.beginPath();
        ctx.moveTo(center.x, 0);
        ctx.lineTo(center.x, canvas.height);
        ctx.stroke();

        ctx.strokeStyle = 'coral';
        ctx.fillStyle = 'coral';
        ctx.lineWidth = this.lineWidth;

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

        ctx.lineWidth = 1;


    }
    update() {

        if (this.lineWidth > 1) {
            this.lineWidth -= 0.01;
        } else {
            if (this.lineWidth > 0.2) {
                this.lineWidth -= 0.001;
            }
        }


        this.edges.rotateX(this.directX);
        this.edges.rotateY(this.directY);

        this.draw();
    }
}