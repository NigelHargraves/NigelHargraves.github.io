"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//create sugars class.
var Sugar =
/*#__PURE__*/
function () {
  //construct sugars data.
  function Sugar(x, y) {
    _classCallCheck(this, Sugar);

    this.x = x;
    this.y = y;
    this.r = 50;
  } //draw sugars.


  _createClass(Sugar, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(sugar, this.x, this.y, this.r * 1.5, this.r);
    } //update sugars.

  }, {
    key: "update",
    value: function update() {
      this.x += -player.velocity.x * 1.25;
      this.draw();
    }
  }]);

  return Sugar;
}();

function forSugars() {
  sugars.forEach(function (sug, index) {
    var colide = collisionDetection(sug.x + sug.r / 1.5, sug.y + sug.r, sug.r, sug.r, x, player.y, player.r, player.r);

    if (colide) {
      texts.push(new Text(x, player.y, Math.random() - 0.5, -c.height * 0.001, "100", "bold 20px Arial", "yellow", 1, false));
      texts.push(new Text(x, player.y, Math.random() - 0.5, -c.height * 0.002, "😃", "bold 20px Arial", "yellow", 1, false));
      score += 100;
      gain.currentTime = 0;
      gain.play();

      if (sugarCount < 20) {
        sugarCount += 1;
      }

      if (sugarCount == 20) {
        collectedSugars = true;
        sugars = [];
      }

      sugars.splice(index, 1);
    }

    sug.update();
  });
}