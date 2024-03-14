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

  if (!DO1.paused) {
    num = 20;
    string = strings[2].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }

  if (!FO1.paused) {
    num = 17;
    string = strings[2].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }

  if (!AO1.paused) {
    num = 18;
    string = strings[3].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }

  if (!CO2.paused) {
    num = 19;
    string = strings[4].y;
    ctx.beginPath();
    ctx.arc(fretBoard.x + fretNumber[num].pos, fretBoard.y + gap + string, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }
}