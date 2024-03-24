class Cube {
    constructor(x, y, z, size, number) {

        this.x = x;
        this.y = y;

        this.z = z;
        this.size = size;
        this.cubeNo = number;

        this.directX = 0.001;
        this.directY = 0.001;



        this.edges = new edges(this.x, this.y, this.z, this.size);







    }
    draw() {






        let vertices = project(this.edges.vertices, canvas.width, canvas.height, this.cubeNo);

        for (let i = this.edges.faces.length - 1; i > -1; --i) {
            let face = this.edges.faces[i];
            ctx.beginPath();
            ctx.moveTo(vertices[face[0]].x, vertices[face[0]].y);
            ctx.lineTo(vertices[face[1]].x, vertices[face[1]].y);
            ctx.lineTo(vertices[face[2]].x, vertices[face[2]].y);
            ctx.lineTo(vertices[face[3]].x, vertices[face[3]].y);
            ctx.strokeStyle = "white";
            ctx.stroke();
            ctx.closePath();
        }






    }
    update() {



        rotateX(this.directX);
        rotateY(this.directY);

        this.draw();
    }
}





function project(points3d, w, h, number) {
    let points2d = new Array(points3d.length);
    let focal_length = zoom;
    for (let i = points3d.length - 1; i > -1; --i) {
        let p = points3d[i];
        let x = p.x * (focal_length / p.z) + w * 0.5;
        let y = p.y * (focal_length / p.z) + h * 0.5;
        points2d[i] = new Point2D(x, y);
    }
    return points2d;
}

function forCubes() {
    cubes.forEach((cube, index) => {
        cube.update();
    });
}