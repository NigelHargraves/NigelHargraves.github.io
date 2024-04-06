"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BackgroundCube =
/*#__PURE__*/
function () {
  function BackgroundCube(x, y) {
    _classCallCheck(this, BackgroundCube);

    this.x = x;
    this.y = y;
    this.velocity = {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5
    };
    this.opacity = 0.001;
    this.fadeIn = true;
    this.z = 10 + Math.random() * 100;
    this.size = this.z / 2;
    this.zoom = Math.random() * 500;
    this.directX = (Math.random() - 0.5) * 0.01;
    this.directY = (Math.random() - 0.5) * 0.01;
    this.edges = new bgCubeEdge(0, 0, this.z, this.size);
  }

  _createClass(BackgroundCube, [{
    key: "draw",
    value: function draw() {
      var vertices = bgcubeProject(this.edges.vertices, canvas.width, canvas.height, this.zoom);
      ctx.strokeStyle = 'coral';
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.lineWidth = 0.2;
      ctx.translate(this.x, this.y);

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

      ctx.restore();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.fadeIn) {
        this.opacity += 0.001;
      } else {
        this.opacity -= 0.001;
      }

      if (this.opacity >= 0.5) {
        this.fadeIn = false;
      }

      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.edges.rotateX(this.directX);
      this.edges.rotateY(this.directY);
      this.draw();
    }
  }]);

  return BackgroundCube;
}();

function forBackgroundCubes() {
  backgroundCubes.forEach(function (bc, index) {
    if (bc.opacity < 0.002 && !bc.fadeIn) {
      backgroundCubes.splice(index, 1);
    }

    bc.update();
  });
}

var bgCubePoint2D = function bgCubePoint2D(x, y) {
  this.x = x;
  this.y = y;
};

var bgCubePoint3D = function bgCubePoint3D(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};

var bgCubeEdge = function bgCubeEdge(x, y, z, size) {
  bgCubePoint3D.call(this, x, y, z);
  size *= 0.3;
  this.vertices = [new bgCubePoint3D(x - size, y - size, z - size), new bgCubePoint3D(x + size, y - size, z - size), new bgCubePoint3D(x + size, y + size, z - size), new bgCubePoint3D(x - size, y + size, z - size), new bgCubePoint3D(x - size, y - size, z + size), new bgCubePoint3D(x + size, y - size, z + size), new bgCubePoint3D(x + size, y + size, z + size), new bgCubePoint3D(x - size, y + size, z + size)];
  this.faces = [[0, 1, 2, 3], [0, 4, 5, 1], [1, 5, 6, 2], [3, 2, 6, 7], [0, 3, 7, 4], [4, 7, 6, 5]];
};

bgCubeEdge.prototype = {
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

function bgcubeProject(points3d, w, h, zoom) {
  var points2d = new Array(points3d.length);
  var focal_length = zoom;

  for (var i = points3d.length - 1; i > -1; --i) {
    var p = points3d[i];
    var x = p.x * (focal_length / p.z) + w * 0.5;
    var y = p.y * (focal_length / p.z) + h * 0.5;
    points2d[i] = new bgCubePoint2D(x, y);
  }

  return points2d;
}