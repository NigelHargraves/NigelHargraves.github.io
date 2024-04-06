class Cube {
    constructor(x, y, z, size) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.size = size;
        this.lineWidth = 0.2;
        this.delay = 0;
        this.zoom = 2000;
        this.directX = 0.001;
        this.directY = 0.002;
        this.edges = new CubeEdge(this.x, this.y, this.z, this.size);
        this.firstTime = true;
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
            if (this.firstTime) {
                this.firstTime = false;
            } else {
                chordChange();
            }
            this.lineWidth = 5;
            this.delay = 100;
            let velocity;
            for (let i = 0; i < 100; i++) {
                velocity = { x: (Math.random() - 0.5) / Math.random(), y: (Math.random() - 0.5) / Math.random() };
                particles.push(new Particle(vertices[0].x, vertices[0].y, 'plum', velocity));
            }
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
        points2d[i] = new CubePoint2D(x, y);
    }
    return points2d;
}

function chordChange() {
    if (chordToPlay == 'C1') {
        chordToPlay = 'G1';
        GBass.play();
    } else if (chordToPlay == 'G1') {
        chordToPlay = 'Em1';
        EBass.play();
    } else if (chordToPlay == 'Em1') {
        chordToPlay = 'C2';
        CBass.play();
    } else if (chordToPlay == 'C2') {
        chordToPlay = 'G2';
        GBass.play();
    } else if (chordToPlay == 'G2') {
        chordToPlay = 'Em2';
        BBass.play();
    } else if (chordToPlay == 'Em2') {
        chordToPlay = 'Am';
        ABass.play();
    } else if (chordToPlay == 'Am') {
        chordToPlay = 'F';
        FBass.play();
    } else if (chordToPlay == 'F') {
        chordToPlay = 'Gsus4';
        DBass.play();
    } else if (chordToPlay == 'Gsus4') {
        chordToPlay = 'C1';
        CBass.play();
    }






    if (chordToPlay == 'C1' || chordToPlay == 'C2') {
        for (let i = 0; i < 21; i++) {
            notes[i].note = chordC[i];
        }
    }
    if (chordToPlay == 'G1' || chordToPlay == 'G2') {
        for (let i = 0; i < 21; i++) {
            notes[i].note = chordG[i];
        }
    }
    if (chordToPlay == 'Em1' || chordToPlay == 'Em2') {
        for (let i = 0; i < 21; i++) {
            notes[i].note = chordEm[i];
        }
    }
    if (chordToPlay == 'Am') {
        for (let i = 0; i < 21; i++) {
            notes[i].note = chordAm[i];
        }
    }
    if (chordToPlay == 'F') {
        for (let i = 0; i < 21; i++) {
            notes[i].note = chordF[i];
        }
    }
    if (chordToPlay == 'Gsus4') {
        for (let i = 0; i < 21; i++) {
            notes[i].note = chordGsus4[i];
        }
    }
}