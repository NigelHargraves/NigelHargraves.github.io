"use strict";

// Set the canvas element to  variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var center = {
  x: canvas.width / 2,
  y: canvas.height / 2
};
var start1 = false,
    start2 = false,
    playNow = true,
    showChords = false;
var delay1 = 0,
    delay2 = 0,
    speed = 2,
    chordToPlay = 'Cm';
var chordC = [],
    chordCm = [],
    chordD = [],
    chordDm = [],
    chordE = [],
    chordEm = [],
    chordF = [],
    chordFm = [],
    chordG = [],
    chordGm = [],
    chordA = [],
    chordAm = [],
    chordB = [],
    chordBm = [];
var colors = [],
    colorNumber = [],
    notesRight = [],
    notesLeft = [],
    particles = [],
    stars = [];
var point = {
  x: 0,
  y: 0
},
    adj,
    opp,
    hyp;
var distance = 0.95,
    gravity = 0.001;
point = {
  x: center.x - center.x * 0.9 / distance,
  y: 0 + (center.y - center.y * 0.9) / distance
};
adj = Math.pow(center.x - point.x, 2);
opp = Math.pow(point.y, 2);
hyp = Math.sqrt(opp + adj);
var chord = new Chord(point.x, point.y, hyp);
createChords();
setVolume();

var _loop = function _loop(_i) {
  var number = Math.floor(Math.random() * 360);
  var arrayLength = 0;

  if (colorNumber.length > 0) {
    colorNumber.forEach(function (cn, index) {
      if (number == cn) {
        colorNumber.splice(index, 1);
        _i -= 1;
        arrayLength = 0;
        i = _i;
        return;
      } else {
        arrayLength += 1;
      }
    });
  }

  if (arrayLength == colorNumber.length) {
    colorNumber.push(number);
  }

  i = _i;
};

for (var i = 0; i < 24; i++) {
  _loop(i);
}

for (var _i2 = 0; _i2 < 24; _i2++) {
  colors.push("hsl(" + colorNumber[_i2] + ",100%,50%)");
}

var road = new Road();

for (var _i3 = 0; _i3 < 24; _i3++) {
  if (_i3 < 12) {
    notesRight.push(new NoteRight(center.x, center.y, speed, chordCm[_i3], colors[_i3]));
  } else {
    notesLeft.push(new NoteLeft(center.x, center.y, speed, chordCm[_i3], colors[_i3]));
  }

  speed += 0.01;
}

colorNumber.sort(function (a, b) {
  return a - b;
});

function animate() {
  //CLS.
  ctx.fillStyle = "rgb(0, 0, 0, 0.4)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "bold 50px Arial";
  ctx.fillStyle = 'white';
  ctx.globalAlpha = 0.02;
  ctx.fillText("𝔸𝕊𝕄ℝ 𝔸𝕌𝔻𝕀𝕆", center.x - center.x / 6, center.y);
  ctx.globalAlpha = 0.4;

  if (!start1) {
    delay1 += 1;

    if (delay1 >= 200) {
      start1 = true;
    }
  }

  if (start1) {
    if (playNow) {
      playNow = false;
    }

    if (showChords) {
      ctx.font = "bold 20px Arial";
      ctx.fillStyle = "white";
      ctx.fillText(chordToPlay, 0, canvas.height * 0.02);
    }

    road.update();

    if (!start2) {
      delay2 += 1;

      if (delay2 >= 400) {
        for (var _i4 = 0; _i4 < 24; _i4++) {
          chordCm[_i4].play();
        }

        CBass.play();
        road.lineWidth = 3;
        start2 = true;
      }
    }

    if (start2) {
      var createStar = Math.random();

      if (createStar > 0.98) {
        var elevation = Math.random();
        var side = Math.random();
        var y;
        var x = Math.random() * canvas.width;
        var _speed = 4;

        if (elevation > 0.5) {
          y = canvas.height + 100;
        } else {
          y = -100;
        }

        if (x < center.x / 3 || x > center.x + center.x / 3 * 2) {
          _speed = 6;
        }

        if (x > center.x / 3 && x < center.x / 3 * 2) {
          _speed = 5;
        }

        if (x > center.x + center.x / 3 && x < center.x + center.x / 3 * 2) {
          _speed = 5;
        }

        stars.push(new Star(x, y, _speed));
      }

      chord.update();
      forNotesRight();
      forNotesLeft();
      forParticles();
      forStars();
    }
  } //call next frame.


  animationId = requestAnimationFrame(animate);
}

animate();
window.addEventListener("keydown", function (e) {
  if (e.keyCode == 32) {
    if (showChords) {
      showChords = false;
    } else {
      showChords = true;
    }
  }
});
window.addEventListener("mousedown", function (e) {
  info = e.which;

  if (e.which == 1) {
    if (showChords) {
      showChords = false;
    } else {
      showChords = true;
    }
  }
});