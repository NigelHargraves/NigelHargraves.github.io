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


let SphubePoint2D = function(x, y) {
    this.x = x;
    this.y = y;
};

let SphubePoint3D = function(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
};

let SphubeEdge = function(x, y, z, size) {
    SphubePoint3D.call(this, x, y, z);
    size *= 0.25;
    this.vertices = [
        ///front
        new SphubePoint3D(x - size, y - size, z - size * sphubeSize),
        new SphubePoint3D(x + size, y - size, z - size * sphubeSize),
        new SphubePoint3D(x + size, y + size, z - size * sphubeSize),
        new SphubePoint3D(x - size, y + size, z - size * sphubeSize),
        //back
        new SphubePoint3D(x - size, y - size, z + size * sphubeSize),
        new SphubePoint3D(x + size, y - size, z + size * sphubeSize),
        new SphubePoint3D(x + size, y + size, z + size * sphubeSize),
        new SphubePoint3D(x - size, y + size, z + size * sphubeSize),
        //left
        new SphubePoint3D(x - size * sphubeSize, y - size, z - size),
        new SphubePoint3D(x - size * sphubeSize, y - size, z + size),
        new SphubePoint3D(x - size * sphubeSize, y + size, z + size),
        new SphubePoint3D(x - size * sphubeSize, y + size, z - size),
        //right
        new SphubePoint3D(x + size * sphubeSize, y - size, z + size),
        new SphubePoint3D(x + size * sphubeSize, y - size, z - size),
        new SphubePoint3D(x + size * sphubeSize, y + size, z - size),
        new SphubePoint3D(x + size * sphubeSize, y + size, z + size),
        //bottom
        new SphubePoint3D(x - size, y + size * sphubeSize, z + size),
        new SphubePoint3D(x + size, y + size * sphubeSize, z + size),
        new SphubePoint3D(x + size, y + size * sphubeSize, z - size),
        new SphubePoint3D(x - size, y + size * sphubeSize, z - size),
        //top
        new SphubePoint3D(x - size, y - size * sphubeSize, z + size),
        new SphubePoint3D(x + size, y - size * sphubeSize, z + size),
        new SphubePoint3D(x + size, y - size * sphubeSize, z - size),
        new SphubePoint3D(x - size, y - size * sphubeSize, z - size)
    ];

    this.faces = [
        //front
        [0, 1, 2, 3],
        //back
        [4, 5, 6, 7],
        //left
        [8, 9, 10, 11],
        //right
        [12, 13, 14, 15],
        //bottom
        [16, 17, 18, 19],
        //top
        [20, 21, 22, 23],
        //front left
        [0, 8, 11, 3],
        //front right
        [1, 13, 14, 2],
        //front bottom
        [3, 19, 18, 2],
        //front top
        [0, 23, 22, 1],
        //back left
        [4, 9, 10, 7],
        //back right
        [5, 12, 15, 6],
        //back bottom
        [7, 16, 17, 6],
        //back top
        [4, 20, 21, 5],
        //top left
        [23, 8, 9, 20],
        //top right
        [22, 13, 12, 21],
        //bottom left
        [19, 11, 10, 16],
        //bottom right
        [18, 14, 15, 17]
    ];
};

SphubeEdge.prototype = {
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


function sphubeProject(points3d, w, h, zoom) {
    let points2d = new Array(points3d.length);
    let focal_length = zoom;
    for (let i = points3d.length - 1; i > -1; --i) {
        let p = points3d[i];
        let x = p.x * (focal_length / p.z) + w * 0.5;
        let y = p.y * (focal_length / p.z) + h * 0.5;
        points2d[i] = new SphubePoint2D(x, y);
    }
    return points2d;
}