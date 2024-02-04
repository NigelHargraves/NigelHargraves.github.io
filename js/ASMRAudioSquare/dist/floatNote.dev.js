"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FloatNote =
/*#__PURE__*/
function () {
  function FloatNote() {
    _classCallCheck(this, FloatNote);

    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.r = 10;
    this.velocity = {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2
    };
    this.expire = false;
  }

  _createClass(FloatNote, [{
    key: "draw",
    value: function draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.strokeStyle = "aquamarine";
      ctx.stroke();
    }
  }, {
    key: "update",
    value: function update() {
      if (!this.expire) {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
      } else {
        this.r -= 1;
      }

      this.draw();
    }
  }]);

  return FloatNote;
}();

function playLowStringNotes() {
  var randomNote = Math.floor(Math.random() * 9);

  if (key.key == 'Dm') {
    if (randomNote == 0) {
      Dls.volume = 0.5;
      Dls.play();
    }

    if (randomNote == 1) {
      Fls.volume = 0.5;
      Fls.play();
    }

    if (randomNote == 2) {
      Als.volume = 0.5;
      Als.play();
    }

    if (randomNote == 3) {
      Dms.volume = 0.5;
      Dms.play();
    }

    if (randomNote == 4) {
      Fms.volume = 0.5;
      Fms.play();
    }

    if (randomNote == 5) {
      Ams.volume = 0.5;
      Ams.play();
    }

    if (randomNote == 6) {
      Dhs.volume = 0.5;
      Dhs.play();
    }

    if (randomNote == 7) {
      Fhs.volume = 0.5;
      Fhs.play();
    }

    if (randomNote == 8) {
      Ahs.volume = 0.5;
      Ahs.play();
    }
  }

  if (key.key == 'G') {
    if (randomNote == 0) {
      Gls.volume = 0.5;
      Gls.play();
    }

    if (randomNote == 1) {
      Bls.volume = 0.5;
      Bls.play();
    }

    if (randomNote == 2) {
      Dls.volume = 0.5;
      Dls.play();
    }

    if (randomNote == 3) {
      Gms.volume = 0.5;
      Gms.play();
    }

    if (randomNote == 4) {
      Bms.volume = 0.5;
      Bms.play();
    }

    if (randomNote == 5) {
      Dms.volume = 0.5;
      Dms.play();
    }

    if (randomNote == 6) {
      Ghs.volume = 0.5;
      Ghs.play();
    }

    if (randomNote == 7) {
      Bhs.volume = 0.5;
      Bhs.play();
    }

    if (randomNote == 8) {
      Dhs.volume = 0.5;
      Dhs.play();
    }
  }

  if (key.key == 'Bm') {
    if (randomNote == 0) {
      Bls.volume = 0.5;
      Bls.play();
    }

    if (randomNote == 1) {
      Dls.volume = 0.5;
      Dls.play();
    }

    if (randomNote == 2) {
      FSls.volume = 0.5;
      FSls.play();
    }

    if (randomNote == 3) {
      Bms.volume = 0.5;
      Bms.play();
    }

    if (randomNote == 4) {
      Dms.volume = 0.5;
      Dms.play();
    }

    if (randomNote == 5) {
      FSms.volume = 0.5;
      FSms.play();
    }

    if (randomNote == 6) {
      Bhs.volume = 0.5;
      Bhs.play();
    }

    if (randomNote == 7) {
      Dhs.volume = 0.5;
      Dhs.play();
    }

    if (randomNote == 8) {
      FShs.volume = 0.5;
      FShs.play();
    }
  }

  if (key.key == 'C') {
    if (randomNote == 0) {
      Cls.volume = 0.5;
      Cls.play();
    }

    if (randomNote == 1) {
      Els.volume = 0.5;
      Els.play();
    }

    if (randomNote == 2) {
      Gls.volume = 0.5;
      Gls.play();
    }

    if (randomNote == 3) {
      Cms.volume = 0.5;
      Cms.play();
    }

    if (randomNote == 4) {
      Ems.volume = 0.5;
      Ems.play();
    }

    if (randomNote == 5) {
      Gms.volume = 0.5;
      Gms.play();
    }

    if (randomNote == 6) {
      Chs.volume = 0.5;
      Chs.play();
    }

    if (randomNote == 7) {
      Ehs.volume = 0.5;
      Ehs.play();
    }

    if (randomNote == 8) {
      Ghs.volume = 0.5;
      Ghs.play();
    }
  }

  if (key.key == 'F') {
    if (randomNote == 0) {
      Fls.volume = 0.5;
      Fls.play();
    }

    if (randomNote == 1) {
      Als.volume = 0.5;
      Als.play();
    }

    if (randomNote == 2) {
      Cls.volume = 0.5;
      Cls.play();
    }

    if (randomNote == 3) {
      Fms.volume = 0.5;
      Fms.play();
    }

    if (randomNote == 4) {
      Ams.volume = 0.5;
      Ams.play();
    }

    if (randomNote == 5) {
      Cms.volume = 0.5;
      Cms.play();
    }

    if (randomNote == 6) {
      Fhs.volume = 0.5;
      Fhs.play();
    }

    if (randomNote == 7) {
      Ahs.volume = 0.5;
      Ahs.play();
    }

    if (randomNote == 8) {
      Chs.volume = 0.5;
      Chs.play();
    }
  }

  if (key.key == 'Em') {
    if (randomNote == 0) {
      Els.volume = 0.5;
      Els.play();
    }

    if (randomNote == 1) {
      Gls.volume = 0.5;
      Gls.play();
    }

    if (randomNote == 2) {
      Bls.volume = 0.5;
      Bls.play();
    }

    if (randomNote == 3) {
      Ems.volume = 0.5;
      Ems.play();
    }

    if (randomNote == 4) {
      Gms.volume = 0.5;
      Gms.play();
    }

    if (randomNote == 5) {
      Bms.volume = 0.5;
      Bms.play();
    }

    if (randomNote == 6) {
      Ehs.volume = 0.5;
      Ehs.play();
    }

    if (randomNote == 7) {
      Ghs.volume = 0.5;
      Ghs.play();
    }

    if (randomNote == 8) {
      Bhs.volume = 0.5;
      Bhs.play();
    }
  }
}

function forFloatNotes() {
  floatNotes.forEach(function (fn, index) {
    if (fn.x + fn.r >= canvas.width || fn.x - fn.r <= 0) {
      playLowStringNotes();
      fn.expire = true;
    }

    if (fn.y + fn.r >= canvas.height || fn.y - fn.r <= 0) {
      playLowStringNotes();
      fn.expire = true;
    }

    if (fn.r <= 1) {
      for (var i = 0; i < 10; i++) {
        edgeSplats.push(new EdgeSplat(fn.x, fn.y));
      }

      floatNotes.splice(index, 1);
    }

    fn.update();
  });
}