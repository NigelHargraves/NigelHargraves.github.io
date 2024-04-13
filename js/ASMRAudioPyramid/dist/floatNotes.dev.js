"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FloatNote =
/*#__PURE__*/
function () {
  function FloatNote() {
    _classCallCheck(this, FloatNote);

    this.x = center.x;
    this.y = center.y;
    this.r = 10;
    this.velocity = {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2
    };
    this.expire = false;
    this.z = 300;
    this.size = 150;
    this.lineWidth = 5;
    this.zoom = 80;
    this.life = 2000;
    this.directX = (Math.random() - 0.5) * 0.01;
    this.directY = (Math.random() - 0.5) * 0.01;
    this.point = {
      x: 0,
      y: 0
    };
    this.angle = 0;
    this.edges = new fnEdge(0, 0, this.z, this.size);
  }

  _createClass(FloatNote, [{
    key: "draw",
    value: function draw() {
      var vertices = fnProject(this.edges.vertices, canvas.width, canvas.height, this.zoom);
      ctx.lineWidth = 0.4;
      ctx.strokeStyle = 'aqua';
      ctx.save();
      ctx.translate(this.x - center.x, this.y - center.y);

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
      this.life -= 1;

      if (!this.expire) {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
      } else {
        this.zoom -= 5;
        this.r -= 1;
      }

      this.edges.rotateX(this.directX);
      this.edges.rotateY(this.directY);
      this.draw();
    }
  }]);

  return FloatNote;
}();

var fnPoint2D = function fnPoint2D(x, y) {
  this.x = x;
  this.y = y;
};

var fnPoint3D = function fnPoint3D(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
};

var fnEdge = function fnEdge(x, y, z, size) {
  Point3D.call(this, x, y, z);
  size *= 0.2;
  this.vertices = [new Point3D(x, y - size, z), new Point3D(x, y - size, z), new Point3D(x + size, y + size, z - size), new Point3D(x - size, y + size, z - size), new Point3D(x, y - size, z), new Point3D(x, y - size, z), new Point3D(x + size, y + size, z + size), new Point3D(x - size, y + size, z + size)];
  this.faces = [[0, 1, 2, 3], [1, 5, 6, 2], [3, 2, 6, 7], [0, 3, 7, 4], [4, 7, 6, 5]];
};

fnEdge.prototype = {
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

function fnProject(points3d, w, h, zoom) {
  var points2d = new Array(points3d.length);
  var focal_length = zoom;

  for (var i = points3d.length - 1; i > -1; --i) {
    var p = points3d[i];
    var x = p.x * (focal_length / p.z) + w * 0.5;
    var y = p.y * (focal_length / p.z) + h * 0.5;
    points2d[i] = new fnPoint2D(x, y);
  }

  return points2d;
}

function forFloatNotes() {
  floatNotes.forEach(function (fn, index) {
    if (fn.x + fn.r >= canvas.width || fn.x - fn.r <= 0) {
      fn.expire = true;
    }

    if (fn.y + fn.r >= canvas.height || fn.y - fn.r <= 0) {
      fn.expire = true;
    }

    if (fn.r <= 1) {
      for (var i = 0; i < 10; i++) {
        edgeSplats.push(new EdgeSplat(fn.x, fn.y));
      }

      if (chordToPlay == 'Am') {
        if (chordAmS[floatNoteNote].currentTime != 0) chordAmS[floatNoteNote].currentTime = 0;
        chordAmS[floatNoteNote].play();
      }

      if (chordToPlay == 'F') {
        if (chordFS[floatNoteNote].currentTime != 0) chordFS[floatNoteNote].currentTime = 0;
        chordFS[floatNoteNote].play();
      }

      if (chordToPlay == 'C1' || chordToPlay == 'C2') {
        if (chordCS[floatNoteNote].currentTime != 0) chordCS[floatNoteNote].currentTime = 0;
        chordCS[floatNoteNote].play();
      }

      if (chordToPlay == 'G') {
        if (chordGS[floatNoteNote].currentTime != 0) chordGS[floatNoteNote].currentTime = 0;
        chordGS[floatNoteNote].play();
      }

      if (chordToPlay == 'Em') {
        if (chordEmS[floatNoteNote].currentTime != 0) chordEmS[floatNoteNote].currentTime = 0;
        chordEmS[floatNoteNote].play();
      }

      if (chordToPlay == 'Dm') {
        if (chordDmS[floatNoteNote].currentTime != 0) chordDmS[floatNoteNote].currentTime = 0;
        chordDmS[floatNoteNote].play();
      }

      if (chordToPlay == 'Gsus4') {
        if (chordGsus4S[floatNoteNote].currentTime != 0) chordGsus4S[floatNoteNote].currentTime = 0;
        chordGsus4S[floatNoteNote].play();
      }

      floatNoteNote++;
      if (floatNoteNote == 18) floatNoteNote = 0;
      floatNotes.splice(index, 1);
    }

    if (fn.life <= 0) {
      fn.expire = true;
    }

    fn.update();
  });
}