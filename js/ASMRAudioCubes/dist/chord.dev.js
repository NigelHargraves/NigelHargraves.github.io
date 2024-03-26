"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Chord =
/*#__PURE__*/
function () {
  function Chord(x, y, z, size, speed, number) {
    _classCallCheck(this, Chord);

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
    this.directY = Math.random() * -0.01 + -0.01;
    this.point = {
      x: 0,
      y: 0
    };
    this.angle = 0;
    this.edges = new ChordEdge(this.x, this.y, this.z, this.size);
  }

  _createClass(Chord, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = 'aquamarine';
      ctx.fillStyle = 'aquamarine';
      var vertices = chordProject(this.edges.vertices, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(0 + this.point.x, 0 + this.point.y - this.zoom * 0.5);
      ctx.lineWidth = this.lineWidth;

      for (var i = this.edges.faces.length - 1; i > -1; --i) {
        var face = this.edges.faces[i];
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

      for (var _i = 0; _i <= 7; _i++) {
        ctx.beginPath();
        ctx.arc(vertices[_i].x, vertices[_i].y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.lineWidth > 1) {
        this.lineWidth -= 0.01;
      }

      if (this.extraZoom > 0) {
        this.extraZoom -= 0.1;
      }

      this.point.x = orbitPaths[0].radius.x * Math.cos(this.angle);
      this.point.y = orbitPaths[0].radius.y * Math.sin(this.angle);
      this.angle += Math.PI / 180 / this.speed;

      if (this.angle >= Math.PI * 2) {
        this.angle = 0;
      }

      if (this.angle > 0 && this.angle < Math.PI / 2) {
        this.zoom += 0.05;
      } else if (this.angle > Math.PI / 2 && this.angle < Math.PI + Math.PI / 2) {
        this.zoom -= 0.05;
      } else {
        this.zoom += 0.05;
      }

      if (this.angle == 0) {
        this.lineWidth = 5;
        chordChange();
        orbitPaths[0].lineWidthR = 5;
        this.extraZoom = 20;
        this.zoom = 120;
        orbitPaths[0].colorR = 'aquamarine';
      }

      if (this.angle >= Math.PI / 2 - 0.001 && this.angle <= Math.PI / 2 + 0.001) {
        this.lineWidth = 5;
        chordChange();
        orbitPaths[0].lineWidthB = 5;
        this.extraZoom = 20;
        orbitPaths[0].colorB = 'aquamarine';
      }

      if (this.angle >= Math.PI - 0.001 && this.angle <= Math.PI + 0.001) {
        this.lineWidth = 5;
        chordChange();
        orbitPaths[0].lineWidthL = 5;
        this.extraZoom = 20;
        orbitPaths[0].colorL = 'aquamarine';
      }

      if (this.angle >= Math.PI + Math.PI / 2 - 0.001 && this.angle <= Math.PI + Math.PI / 2 + 0.001) {
        this.lineWidth = 5;
        chordChange();
        orbitPaths[0].lineWidthT = 5;
        this.extraZoom = 20;
        orbitPaths[0].colorT = 'aquamarine';
      }

      this.edges.rotateX(this.directX);
      this.edges.rotateY(this.directY);
      this.draw();
    }
  }]);

  return Chord;
}();

var ChordPoint2D = function ChordPoint2D(x, y) {
  this.x = x;
  this.y = y;
};

var ChordPoint3D = function ChordPoint3D(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};

var ChordEdge = function ChordEdge(x, y, z, size) {
  ChordPoint3D.call(this, x, y, z);
  size *= 0.3;
  this.vertices = [new ChordPoint3D(x - size, y - size, z - size), new ChordPoint3D(x + size, y - size, z - size), new ChordPoint3D(x + size, y + size, z - size), new ChordPoint3D(x - size, y + size, z - size), new ChordPoint3D(x - size, y - size, z + size), new ChordPoint3D(x + size, y - size, z + size), new ChordPoint3D(x + size, y + size, z + size), new ChordPoint3D(x - size, y + size, z + size)];
  this.faces = [[0, 1, 2, 3], [0, 4, 5, 1], [1, 5, 6, 2], [3, 2, 6, 7], [0, 3, 7, 4], [4, 7, 6, 5]];
};

ChordEdge.prototype = {
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

function chordProject(points3d, w, h) {
  var points2d = new Array(points3d.length);
  var focal_length = chord.zoom + chord.extraZoom;

  for (var i = points3d.length - 1; i > -1; --i) {
    var p = points3d[i];
    var x = p.x * (focal_length / p.z) + w * 0.5;
    var y = p.y * (focal_length / p.z) + h * 0.5;
    points2d[i] = new ChordPoint2D(x, y);
  }

  return points2d;
}

function chordChange() {
  if (chordToPlay == 'Am') {
    chordToPlay = 'C';
    CBass.play();
  } else if (chordToPlay == 'C') {
    chordToPlay = 'D';
    DBass.play();
  } else if (chordToPlay == 'D') {
    chordToPlay = 'F';
    FBass.play();
  } else if (chordToPlay == 'F') {
    chordToPlay = 'Am';
    ABass.play();
  }

  if (chordToPlay == 'Am') {
    for (var i = 0; i < 24; i++) {
      cubes[i].note = chordAm[i];
    }
  }

  if (chordToPlay == 'C') {
    for (var _i2 = 0; _i2 < 24; _i2++) {
      cubes[_i2].note = chordC[_i2];
    }
  }

  if (chordToPlay == 'D') {
    for (var _i3 = 0; _i3 < 24; _i3++) {
      cubes[_i3].note = chordD[_i3];
    }
  }

  if (chordToPlay == 'F') {
    for (var _i4 = 0; _i4 < 24; _i4++) {
      cubes[_i4].note = chordF[_i4];
    }
  }
}