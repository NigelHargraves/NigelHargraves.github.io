"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Chord =
/*#__PURE__*/
function () {
  function Chord(x, y) {
    _classCallCheck(this, Chord);

    this.x = x;
    this.y = y;
    this.z = 400;
    this.size = 300;
    this.zoom = 100;
    this.directX = (Math.random() - 0.5) * 0.01;
    this.directY = (Math.random() - 0.5) * 0.01;
    this.edges = new SphubeEdge(this.x, this.y, this.z, this.size);
    this.radius = {
      x: 600,
      y: 150
    };
    this.point = {
      x: 0,
      y: 0
    };
    this.angle = 0;
    this.lineWidth = 5;
    this.delay = 100;
  }

  _createClass(Chord, [{
    key: "draw",
    value: function draw() {
      ctx.lineWidth = this.lineWidth;
      ctx.strokeStyle = 'coral';
      ctx.fillStyle = 'coral'; //horizontal line.

      ctx.beginPath();
      ctx.moveTo(0, center.y);
      ctx.lineTo(canvas.width, center.y);
      ctx.stroke(); //ellipse

      ctx.beginPath();
      ctx.ellipse(center.x, center.y, this.radius.x, this.radius.y, 0, 0, Math.PI * 2);
      ctx.stroke();
      var vertices = sphubeProject(this.edges.vertices, canvas.width, canvas.height, this.zoom);
      ctx.save();
      ctx.translate(this.point.x, this.point.y); //draw sphube.

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
        ctx.beginPath();
        ctx.moveTo(vertices[face[3]].x, vertices[face[3]].y);
        ctx.lineTo(vertices[face[0]].x, vertices[face[0]].y);
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(center.x, center.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      ctx.lineWidth = 1;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.lineWidth > 1) {
        this.lineWidth -= 0.01;
      } else {
        if (this.lineWidth > 0.2) {
          this.lineWidth -= 0.001;
        }
      }

      this.point.x = this.radius.x * Math.cos(this.angle);
      this.point.y = this.radius.y * Math.sin(this.angle);
      this.angle += Math.PI / 180 / 10;

      if (this.angle >= Math.PI * 2) {
        this.angle = 0;
        this.lineWidth = 5;
        chordChange();
        sphube.lineWidth = 5;
        this.directX = (Math.random() - 0.5) * 0.01;
        this.directY = (Math.random() - 0.5) * 0.01;
        sphube.directX = (Math.random() - 0.5) * 0.002;
        sphube.directY = (Math.random() - 0.5) * 0.002;
      }

      if (this.angle <= Math.PI + 0.001 && this.angle >= Math.PI - 0.001 && this.delay == 0) {
        this.lineWidth = 5;
        chordChange();
        this.delay = 100;
        sphube.lineWidth = 5;
        this.directX = (Math.random() - 0.5) * 0.01;
        this.directY = (Math.random() - 0.5) * 0.01;
        sphube.directX = (Math.random() - 0.5) * 0.002;
        sphube.directY = (Math.random() - 0.5) * 0.002;
      }

      if (this.delay > 0) {
        this.delay -= 1;
      }

      this.edges.rotateX(this.directX);
      this.edges.rotateY(this.directY);
      this.draw();
    }
  }]);

  return Chord;
}();

function chordChange() {
  if (chordToPlay == 'C') {
    chordToPlay = 'F';
  } else if (chordToPlay == 'F') {
    chordToPlay = 'G';
  } else if (chordToPlay == 'G') {
    chordToPlay = 'Em';
  } else if (chordToPlay == 'Em') {
    chordToPlay = 'C';
  }

  if (chordToPlay == 'C') {
    for (var i = 0; i < 18; i++) {
      notes[i].note = chordC[i];
    }

    for (var _i = 0; _i < 18; _i++) {
      antiNotes[_i].note = chordC[_i];
    }
  }

  if (chordToPlay == 'F') {
    for (var _i2 = 0; _i2 < 18; _i2++) {
      notes[_i2].note = chordF[_i2];
    }

    for (var _i3 = 0; _i3 < 18; _i3++) {
      antiNotes[_i3].note = chordF[_i3];
    }
  }

  if (chordToPlay == 'G') {
    for (var _i4 = 0; _i4 < 18; _i4++) {
      notes[_i4].note = chordG[_i4];
    }

    for (var _i5 = 0; _i5 < 18; _i5++) {
      antiNotes[_i5].note = chordG[_i5];
    }
  }

  if (chordToPlay == 'Em') {
    for (var _i6 = 0; _i6 < 18; _i6++) {
      notes[_i6].note = chordEm[_i6];
    }

    for (var _i7 = 0; _i7 < 18; _i7++) {
      antiNotes[_i7].note = chordEm[_i7];
    }
  }
}