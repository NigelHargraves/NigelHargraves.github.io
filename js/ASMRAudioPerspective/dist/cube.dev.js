"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cube =
/*#__PURE__*/
function () {
  function Cube(x, y, z, size) {
    _classCallCheck(this, Cube);

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

  _createClass(Cube, [{
    key: "draw",
    value: function draw() {
      var vertices = cubeProject(this.edges.vertices, canvas.width, canvas.height, this.zoom);
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
        var velocity;

        for (var i = 0; i < 100; i++) {
          velocity = {
            x: (Math.random() - 0.5) / Math.random(),
            y: (Math.random() - 0.5) / Math.random()
          };
          particles.push(new Particle(vertices[0].x, vertices[0].y, 'plum', velocity));
        }
      }

      for (var _i = this.edges.faces.length - 1; _i > -1; --_i) {
        var face = this.edges.faces[_i];
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

      for (var _i2 = 0; _i2 <= 7; _i2++) {
        ctx.beginPath();
        ctx.arc(vertices[_i2].x, vertices[_i2].y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }, {
    key: "update",
    value: function update() {
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
  }]);

  return Cube;
}();

var CubePoint2D = function CubePoint2D(x, y) {
  this.x = x;
  this.y = y;
};

var CubePoint3D = function CubePoint3D(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};

var CubeEdge = function CubeEdge(x, y, z, size) {
  CubePoint3D.call(this, x, y, z);
  size *= 0.3;
  this.vertices = [new CubePoint3D(x - size, y - size, z - size), new CubePoint3D(x + size, y - size, z - size), new CubePoint3D(x + size, y + size, z - size), new CubePoint3D(x - size, y + size, z - size), new CubePoint3D(x - size, y - size, z + size), new CubePoint3D(x + size, y - size, z + size), new CubePoint3D(x + size, y + size, z + size), new CubePoint3D(x - size, y + size, z + size)];
  this.faces = [[0, 1, 2, 3], [0, 4, 5, 1], [1, 5, 6, 2], [3, 2, 6, 7], [0, 3, 7, 4], [4, 7, 6, 5]];
};

CubeEdge.prototype = {
  rotateX: function rotateX(radian) {
    var cosine = Math.cos(radian);
    var sine = Math.sin(radian);

    for (var i = this.vertices.length - 1; i > -1; --i) {
      var p = this.vertices[i];
      var y = (p.y - this.y) * cosine - (p.z - this.z) * sine;
      var z = (p.y - this.y) * sine + (p.z - this.z) * cosine;
      p.y = y + this.y;
      p.z = z + this.z;
    }
  },
  rotateY: function rotateY(radian) {
    var cosine = Math.cos(radian);
    var sine = Math.sin(radian);

    for (var i = this.vertices.length - 1; i > -1; --i) {
      var p = this.vertices[i];
      var x = (p.x - this.x) * cosine - (p.z - this.z) * sine;
      var z = (p.x - this.x) * sine + (p.z - this.z) * cosine;
      p.x = x + this.x;
      p.z = z + this.z;
    }
  }
};

function cubeProject(points3d, w, h, zoom) {
  var points2d = new Array(points3d.length);
  var focal_length = zoom;

  for (var i = points3d.length - 1; i > -1; --i) {
    var p = points3d[i];
    var x = p.x * (focal_length / p.z) + w * 0.5;
    var y = p.y * (focal_length / p.z) + h * 0.5;
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
    for (var i = 0; i < 21; i++) {
      notes[i].note = chordC[i];
    }
  }

  if (chordToPlay == 'G1' || chordToPlay == 'G2') {
    for (var _i3 = 0; _i3 < 21; _i3++) {
      notes[_i3].note = chordG[_i3];
    }
  }

  if (chordToPlay == 'Em1' || chordToPlay == 'Em2') {
    for (var _i4 = 0; _i4 < 21; _i4++) {
      notes[_i4].note = chordEm[_i4];
    }
  }

  if (chordToPlay == 'Am') {
    for (var _i5 = 0; _i5 < 21; _i5++) {
      notes[_i5].note = chordAm[_i5];
    }
  }

  if (chordToPlay == 'F') {
    for (var _i6 = 0; _i6 < 21; _i6++) {
      notes[_i6].note = chordF[_i6];
    }
  }

  if (chordToPlay == 'Gsus4') {
    for (var _i7 = 0; _i7 < 21; _i7++) {
      notes[_i7].note = chordGsus4[_i7];
    }
  }
}