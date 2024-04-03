"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Note =
/*#__PURE__*/
function () {
  function Note(x, y, z, size, number, speed, note, color) {
    _classCallCheck(this, Note);

    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;
    this.noteNo = number;
    this.speed = speed;
    this.extraSpeed = 0.001;
    this.zoomIn = true;
    this.note = note;
    this.color = color;
    this.lineWidth = 5;
    this.zoom = 80;
    this.directX = 0;
    this.directY = 0;
    this.edges = new Edge(this.x, this.y, this.z, this.size);
  }

  _createClass(Note, [{
    key: "draw",
    value: function draw() {
      var vertices = project(this.edges.vertices, canvas.width, canvas.height, this.noteNo);
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

      ctx.lineWidth = 1;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.lineWidth > 1) {
        this.lineWidth -= 0.05;
      }

      if (this.zoomIn) {
        this.zoom += this.speed;
        this.speed += this.extraSpeed;
      } else {
        this.zoom -= this.speed;
        this.speed -= this.extraSpeed;
      }

      if (this.zoom >= 400) {
        this.zoomIn = false;
        this.lineWidth = 5;
        this.note.play();
      }

      if (this.zoom <= 80) {
        this.zoomIn = true;
        this.lineWidth = 5;
        this.note.play();
      }

      this.edges.rotateX(this.directX);
      this.edges.rotateY(this.directY);
      this.draw();
    }
  }]);

  return Note;
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
  this.vertices = [new Point3D(x - size, y - size, z - size / 4), new Point3D(x + size, y - size, z - size / 4), new Point3D(x + size, y + size, z - size / 4), new Point3D(x - size, y + size, z - size / 4), new Point3D(x - size, y - size, z + size / 4), new Point3D(x + size, y - size, z + size / 4), new Point3D(x + size, y + size, z + size / 4), new Point3D(x - size, y + size, z + size / 4)];
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
  var focal_length = notes[number].zoom;

  for (var i = points3d.length - 1; i > -1; --i) {
    var p = points3d[i];
    var x = p.x * (focal_length / p.z) + w * 0.5;
    var y = p.y * (focal_length / p.z) + h * 0.5;
    points2d[i] = new Point2D(x, y);
  }

  return points2d;
}

function forNotes() {
  notes.forEach(function (note, index) {
    note.update();
  });
}