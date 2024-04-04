class Note {
    constructor(x, y, z, size, number, speed, note, color) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.size = size;
        this.noteNo = number;
        this.speed = speed;
        this.extraSpeed = 0.001;
        this.zoomIn = true;
        this.fillFace = true;
        this.faceOpacity = 1;
        this.note = note;
        this.color = color;
        this.lineWidth = 5;
        this.zoom = 80;
        this.directX = 0;
        this.directY = 0;
        this.edges = new Edge(this.x, this.y, this.z, this.size);
    }
    draw() {

        let vertices = project(this.edges.vertices, canvas.width, canvas.height, this.noteNo);



        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.lineWidth = this.lineWidth;

        if (this.fillFace) {
            ctx.globalAlpha = this.faceOpacity;
            //front face.
            let region = new Path2D();
            region.moveTo(vertices[0].x, vertices[0].y);
            region.lineTo(vertices[1].x, vertices[1].y);
            region.lineTo(vertices[2].x, vertices[2].y);
            region.lineTo(vertices[3].x, vertices[3].y);
            region.closePath();
            ctx.fill(region);





            //right face.
            region = new Path2D();
            region.moveTo(vertices[1].x, vertices[1].y);
            region.lineTo(vertices[5].x, vertices[5].y);
            region.lineTo(vertices[6].x, vertices[6].y);
            region.lineTo(vertices[2].x, vertices[2].y);
            region.closePath();
            ctx.fillStyle = shadeFace(this.color, 'right');
            ctx.fill(region);


            //left face.
            region = new Path2D();
            region.moveTo(vertices[0].x, vertices[0].y);
            region.lineTo(vertices[4].x, vertices[4].y);
            region.lineTo(vertices[7].x, vertices[7].y);
            region.lineTo(vertices[3].x, vertices[3].y);
            region.closePath();
            ctx.fillStyle = shadeFace(this.color, 'left');
            ctx.fill(region);
            //bottom face.
            region = new Path2D();
            region.moveTo(vertices[3].x, vertices[3].y);
            region.lineTo(vertices[7].x, vertices[7].y);
            region.lineTo(vertices[6].x, vertices[6].y);
            region.lineTo(vertices[2].x, vertices[2].y);
            region.closePath();
            ctx.fillStyle = shadeFace(this.color, 'bottom');
            ctx.fill(region);
            //top face.
            region = new Path2D();
            region.moveTo(vertices[0].x, vertices[0].y);
            region.lineTo(vertices[4].x, vertices[4].y);
            region.lineTo(vertices[5].x, vertices[5].y);
            region.lineTo(vertices[1].x, vertices[1].y);
            region.closePath();
            ctx.fillStyle = shadeFace(this.color, 'top');
            ctx.fill(region);
        }
        ctx.globalAlpha = 0.4;





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

            ctx.beginPath();
            ctx.arc(vertices[i].x, vertices[i].y, 2, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.lineWidth = 1;
    }
    update() {
        if (this.faceOpacity > 0.02) {
            this.faceOpacity -= 0.02;
        } else {
            this.fillFace = false;
        }
        if (this.lineWidth > 1) {
            this.lineWidth -= 0.05;
        }
        if (this.zoomIn) {
            this.zoom += this.speed;
            this.speed += this.extraSpeed;
        } else {
            this.zoom -= this.speed;
            this.speed -= this.extraSpeed;
        }

        if (this.zoom >= 400) {
            this.faceOpacity = 1;
            this.fillFace = true;
            this.zoomIn = false;
            this.lineWidth = 5;
            this.note.play();
        }
        if (this.zoom <= 80) {
            this.faceOpacity = 1;
            this.fillFace = true;
            this.zoomIn = true;
            this.lineWidth = 5;
            this.note.play();
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
        new Point3D(x - size, y - size, z - size / 4),
        new Point3D(x + size, y - size, z - size / 4),
        new Point3D(x + size, y + size, z - size / 4),
        new Point3D(x - size, y + size, z - size / 4),
        new Point3D(x - size, y - size, z + size / 4),
        new Point3D(x + size, y - size, z + size / 4),
        new Point3D(x + size, y + size, z + size / 4),
        new Point3D(x - size, y + size, z + size / 4)
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
    let focal_length = notes[number].zoom;
    for (let i = points3d.length - 1; i > -1; --i) {
        let p = points3d[i];
        let x = p.x * (focal_length / p.z) + w * 0.5;
        let y = p.y * (focal_length / p.z) + h * 0.5;
        points2d[i] = new Point2D(x, y);
    }
    return points2d;
}

function forNotes() {
    notes.forEach((note, index) => {
        note.update();
    });
}

function shadeFace(color, type) {
    let value = '';
    let redValue = 0;
    let greenValue = 0;
    let blueValue = 0;
    let colorArray;
    let v1 = 10;
    let v2 = 20;


    for (let i = 4; i <= 6; i++) {
        value += color[i];
        redValue = Number(value);
    }
    value = '';
    for (let i = 8; i <= 10; i++) {
        value += color[i];
        greenValue = Number(value);
    }
    value = '';
    for (let i = 12; i <= 14; i++) {
        value += color[i];
        blueValue = Number(value);
    }

    if (redValue > greenValue && redValue > blueValue) {
        if (type == 'right') redValue += v1;
        if (type == 'bottom') redValue += v2;
        if (type == 'left') redValue -= v1;
        if (type == 'top') redValue -= v2;
    }
    if (greenValue > redValue && greenValue > blueValue) {
        if (type == 'right') greenValue += v1;
        if (type == 'bottom') greenValue += v2;
        if (type == 'left') greenValue -= v1;
        if (type == 'top') greenValue -= v2;
    }
    if (blueValue > redValue && blueValue > greenValue) {
        if (type == 'right') blueValue += v1;
        if (type == 'bottom') blueValue += v2;
        if (type == 'left') blueValue -= v1;
        if (type == 'top') blueValue -= v2;
    }
    if (redValue < greenValue && redValue < blueValue) {
        if (type == 'right') redValue -= v1;
        if (type == 'bottom') redValue -= v2;
        if (type == 'left') redValue += v1;
        if (type == 'top') redValue += v2;
    }
    if (greenValue < redValue && greenValue < blueValue) {
        if (type == 'right') greenValue -= v1;
        if (type == 'bottom') greenValue -= v2;
        if (type == 'left') greenValue += v1;
        if (type == 'top') greenValue += v2;
    }
    if (blueValue < redValue && blueValue < greenValue) {
        if (type == 'right') blueValue -= v1;
        if (type == 'bottom') blueValue -= v2;
        if (type == 'left') blueValue += v1;
        if (type == 'top') blueValue += v2;
    }

    colorArray = { r: redValue, g: greenValue, b: blueValue };

    return 'rgb(' + colorArray.r + ',' + colorArray.g + ',' + colorArray.b + ')';
}