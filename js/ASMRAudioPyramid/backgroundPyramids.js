class BackgroundPyramid {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocity = { x: Math.random() - 0.5, y: Math.random() - 0.5 };
        this.opacity = 0.001;
        this.fadeIn = true;
        this.z = 10 + (Math.random() * 100);
        this.size = this.z / 2;
        this.zoom = Math.random() * 500;
        this.directX = (Math.random() - 0.5) * 0.01;
        this.directY = (Math.random() - 0.5) * 0.01;
        this.edges = new bgPyramidEdge(0, 0, this.z, this.size);
    }
    draw() {
        let vertices = bgPyramidProject(this.edges.vertices, canvas.width, canvas.height, this.zoom);
        ctx.strokeStyle = 'green';
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = 0.2;
        ctx.translate(this.x, this.y);
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
        ctx.restore();
    }
    update() {

        if (this.fadeIn) {
            this.opacity += 0.001;
        } else {
            this.opacity -= 0.001;
        }

        if (this.opacity >= 0.5) {
            this.fadeIn = false;
        }

        this.x += this.velocity.x;
        this.y += this.velocity.y;


        this.edges.rotateX(this.directX);
        this.edges.rotateY(this.directY);

        this.draw();
    }
}

function forBackgroundPyramids() {
    backgroundPyramids.forEach((bp, index) => {
        if (bp.opacity < 0.002 && !bp.fadeIn) {
            backgroundPyramids.splice(index, 1);
        }
        bp.update();
    });
}

let bgPyramidPoint2D = function(x, y) {
    this.x = x;
    this.y = y;
};

let bgPyramidPoint3D = function(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
};

let bgPyramidEdge = function(x, y, z, size) {
    bgPyramidPoint3D.call(this, x, y, z);
    size *= 0.3;
    this.vertices = [
        new bgPyramidPoint3D(x, y - size, z),
        new bgPyramidPoint3D(x, y - size, z),
        new bgPyramidPoint3D(x + size, y + size, z - size),
        new bgPyramidPoint3D(x - size, y + size, z - size),
        new bgPyramidPoint3D(x, y - size, z),
        new bgPyramidPoint3D(x, y - size, z),
        new bgPyramidPoint3D(x + size, y + size, z + size),
        new bgPyramidPoint3D(x - size, y + size, z + size)
    ];

    this.faces = [
        [0, 1, 2, 3],
        [1, 5, 6, 2],
        [3, 2, 6, 7],
        [0, 3, 7, 4],
        [4, 7, 6, 5]
    ];
};

bgPyramidEdge.prototype = {
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

function bgPyramidProject(points3d, w, h, zoom) {
    let points2d = new Array(points3d.length);
    let focal_length = zoom;
    for (let i = points3d.length - 1; i > -1; --i) {
        let p = points3d[i];
        let x = p.x * (focal_length / p.z) + w * 0.5;
        let y = p.y * (focal_length / p.z) + h * 0.5;
        points2d[i] = new bgPyramidPoint2D(x, y);
    }
    return points2d;
}