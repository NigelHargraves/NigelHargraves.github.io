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
  }

  _createClass(Cube, [{
    key: "draw",
    value: function draw() {
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

      this.prototype = {
        rotateX: function rotateX(radian) {
          var cosine = Math.cos(radian);
          var sine = Math.sin(radian);

          for (var i = this.vertices.length - 1; i > -1; --i) {
            var p = this.vertices[i];
            var y = (p.y - y) * cosine - (p.z - z) * sine;
            var z = (p.y - y) * sine + (p.z - z) * cosine;
            p.y = y + y;
            p.z = z + z;
          }
        },
        rotateY: function rotateY(radian) {
          var cosine = Math.cos(radian);
          var sine = Math.sin(radian);

          for (var i = this.vertices.length - 1; i > -1; --i) {
            var p = this.vertices[i];
            var x = (p.x - x) * cosine - (p.z - z) * sine;
            var z = (p.x - x) * sine + (p.z - z) * cosine;
            p.x = x + x;
            p.z = z + z;
          }
        }
      };
      this.prototype.rotateX(this.directX);
      this.prototype.rotateY(this.directY);
      var vertices = project(this.edges.vertices, canvas.width, canvas.height, this.cubeNo);

      for (var i = this.edges.faces.length - 1; i > -1; --i) {
        var face = this.edges.faces[i];
        ctx.beginPath();
        ctx.moveTo(vertices[face[0]].x, vertices[face[0]].y);
        ctx.lineTo(vertices[face[1]].x, vertices[face[1]].y);
        ctx.lineTo(vertices[face[2]].x, vertices[face[2]].y);
        ctx.lineTo(vertices[face[3]].x, vertices[face[3]].y);
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.closePath();
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return Cube;
}();

function forCubes() {
  cubes.forEach(function (cube, index) {
    cube.update();
  });
}