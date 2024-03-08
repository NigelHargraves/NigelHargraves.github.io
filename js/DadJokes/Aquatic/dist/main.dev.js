"use strict";

// Set the canvas element to  variable.
var ctx1 = canvas1.getContext("2d");
var ctx2 = canvas2.getContext("2d");
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;
var laughs = [];
laughs.push(laugh1, laugh2, laugh3, laugh4, laugh5, laugh6);
var timer = 200,
    selectText = 0;
var sayIt = false;
var jokeText = ['', 'How do you make an Octopus laugh?', 'Ten Tickles!', 'What is the most musical fish in the sea?', 'The Tuna Fish!', 'How do oysters call their friends?', 'On shell phones!', 'What is the strongest creature in the sea?', 'The mussel!', 'Where do fish keep their money?', 'In a river-bank!', 'Why dont oysters share their pearls?', 'Because they are shellfish!', 'Where do fish sleep?', 'On the seabed!', 'Why was the orca so happy?', 'Because He was having a whale of a time!', 'What did the ocean say to the shore?', 'Nothing, it just waved!', 'Why did the whale blush?', 'It saw the oceans bottom!', 'A red ship crashed into a blue ship...', 'The sailors were marooned!', 'What sits at the bottom of the sea, and twitches?', 'A nervous wreck!', 'Why did the dolphin feel sick?', 'Because the sea weed!', 'What is the most famous fish?', 'The STAR fish!', 'I have not seen my pet lobster in months...', 'I think it is a lost claws!', 'What should dolphins always take, to stay healthy?', 'Vitamin sea!', 'How do dolphins make decisions?', 'They FLIPPER coin!', 'I saw a sailor putting helium balloons in his ship...', 'Well, whatever floats your boat!', 'Thank you for laughing', ' I am in stitches', 'Goodbye'];
setVolume();
chatter.play();

function animate() {
  if (timer > -1) {
    timer -= 1;
  }

  if (timer == 0) {
    sayIt = true;
  }

  if (sayIt) {
    // (A) GET HTML ELEMENTS
    var hdemo = document.getElementById("demo"),
        hvoice = document.getElementById("voice"),
        hvol = document.getElementById("vol"),
        hpitch = document.getElementById("pitch"),
        hrate = document.getElementById("rate"),
        hmsg = jokeText[selectText],
        hgo = document.getElementById("go"); // (B) POPULATE AVAILABLE VOICES

    var voices = function voices() {
      speechSynthesis.getVoices().forEach(function (v, i) {
        var opt = document.createElement("option");
        opt.value = 111;
        opt.innerHTML = v.name;
        hvoice.appendChild(opt);
      });
    };

    voices();
    speechSynthesis.onvoiceschanged = voices; // (C) SPEAK

    var speak = function speak() {
      var msg = new SpeechSynthesisUtterance();
      msg.voice = speechSynthesis.getVoices()[hvoice.value];
      msg.text = hmsg.valueOf(jokeText);
      msg.volume = +hvol.value;
      msg.pitch = +hpitch.value;
      msg.rate = +hrate.value;
      speechSynthesis.speak(msg);
      return false;
    }; // (D) ENABLE FORM


    hdemo.onsubmit = speak;
    hgo.disabled = false;
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx2.font = "bold 60px Arial";
    ctx2.fillStyle = "white";
    ctx2.fillText(jokeText[selectText], canvas2.width / 2 - jokeText[selectText].length / 2 * 30, canvas2.height / 2);
    speak();

    if (selectText % 2 == 0 && selectText >= 1) {
      var pickLaugh = Math.floor(Math.random() * 6);
      laughs[pickLaugh].play();
    }

    if (jokeText[selectText] == 'Goodbye') {
      applause.play();
    }

    sayIt = false;
    selectText++;
    timer = 500;
  } //call next frame.


  animationId = requestAnimationFrame(animate);
}

animate();
window.addEventListener("mousedown", function (e) {
  info = e.which;

  if (e.which == 1) {}
});