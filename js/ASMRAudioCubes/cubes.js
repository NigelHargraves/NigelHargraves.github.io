class Cube {
    constructor(posx, posy, number) {
        this.pos = { x: posx, y: posy };
        this.cubeNo = number;
        this.directX = 0;
        this.directY = 0;
        this.objectDistance = 400;
        this.objectSize = 300;


        this.Point2D = function(x, y) {
            this.x = x;
            this.y = y;
        };

        this.Point3D = function(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        };

        this.edges = function(x, y, z, size) {
            this.Point3D.call(this, x, y, z);
            size *= 0.5;
            this.vertices = [
                new this.Point3D(x - size, y - size, z - size),
                new this.Point3D(x + size, y - size, z - size),
                new this.Point3D(x + size, y + size, z - size),
                new this.Point3D(x - size, y + size, z - size),
                new this.Point3D(x - size, y - size, z + size),
                new this.Point3D(x + size, y - size, z + size),
                new this.Point3D(x + size, y + size, z + size),
                new this.Point3D(x - size, y + size, z + size)
            ];

            this.faces = [
                [0, 1, 2, 3],
                [0, 4, 5, 1],
                [1, 5, 6, 2],
                [3, 2, 6, 7],
                [0, 3, 7, 4],
                [4, 7, 6, 5]
            ];

        };


        this.rotateX = function(radian) {
            let cosine = Math.cos(radian);
            let sine = Math.sin(radian);
            for (let i = this.vertices.length - 1; i > -1; --i) {
                let p = this.vertices[i];
                let y = (p.y - this.y) * cosine - (p.z - this.z) * sine;
                let z = (p.y - this.y) * sine + (p.z - this.z) * cosine;
                p.y = y + this.y;
                p.z = z + this.z;
            }
        };

        this.rotateY = function(radian) {
            let cosine = Math.cos(radian);
            let sine = Math.sin(radian);
            for (let i = this.vertices.length - 1; i > -1; --i) {
                let p = this.vertices[i];
                let x = (p.x - this.x) * cosine - (p.z - this.z) * sine;
                let z = (p.x - this.x) * sine + (p.z - this.z) * cosine;
                p.x = x + this.x;
                p.z = z + this.z;
            }
        };


    }
    draw() {

        let vertices = project(this.cube.vertices, canvas.width, canvas.height, this.cubeNo);
        for (let i = this.edges.faces.length - 1; i > -1; --i) {
            let face = this.edges.faces[i];
            ctx.beginPath();
            ctx.moveTo(vertices[face[0]].x, vertices[face[0]].y);
            ctx.lineTo(vertices[face[1]].x, vertices[face[1]].y);
            ctx.lineTo(vertices[face[2]].x, vertices[face[2]].y);
            ctx.lineTo(vertices[face[3]].x, vertices[face[3]].y);
            ctx.strokeStyle = "white";
            ctx.stroke();
            //ctx.closePath();
        }
    }
    update() {
        this.cube.rotateX(this.directX);
        this.cube.rotateY(this.directY);
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
        points2d[i] = cubes[number].Point2D(x, y);
    }
    return points2d;
}

function forCubes() {
    cubes.forEach((cube, index) => {
        cube.update();
    });
}