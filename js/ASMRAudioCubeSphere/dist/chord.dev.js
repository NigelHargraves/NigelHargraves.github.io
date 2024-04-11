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
      this.angle += Math.PI / 180 / 9;

      if (this.angle >= Math.PI * 2) {
        this.angle = 0;
        this.lineWidth = 5;
        chordChange();
        sphube.lineWidth = 5;
        this.directX = (Math.random() - 0.5) * 0.01;
        this.directY = (Math.random() - 0.5) * 0.01;
        sphube.directX = (Math.random() - 0.5) * 0.002;
        sphube.directY = (Math.random() - 0.5) * 0.002;
        var direction;

        for (var i = 0; i < 100; i++) {
          direction = Math.random();

          if (direction > 0.5) {
            particles.push(new Particle(center.x + this.point.x, center.y + this.point.y, 'x'));
          } else {
            particles.push(new Particle(center.x + this.point.x, center.y + this.point.y, 'y'));
          }
        }
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

        var _direction;

        for (var _i = 0; _i < 100; _i++) {
          _direction = Math.random();

          if (_direction > 0.5) {
            particles.push(new Particle(center.x + this.point.x, center.y + this.point.y, 'x'));
          } else {
            particles.push(new Particle(center.x + this.point.x, center.y + this.point.y, 'y'));
          }
        }
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
  drumBass.play();

  if (chordToPlay == 'C') {
    chordToPlay = 'F';
    FBass.play();
    FChord.play();
  } else if (chordToPlay == 'F') {
    chordToPlay = 'G';
    GBass.play();
    GChord.play();
  } else if (chordToPlay == 'G') {
    chordToPlay = 'Em';
    EBass.play();
    EmChord.play();
  } else if (chordToPlay == 'Em') {
    chordToPlay = 'Am';
    ABass.play();
    AmChord.play();
  } else if (chordToPlay == 'Am') {
    chordToPlay = 'Asus2';
    BBass.play();
    Asus2Chord.play();
  } else if (chordToPlay == 'Asus2') {
    chordToPlay = 'Dsus4';
    DBass.play();
    Dsus4Chord.play();
  } else if (chordToPlay == 'Dsus4') {
    chordToPlay = 'Gsus4';
    GBass.play();
    Gsus4Chord.play();
  } else if (chordToPlay == 'Gsus4') {
    chordToPlay = 'C';
    CBass.play();
    CChord.play();
  }

  if (chordToPlay == 'C') {
    for (var i = 0; i < 18; i++) {
      notes[i].note = chordC[i];
    }

    for (var _i2 = 0; _i2 < 18; _i2++) {
      antiNotes[_i2].note = chordC[_i2];
    }
  }

  if (chordToPlay == 'F') {
    for (var _i3 = 0; _i3 < 18; _i3++) {
      notes[_i3].note = chordF[_i3];
    }

    for (var _i4 = 0; _i4 < 18; _i4++) {
      antiNotes[_i4].note = chordF[_i4];
    }
  }

  if (chordToPlay == 'G') {
    for (var _i5 = 0; _i5 < 18; _i5++) {
      notes[_i5].note = chordG[_i5];
    }

    for (var _i6 = 0; _i6 < 18; _i6++) {
      antiNotes[_i6].note = chordG[_i6];
    }
  }

  if (chordToPlay == 'Em') {
    for (var _i7 = 0; _i7 < 18; _i7++) {
      notes[_i7].note = chordEm[_i7];
    }

    for (var _i8 = 0; _i8 < 18; _i8++) {
      antiNotes[_i8].note = chordEm[_i8];
    }
  }

  if (chordToPlay == 'Am') {
    for (var _i9 = 0; _i9 < 18; _i9++) {
      notes[_i9].note = chordAm[_i9];
    }

    for (var _i10 = 0; _i10 < 18; _i10++) {
      antiNotes[_i10].note = chordAm[_i10];
    }
  }

  if (chordToPlay == 'Asus2') {
    for (var _i11 = 0; _i11 < 18; _i11++) {
      notes[_i11].note = chordAsus2[_i11];
    }

    for (var _i12 = 0; _i12 < 18; _i12++) {
      antiNotes[_i12].note = chordAsus2[_i12];
    }
  }

  if (chordToPlay == 'Dsus4') {
    for (var _i13 = 0; _i13 < 18; _i13++) {
      notes[_i13].note = chordDsus4[_i13];
    }

    for (var _i14 = 0; _i14 < 18; _i14++) {
      antiNotes[_i14].note = chordDsus4[_i14];
    }
  }

  if (chordToPlay == 'Gsus4') {
    for (var _i15 = 0; _i15 < 18; _i15++) {
      notes[_i15].note = chordGsus4[_i15];
    }

    for (var _i16 = 0; _i16 < 18; _i16++) {
      antiNotes[_i16].note = chordGsus4[_i16];
    }
  }
}