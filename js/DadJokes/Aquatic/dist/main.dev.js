"use strict";

// Set the canvas element to  variable.
var ctx1 = canvas1.getContext("2d");
var ctx2 = canvas2.getContext("2d");
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;
var background = new Image();
background.src = 'images/dadJokes/mic.jpeg';
var timer = 200,
    selectText = 0,
    delay = 0,
    delaySet = 60;
var sayIt = false,
    volumeDown = false,
    delayLaugh = false;
var jokeText = ['', 'What do you call a Bear in the rain?', ' A drizzly bear!', 'Why is wind power more popular than rain?', "Because it has a lot of fans!", 'What’s the difference between rain and climate? ', "You can’t rain a tree, but you can climb it!", "What do books wear on a wet and rainy day?", 'Rain quotes!', 'What do you call dangerous precipitation?', 'A rain of terror!', 'What does a raincloud wear under its raincoat?', 'Thunder pants!', 'What do you call it when it rains ducks and geese?', 'Fowl weather!', 'What animal loves being out in the rain?', 'A rain deer!', "What does a cloud use to fire it's thunder bolts?", 'A rain bow!', 'What do you call a pile of coins in the rain?', ' Climate change!', 'What do you call a dinosaur in the rain?', 'A driplodocus!', "Why didn’t the fog hit the target? ", "Because it's just mist!", "Why can't you argue with a rain cloud?", 'Because it always storms out!', "Why doesn’t rain fall?", 'Because rain drops!', 'How can you tell if you get hit by freezing rain?', "It'll hurt like hail!", "When do clouds have the best ideas?", "During a brain storm!", "Did you hear the cheesy weather forecast?", 'Rain with light Bries!', 'Why do you see cows lying down in the rain?', 'To keep each udder dry!', 'Thank you for laughing', ' I am in stitches', 'Please like and subscribe, Take Care, and Goodbye'];
var laughs = [];
laughs.push(laugh1, laugh2, laugh3, laugh4, laugh5, laugh6);
setVolume();
chatter.play();

function animate() {
  ctx1.drawImage(background, 0, 0, canvas1.width, canvas2.height);

  if (volumeDown && chatter.volume > 0) {
    chatter.volume -= 0.001;
  }

  if (timer > -1) {
    timer -= 1;
  }

  if (timer <= 0) {
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
        opt.value = 107;
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

    if (jokeText[selectText].length > 50) {
      delaySet = 200;
      var firstHalf = '';
      var secondHalf = '';
      firstHalf = jokeText[selectText].slice(0, jokeText[selectText].length / 2);
      secondHalf = jokeText[selectText].slice(jokeText[selectText].length / 2, jokeText[selectText].length);
      ctx2.fillText(firstHalf, canvas2.width / 2 - firstHalf.length / 2 * 30, canvas2.height / 2);
      ctx2.fillText(secondHalf, canvas2.width / 2 - secondHalf.length / 2 * 30, canvas2.height / 2 + 60);
    } else {
      delaySet = 60;
      ctx2.fillText(jokeText[selectText], canvas2.width / 2 - jokeText[selectText].length / 2 * 30, canvas2.height / 2);
    }

    if (jokeText[selectText] == 'Please like and subscribe, Take Care, and Goodbye') {
      applause.play();
      volumeDown = true;
    }

    sayIt = false;
    timer = 500;
    speak();

    if (selectText % 2 == 0 && selectText >= 1) {
      delayLaugh = true;
    }

    selectText++;
  }

  if (delayLaugh) {
    delay += 1;
  }

  if (delay > delaySet) {
    var pickLaugh = Math.floor(Math.random() * 4);
    laughs[pickLaugh].play();
    laughs[5].play();
    delay = 0;
    delayLaugh = false;
  } //call next frame.


  animationId = requestAnimationFrame(animate);
}

animate();