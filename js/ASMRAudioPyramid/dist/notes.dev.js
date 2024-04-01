"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Note =
/*#__PURE__*/
function () {
  function Note(x, y, speed, number) {
    _classCallCheck(this, Note);

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.noteNo = number;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.angle = 0;
    this.aim = {
      x: 0,
      y: 0
    };
    this.aimPoint = [true, false, false];
    this.dist = 0;
    this.lineWidth = 5;
  }

  _createClass(Note, [{
    key: "draw",
    value: function draw() {
      ctx.strokeStyle = 'white';
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
      ctx.lineWidth = this.lineWidth;
      ctx.stroke();
      ctx.lineWidth = 1;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.lineWidth > 1) {
        this.lineWidth -= 0.1;
      }

      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.angle = Math.atan2(this.aim.y - this.y, this.aim.x - this.x);
      this.velocity.x = Math.cos(this.angle) * this.speed;
      this.velocity.y = Math.sin(this.angle) * this.speed;
      var adj = Math.pow(this.x - this.aim.x, 2);

      if (adj < 0) {
        adj * -1;
      }

      ;
      var opp = Math.pow(this.y - this.aim.y, 2);

      if (opp < 0) {
        opp * -1;
      }

      ;
      this.dist = Math.sqrt(adj + opp);

      if (this.noteNo < 12) {
        if (this.dist <= 1 && this.aimPoint[0]) {
          this.aimPoint[0] = false;
          this.aimPoint[1] = true;
          this.lineWidth = 5;
          shoots.push(new Shoot(this.x, this.y));
        } else if (this.dist <= 1 && this.aimPoint[1]) {
          this.aimPoint[1] = false;
          this.aimPoint[2] = true;
          this.lineWidth = 5;
          shoots.push(new Shoot(this.x, this.y));
        } else if (this.dist <= 1 && this.aimPoint[2]) {
          this.aimPoint[2] = false;
          this.aimPoint[0] = true;
          this.lineWidth = 5;
          shoots.push(new Shoot(this.x, this.y));
        }

        if (this.aimPoint[0]) {
          var vertices = project(pyramid.edges.vertices, canvas.width, canvas.height, pyramid.zoom);
          var face = pyramid.edges.faces[0];
          this.aim.x = vertices[face[2]].x;
          this.aim.y = vertices[face[2]].y;
        }

        if (this.aimPoint[1]) {
          var _vertices = project(pyramid.edges.vertices, canvas.width, canvas.height, pyramid.zoom);

          var _face = pyramid.edges.faces[2];
          this.aim.x = _vertices[_face[2]].x;
          this.aim.y = _vertices[_face[2]].y;
        }

        if (this.aimPoint[2]) {
          var _vertices2 = project(pyramid.edges.vertices, canvas.width, canvas.height, pyramid.zoom);

          var _face2 = pyramid.edges.faces[0];
          this.aim.x = _vertices2[_face2[0]].x;
          this.aim.y = _vertices2[_face2[0]].y;
        }
      } else {
        if (this.dist <= 1 && this.aimPoint[0]) {
          this.aimPoint[0] = false;
          this.aimPoint[1] = true;
          this.lineWidth = 5;
          shoots.push(new Shoot(this.x, this.y));
        } else if (this.dist <= 1 && this.aimPoint[1]) {
          this.aimPoint[1] = false;
          this.aimPoint[2] = true;
          this.lineWidth = 5;
          shoots.push(new Shoot(this.x, this.y));
        } else if (this.dist <= 1 && this.aimPoint[2]) {
          this.aimPoint[2] = false;
          this.aimPoint[0] = true;
          this.lineWidth = 5;
          shoots.push(new Shoot(this.x, this.y));
        }

        if (this.aimPoint[0]) {
          var _vertices3 = project(pyramid.edges.vertices, canvas.width, canvas.height, pyramid.zoom);

          var _face3 = pyramid.edges.faces[0];
          this.aim.x = _vertices3[_face3[3]].x;
          this.aim.y = _vertices3[_face3[3]].y;
        }

        if (this.aimPoint[1]) {
          var _vertices4 = project(pyramid.edges.vertices, canvas.width, canvas.height, pyramid.zoom);

          var _face4 = pyramid.edges.faces[2];
          this.aim.x = _vertices4[_face4[3]].x;
          this.aim.y = _vertices4[_face4[3]].y;
        }

        if (this.aimPoint[2]) {
          var _vertices5 = project(pyramid.edges.vertices, canvas.width, canvas.height, pyramid.zoom);

          var _face5 = pyramid.edges.faces[0];
          this.aim.x = _vertices5[_face5[0]].x;
          this.aim.y = _vertices5[_face5[0]].y;
        }
      }

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