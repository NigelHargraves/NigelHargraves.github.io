class Cube {
    constructor(x, y, z, size) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.size = size;
        this.lineWidth = 0.2;
        this.delay = 0;
        this.zoom = 2000;
        this.directX = 0;
        this.directY = 0.001;
        this.edges = new CubeEdge(this.x, this.y, this.z, this.size);
    }
    draw() {


        let vertices = cubeProject(this.edges.vertices, canvas.width, canvas.height, this.zoom);


        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = 'plum';
        ctx.fillStyle = 'plum';
        ctx.beginPath();
        ctx.moveTo(center.x, 0);
        ctx.lineTo(center.x, canvas.height);
        ctx.stroke();

        if (vertices[0].x <= center.x + 1 && vertices[0].x >= center.x - 1 && this.delay == 0) {
            this.lineWidth = 5;
            this.delay = 100;
        }

        for (let i = this.edges.faces.length - 1; i > -1; --i) {
            let face = this.edges.faces[i];
            ctx.beginPath();
            ctx.moveTo(vertices[face[0]].x, vertices[face[0]].y);
            ctx.lineTo(vertices[face[1]].x, vertices[face[1]].y);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(vertices[0].x, vertices[0].y, 20, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(vertices[0].x, vertices[0].y, 4, 0, Math.PI * 2);
            ctx.fill();
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
            ctx.beginPath();
            ctx.arc(vertices[i].x, vertices[i].y, 2, 0, Math.PI * 2);
            ctx.fill();
        }

    }
    update() {

        if (this.lineWidth > 0.2) {
            this.lineWidth -= 0.01;
        }


        if (this.delay > 0) {
            this.delay -= 1;
        }



        this.edges.rotateX(this.directX);
        this.edges.rotateY(this.directY);

        this.draw();
    }
}


let CubePoint2D = function(x, y) {
    this.x = x;
    this.y = y;
};

let CubePoint3D = function(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
};

let CubeEdge = function(x, y, z, size) {
    CubePoint3D.call(this, x, y, z);
    size *= 0.3;
    this.vertices = [
        new CubePoint3D(x - size, y - size, z - size),
        new CubePoint3D(x + size, y - size, z - size),
        new CubePoint3D(x + size, y + size, z - size),
        new CubePoint3D(x - size, y + size, z - size),
        new CubePoint3D(x - size, y - size, z + size),
        new CubePoint3D(x + size, y - size, z + size),
        new CubePoint3D(x + size, y + size, z + size),
        new CubePoint3D(x - size, y + size, z + size)
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

CubeEdge.prototype = {
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


function cubeProject(points3d, w, h, zoom) {
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