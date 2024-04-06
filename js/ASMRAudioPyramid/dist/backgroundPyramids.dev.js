"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BackgroundPyramid =
/*#__PURE__*/
function () {
  function BackgroundPyramid(x, y) {
    _classCallCheck(this, BackgroundPyramid);

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
    this.edges = new bgPyramidEdge(0, 0, this.z, this.size);
  }

  _createClass(BackgroundPyramid, [{
    key: "draw",
    value: function draw() {
      var vertices = bgPyramidProject(this.edges.vertices, canvas.width, canvas.height, this.zoom);
      ctx.strokeStyle = 'green';
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

  return BackgroundPyramid;
}();

function forBackgroundPyramids() {
  backgroundPyramids.forEach(function (bp, index) {
    if (bp.opacity < 0.002 && !bp.fadeIn) {
      backgroundPyramids.splice(index, 1);
    }

    bp.update();
  });
}

var bgPyramidPoint2D = function bgPyramidPoint2D(x, y) {
  this.x = x;
  this.y = y;
};

var bgPyramidPoint3D = function bgPyramidPoint3D(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};

var bgPyramidEdge = function bgPyramidEdge(x, y, z, size) {
  bgPyramidPoint3D.call(this, x, y, z);
  size *= 0.3;
  this.vertices = [new bgPyramidPoint3D(x, y - size, z), new bgPyramidPoint3D(x, y - size, z), new bgPyramidPoint3D(x + size, y + size, z - size), new bgPyramidPoint3D(x - size, y + size, z - size), new bgPyramidPoint3D(x, y - size, z), new bgPyramidPoint3D(x, y - size, z), new bgPyramidPoint3D(x + size, y + size, z + size), new bgPyramidPoint3D(x - size, y + size, z + size)];
  this.faces = [[0, 1, 2, 3], [1, 5, 6, 2], [3, 2, 6, 7], [0, 3, 7, 4], [4, 7, 6, 5]];
};

bgPyramidEdge.prototype = {
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

function bgPyramidProject(points3d, w, h, zoom) {
  var points2d = new Array(points3d.length);
  var focal_length = zoom;

  for (var i = points3d.length - 1; i > -1; --i) {
    var p = points3d[i];
    var x = p.x * (focal_length / p.z) + w * 0.5;
    var y = p.y * (focal_length / p.z) + h * 0.5;
    points2d[i] = new bgPyramidPoint2D(x, y);
  }

  return points2d;
}