// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let center = { x: canvas.width / 2, y: canvas.height / 2 };




let start = false,
    playNow = true,
    showChords = false;

let delay = 0,
    speed = 6,
    chordToPlay = 'Am';



let chordDm = [],
    chordF = [],
    chordAm = [],
    chordC = [],
    chordG = [],
    chordEm = [];

let color = [],
    notes = [],
    orbitPaths = [],
    cubes = [];

let zoom = 100;

let Point2D = function(x, y) {
    this.x = x;
    this.y = y;
};




let Point3D = function(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
};


function rotateX(radian) {
    let cosine = Math.cos(radian);
    let sine = Math.sin(radian);
    for (let i = edges.vertices.length - 1; i > -1; --i) {
        let p = edges.vertices[i];
        let y = (p.y - y) * cosine - (p.z - z) * sine;
        let z = (p.y - y) * sine + (p.z - z) * cosine;
        p.y = y + y;
        p.z = z + z;
    }
};

function rotateY(radian) {
    let cosine = Math.cos(radian);
    let sine = Math.sin(radian);
    for (let i = edges.vertices.length - 1; i > -1; --i) {
        let p = edges.vertices[i];
        let x = (p.x - x) * cosine - (p.z - z) * sine;
        let z = (p.x - x) * sine + (p.z - z) * cosine;
        p.x = x + x;
        p.z = z + z;
    }
};

class edges {
    constructor(x, y, z, size) {
        Point3D.call(this, x, y, z);
        size *= 0.5;
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
    }
};













orbitPaths.push(new OrbitPath(center.x, center.y, 800, 100));


cubes.push(new Cube(center.x, center.y, 400, 300, 0));



for (let i = 0; i < 36; i++) {
    let hue1 = (Math.random() * 260) + 100;
    let hue2 = (Math.random() * 260) + 100;
    let hue3 = (Math.random() * 260) + 100;
    color.push('rgb(' + hue1 + ',' + hue2 + ',' + hue3 + ')');
}



function animate() {
    //CLS.
    ctx.fillStyle = "rgb(0, 0, 0, 0.6)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 50px Arial";
    ctx.fillStyle = 'white';
    ctx.globalAlpha = 0.04;
    ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", center.x - (center.x / 6), center.y);
    ctx.globalAlpha = 0.2;



    if (!start) {
        delay += 1;
        if (delay >= 100) {
            start = true;
        }
    }

    if (start) {
        if (playNow) {

            playNow = false;
        }

        if (showChords) {
            ctx.font = "bold 20px Arial";
            ctx.fillStyle = "white";
            ctx.fillText(chordToPlay, 0, canvas.height * 0.02);
        }

        forOrbitPaths()

        forCubes()

    }

    //call next frame.
    animationId = requestAnimationFrame(animate);

}


animate();

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 32) {
        if (showChords) {
            showChords = false;
        } else {
            showChords = true;
        }
    }
});

window.addEventListener("mousedown", (e) => {
    info = e.which;
    if (e.which == 1) {
        if (showChords) {
            showChords = false;
        } else {
            showChords = true;
        }
    }
});