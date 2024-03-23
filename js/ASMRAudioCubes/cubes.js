class Cube {
    constructor(posx, posy, number) {
        this.pos = { x: posx, y: posy };
        this.cubeNo = number;
        this.directX = 0;
        this.directY = 0;
        this.objectDistance = 400;
        this.objectSize = 300;



    }
    draw() {


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

        this.prototype = {
            rotateX: function(radian) {
                let cosine = Math.cos(radian);
                let sine = Math.sin(radian);
                for (let i = this.vertices.length - 1; i > -1; --i) {
                    let p = this.vertices[i];
                    let y = (p.y - y) * cosine - (p.z - z) * sine;
                    let z = (p.y - y) * sine + (p.z - z) * cosine;
                    p.y = y + y;
                    p.z = z + z;
                }
            },
            rotateY: function(radian) {
                let cosine = Math.cos(radian);
                let sine = Math.sin(radian);
                for (let i = this.vertices.length - 1; i > -1; --i) {
                    let p = this.vertices[i];
                    let x = (p.x - x) * cosine - (p.z - z) * sine;
                    let z = (p.x - x) * sine + (p.z - z) * cosine;
                    p.x = x + x;
                    p.z = z + z;
                }
            }
        }


        this.prototype.rotateX(this.directX);
        this.prototype.rotateY(this.directY);







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



        this.draw();
    }
}













function forCubes() {
    cubes.forEach((cube, index) => {
        cube.update();
    });
}