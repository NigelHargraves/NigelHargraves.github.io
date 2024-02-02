"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Key =
/*#__PURE__*/
function () {
  function Key(x, y, key) {
    _classCallCheck(this, Key);

    this.x = x;
    this.y = y;
    this.Key = key;
    this.opacity = 1;
    this.smallRadius = 20;
    this.bigRadius = canvas.height / 4;
    this.lineWidth = 5;
    this.angle = 0 - Math.PI / 2;
    this.point = {
      x: 0,
      y: 0
    };
    DBass.currentTime = 0.1;
    DBass.play();
  }

  _createClass(Key, [{
    key: "draw",
    value: function draw() {
      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.arc(this.x + this.point.x, this.y + this.point.y, this.smallRadius, 0, Math.PI * 2);
      ctx.lineWidth = this.lineWidth;
      ctx.globalAlpha = this.opacity;
      ctx.strokeStyle = "aqua";
      ctx.stroke();
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.2;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.opacity > 0.2) {
        this.opacity -= 0.01;
      }

      if (this.lineWidth > 1) {
        this.lineWidth -= 0.01;
      }

      this.point.x = this.bigRadius * Math.cos(this.angle);
      this.point.y = this.bigRadius * Math.sin(this.angle);
      this.angle += Math.PI / 180 / 4;

      if (this.angle <= Math.PI + Math.PI / 2 + 0.001 && this.angle >= Math.PI + Math.PI / 2 - 0.001) {
        this.opacity = 1;
        this.lineWidth = 5;
        circle.opacity = 1;
        circle.lineWidth = 5;

        if (this.key == 'D') {
          this.key = 'G';
          notes[0].note = GNote1;
          notes[1].note = BNote1;
          notes[2].note = DNote1;
          notes[3].note = GUNote1;
          notes[4].note = BUNote1;
          notes[5].note = DUNote1;
          notes[6].note = GNote2;
          notes[7].note = BNote2;
          notes[8].note = DNote2;
          notes[9].note = GUNote2;
          notes[10].note = BUNote2;
          notes[11].note = DUNote2;
        } else if (this.key == 'G') {
          this.key = 'Bm';
          notes[0].note = BNote1;
          notes[1].note = DNote1;
          notes[2].note = FSGFNote1;
          notes[3].note = BUNote1;
          notes[4].note = DUNote1;
          notes[5].note = FSGFUNote1;
          notes[6].note = BNote2;
          notes[7].note = DNote2;
          notes[8].note = FSGFNote2;
          notes[9].note = BUNote2;
          notes[10].note = DUNote2;
          notes[11].note = FSGFUNote2;
        } else if (this.key == 'Bm') {
          this.key = 'C';
          notes[0].note = CNote1;
          notes[1].note = ENote1;
          notes[2].note = GNote1;
          notes[3].note = CUNote1;
          notes[4].note = EUNote1;
          notes[5].note = GUNote1;
          notes[6].note = CNote2;
          notes[7].note = ENote2;
          notes[8].note = GNote2;
          notes[9].note = CUNote2;
          notes[10].note = EUNote2;
          notes[11].note = GUNote2;
        } else if (this.key == 'C') {
          this.key = 'F';
          notes[0].note = FNote1;
          notes[1].note = ANote1;
          notes[2].note = CNote1;
          notes[3].note = FUNote1;
          notes[4].note = AUNote1;
          notes[5].note = CUNote1;
          notes[6].note = FNote2;
          notes[7].note = ANote2;
          notes[8].note = CNote2;
          notes[9].note = FUNote2;
          notes[10].note = AUNote2;
          notes[11].note = CUNote2;
        } else if (this.key == 'F') {
          this.key = 'Em';
          notes[0].note = ENote1;
          notes[1].note = GNote1;
          notes[2].note = BNote1;
          notes[3].note = EUNote1;
          notes[4].note = GUNote1;
          notes[5].note = BUNote1;
          notes[6].note = ENote2;
          notes[7].note = GNote2;
          notes[8].note = BNote2;
          notes[9].note = EUNote2;
          notes[10].note = GUNote2;
          notes[11].note = BUNote2;
        } else {
          this.key = 'D';
          notes[0].note = DNote1;
          notes[1].note = FSGFNote1;
          notes[2].note = ANote1;
          notes[3].note = DUNote1;
          notes[4].note = FSGFUNote1;
          notes[5].note = AUNote1;
          notes[6].note = DNote2;
          notes[7].note = FSGFNote2;
          notes[8].note = ANote2;
          notes[9].note = DUNote2;
          notes[10].note = FSGFUNote2;
          notes[11].note = AUNote2;
        }

        if (this.key == 'D') {
          DBass.currentTime = 0.1;
          DBass.play();
        }

        if (this.key == 'G') {
          GBass.currentTime = 0.1;
          GBass.play();
        }

        if (this.key == 'Bm') {
          BBass.currentTime = 0.1;
          BBass.play();
        }

        if (this.key == 'C') {
          CBass.currentTime = 0.1;
          CBass.play();
        }

        if (this.key == 'F') {
          FBass.currentTime = 0.1;
          FBass.play();
        }

        if (this.key == 'Em') {
          EBass.currentTime = 0.1;
          EBass.play();
        }
      }

      if (this.angle >= Math.PI * 2) {
        this.angle = 0;
      }

      this.draw();
    }
  }]);

  return Key;
}();