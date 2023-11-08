"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create bomb class.
var Bomb =
/*#__PURE__*/
function () {
  //construct bomb data.
  function Bomb(x, y, velocity) {
    _classCallCheck(this, Bomb);

    this.x = x;
    this.y = y;
    this.v = velocity;
    this.sizex = 0;
    this.sizey = 0;
  } //draw bomb.


  _createClass(Bomb, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(bombImage, this.x, this.y, c.height * this.sizex, c.height * this.sizey);
    } //update bomb.

  }, {
    key: "update",
    value: function update() {
      gravity = 0.03;
      this.v += gravity;
      this.y += this.v;
      this.x += -player.velocity.x * 1.25;
      this.draw();

      if (controlLevel < 2) {
        gravity = 0.03;
      } else {
        gravity = 0;
      }

      if (this.sizex < 0.02) {
        this.sizex += 0.001;
      }

      if (this.sizey < 0.04) {
        this.sizey += 0.002;
      }
    }
  }]);

  return Bomb;
}();

function forBomb() {
  bombs.forEach(function (bomb, index1) {
    if (bomb.y >= c.height - c.height * 0.06) {
      if (!dropBomb.paused) {
        dropBomb.pause();
        dropBomb.currentTime = 0;
      }

      bombExplode.currentTime = 0;
      bombExplode.play();
      explodes.push(new Explode(bomb.x + c.height * 0.01, bomb.y + c.height * 0.02, 5, 1));
      bombs.splice(index1, 1);
    }

    bomb.update();
  });
}