"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Set the canvas element to  variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var center = {
  x: canvas.width / 2,
  y: canvas.height / 2
};
var start = false,
    playNow = true,
    showChords = false;
var delay = 0,
    speed = 6,
    chordToPlay = 'Am';
var chordDm = [],
    chordF = [],
    chordAm = [],
    chordC = [],
    chordG = [],
    chordEm = [];
var color = [],
    notes = [],
    orbitPaths = [],
    cubes = [];
var zoom = 100;

var Point2D = function Point2D(x, y) {
  this.x = x;
  this.y = y;
};

var Point3D = function Point3D(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};

function rotateX(radian) {
  var cosine = Math.cos(radian);
  var sine = Math.sin(radian);

  for (var i = edges.vertices.length - 1; i > -1; --i) {
    var p = edges.vertices[i];
    var y = (p.y - y) * cosine - (p.z - z) * sine;
    var z = (p.y - y) * sine + (p.z - z) * cosine;
    p.y = y + y;
    p.z = z + z;
  }
}

;

function rotateY(radian) {
  var cosine = Math.cos(radian);
  var sine = Math.sin(radian);

  for (var i = edges.vertices.length - 1; i > -1; --i) {
    var p = edges.vertices[i];
    var x = (p.x - x) * cosine - (p.z - z) * sine;
    var z = (p.x - x) * sine + (p.z - z) * cosine;
    p.x = x + x;
    p.z = z + z;
  }
}

;

var edges = function edges(x, y, z, size) {
  _classCallCheck(this, edges);

  Point3D.call(this, x, y, z);
  size *= 0.5;
  this.vertices = [new Point3D(x - size, y - size, z - size), new Point3D(x + size, y - size, z - size), new Point3D(x + size, y + size, z - size), new Point3D(x - size, y + size, z - size), new Point3D(x - size, y - size, z + size), new Point3D(x + size, y - size, z + size), new Point3D(x + size, y + size, z + size), new Point3D(x - size, y + size, z + size)];
  this.faces = [[0, 1, 2, 3], [0, 4, 5, 1], [1, 5, 6, 2], [3, 2, 6, 7], [0, 3, 7, 4], [4, 7, 6, 5]];
};

;
orbitPaths.push(new OrbitPath(center.x, center.y, 800, 100));
cubes.push(new Cube(center.x, center.y, 400, 300, 0));

for (var i = 0; i < 36; i++) {
  var hue1 = Math.random() * 260 + 100;
  var hue2 = Math.random() * 260 + 100;
  var hue3 = Math.random() * 260 + 100;
  color.push('rgb(' + hue1 + ',' + hue2 + ',' + hue3 + ')');
}

function animate() {
  //CLS.
  ctx.fillStyle = "rgb(0, 0, 0, 0.6)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "bold 50px Arial";
  ctx.fillStyle = 'white';
  ctx.globalAlpha = 0.04;
  ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", center.x - center.x / 6, center.y);
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

    forOrbitPaths();
    forCubes();
  } //call next frame.


  animationId = requestAnimationFrame(animate);
}

animate();
window.addEventListener("keydown", function (e) {
  if (e.keyCode == 32) {
    if (showChords) {
      showChords = false;
    } else {
      showChords = true;
    }
  }
});
window.addEventListener("mousedown", function (e) {
  info = e.which;

  if (e.which == 1) {
    if (showChords) {
      showChords = false;
    } else {
      showChords = true;
    }
  }
});