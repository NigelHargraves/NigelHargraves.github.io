class Note {
    constructor(x, y, z, size, speed, angle, bigR) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.size = size;
        this.speed = speed;
        this.angle = angle;
        this.bigR = bigR;
        this.zoom = 600;
        this.directX = 0.002;
        this.directY = 0.002;
        this.point = { x: 0, y: 0 };
        this.diamond = new Diamond(this.x, this.y, this.z, this.size);
        this.lineWidth = 3;
    }
    draw() {

        let vertices = project(this.diamond.vertices, canvas.width, canvas.height, this.zoom);
        ctx.lineWidth = this.lineWidth;
        ctx.save();
        ctx.translate(this.point.x, this.point.y);

        for (let i = this.diamond.faces.length - 1; i > -1; --i) {
            let face = this.diamond.faces[i];
            ctx.strokeStyle = "white";
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
            ctx.lineTo(vertices[face[0]].x, vertices[face[0]].y);
            ctx.stroke();

        }
        ctx.restore();
        //draw center point.
        ctx.beginPath();
        ctx.arc(center.x + this.point.x, center.y + this.point.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();



    }
    update() {

        if (this.lineWidth > 0.2) {
            this.lineWidth -= 0.01;
        }

        this.point.x = this.bigR * Math.cos(this.angle);
        this.point.y = this.bigR * Math.sin(this.angle);

        this.angle += (Math.PI / 180) / this.speed;
        if (this.angle >= Math.PI * 2) {
            this.angle = 0;
            cross.rightLineWidth = 3;
        }

        this.diamond.rotateX(this.directX);
        this.diamond.rotateY(this.directY);





        this.draw();
    }
}

function forNotes() {

    notes.forEach((note, index) => {
        note.update();
    });

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

let Diamond = function(x, y, z, size) {
    Point3D.call(this, x, y, z);
    size *= 0.01;
    this.vertices = [
        //points
        new Point3D(x, y - size * 1.5, z), //top
        new Point3D(x - size, y, z), //left
        new Point3D(x, y, z - size), //front
        new Point3D(x + size, y, z), //right
        new Point3D(x, y, z + size), //back
        new Point3D(x, y + size * 1.5, z) //bottom
    ];

    this.faces = [
        //top front left
        [0, 1, 2],
        //top front right
        [0, 2, 3],
        //top back left
        [0, 1, 4],
        //top back right
        [0, 3, 4],
        //bottom front left
        [5, 1, 2],
        //bottom front right
        [5, 2, 3],
        //bottom back left
        [5, 1, 4],
        //bottom back right
        [5, 3, 4]
    ];
};

Diamond.prototype = {
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

function project(points3d, w, h, zoom) {
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