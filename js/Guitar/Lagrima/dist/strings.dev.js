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
  var string;

  if (!E2_1.paused) {
    num = 18;
    string = strings[2].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }

  if (!FS2_1.paused) {
    num = 16;
    string = strings[2].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }

  if (!Ab2_1.paused) {
    num = 14;
    string = strings[2].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }

  if (!Eb1_2.paused) {
    num = 19;
    string = strings[2].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }

  if (!B2_1.paused) {
    num = 20;
    string = strings[4].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }

  if (!B2_0_5.paused) {
    num = 20;
    string = strings[4].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }

  if (!Ab3_1.paused) {
    num = 16;
    string = strings[5].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }

  if (!A3_1.paused) {
    num = 15;
    string = strings[5].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }

  if (!B3_1.paused) {
    num = 13;
    string = strings[5].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }

  if (!FS3_2.paused) {
    num = 18;
    string = strings[5].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }
}