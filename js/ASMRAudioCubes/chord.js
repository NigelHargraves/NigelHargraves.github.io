class Chord {
    constructor(x, y, z, size, speed, number) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.size = size;
        this.speed = speed;
        this.chordNo = number;
        this.lineWidth = 5;
        this.zoom = 120;
        this.extraZoom = 40;
        this.directX = 0;
        this.directY = (Math.random() * -0.01) + -0.01;
        this.point = { x: 0, y: 0 };
        this.angle = 0;
        this.edges = new ChordEdge(this.x, this.y, this.z, this.size);
    }
    draw() {
        ctx.strokeStyle = 'aquamarine';
        ctx.fillStyle = 'aquamarine';

        let vertices = chordProject(this.edges.vertices, canvas.width, canvas.height);

        ctx.save();
        ctx.translate(0 + this.point.x, (0 + this.point.y) - this.zoom * 0.5);
        ctx.lineWidth = this.lineWidth;
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
        ctx.restore();

    }
    update() {

        if (this.lineWidth > 1) {
            this.lineWidth -= 0.01;
        }

        if (this.extraZoom > 0) {
            this.extraZoom -= 0.1;
        }

        this.point.x = orbitPaths[0].radius.x * Math.cos(this.angle);
        this.point.y = orbitPaths[0].radius.y * Math.sin(this.angle);

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
            chordChange(center.x + orbitPaths[0].radius.x, center.y);
            orbitPaths[0].lineWidthR = 5;
            this.extraZoom = 20;
            this.zoom = 120;
            orbitPaths[0].colorR = 'aquamarine';
        }

        if (this.angle >= (Math.PI / 2) - 0.001 && this.angle <= (Math.PI / 2) + 0.001) {
            this.lineWidth = 5;
            chordChange(center.x, center.y + orbitPaths[0].radius.y);
            orbitPaths[0].lineWidthB = 5;
            this.extraZoom = 20;
            orbitPaths[0].colorB = 'aquamarine';
        }

        if (this.angle >= Math.PI - 0.001 && this.angle <= Math.PI + 0.001) {
            this.lineWidth = 5;
            chordChange(center.x - orbitPaths[0].radius.x, center.y);
            orbitPaths[0].lineWidthL = 5;
            this.extraZoom = 20;
            orbitPaths[0].colorL = 'aquamarine';
        }

        if (this.angle >= Math.PI + (Math.PI / 2) - 0.001 && this.angle <= Math.PI + (Math.PI / 2) + 0.001) {
            this.lineWidth = 5;
            chordChange(center.x, center.y - orbitPaths[0].radius.y);
            orbitPaths[0].lineWidthT = 5;
            this.extraZoom = 20;
            orbitPaths[0].colorT = 'aquamarine';
        }

        this.edges.rotateX(this.directX);
        this.edges.rotateY(this.directY);


        this.draw();
    }
}






let ChordPoint2D = function(x, y) {
    this.x = x;
    this.y = y;
};

let ChordPoint3D = function(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
};

let ChordEdge = function(x, y, z, size) {
    ChordPoint3D.call(this, x, y, z);
    size *= 0.3;
    this.vertices = [
        new ChordPoint3D(x - size, y - size, z - size),
        new ChordPoint3D(x + size, y - size, z - size),
        new ChordPoint3D(x + size, y + size, z - size),
        new ChordPoint3D(x - size, y + size, z - size),
        new ChordPoint3D(x - size, y - size, z + size),
        new ChordPoint3D(x + size, y - size, z + size),
        new ChordPoint3D(x + size, y + size, z + size),
        new ChordPoint3D(x - size, y + size, z + size)
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

ChordEdge.prototype = {
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

function chordProject(points3d, w, h) {
    let points2d = new Array(points3d.length);
    let focal_length = chord.zoom + chord.extraZoom;
    for (let i = points3d.length - 1; i > -1; --i) {
        let p = points3d[i];
        let x = p.x * (focal_length / p.z) + w * 0.5;
        let y = p.y * (focal_length / p.z) + h * 0.5;
        points2d[i] = new ChordPoint2D(x, y);
    }
    return points2d;
}






function chordChange(x, y) {

    for (let i = 0; i < 50; i++) {
        velocity = { x: (Math.random() - 0.5) / Math.random(), y: (Math.random() - 0.5) / Math.random() };
        particles.push(new Particle(x, y, 'aquamarine', velocity));
    }

    if (verse == 1 || verse == 2) {
        if (chordToPlay == 'Am') {
            chordToPlay = 'E1';
            EChord.play();
            EBass.play();
        } else if (chordToPlay == 'E1') {
            chordToPlay = 'G';
            GChord.play();
            GBass.play();
        } else if (chordToPlay == 'G') {
            chordToPlay = 'D';
            DChord.play();
            DBass.play();
        } else if (chordToPlay == 'D') {
            chordToPlay = 'F';
            FChord.play();
            FBass.play();
        } else if (chordToPlay == 'F') {
            chordToPlay = 'C';
            CChord.play();
            CBass.play();
        } else if (chordToPlay == 'C') {
            chordToPlay = 'Dm';
            DmChord.play();
            DBass.play();
        } else if (chordToPlay == 'Dm') {
            chordToPlay = 'E2';
            EChord.play();
            EBass.play();
        } else if (chordToPlay == 'E2' && verse == 1) {
            chordToPlay = 'Am';
            ABass.play();
            AmChord.play();
            verse++;
        } else if (chordToPlay == 'E2' && verse == 2) {
            chordToPlay = 'F';
            FChord.play();
            FBass.play();
            verse++;
        }
    } else if (verse == 3) {
        if (chordToPlay == 'F') {
            chordToPlay = 'C';
            CChord.play();
            CBass.play();
        } else if (chordToPlay == 'C') {
            chordToPlay = 'E';
            EChord.play();
            EBass.play();
        } else if (chordToPlay == 'E') {
            chordToPlay = 'Am';
            AmChord.play();
            ABass.play();
        } else if (chordToPlay == 'Am') {
            chordToPlay = 'F';
            FChord.play();
            FBass.play();
            verse++;
        }
    } else if (verse == 4) {
        if (chordToPlay == 'F') {
            chordToPlay = 'C';
            CChord.play();
            CBass.play();
        } else if (chordToPlay == 'C') {
            chordToPlay = 'Dm';
            DmChord.play();
            DBass.play();
        } else if (chordToPlay == 'Dm') {
            chordToPlay = 'E';
            EChord.play();
            EBass.play();
        } else if (chordToPlay == 'E') {
            chordToPlay = 'Am';
            AmChord.play();
            ABass.play();
            verse = 1;
        }
    }




    if (chordToPlay == 'Am') {
        for (let i = 0; i < 24; i++) {
            cubes[i].note = chordAm[i];
        }
    }

    if (chordToPlay == 'C') {
        for (let i = 0; i < 24; i++) {
            cubes[i].note = chordC[i];
        }
    }

    if (chordToPlay == 'D') {
        for (let i = 0; i < 24; i++) {
            cubes[i].note = chordD[i];
        }
    }

    if (chordToPlay == 'Dm') {
        for (let i = 0; i < 24; i++) {
            cubes[i].note = chordDm[i];
        }
    }

    if (chordToPlay == 'E' || chordToPlay == 'E1' || chordToPlay == 'E2') {
        for (let i = 0; i < 24; i++) {
            cubes[i].note = chordE[i];
        }
    }

    if (chordToPlay == 'F') {
        for (let i = 0; i < 24; i++) {
            cubes[i].note = chordF[i];
        }
    }

    if (chordToPlay == 'G') {
        for (let i = 0; i < 24; i++) {
            cubes[i].note = chordG[i];
        }
    }
}