"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cube =
/*#__PURE__*/
function () {
  function Cube(posx, posy, number) {
    _classCallCheck(this, Cube);

    this.pos = {
      x: posx,
      y: posy
    };
    this.cubeNo = number;
    this.directX = 0;
    this.directY = 0;
    this.objectDistance = 400;
    this.objectSize = 300;

    this.Point2D = function (x, y) {
      this.x = x;
      this.y = y;
    };

    this.Point3D = function (x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    };

    this.edges = function (x, y, z, size) {
      this.Point3D.call(this, x, y, z);
      size *= 0.5;
      this.vertices = [new this.Point3D(x - size, y - size, z - size), new this.Point3D(x + size, y - size, z - size), new this.Point3D(x + size, y + size, z - size), new this.Point3D(x - size, y + size, z - size), new this.Point3D(x - size, y - size, z + size), new this.Point3D(x + size, y - size, z + size), new this.Point3D(x + size, y + size, z + size), new this.Point3D(x - size, y + size, z + size)];
      this.faces = [[0, 1, 2, 3], [0, 4, 5, 1], [1, 5, 6, 2], [3, 2, 6, 7], [0, 3, 7, 4], [4, 7, 6, 5]];
    };

    this.rotateX = function (radian) {
      var cosine = Math.cos(radian);
      var sine = Math.sin(radian);

      for (var i = this.vertices.length - 1; i > -1; --i) {
        var p = this.vertices[i];
        var y = (p.y - this.y) * cosine - (p.z - this.z) * sine;
        var z = (p.y - this.y) * sine + (p.z - this.z) * cosine;
        p.y = y + this.y;
        p.z = z + this.z;
      }
    };

    this.rotateY = function (radian) {
      var cosine = Math.cos(radian);
      var sine = Math.sin(radian);

      for (var i = this.vertices.length - 1; i > -1; --i) {
        var p = this.vertices[i];
        var x = (p.x - this.x) * cosine - (p.z - this.z) * sine;
        var z = (p.x - this.x) * sine + (p.z - this.z) * cosine;
        p.x = x + this.x;
        p.z = z + this.z;
      }
    };
  }

  _createClass(Cube, [{
    key: "draw",
    value: function draw() {
      var vertices = project(this.cube.vertices, canvas.width, canvas.height, this.cubeNo);

      for (var i = this.edges.faces.length - 1; i > -1; --i) {
        var face = this.edges.faces[i];
        ctx.beginPath();
        ctx.moveTo(vertices[face[0]].x, vertices[face[0]].y);
        ctx.lineTo(vertices[face[1]].x, vertices[face[1]].y);
        ctx.lineTo(vertices[face[2]].x, vertices[face[2]].y);
        ctx.lineTo(vertices[face[3]].x, vertices[face[3]].y);
        ctx.strokeStyle = "white";
        ctx.stroke(); //ctx.closePath();
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.cube.rotateX(this.directX);
      this.cube.rotateY(this.directY);
      this.draw();
    }
  }]);

  return Cube;
}();

function project(points3d, w, h, number) {
  var points2d = new Array(points3d.length);
  var focal_length = zoom;

  for (var i = points3d.length - 1; i > -1; --i) {
    var p = points3d[i];
    var x = p.x * (focal_length / p.z) + w * 0.5;
    var y = p.y * (focal_length / p.z) + h * 0.5;
    points2d[i] = cubes[number].Point2D(x, y);
  }

  return points2d;
}

function forCubes() {
  cubes.forEach(function (cube, index) {
    cube.update();
  });
}