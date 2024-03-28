class Cube {
    constructor(x, y, z, size, speed, number, note, color) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.size = size;
        this.speed = speed;
        this.cubeNo = number;
        this.note = note;
        this.color = color;
        this.lineWidth = 5;
        this.zoom = 80;
        this.extraZoom = 20;
        this.directX = 0;
        this.directY = (Math.random() * -0.01) + -0.01;
        this.point = { x: 0, y: 0 };
        this.angle = 0;
        this.edges = new Edge(this.x, this.y, this.z, this.size);
    }
    draw() {

        let vertices = project(this.edges.vertices, canvas.width, canvas.height, this.cubeNo);

        ctx.save();
        ctx.translate(0 + this.point.x, (0 + this.point.y) - this.zoom * 0.5);
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.color;
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
        }

        for (let i = 0; i <= 7; i++) {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(vertices[i].x, vertices[i].y, 2, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }
    update() {
        if (this.lineWidth > 1) {
            this.lineWidth -= 0.05;
        }
        if (this.extraZoom > 0) {
            this.extraZoom -= 1;
        }
        if (this.cubeNo > 11) {
            this.point.x = orbitPaths[1].radius.x * Math.cos(this.angle);
            this.point.y = orbitPaths[1].radius.y * Math.sin(this.angle);
        } else {
            this.point.x = orbitPaths[2].radius.x * Math.cos(this.angle);
            this.point.y = orbitPaths[2].radius.y * Math.sin(this.angle);
        }


        this.angle += (Math.PI / 180) / this.speed;
        if (this.angle >= Math.PI * 2) {
            this.angle = 0;
        }

        if (this.angle > 0 && this.angle < Math.PI / 2) {
            this.zoom += 0.05;
        } else if (this.angle > Math.PI / 2 && this.angle < (Math.PI + (Math.PI / 2))) {
            this.zoom -= 0.05;
        } else {
            this.zoom += 0.05;
        }

        if (this.angle == 0) {
            this.lineWidth = 5;
            this.note.play();
            if (this.cubeNo > 11) {
                orbitPaths[1].lineWidthR = 5;
                orbitPaths[1].colorR = this.color;
            } else {
                orbitPaths[2].lineWidthR = 5;
                orbitPaths[2].colorR = this.color;
            }
            this.extraZoom = 20;
            this.zoom = 80;
            for (let i = 0; i < 10; i++) {
                velocity = { x: Math.random() - 0.5, y: Math.random() - 0.5 };
                if (this.cubeNo < 11) {
                    particles.push(new Particle(center.x + orbitPaths[2].radius.x, center.y, this.color, velocity));
                } else {
                    particles.push(new Particle(center.x + orbitPaths[1].radius.x, center.y, this.color, velocity));
                }
            }
        }

        if (this.angle >= (Math.PI / 2) - 0.001 && this.angle <= (Math.PI / 2) + 0.001) {
            this.lineWidth = 5;
            this.note.play();
            if (this.cubeNo > 11) {
                orbitPaths[1].lineWidthB = 5;
                orbitPaths[1].colorB = this.color;
            } else {
                orbitPaths[2].lineWidthB = 5;
                orbitPaths[2].colorB = this.color;
            }
            this.extraZoom = 20;
            for (let i = 0; i < 10; i++) {
                velocity = { x: Math.random() - 0.5, y: Math.random() - 0.5 };
                if (this.cubeNo < 11) {
                    particles.push(new Particle(center.x, center.y + orbitPaths[2].radius.y, this.color, velocity));
                } else {
                    particles.push(new Particle(center.x, center.y + orbitPaths[1].radius.y, this.color, velocity));
                }
            }
        }

        if (this.angle >= Math.PI - 0.001 && this.angle <= Math.PI + 0.001) {
            this.lineWidth = 5;
            this.note.play();
            if (this.cubeNo > 11) {
                orbitPaths[1].lineWidthL = 5;
                orbitPaths[1].colorL = this.color;
            } else {
                orbitPaths[2].lineWidthL = 5;
                orbitPaths[2].colorL = this.color;
            }
            this.extraZoom = 20;
            for (let i = 0; i < 10; i++) {
                velocity = { x: Math.random() - 0.5, y: Math.random() - 0.5 };
                if (this.cubeNo < 11) {
                    particles.push(new Particle(center.x - orbitPaths[2].radius.x, center.y, this.color, velocity));
                } else {
                    particles.push(new Particle(center.x - orbitPaths[1].radius.x, center.y, this.color, velocity));
                }
            }
        }

        if (this.angle >= Math.PI + (Math.PI / 2) - 0.001 && this.angle <= Math.PI + (Math.PI / 2) + 0.001) {
            this.lineWidth = 5;
            this.note.play();
            if (this.cubeNo > 11) {
                orbitPaths[1].lineWidthT = 5;
                orbitPaths[1].colorT = this.color;
            } else {
                orbitPaths[2].lineWidthT = 5;
                orbitPaths[2].colorT = this.color;
            }
            this.extraZoom = 20;
            for (let i = 0; i < 10; i++) {
                velocity = { x: Math.random() - 0.5, y: Math.random() - 0.5 };
                if (this.cubeNo < 11) {
                    particles.push(new Particle(center.x, center.y - orbitPaths[2].radius.y, this.color, velocity));
                } else {
                    particles.push(new Particle(center.x, center.y - orbitPaths[1].radius.y, this.color, velocity));
                }
            }
        }

        this.edges.rotateX(this.directX);
        this.edges.rotateY(this.directY);

        this.draw();
    }
}


let Point2D = function(x, y) {
    this.x = x;
    this.y = y;
};

let Point3D = function(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
};

let Edge = function(x, y, z, size) {
    Point3D.call(this, x, y, z);
    size *= 0.3;
    this.vertices = [
        new Point3D(x - size, y - size, z - size),
        new Point3D(x + size, y - size, z - size),
        new Point3D(x + size, y + size, z - size),
        new Point3D(x - size, y + size, z - size),
        new Point3D(x - size, y - size, z + size),
        new Point3D(x + size, y - size, z + size),
        new Point3D(x + size, y + size, z + size),
        new Point3D(x - size, y + size, z + size)
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

Edge.prototype = {
    rotateX: function(radian) {
        let cosine = Math.cos(radian);
        let sine = Math.sin(radian);
        for (let i = this.vertices.length - 1; i > -1; --i) {
            let p = this.vertices[i];
            let y = (p.y - this.y) * cosine - (p.z - this.z) * sine;
            let z = (p.y - this.y) * sine + (p.z - this.z) * cosine;
            p.y = y + this.y;
            p.z = z + this.z;
        }
    },
    rotateY: function(radian) {
        let cosine = Math.cos(radian);
        let sine = Math.sin(radian);
        for (let i = this.vertices.length - 1; i > -1; --i) {
            let p = this.vertices[i];
            let x = (p.x - this.x) * cosine - (p.z - this.z) * sine;
            let z = (p.x - this.x) * sine + (p.z - this.z) * cosine;
            p.x = x + this.x;
            p.z = z + this.z;
        }
    }
};


function project(points3d, w, h, number) {
    let points2d = new Array(points3d.length);
    let focal_length = cubes[number].zoom + cubes[number].extraZoom;
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