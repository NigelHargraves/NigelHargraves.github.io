"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cube =
/*#__PURE__*/
function () {
  function Cube(x, y, z, size, speed, number, note, color) {
    _classCallCheck(this, Cube);

    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;
    this.speed = speed;
    this.cubeNo = number;
    this.note = note;
    this.color = color;
    this.lineWidth = 5;
    this.zoom = 80;
    this.extraZoom = 20;
    this.directX = 0;
    this.directY = Math.random() * -0.01 + -0.01;
    this.point = {
      x: 0,
      y: 0
    };
    this.angle = 0;
    this.edges = new Edge(this.x, this.y, this.z, this.size);
  }

  _createClass(Cube, [{
    key: "draw",
    value: function draw() {
      var vertices = project(this.edges.vertices, canvas.width, canvas.height, this.cubeNo);
      ctx.save();
      ctx.translate(0 + this.point.x, 0 + this.point.y - this.zoom * 0.5);
      ctx.lineWidth = this.lineWidth;
      ctx.strokeStyle = this.color;

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
        ctx.fillStyle = this.color;
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
        this.lineWidth -= 0.05;
      }

      if (this.extraZoom > 0) {
        this.extraZoom -= 1;
      }

      if (this.cubeNo > 11) {
        this.point.x = orbitPaths[1].radius.x * Math.cos(this.angle);
        this.point.y = orbitPaths[1].radius.y * Math.sin(this.angle);
      } else {
        this.point.x = orbitPaths[2].radius.x * Math.cos(this.angle);
        this.point.y = orbitPaths[2].radius.y * Math.sin(this.angle);
      }

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
        this.note.play();

        if (this.cubeNo > 11) {
          orbitPaths[1].lineWidthR = 5;
          orbitPaths[1].colorR = this.color;
        } else {
          orbitPaths[2].lineWidthR = 5;
          orbitPaths[2].colorR = this.color;
        }

        this.extraZoom = 20;
        this.zoom = 80;

        for (var i = 0; i < Math.random() * 6; i++) {
          velocity = {
            x: Math.random() - 0.5,
            y: Math.random() - 0.5
          };

          if (this.cubeNo < 12) {
            particles.push(new Particle(center.x + orbitPaths[2].radius.x, center.y, this.color, velocity));
          } else {
            particles.push(new Particle(center.x + orbitPaths[1].radius.x, center.y, this.color, velocity));
          }
        }
      }

      if (this.angle >= Math.PI / 2 - 0.002 && this.angle <= Math.PI / 2 + 0.002) {
        this.lineWidth = 5;
        this.note.play();

        if (this.cubeNo > 11) {
          orbitPaths[1].lineWidthB = 5;
          orbitPaths[1].colorB = this.color;
        } else {
          orbitPaths[2].lineWidthB = 5;
          orbitPaths[2].colorB = this.color;
        }

        this.extraZoom = 20;

        for (var _i2 = 0; _i2 < Math.random() * 6; _i2++) {
          velocity = {
            x: Math.random() - 0.5,
            y: Math.random() - 0.5
          };

          if (this.cubeNo < 12) {
            particles.push(new Particle(center.x, center.y + orbitPaths[2].radius.y, this.color, velocity));
          } else {
            particles.push(new Particle(center.x, center.y + orbitPaths[1].radius.y, this.color, velocity));
          }
        }
      }

      if (this.angle >= Math.PI - 0.002 && this.angle <= Math.PI + 0.002) {
        this.lineWidth = 5;
        this.note.play();

        if (this.cubeNo > 11) {
          orbitPaths[1].lineWidthL = 5;
          orbitPaths[1].colorL = this.color;
        } else {
          orbitPaths[2].lineWidthL = 5;
          orbitPaths[2].colorL = this.color;
        }

        this.extraZoom = 20;

        for (var _i3 = 0; _i3 < Math.random() * 6; _i3++) {
          velocity = {
            x: Math.random() - 0.5,
            y: Math.random() - 0.5
          };

          if (this.cubeNo < 12) {
            particles.push(new Particle(center.x - orbitPaths[2].radius.x, center.y, this.color, velocity));
          } else {
            particles.push(new Particle(center.x - orbitPaths[1].radius.x, center.y, this.color, velocity));
          }
        }
      }

      if (this.angle >= Math.PI + Math.PI / 2 - 0.002 && this.angle <= Math.PI + Math.PI / 2 + 0.002) {
        this.lineWidth = 5;
        this.note.play();

        if (this.cubeNo > 11) {
          orbitPaths[1].lineWidthT = 5;
          orbitPaths[1].colorT = this.color;
        } else {
          orbitPaths[2].lineWidthT = 5;
          orbitPaths[2].colorT = this.color;
        }

        this.extraZoom = 20;

        for (var _i4 = 0; _i4 < Math.random() * 6; _i4++) {
          velocity = {
            x: Math.random() - 0.5,
            y: Math.random() - 0.5
          };

          if (this.cubeNo < 12) {
            particles.push(new Particle(center.x, center.y - orbitPaths[2].radius.y, this.color, velocity));
          } else {
            particles.push(new Particle(center.x, center.y - orbitPaths[1].radius.y, this.color, velocity));
          }
        }
      }

      this.edges.rotateX(this.directX);
      this.edges.rotateY(this.directY);
      this.draw();
    }
  }]);

  return Cube;
}();

var Point2D = function Point2D(x, y) {
  this.x = x;
  this.y = y;
};

var Point3D = function Point3D(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};

var Edge = function Edge(x, y, z, size) {
  Point3D.call(this, x, y, z);
  size *= 0.3;
  this.vertices = [new Point3D(x - size, y - size, z - size), new Point3D(x + size, y - size, z - size), new Point3D(x + size, y + size, z - size), new Point3D(x - size, y + size, z - size), new Point3D(x - size, y - size, z + size), new Point3D(x + size, y - size, z + size), new Point3D(x + size, y + size, z + size), new Point3D(x - size, y + size, z + size)];
  this.faces = [[0, 1, 2, 3], [0, 4, 5, 1], [1, 5, 6, 2], [3, 2, 6, 7], [0, 3, 7, 4], [4, 7, 6, 5]];
};

Edge.prototype = {
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

function project(points3d, w, h, number) {
  var points2d = new Array(points3d.length);
  var focal_length = cubes[number].zoom + cubes[number].extraZoom;

  for (var i = points3d.length - 1; i > -1; --i) {
    var p = points3d[i];
    var x = p.x * (focal_length / p.z) + w * 0.5;
    var y = p.y * (focal_length / p.z) + h * 0.5;
    points2d[i] = new Point2D(x, y);
  }

  return points2d;
}

function forCubes() {
  cubes.forEach(function (cube, index) {
    cube.update();
  });
}