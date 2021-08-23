"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; //load images.

var images = {};
images.player = new Image();
images.player.src = 'images/Cuphead.png'; //const characterActions = ['up', 'top right', 'right', 'down right', 'down', 'jump'];

var characterActions = ['up', 'top right', 'right', 'jump', 'down right', 'down'];
var numberOfCharacters = 40;
var characters = [];

var Character =
/*#__PURE__*/
function () {
  function Character() {
    _classCallCheck(this, Character);

    this.width = 103.0625;
    this.height = 113.125;
    this.frameX = 3;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.speed = Math.random() * 1.5 + 2.5;
    this.action = characterActions[Math.floor(Math.random() * characterActions.length)];

    if (this.action === 'up') {
      this.frameY = 0;
      this.minFrame = 4;
      this.maxFrame = 15;
    } else if (this.action === 'right') {
      this.frameY = 3;
      this.minFrame = 3;
      this.maxFrame = 13;
    } else if (this.action === 'jump') {
      this.frameY = 7;
      this.minFrame = 0;
      this.maxFrame = 9;
    } else if (this.action === 'down right') {
      this.frameY = 4;
      this.minFrame = 4;
      this.maxFrame = 15;
    } else if (this.action === 'top right') {
      this.frameY = 1;
      this.minFrame = 4;
      this.maxFrame = 14;
    } else if (this.action === 'down') {
      this.frameY = 6;
      this.minFrame = 0;
      this.maxFrame = 12;
    }
  }

  _createClass(Character, [{
    key: "draw",
    value: function draw() {
      drawSprite(images.player, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
      if (this.frameX < this.maxFrame) this.frameX++;else this.frameX = this.minFrame;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.action === 'right') {
        if (this.x > canvas.width + this.width) {
          this.x = 0 - this.width;
          this.y = Math.random() * canvas.height - this.height;
        } else {
          this.x += this.speed;
        }
      } else if (this.action === 'up') {
        if (this.y < 0 - this.height) {
          this.y = canvas.height + this.height;
          this.x = Math.random() * canvas.width;
        } else {
          this.y -= this.speed;
        }
      } else if (this.action === 'down right') {
        if (this.y > canvas.height + this.height || this.x > this.width + canvas.width) {
          this.y = 0 - this.height;
          this.x = Math.random() * canvas.width;
        } else {
          this.x += this.speed;
          this.y += this.speed;
        }
      } else if (this.action === 'top right') {
        if (this.y < 0 - this.height || this.x > this.width + canvas.width) {
          this.y = canvas.height + this.height;
          this.x = Math.random() * canvas.width;
        } else {
          this.x += this.speed;
          this.y -= this.speed;
        }
      } else if (this.action === 'down') {
        if (this.y > canvas.height + this.height) {
          this.y = 0 - this.height;
          this.x = Math.random() * canvas.width;
        } else {
          this.y += this.speed;
        }
      }
    }
  }]);

  return Character;
}();

for (i = 0; i < numberOfCharacters; i++) {
  characters.push(new Character());
}

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (i = 0; i < characters.length; i++) {
    characters[i].draw();
    characters[i].update();
  }
}

window.onload = setInterval(animate, 30);
window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});