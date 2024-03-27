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
        chordChange(center.x + orbitPaths[0].radius.x, center.y);
        orbitPaths[0].lineWidthR = 5;
        this.extraZoom = 20;
        this.zoom = 120;
        orbitPaths[0].colorR = 'aquamarine';
      }

      if (this.angle >= Math.PI / 2 - 0.001 && this.angle <= Math.PI / 2 + 0.001) {
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

      if (this.angle >= Math.PI + Math.PI / 2 - 0.001 && this.angle <= Math.PI + Math.PI / 2 + 0.001) {
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

function chordChange(x, y) {
  for (var i = 0; i < 50; i++) {
    velocity = {
      x: (Math.random() - 0.5) / Math.random(),
      y: (Math.random() - 0.5) / Math.random()
    };
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
    for (var _i2 = 0; _i2 < 24; _i2++) {
      cubes[_i2].note = chordAm[_i2];
    }
  }

  if (chordToPlay == 'C') {
    for (var _i3 = 0; _i3 < 24; _i3++) {
      cubes[_i3].note = chordC[_i3];
    }
  }

  if (chordToPlay == 'D') {
    for (var _i4 = 0; _i4 < 24; _i4++) {
      cubes[_i4].note = chordD[_i4];
    }
  }

  if (chordToPlay == 'Dm') {
    for (var _i5 = 0; _i5 < 24; _i5++) {
      cubes[_i5].note = chordDm[_i5];
    }
  }

  if (chordToPlay == 'E' || chordToPlay == 'E1' || chordToPlay == 'E2') {
    for (var _i6 = 0; _i6 < 24; _i6++) {
      cubes[_i6].note = chordE[_i6];
    }
  }

  if (chordToPlay == 'F') {
    for (var _i7 = 0; _i7 < 24; _i7++) {
      cubes[_i7].note = chordF[_i7];
    }
  }

  if (chordToPlay == 'G') {
    for (var _i8 = 0; _i8 < 24; _i8++) {
      cubes[_i8].note = chordG[_i8];
    }
  }
}