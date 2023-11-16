"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create ammo class.
var Ammo =
/*#__PURE__*/
function () {
  //construct ammo data.
  function Ammo(x, y) {
    _classCallCheck(this, Ammo);

    this.x = x;
    this.y = y;
    this.length = 50;
    this.height = 25;
  } //draw ammo.


  _createClass(Ammo, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(ammoBox, this.x, this.y, this.length, this.height);
    } //update ammo.

  }, {
    key: "update",
    value: function update() {
      this.x += -player.velocity.x * 1.25;
      this.draw();
    }
  }]);

  return Ammo;
}();

function forAmmo() {
  ammos.forEach(function (ammo, index) {
    var colide = collisionDetection(ammo.x + ammo.length / 2, ammo.y + ammo.height / 2, ammo.length / 2, ammo.height / 2, x, player.y, player.r, player.r);

    if (colide) {
      texts.push(new Text(x, player.y, Math.random() - 0.5, -c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false));
      var reloadSound = Math.floor(Math.random() * 3);

      if (reloadSound == 0) {
        reload1.currentTime = 0;
        reload1.play();
      } else if (reloadSound == 1) {
        reload2.currentTime = 0;
        reload2.play();
      } else {
        reload3.currentTime = 0;
        reload3.play();
      }

      ammoLeft = 100;
      ammos.splice(index, 1);
    }

    ammo.update();
  });
}