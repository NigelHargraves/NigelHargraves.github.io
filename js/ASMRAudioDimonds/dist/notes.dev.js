"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Note =
/*#__PURE__*/
function () {
  function Note(x, y, z, size, speed, angle, bigR) {
    _classCallCheck(this, Note);

    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;
    this.speed = speed;
    this.angle = angle;
    this.bigR = bigR;
    this.zoom = 600;
    this.directX = 0.002;
    this.directY = 0.002;
    this.point = {
      x: 0,
      y: 0
    };
    this.diamond = new Diamond(this.x, this.y, this.z, this.size);
    this.lineWidth = 3;
  }

  _createClass(Note, [{
    key: "draw",
    value: function draw() {
      var vertices = project(this.diamond.vertices, canvas.width, canvas.height, this.zoom);
      ctx.lineWidth = this.lineWidth;
      ctx.save();
      ctx.translate(this.point.x, this.point.y);

      for (var i = this.diamond.faces.length - 1; i > -1; --i) {
        var face = this.diamond.faces[i];
        ctx.strokeStyle = "white";
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
        ctx.lineTo(vertices[face[0]].x, vertices[face[0]].y);
        ctx.stroke();
      }

      ctx.restore(); //draw center point.

      ctx.beginPath();
      ctx.arc(center.x + this.point.x, center.y + this.point.y, 1, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.lineWidth > 0.2) {
        this.lineWidth -= 0.01;
      }

      this.point.x = this.bigR * Math.cos(this.angle);
      this.point.y = this.bigR * Math.sin(this.angle);
      this.angle += Math.PI / 180 / this.speed;

      if (this.angle >= Math.PI * 2) {
        this.angle = 0;
        cross.rightLineWidth = 3;
      }

      this.diamond.rotateX(this.directX);
      this.diamond.rotateY(this.directY);
      this.draw();
    }
  }]);

  return Note;
}();

function forNotes() {
  notes.forEach(function (note, index) {
    note.update();
  });
}

var Point2D = function Point2D(x, y) {
  this.x = x;
  this.y = y;
};

var Point3D = function Point3D(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};

var Diamond = function Diamond(x, y, z, size) {
  Point3D.call(this, x, y, z);
  size *= 0.01;
  this.vertices = [//points
  new Point3D(x, y - size * 1.5, z), //top
  new Point3D(x - size, y, z), //left
  new Point3D(x, y, z - size), //front
  new Point3D(x + size, y, z), //right
  new Point3D(x, y, z + size), //back
  new Point3D(x, y + size * 1.5, z) //bottom
  ];
  this.faces = [//top front left
  [0, 1, 2], //top front right
  [0, 2, 3], //top back left
  [0, 1, 4], //top back right
  [0, 3, 4], //bottom front left
  [5, 1, 2], //bottom front right
  [5, 2, 3], //bottom back left
  [5, 1, 4], //bottom back right
  [5, 3, 4]];
};

Diamond.prototype = {
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

function project(points3d, w, h, zoom) {
  var points2d = new Array(points3d.length);
  var focal_length = zoom;

  for (var i = points3d.length - 1; i > -1; --i) {
    var p = points3d[i];
    var x = p.x * (focal_length / p.z) + w * 0.5;
    var y = p.y * (focal_length / p.z) + h * 0.5;
    points2d[i] = new Point2D(x, y);
  }

  return points2d;
}