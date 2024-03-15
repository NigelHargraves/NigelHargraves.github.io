"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var String =
/*#__PURE__*/
function () {
  function String(y, name) {
    _classCallCheck(this, String);

    this.y = y;
    this.name = name;
    this.smallGap = canvas.height / 80;
  }

  _createClass(String, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.moveTo(bridge, fretBoard.y + this.smallGap + this.y);
      ctx.lineTo(fretBoard.x + canvas.width / 2 + fretBoard.x / 2, fretBoard.y + this.smallGap + this.y);
      ctx.stroke();
      noteToDisplay(this.smallGap);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return String;
}();

function forStrings() {
  strings.forEach(function (string, index) {
    string.update();
  });
}

function noteToDisplay(gap) {
  var num;
  var string; //Octave 1.

  if (!B1_1.paused) {
    num = 18;
    string = strings[1].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();

    if (delay == delayReset - 1 && B1) {
      noteCircles.push(new NoteCircle(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string));
      B1 = false;
    }
  }

  if (!Eb1_2.paused) {
    num = 19;
    string = strings[2].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();

    if (delay == delayReset - 1 && Eb1) {
      noteCircles.push(new NoteCircle(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string));
      Eb1 = false;
    }
  } //Octave 2.


  if (!E2_1.paused) {
    num = 18;
    string = strings[2].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();

    if (delay == delayReset - 1 && E2) {
      noteCircles.push(new NoteCircle(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string));
      E2 = false;
    }
  }

  if (!FS2_1.paused) {
    num = 16;
    string = strings[2].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();

    if (delay == delayReset - 1 && FS2) {
      noteCircles.push(new NoteCircle(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string));
      FS2 = false;
    }
  }

  if (!Ab2_1.paused) {
    num = 14;
    string = strings[2].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();

    if (delay == delayReset - 1 && Ab2) {
      noteCircles.push(new NoteCircle(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string));
      Ab2 = false;
    }
  }

  if (!A2_0_H.paused) {
    num = 18;
    string = strings[3].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();

    if (delay == delayReset - 1 && A2) {
      noteCircles.push(new NoteCircle(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string));
      A2 = false;
    }
  }

  if (!B2_1.paused || !B2_0_H.paused) {
    num = 20;
    string = strings[4].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();

    if (delay == delayReset - 1 && B2) {
      noteCircles.push(new NoteCircle(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string));
      B2 = false;
    }
  } //Octave 3.


  if (!Ab3_1.paused) {
    num = 16;
    string = strings[5].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();

    if (delay == delayReset - 1 && Ab3) {
      noteCircles.push(new NoteCircle(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string));
      Ab3 = false;
    }
  }

  if (!A3_1.paused) {
    num = 15;
    string = strings[5].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();

    if (delay == delayReset - 1 && A3) {
      noteCircles.push(new NoteCircle(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string));
      A3 = false;
    }
  }

  if (!B3_1.paused) {
    num = 13;
    string = strings[5].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();

    if (delay == delayReset - 1 && B3) {
      noteCircles.push(new NoteCircle(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string));
      B3 = false;
    }
  }

  if (!FS3_2.paused) {
    num = 18;
    string = strings[5].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();

    if (delay == delayReset - 1 && FS3) {
      noteCircles.push(new NoteCircle(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string));
      FS3 = false;
    }
  }
}