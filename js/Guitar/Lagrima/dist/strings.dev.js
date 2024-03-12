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
  if (notePlaying == 0) return;
  var num;
  var string;

  if (notePlaying == CO1) {
    num = 17;
    string = strings[1].y;
  }

  if (notePlaying == DO1) {
    num = 20;
    string = strings[2].y;
  }

  if (notePlaying == EO1) {
    num = 18;
    string = strings[2].y;
  }

  if (notePlaying == FO1) {
    num = 17;
    string = strings[2].y;
  }

  if (notePlaying == GO1) {
    num = 20;
    string = strings[3].y;
  }

  if (notePlaying == AO1) {
    num = 18;
    string = strings[3].y;
  }

  if (notePlaying == BO1) {
    num = 20;
    string = strings[4].y;
  }

  if (notePlaying == CO2) {
    num = 19;
    string = strings[4].y;
  }

  if (notePlaying == DO2) {
    num = 17;
    string = strings[4].y;
  }

  if (notePlaying == EO2) {
    num = 20;
    string = strings[5].y;
  }

  if (notePlaying == FO2) {
    num = 19;
    string = strings[5].y;
  }

  if (notePlaying == GO2) {
    num = 17;
    string = strings[5].y;
  }

  if (notePlaying == AO2) {
    num = 15;
    string = strings[5].y;
  }

  if (notePlaying == BO2) {
    num = 13;
    string = strings[5].y;
  }

  if (notePlaying == CO3) {
    num = 12;
    string = strings[5].y;
  }

  if (!notePlaying.ended) {
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }
}